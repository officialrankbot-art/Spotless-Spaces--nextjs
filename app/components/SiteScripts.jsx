'use client';

import { useEffect } from 'react';

// This component ports the site's original vanilla-JS behavior (scroll reveal,
// FAQ accordion, residential lead form, walkthrough form, mobile menu) into a Next.js
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
    ['residential-form-tag', 'walkthrough-form-tag'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.addEventListener('submit', (e) => e.preventDefault());
    });

    // Residential lead form
    const residentialBtn = document.getElementById('residential-submit');
    const onResidentialSubmit = () => {
      const form = document.getElementById('residential-form-tag');
      const error = document.getElementById('residential-error');
      if (!form.checkValidity()) {
        error.style.display = 'block';
        form.reportValidity();
        return;
      }
      error.style.display = 'none';
      const name = document.getElementById('r-name').value.trim().split(' ')[0];
      residentialBtn.disabled = true;
      submitToNetlify(form)
        .catch((err) => console.error('Residential form submission failed:', err))
        .finally(() => {
          residentialBtn.disabled = false;
          document.getElementById('residential-confirm-name').textContent = name || 'there';
          document.getElementById('residential-form').style.display = 'none';
          document.getElementById('residential-confirm').style.display = 'block';
        });
    };
    if (residentialBtn) residentialBtn.addEventListener('click', onResidentialSubmit);

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
      if (residentialBtn) residentialBtn.removeEventListener('click', onResidentialSubmit);
      if (walkthroughBtn) walkthroughBtn.removeEventListener('click', onWalkthroughSubmit);
      if (menuBtn && onMenuToggle) menuBtn.removeEventListener('click', onMenuToggle);
      menuLinkHandlers.forEach(([a, handler]) => a.removeEventListener('click', handler));
    };
  }, []);

  return null;
}
