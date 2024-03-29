import { Factory } from "./factory/factory.js";
function buildModalContainer(modalHeader, modalBody) {
  return Factory.create_node({
    type: "div",
    cssClass: ["flex", "column", "modal-container"],
    children: [modalHeader, modalBody],
  });
}

function buildModalHeader(closeBtn) {
  return Factory.create_node({
    type: "div",
    cssClass: ["flex", "modal-header"],
    children: [closeBtn],
  });
}

function Description(detail, features) {
  return Factory.create_node({
    type: "div",
    cssClass: ["single-product-description"],
    children: [detail, features],
  });
}

function Detail(product) {
  return Factory.create_node({ type: "p", properties: { innerText: `${product.detail}` } });
}

function FeaturePoint(point) {
  return Factory.create_node({
    type: "li",
    cssClass: ["single-product-single-feature"],
    properties: { innerText: point },
  });
}

function Features(product) {
  return Factory.create_node({
    type: "ul",
    cssClass: ["single-product-features"],
    children: [...product.long.map((i) => FeaturePoint(i))],
  });
}

function productDescription(product) {
  return Description(Detail(product), Features(product));
}

function selectImage(src) {
  document.getElementById("selected-product").src = src;
}

function ThumbNail(product, i) {
  let src = `../../img/${product.model}-${product.imageTheater[i]}.webp`;
  return Factory.create_node({
    type: "img",
    cssClass: ["single-product-theater-image"],
    properties: {
      src: src,
      alt: `${product.model}-${product.imageTheater[i]}`,
    },
    event: { type: "click", fn: () => selectImage(src) },
  });
}

function buildTheater(product) {
  return Factory.create_node({
    type: "div",
    cssClass: ["flex", "single-product-theater"],
    children: [...product.imageTheater.map((elem, i) => ThumbNail(product, i))],
  });
}

function Title(product) {
  return Factory.create_node({ type: "h3", properties: { innerText: product.model } });
}

function ModalImage(product) {
  return Factory.create_node({
    type: "img",
    attributes: { id: "selected-product" },
    properties: { src: `./img/${product.model}.webp` },
  });
}

function ModalInner(product) {
  return Factory.create_node({
    type: "div",
    cssClass: ["flex", "modal-body-inner"],
    children: [ModalImage(product), productDescription(product)],
  });
}

function buildModalBody(product) {
  return Factory.create_node({
    type: "div",
    cssClass: ["flex", "column", "modal-body"],
    children: [Title(product), ModalInner(product), buildTheater(product)],
  });
}

function buildModalButton(product) {
  return Factory.create_node({
    type: "button",
    cssClass: ["modal-close-btn"],
    properties: { innerText: "x" },
    event: { type: "click", fn: () => destroyModal(product.model) },
  });
}

function destroyModal(product) {
  const modal = document.getElementById(`${product}-modal`);
  let wave = Factory.create_node({ type: "div", cssClass: ["wave"] });
  document.body.prepend(wave);
  setTimeout(() => {
    modal.open = false;
    modal.parentNode.removeChild(modal);
  }, 2000);
  setTimeout(() => {
    document.body.removeChild(wave);
  }, 4000);
}

function ModalContainer(product) {
  return buildModalContainer(buildModalHeader(buildModalButton(product)), buildModalBody(product));
}
function Modal(product) {
  return Factory.create_node({
    type: "DIALOG",
    attributes: { id: `${product.model}-modal` },
    cssClass: ["flex", "column"],
    children: [ModalContainer(product)],
  });
}
export const buildSingleProduct = (e, product) => {
  let modal = Modal(product);
  document.body.appendChild(modal);
  modal.open = false;
  setTimeout(() => {
    modal.open = true;
  }, 1);
};
