'use client';

import { useEffect } from 'react';

// This component ports the site's original vanilla-JS behavior (scroll reveal,
// FAQ accordion, quote builder, walkthrough form, mobile menu) into a Next.js
// client component. It runs once after the page mounts and attaches the same
// DOM event listeners the static site used, so behavior matches exactly.
export default function SiteScripts() {
  useEffect(() => {
    // Reveal on scroll
    const revealEls = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach((el) => io.observe(el));

    // FAQ accordion
    const faqItems = document.querySelectorAll('.faq-item');
    const faqHandlers = [];
    faqItems.forEach((item) => {
      const q = item.querySelector('.faq-q');
      const a = item.querySelector('.faq-a');
      if (item.classList.contains('open')) a.style.maxHeight = a.scrollHeight + 'px';
      const handler = () => {
        const isOpen = item.classList.contains('open');
        faqItems.forEach((i) => {
          i.classList.remove('open');
          i.querySelector('.faq-a').style.maxHeight = 0;
        });
        if (!isOpen) {
          item.classList.add('open');
          a.style.maxHeight = a.scrollHeight + 'px';
        }
      };
      q.addEventListener('click', handler);
      faqHandlers.push([q, handler]);
    });

    // Shared helper: submit a Netlify-detected form via fetch (no page reload).
    // Must POST to the static detection file itself (not "/") under the
    // Next.js Runtime — see public/__forms.html and the migration notes there.
    function submitToNetlify(form) {
      const formData = new FormData(form);
      const body = new URLSearchParams(formData).toString();
      return fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });
    }
    // Belt-and-suspenders: never let either form actually navigate the page
    ['quote-form', 'walkthrough-form-tag'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.addEventListener('submit', (e) => e.preventDefault());
    });

    // Quote builder
    let qbCleanup = () => {};
    (function () {
      const nextBtn = document.getElementById('qb-next');
      if (!nextBtn) return;
      const state = { service: null, size: null, frequency: null, mult: 1, hours: 0 };
      let currentStep = 1;
      const steps = document.querySelectorAll('.qb-step');
      const dots = document.querySelectorAll('.qb-step-dot');
      const backBtn = document.getElementById('qb-back');
      const nav = document.getElementById('qb-nav');

      // Hourly labor rate used for every estimate
      const HOURLY_RATE = 70;

      // Crew-hour tiers by bedroom/bathroom count, taken from the master pricing
      // guide (mid-point of each range). Square footage is collected separately
      // as a reference sanity-check only — it does not factor into the estimate.
      const bedroomTiers = [
        { label: 'Studio (1 bath)', value: 'studio', hours: { ResidentialDeep: 2, ResidentialStandard: 1.5, ResidentialMove: 3 } },
        { label: '1 Bed / 1 Bath', value: '1bed', hours: { ResidentialDeep: 2.75, ResidentialStandard: 1.75, ResidentialMove: 3.25 } },
        { label: '2 Bed / 1 Bath', value: '2bed', hours: { ResidentialDeep: 3.5, ResidentialStandard: 2.25, ResidentialMove: 4.25 } },
        { label: '3 Bed / 2 Bath', value: '3bed', hours: { ResidentialDeep: 4.5, ResidentialStandard: 3, ResidentialMove: 5.5 } },
        { label: '4 Bed / 2–3 Bath', value: '4bed', hours: { ResidentialDeep: 6, ResidentialStandard: 4, ResidentialMove: 7.25 } },
        { label: '5+ Bed / 3+ Bath', value: '5bed', hours: { ResidentialDeep: 8, ResidentialStandard: 5.25, ResidentialMove: 9.75 } },
        { label: '6+ Bed / 4+ Bath', value: '6bed', hours: { ResidentialDeep: 10.5, ResidentialStandard: 7, ResidentialMove: 13 } },
      ];

      const serviceLabels = {
        ResidentialDeep: 'residential deep',
        ResidentialStandard: 'residential standard',
        ResidentialMove: 'residential move-in / move-out',
        Commercial: 'commercial',
      };

      function attachOptionHandlers(scope) {
        if (!scope) return;
        scope.querySelectorAll('.qb-opt').forEach((opt) => {
          opt.addEventListener('click', () => {
            const field = opt.dataset.field;
            scope.querySelectorAll(`.qb-opt[data-field="${field}"]`).forEach((o) => o.classList.remove('selected'));
            opt.classList.add('selected');
            state[field] = opt.dataset.value;
            if (field === 'size') state.hours = parseFloat(opt.dataset.hours);
            if (field === 'frequency') state.mult = parseFloat(opt.dataset.mult);
            nextBtn.disabled = false;
            updateNextLabel();
          });
        });
      }

      function updateNextLabel() {
        if (currentStep === 1 && state.service === 'Commercial') {
          nextBtn.textContent = 'Go to Walkthrough Request';
        } else if (currentStep === 4) {
          nextBtn.textContent = 'Request Booking';
        } else {
          nextBtn.textContent = 'Continue';
        }
      }

      function renderSizeOptions() {
        const type = state.service || 'ResidentialDeep';
        const container = document.getElementById('size-options');
        container.innerHTML = '';
        bedroomTiers.forEach((tier) => {
          const div = document.createElement('div');
          div.className = 'qb-opt';
          div.dataset.field = 'size';
          div.dataset.value = tier.value;
          div.dataset.hours = tier.hours[type];
          div.textContent = tier.label;
          container.appendChild(div);
        });
        attachOptionHandlers(container);
      }

      attachOptionHandlers(document.querySelector('[data-step="1"]'));
      attachOptionHandlers(document.querySelector('[data-step="3"]'));

      function isStepValid(n) {
        if (n === 1) return !!state.service;
        if (n === 2) return !!state.size;
        if (n === 3) return !!state.frequency;
        return true;
      }

      function updateEstimate() {
        const total = Math.round(state.hours * HOURLY_RATE * (state.mult || 1));
        document.getElementById('estimate-amt').textContent = '$' + total;
      }

      function goToStep(n) {
        steps.forEach((s) => {
          s.style.display = s.dataset.step == n ? 'block' : 'none';
        });
        dots.forEach((d, i) => {
          d.classList.remove('active', 'done');
          if (i + 1 < n) d.classList.add('done');
          if (i + 1 === n) d.classList.add('active');
        });
        currentStep = n;
        backBtn.style.visibility = n === 1 ? 'hidden' : 'visible';
        updateNextLabel();
        nextBtn.disabled = !isStepValid(n);
        if (n === 4) updateEstimate();
        if (n === 'confirm') {
          nav.style.display = 'none';
          document.querySelectorAll('.qb-step-dot').forEach((d) => d.classList.add('done'));
        } else {
          nav.style.display = 'flex';
        }
      }

      const onNext = () => {
        if (currentStep === 1) {
          if (state.service === 'Commercial') {
            const walkthrough = document.getElementById('walkthrough');
            if (walkthrough) walkthrough.scrollIntoView({ behavior: 'smooth', block: 'start' });
            return;
          }
          renderSizeOptions();
          goToStep(2);
          return;
        }
        if (currentStep === 2) {
          goToStep(3);
          return;
        }
        if (currentStep === 3) {
          goToStep(4);
          return;
        }
        if (currentStep === 4) {
          const name = document.getElementById('q-name').value.trim();
          document.getElementById('confirm-name').textContent = name || 'there';
          document.getElementById('confirm-details').textContent =
            (serviceLabels[state.service] || '') + ' ' + (state.frequency || '').toLowerCase() + ' cleaning';

          // Populate hidden fields with the JS-tracked selections, then submit
          document.getElementById('hidden-service').value = serviceLabels[state.service] || state.service || '';
          document.getElementById('hidden-size').value = state.size || '';
          document.getElementById('hidden-frequency').value = state.frequency || '';
          document.getElementById('hidden-price').value = document.getElementById('estimate-amt').textContent || '';

          nextBtn.disabled = true;
          const quoteForm = document.getElementById('quote-form');
          submitToNetlify(quoteForm)
            .catch((err) => console.error('Quote form submission failed:', err))
            .finally(() => {
              nextBtn.disabled = false;
              goToStep('confirm');
            });
        }
      };
      const onBack = () => {
        if (currentStep === 2) goToStep(1);
        else if (currentStep === 3) goToStep(2);
        else if (currentStep === 4) goToStep(3);
      };

      nextBtn.addEventListener('click', onNext);
      backBtn.addEventListener('click', onBack);
      goToStep(1);

      qbCleanup = () => {
        nextBtn.removeEventListener('click', onNext);
        backBtn.removeEventListener('click', onBack);
      };
    })();

    // Commercial walkthrough request form
    const walkthroughBtn = document.getElementById('walkthrough-submit');
    const onWalkthroughSubmit = () => {
      const name = document.getElementById('w-name').value.trim();
      const walkthroughForm = document.getElementById('walkthrough-form-tag');
      walkthroughBtn.disabled = true;
      submitToNetlify(walkthroughForm)
        .catch((err) => console.error('Walkthrough form submission failed:', err))
        .finally(() => {
          walkthroughBtn.disabled = false;
          document.getElementById('walkthrough-confirm-name').textContent = name || 'there';
          document.getElementById('walkthrough-form').style.display = 'none';
          document.getElementById('walkthrough-confirm').style.display = 'block';
        });
    };
    if (walkthroughBtn) walkthroughBtn.addEventListener('click', onWalkthroughSubmit);

    // Mobile menu toggle
    const menuBtn = document.getElementById('menu-toggle');
    const menu = document.getElementById('mobile-menu');
    let onMenuToggle;
    let menuLinkHandlers = [];
    if (menuBtn && menu) {
      const closeMenu = () => {
        menu.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.innerHTML =
          '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';
      };
      const openMenu = () => {
        menu.classList.add('open');
        menuBtn.setAttribute('aria-expanded', 'true');
        menuBtn.innerHTML =
          '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M6 6l12 12M18 6L6 18"/></svg>';
      };
      onMenuToggle = () => (menu.classList.contains('open') ? closeMenu() : openMenu());
      menuBtn.addEventListener('click', onMenuToggle);
      menu.querySelectorAll('a').forEach((a) => {
        a.addEventListener('click', closeMenu);
        menuLinkHandlers.push([a, closeMenu]);
      });
    }

    // Cleanup on unmount
    return () => {
      io.disconnect();
      faqHandlers.forEach(([q, handler]) => q.removeEventListener('click', handler));
      qbCleanup();
      if (walkthroughBtn) walkthroughBtn.removeEventListener('click', onWalkthroughSubmit);
      if (menuBtn && onMenuToggle) menuBtn.removeEventListener('click', onMenuToggle);
      menuLinkHandlers.forEach(([a, handler]) => a.removeEventListener('click', handler));
    };
  }, []);

  return null;
}
