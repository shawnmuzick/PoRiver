function buildModalContainer(modalHeader, modalBody) {
  let modalContainer = document.createElement("div");
  modalContainer.classList.add("modal-container");
  modalContainer.appendChild(modalHeader);
  modalContainer.appendChild(modalBody);
  return modalContainer;
}

function buildModalHeader(closeBtn) {
  let modalHeader = document.createElement("div");
  modalHeader.classList.add("modal-header");
  modalHeader.appendChild(closeBtn);
  return modalHeader;
}

function productDescription(product) {
  let description = document.createElement("div");
  let features = document.createElement("ul");
  features.classList.add("single-product-features");
  for (let i = 0; i < product.long.length; i++) {
    let li = document.createElement("li");
    li.classList.add("single-product-single-feature");
    li.innerText = product.long[i];
    features.appendChild(li);
  }
  description.classList.add("single-product-description");
  description.appendChild(features);
  return description;
}
function selectImage(src) {
  let main = document.getElementById("selected-product");
  main.src = src;
}

function buildTheater(product) {
  let theater = document.createElement("div");
  theater.classList.add("single-product-theater");
  let mainImg = document.createElement("img");
  mainImg.classList.add("single-product-theater-img");
  mainImg.src = `./img/${product.model}.webp`;
  mainImg.addEventListener("click", () => selectImage(mainImg.src));
  theater.appendChild(mainImg);
  for (let i = 0; i < product.imageTheater.length; i++) {
    let img = document.createElement("img");
    img.classList.add("single-product-theater-image");
    img.src = `../../img/${product.model}-${product.imageTheater[i]}.webp`;
    img.addEventListener("click", () => selectImage(img.src));
    img.alt = `${product.model}-${product.imageTheater[i]}`;
    theater.appendChild(img);
  }
  return theater;
}

function buildModalBody(product) {
  let modalBody = document.createElement("div");
  let modalInner = document.createElement("div");
  modalInner.classList.add("modal-body-inner");
  let modalImage = document.createElement("img");
  let title = document.createElement("h3");
  let description = productDescription(product);
  let detail = document.createElement("p");
  if (product.detail !== "") {
    detail.innerText = `${product.detail}`;
    description.prepend(detail);
  }
  let theater = buildTheater(product);
  title.innerText = product.model;
  modalImage.src = `./img/${product.model}.webp`;
  modalImage.setAttribute("id", `selected-product`);
  modalBody.classList.add("modal-body");
  modalBody.appendChild(title);
  modalInner.appendChild(modalImage);
  modalInner.appendChild(description);
  modalBody.appendChild(modalInner);
  modalBody.appendChild(theater);
  return modalBody;
}

function buildModalButton(product) {
  let closeBtn = document.createElement("button");
  closeBtn.innerText = "x";
  closeBtn.addEventListener("click", () => destroyModal(product.model));
  closeBtn.classList.add("modal-close-btn");
  return closeBtn;
}

function destroyModal(product) {
  const modal = document.getElementById(`${product}-modal`);
  let wave = document.createElement("div");
  wave.classList.add("wave");
  document.body.prepend(wave);
  setTimeout(() => {
    modal.open = false;
    modal.parentNode.removeChild(modal);
  }, 2000);
  setTimeout(() => {
    document.body.removeChild(wave);
  }, 4000);
}

const buildSingleProduct = (e, product) => {
  let modal = document.createElement("DIALOG");
  let modalBody = buildModalBody(product);
  let closeBtn = buildModalButton(product);
  let modalHeader = buildModalHeader(closeBtn);
  let modalContainer = buildModalContainer(modalHeader, modalBody);

  modal.appendChild(modalContainer);
  modal.setAttribute("id", `${product.model}-modal`);
  document.body.appendChild(modal);
  modal.open = false;
  setTimeout(() => {
    modal.open = true;
  }, 1);
};
