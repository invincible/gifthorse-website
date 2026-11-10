import { features } from './config.js';

const occasions = {
  birthday: { title: 'The birthday edit', description: 'A few favorites for another trip around the sun.', products: [
    { id:'headphones', name:'A little time to tune out', category:'For my everyday', image:'headphones' },
    { id:'camera', name:'More moments to keep', category:'For the memories', image:'camera' },
    { id:'flowers', name:'Flowers. Always flowers.', category:'For a little joy', image:'flowers' },
  ] },
  home: { title: 'A place of my own', description: 'Little things to make a new space feel like home.', products: [
    { id:'chair', name:'My new reading corner', category:'For slow Sundays', image:'chair' },
    { id:'flowers', name:'A brighter windowsill', category:'For a little color', image:'flowers' },
    { id:'headphones', name:'The housewarming playlist', category:'For settling in', image:'headphones' },
  ] },
  just: { title: 'The just-because list', description: 'No big occasion needed. Just a few things I love.', products: [
    { id:'sneakers', name:'A fresh pair of favorites', category:'For going places', image:'sneakers' },
    { id:'bag', name:'Ready for a little adventure', category:'For the weekend', image:'bag' },
    { id:'camera', name:'A different point of view', category:'For getting creative', image:'camera' },
  ] },
};
const saved = new Set();
const products = document.querySelector('#demo-products');
const counter = document.querySelector('.saved-counter');
let currentOccasion = 'birthday';

// No third-party analytics is loaded in this review build. A production adapter
// can listen to this event and forward only these allowlisted, non-personal values.
function track(name, properties = {}) {
  window.dispatchEvent(new CustomEvent('gifthorse:analytics', { detail: { name, properties } }));
}
function updateCounter() {
  counter.textContent = `${saved.size} favorite${saved.size === 1 ? '' : 's'} saved in this demo`;
}
function renderOccasion(key) {
  const occasion = occasions[key];
  currentOccasion = key;
  document.querySelector('#demo-title').textContent = occasion.title;
  document.querySelector('#demo-description').textContent = occasion.description;
  products.replaceChildren(...occasion.products.map(product => {
    const article = document.createElement('article');
    article.className = 'product-tile';
    const selected = saved.has(product.id);
    article.innerHTML = `<div class="product-photo"><img src="/images/${product.image}.jpg" width="720" height="828" loading="lazy" alt="${product.name}"/><button class="favorite" type="button" data-product="${product.id}" aria-label="${selected ? 'Remove' : 'Save'} ${product.name}" aria-pressed="${selected}">${selected ? '♥' : '♡'}</button></div><small>${product.category}</small><h4>${product.name}</h4>`;
    return article;
  }));
  updateCounter();
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
products.addEventListener('click', event => {
  const button = event.target.closest('[data-product]');
  if (!button) return;
  const id = button.dataset.product;
  if (saved.has(id)) saved.delete(id); else saved.add(id);
  const selected = saved.has(id);
  button.setAttribute('aria-pressed', String(selected));
  const name = occasions[currentOccasion].products.find(product => product.id === id).name;
  button.setAttribute('aria-label', `${selected ? 'Remove' : 'Save'} ${name}`);
  button.textContent = selected ? '♥' : '♡';
  updateCounter();
  track('demo_favorite_changed', { product: id, saved: selected });
});
document.querySelectorAll('a[href="#get-app"]').forEach(link => link.addEventListener('click', () => track('download_section_opened')));
document.querySelectorAll('[data-store]').forEach(link => link.addEventListener('click', () => track('store_clicked', { platform: link.dataset.store })));
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
