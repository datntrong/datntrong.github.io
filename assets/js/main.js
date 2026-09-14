/* datntrong.github.io — language switch, theme switch, nav highlighting. */
(function () {
  'use strict';

  var root = document.documentElement;

  /* ── Language ─────────────────────────────────────────────────────── */
  var TITLES = {
    en: 'Dat Nguyen Trong',
    vi: 'Nguyễn Trọng Đạt'
  };

  function setLang(lang) {
    root.setAttribute('data-lang', lang);
    root.setAttribute('lang', lang);
    document.title = TITLES[lang];
    try { localStorage.setItem('lang', lang); } catch (e) { /* private mode */ }
  }

  var langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    langBtn.addEventListener('click', function () {
      setLang(root.getAttribute('data-lang') === 'vi' ? 'en' : 'vi');
    });
  }
  // Keep the title in sync with the language the inline head script picked.
  setLang(root.getAttribute('data-lang') === 'vi' ? 'vi' : 'en');

  /* ── Theme ────────────────────────────────────────────────────────── */
  function currentTheme() {
    var set = root.getAttribute('data-theme');
    if (set) return set;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  var themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) { /* private mode */ }
    });
  }

  /* ── Active section in the nav ────────────────────────────────────── */
  var links = Array.prototype.slice.call(document.querySelectorAll('.site-nav a[href^="#"]'));
  var sections = links
    .map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); })
    .filter(Boolean);

  if (sections.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (a) {
          a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
        });
      });
    }, { rootMargin: '-25% 0px -70% 0px' });
    sections.forEach(function (s) { observer.observe(s); });
  }

  /* ── Footer year ──────────────────────────────────────────────────── */
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
