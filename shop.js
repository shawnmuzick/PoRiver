import { products } from './products.js';
import { buildSingleProduct } from './buildSingleProduct.js';
const shop = document.getElementById('shop');

function buildProducts(products) {
	products.forEach((p) => {
		const item = document.createElement('div');
		item.classList.add('product-card');

		const image = document.createElement('img');
		image.src = `./img/${p.model}-${p.instrument}.png`;
		image.classList.add('product-card-img');
		item.appendChild(image);

		const title = document.createElement('h3');
		title.innerText = `${p.model}`;
		title.classList.add('product-card-title');
		item.appendChild(title);

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
