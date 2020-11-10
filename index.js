import { buildProducts } from './productLoop.js';
import { products } from './products.js';
const slider = document.getElementById('products-slider');
const left = document.getElementById('left');
const right = document.getElementById('right');

const featuredProducts = products.filter((p) => p.featured === true);
buildProducts(featuredProducts, slider);

const card = document.getElementsByClassName('product-card')[0];
const width = card.offsetWidth;
function carouselScroll(width) {
	slider.scrollBy({ left: width, top: 0, behavior: 'smooth' });
}
right.addEventListener('click', () => {
	carouselScroll(width);
});

left.addEventListener('click', () => {
	carouselScroll(-width);
});
