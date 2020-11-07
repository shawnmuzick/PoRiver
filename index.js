import { buildProducts } from './productLoop.js';
import { products } from './products.js';
const slider = document.getElementById('products-slider');
const sliderWrapper = document.getElementById('slider-outer');

buildProducts(products, slider);

const left = document.createElement('button');
left.innerText = '<';
left.classList.add('slider-nav-button');
sliderWrapper.prepend(left);

const right = document.createElement('button');
right.innerText = '>';
right.classList.add('slider-nav-button');
sliderWrapper.appendChild(right);

right.addEventListener('click', () => {
	const card = document.getElementsByClassName('product-card')[0];
	const width = card.offsetWidth;
	slider.scrollBy({ left: width, top: 0, behavior: 'smooth' });
});

left.addEventListener('click', () => {
	const card = document.getElementsByClassName('product-card')[0];
	const width = card.offsetWidth;
	slider.scrollBy({ left: -width, top: 0, behavior: 'smooth' });
});
