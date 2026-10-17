const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.primary-nav');
const closeMenu = () => { nav?.classList.remove('open'); menuButton?.setAttribute('aria-expanded', 'false'); };
menuButton?.addEventListener('click', () => {
  const open = nav?.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(Boolean(open)));
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
window.matchMedia('(min-width: 701px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
