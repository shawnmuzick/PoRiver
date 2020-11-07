import { buildSingleProduct } from './buildSingleProduct.js';
export function buildProducts(products = [], shop) {
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
