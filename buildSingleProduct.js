export const buildSingleProduct = (e, product) => {
	let modal = document.createElement('DIALOG');
	let modalContainer = document.createElement('div');
	let modalHeader = document.createElement('div');
	let modalBody = document.createElement('div');
	let closeBtn = document.createElement('button');

	closeBtn.innerText = 'x';
	closeBtn.addEventListener('click', () => destroyModal(product.model));
	closeBtn.classList.add('modal-close-btn');

	modalHeader.classList.add('modal-header');
	modalHeader.appendChild(closeBtn);

	modalBody.classList.add('modal-body');
	modalBody.innerText = product.model;

	modalContainer.classList.add('modal-container');
	modalContainer.appendChild(modalHeader);
	modalContainer.appendChild(modalBody);

	modal.appendChild(modalContainer);
	modal.setAttribute('id', `${product.model}-modal`);
	document.body.appendChild(modal);
};
function destroyModal(product) {
	const modal = document.getElementById(`${product}-modal`);
	modal.parentNode.removeChild(modal);
}
