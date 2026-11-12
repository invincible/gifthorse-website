import { features } from './config.js';

const occasions = {
  birthday: { title: 'My birthday wishlist', description: 'A camera, headphones and flowers. Here’s what’s on my list this year.', products: [
    { name:'Headphones for my commute', category:'Everyday listening', image:'headphones' },
    { name:'A camera for our next trip', category:'Travel', image:'camera' },
    { name:'Flowers for the kitchen', category:'At home', image:'flowers' },
  ] },
  home: { title: 'A place of my own', description: 'A chair for my reading corner and a few things for the new place.', products: [
    { name:'My new reading corner', category:'For slow Sundays', image:'chair' },
    { name:'Flowers for the windowsill', category:'On the windowsill', image:'flowers' },
    { name:'Headphones for unpacking', category:'For settling in', image:'headphones' },
  ] },
  just: { title: 'The just-because list', description: 'A few things I’d like, whenever the occasion comes along.', products: [
    { name:'A new pair of sneakers', category:'For going places', image:'sneakers' },
    { name:'A bag for weekends away', category:'For the weekend', image:'bag' },
    { name:'A camera to take with me', category:'For getting creative', image:'camera' },
  ] },
};
const products = document.querySelector('#demo-products');

// No third-party analytics is loaded in this review build. A production adapter
// can listen to this event and forward only these allowlisted, non-personal values.
function track(name, properties = {}) {
  window.dispatchEvent(new CustomEvent('gifthorse:analytics', { detail: { name, properties } }));
}
function renderOccasion(key) {
  const occasion = occasions[key];
  document.querySelector('#demo-title').textContent = occasion.title;
  document.querySelector('#demo-description').textContent = occasion.description;
  products.replaceChildren(...occasion.products.map(product => {
    const article = document.createElement('article');
    article.className = 'product-tile';
    article.innerHTML = `<div class="product-photo"><img src="${new URL(`../images/${product.image}.jpg`, import.meta.url).href}" width="720" height="828" loading="lazy" alt="${product.name}"/></div><small>${product.category}</small><h4>${product.name}</h4>`;
    return article;
  }));
}
document.querySelectorAll('[data-occasion]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-occasion]').forEach(tab => {
      tab.classList.toggle('active', tab === button);
      tab.setAttribute('aria-pressed', String(tab === button));
    });
    renderOccasion(button.dataset.occasion);
    track('occasion_selected', { occasion: button.dataset.occasion });
  });
});
document.querySelectorAll('a[href="#get-app"]').forEach(link => link.addEventListener('click', () => track('download_section_opened')));
document.querySelectorAll('[data-store]').forEach(link => link.addEventListener('click', () => track('store_clicked', { platform: link.dataset.store })));
document.querySelector('#open-web-app').addEventListener('click', () => track('web_app_opened'));
document.querySelectorAll('details').forEach(details => details.addEventListener('toggle', () => {
  if (details.open) track('faq_opened', { question: details.querySelector('summary').textContent.replace('+','').trim() });
}));
if (features.guestReservations) {
  const copy = document.querySelector('#reservation-copy');
  copy.hidden = false;
  copy.textContent = 'Friends can open your wishlist and reserve a gift in their browser, with no app or signup required.';
}
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.steps article, .wishlist-demo, .together-art, .together-copy, .faq-items').forEach(element => {
    element.classList.add('reveal'); observer.observe(element);
  });
}
document.querySelector('#year').textContent = String(new Date().getFullYear());
renderOccasion('birthday');
track('landing_view', { variant: 'editorial-wishlist-v1' });
