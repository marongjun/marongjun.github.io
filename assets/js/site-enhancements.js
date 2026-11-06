(() => {
  // References open separately; navigation and downloads retain their normal behavior.
  document.querySelectorAll('a[href]').forEach(link => {
    const url = new URL(link.getAttribute('href'), window.location.href);
    if (/^https?:$/.test(url.protocol) && url.origin !== window.location.origin) {
      link.target = '_blank';
    }
    if (link.target === '_blank') {
      link.relList.add('noopener', 'noreferrer');
    }
  });

  const viewport = document.querySelector('.news-scroll');
  if (!viewport) return;
  const list = viewport.querySelector('.site-news');
  const items = Array.from(list.children);
  if (items.length <= 6) {
    document.querySelector('.news-hint').hidden = true;
    viewport.removeAttribute('tabindex');
    return;
  }

  const sizeNews = () => {
    const first = list.getBoundingClientRect();
    const sixth = items[5].getBoundingClientRect();
    viewport.style.maxHeight = Math.ceil(sixth.bottom - first.top + 1) + 'px';
  };
  sizeNews();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(sizeNews);
  if (window.ResizeObserver) new ResizeObserver(sizeNews).observe(list);
  else window.addEventListener('resize', sizeNews);
})();
