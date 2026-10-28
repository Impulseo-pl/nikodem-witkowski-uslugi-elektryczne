// Skórka KW: menu-nakładka pod owalnym przyciskiem (wzór klienta, 28.10.2026)
(function () {
  var btn = document.querySelector('.kw-burger');
  var menu = document.getElementById('kw-menu');
  if (!btn || !menu) return;
  function set(open) {
    menu.classList.toggle('open', open);
    document.body.classList.toggle('kw-menu-on', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Zamknij menu' : 'Otwórz menu');
    document.documentElement.style.overflow = open ? 'hidden' : '';
  }
  btn.addEventListener('click', function () { set(!menu.classList.contains('open')); });
  menu.addEventListener('click', function (e) { if (e.target.closest('a')) set(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') set(false); });
})();
