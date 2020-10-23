function buildModalContainer(modalHeader, modalBody) {
	let modalContainer = document.createElement('div');
	modalContainer.classList.add('modal-container');
	modalContainer.appendChild(modalHeader);
	modalContainer.appendChild(modalBody);
	return modalContainer;
}

function buildModalHeader(closeBtn) {
	let modalHeader = document.createElement('div');
	modalHeader.classList.add('modal-header');
	modalHeader.appendChild(closeBtn);
	return modalHeader;
}

function productDescription(product) {
	let description = document.createElement('div');
	description.innerText = product.long;
	description.classList.add('single-product-description');
	return description;
}

function buildModalBody(product) {
	let modalBody = document.createElement('div');
	let modalImage = document.createElement('img');
	let title = document.createElement('h3');
	let description = productDescription(product);

	title.innerText = product.model;
	modalImage.src = `./img/${product.model}-${product.instrument}.png`;
	modalBody.classList.add('modal-body');
	modalBody.appendChild(title);
	modalBody.appendChild(modalImage);
	modalBody.appendChild(description);
	return modalBody;
}

function buildModalButton(product) {
	let closeBtn = document.createElement('button');
	closeBtn.innerText = 'x';
	closeBtn.addEventListener('click', () => destroyModal(product.model));
	closeBtn.classList.add('modal-close-btn');
	return closeBtn;
}

function destroyModal(product) {
	const modal = document.getElementById(`${product}-modal`);
	modal.parentNode.removeChild(modal);
}

export const buildSingleProduct = (e, product) => {
	let modal = document.createElement('DIALOG');
	let modalBody = buildModalBody(product);
	let closeBtn = buildModalButton(product);
	let modalHeader = buildModalHeader(closeBtn);
	let modalContainer = buildModalContainer(modalHeader, modalBody);

	modal.appendChild(modalContainer);
	modal.setAttribute('id', `${product.model}-modal`);
	document.body.appendChild(modal);
};
