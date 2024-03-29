import { Factory } from "./factory/factory.js";
import { buildSingleProduct } from "./buildSingleProduct.js";
function Image(p) {
  return Factory.create_node({
    type: "img",
    attributes: {
      id: `${p.model}`,
      alt: `${p.model}`,
    },
    cssClass: ["product-card-img"],
    properties: {
      src: `./img/${p.model}.webp`,
    },
  });
}

function Title(p) {
  return Factory.create_node({
    type: "h3",
    properties: {
      innerText: `${p.model}`,
    },
    cssClass: ["product-card-title"],
  });
}

function ShortDesc(p) {
  return Factory.create_node({
    type: "p",
    properties: {
      innerText: `${p.short}`,
    },
    cssClass: ["product-card-short"],
  });
}

function Price(p) {
  return Factory.create_node({
    type: "p",
    properties: {
      innerText: `$${p.price}`,
    },
    cssClass: ["product-card-price"],
  });
}

export const buildProducts = (products = [], shop) => {
  shop.innerHTML = "";
  products.forEach((p) => {
    const item = Factory.create_node({
      type: "div",
      cssClass: ["flex", "column", "product-card"],
      attributes: {
        id: `${p.model}`,
      },
      children: [Image(p), Title(p), ShortDesc(p), Price(p)],
    });

    item.addEventListener(
      "click",
      (e) => {
        buildSingleProduct(e, p);
      },
      true
    );
    shop.appendChild(item);
  });
};
