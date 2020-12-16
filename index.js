const slider = document.getElementById('products-slider');
const left = document.getElementById('left');
const right = document.getElementById('right');

const featuredProducts = products.filter((p) => p.featured === true);
buildProducts(featuredProducts, slider);

const card = document.getElementsByClassName('product-card')[0];
const width = card.offsetWidth;
const containerWidth = (featuredProducts.length - 1) * width;

function carouselScroll(width) {
	slider.scrollBy({ left: width, top: 0, behavior: 'smooth' });
}
right.addEventListener('click', () => {
	carouselScroll(width);
});

left.addEventListener('click', () => {
	carouselScroll(-width);
});
let x = 0;
function animate() {
	carouselScroll(width);
	x += width;
	if (containerWidth > window.innerWidth) {
		if (x >= containerWidth) {
			carouselScroll(-(featuredProducts.length * width));
			x = 0;
		}
	}
	if (containerWidth < window.innerWidth) {
		if (x + containerWidth > window.innerWidth) {
			carouselScroll(-(featuredProducts.length * width));
			x = 0;
		}
	}
}

window.setInterval(() => animate(), 3000);
