import { products } from './products.js';
import { buildSingleProduct } from './buildSingleProduct.js';
const shop = document.getElementById('shop');
const filters = document.querySelectorAll('input');
const filterClose = document.getElementById('shop-filter-close');
const filterOpen = document.getElementById('shop-filter-open');
const filterContainer = document.getElementById('filter-container');
const filterImg = document.getElementById('filter-image');

function buildProducts(products) {
	shop.innerHTML = '';
	products.forEach((p) => {
		const item = document.createElement('div');
		item.classList.add('product-card');

		const image = document.createElement('img');
		image.src = `./img/${p.model}.png`;
		image.classList.add('product-card-img');
		item.appendChild(image);

		const title = document.createElement('h3');
		title.innerText = `${p.model}`;
		title.classList.add('product-card-title');
		item.appendChild(title);

		const short = document.createElement('p');
		short.innerText = `${p.short}`;
		item.appendChild(short);

		const price = document.createElement('p');
		price.innerText = `$${p.price}`;
		price.classList.add('product-card-price');
		item.appendChild(price);

		item.setAttribute('id', `${p.model}`);
		item.addEventListener(
			'click',
			(e) => {
				buildSingleProduct(e, p);
			},
			true
		);

		shop.appendChild(item);
	});
}
buildProducts(products);

function filterProducts(filter) {
	let filteredProducts = products.filter((p) => filter.includes(p.instrument.toLowerCase()));
	buildProducts(filteredProducts);
}

filters.forEach((f) => {
	f.addEventListener('click', () => {
		let filter = [];
		filters.forEach((f) => {
			if (f.checked === true) {
				filter.push(f.name);
			}
		});
		if (filter.length === 0) buildProducts(products);
		else filterProducts(filter);
	});
});

filterClose.addEventListener('click', () => {
	if (!filterContainer.classList.contains('filter-container-hide')) {
		filterContainer.classList.add('filter-container-hide');
		filterOpen.style.display = '';
		filterImg.style.display = '';
	}
});

filterOpen.addEventListener('click', () => {
	if (filterContainer.classList.contains('filter-container-hide')) {
		filterContainer.classList.remove('filter-container-hide');
		filterOpen.style.display = 'none';
		filterImg.style.display = 'none';
	}
});
