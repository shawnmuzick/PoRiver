import { products } from './products.js';
import { buildProducts } from './productLoop.js';
const shop = document.getElementById('shop');
const filters = document.querySelectorAll('input');
const filterClose = document.getElementById('shop-filter-close');
const filterOpen = document.getElementById('shop-filter-open');
const filterContainer = document.getElementById('filter-container');
const filterImg = document.getElementById('filter-image');

buildProducts(products, shop);

function filterProducts(filter) {
	let filteredProducts = products.filter((p) => filter.includes(p.instrument.toLowerCase()));
	buildProducts(filteredProducts, shop);
}

filters.forEach((f) => {
	f.addEventListener('click', () => {
		let filter = [];
		filters.forEach((f) => {
			if (f.checked === true) {
				filter.push(f.name);
			}
		});
		if (filter.length === 0) buildProducts(products, shop);
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
