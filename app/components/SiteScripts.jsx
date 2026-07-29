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

    // Quote builder
    let qbCleanup = () => {};
    (function () {
      const nextBtn = document.getElementById('qb-next');
      if (!nextBtn) return;
      const state = { property: null, size: null, frequency: null, mult: 1 };
      let currentStep = 1;
      const steps = document.querySelectorAll('.qb-step');
      const dots = document.querySelectorAll('.qb-step-dot');
      const backBtn = document.getElementById('qb-back');
      const nav = document.getElementById('qb-nav');

      const sizeOptionsByType = {
        Residential: [
          { label: 'Studio / 1BR', value: 'small', base: 150 },
          { label: '2–3 Bedroom', value: 'medium', base: 150 },
          { label: '4+ Bedroom', value: 'large', base: 210 },
          { label: '5,000+ sq ft', value: 'xl', base: 290 },
        ],
        Commercial: [
          { label: 'Under 1,500 sq ft', value: 'small', base: 180 },
          { label: '1,500–4,000 sq ft', value: 'medium', base: 320 },
          { label: '4,000–8,000 sq ft', value: 'large', base: 520 },
          { label: '8,000+ sq ft', value: 'xl', base: 850 },
        ],
      };

      function attachOptionHandlers(scope) {
        if (!scope) return;
        scope.querySelectorAll('.qb-opt').forEach((opt) => {
          opt.addEventListener('click', () => {
            const field = opt.dataset.field;
            scope.querySelectorAll(`.qb-opt[data-field="${field}"]`).forEach((o) => o.classList.remove('selected'));
            opt.classList.add('selected');
            state[field] = opt.dataset.value;
            if (field === 'size') state.base = parseFloat(opt.dataset.base);
            if (field === 'frequency') state.mult = parseFloat(opt.dataset.mult);
            nextBtn.disabled = false;
          });
        });
      }

      function renderSizeOptions() {
        const type = state.property || 'Residential';
        const container = document.getElementById('size-options');
        container.innerHTML = '';
        sizeOptionsByType[type].forEach((opt) => {
          const div = document.createElement('div');
          div.className = 'qb-opt';
          div.dataset.field = 'size';
          div.dataset.value = opt.value;
          div.dataset.base = opt.base;
          div.textContent = opt.label;
          container.appendChild(div);
        });
        attachOptionHandlers(container);
      }

      attachOptionHandlers(document.querySelector('[data-step="1"]'));
      attachOptionHandlers(document.querySelector('[data-step="3"]'));

      function isStepValid(n) {
        if (n === 1) return !!state.property;
        if (n === 2) return !!state.size;
        if (n === 3) return !!state.frequency;
        return true;
      }

      function updateEstimate() {
        const base = state.base || 150;
        const total = Math.round(base * (state.mult || 1));
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
        nextBtn.textContent = n === 4 ? 'Request Booking' : 'Continue';
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
            (state.property || '').toLowerCase() + ' ' + (state.frequency || '').toLowerCase() + ' cleaning';
          goToStep('confirm');
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
      document.getElementById('walkthrough-confirm-name').textContent = name || 'there';
      document.getElementById('walkthrough-form').style.display = 'none';
      document.getElementById('walkthrough-confirm').style.display = 'block';
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
