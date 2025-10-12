// Simple language toggle (Korean/English)
(function(){
  const toggle = document.getElementById('langToggle');
  const html = document.documentElement;
  const content = document.querySelectorAll('[data-ko],[data-en]');
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  let current = 'ko';
  function applyLang(lang){
    current = lang;
    html.setAttribute('lang', lang === 'ko' ? 'ko' : 'en');
    content.forEach(el => {
      const text = el.getAttribute(lang === 'ko' ? 'data-ko' : 'data-en');
      if (text) el.textContent = text;
    });
    toggle.textContent = lang === 'ko' ? 'EN' : 'KO';
  }

  toggle?.addEventListener('click', () => {
    applyLang(current === 'ko' ? 'en' : 'ko');
  });

  applyLang('ko');
})();
