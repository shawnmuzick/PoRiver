import { buildProducts } from "./productLoop.js";
const shop = document.getElementById("shop");
const filters = document.querySelectorAll("input");
const filterClose = document.getElementById("shop-filter-close");
const filterOpen = document.getElementById("shop-filter-open");
const filterContainer = document.getElementById("filter-container");
const filterImg = document.getElementById("filter-image");
const sortBtn = document.getElementById("sortBtn");
const sort = document.getElementById("sort");
let state = [...products];
buildProducts(state, shop);

function filterProducts(filter, products) {
  return filter === null
    ? products
    : products.filter((p) => filter.includes(p.instrument.toLowerCase()));
}

function getFilters(elements = []) {
  let arr = [...elements].filter((f) => f.checked === true).map((f) => f.name);
  return arr.length === 0 ? null : arr;
}

filters.forEach((f) => {
  f.addEventListener("click", () => {
    buildProducts(filterProducts(getFilters(filters), products), shop);
  });
});

filterClose.addEventListener("click", () => {
  if (!filterContainer.classList.contains("filter-container-hide")) {
    filterContainer.classList.add("filter-container-hide");
    filterOpen.style.display = "";
    filterImg.style.display = "";
  }
});

filterOpen.addEventListener("click", () => {
  if (filterContainer.classList.contains("filter-container-hide")) {
    filterContainer.classList.remove("filter-container-hide");
    filterOpen.style.display = "none";
    filterImg.style.display = "none";
  }
});

sortBtn.addEventListener("click", () => {
  let filteredProducts = filterProducts(getFilters(filters), state);
  if (sort.value === "+") {
    filteredProducts.sort((a, b) => (a.price > b.price ? 1 : -1));
  } else if (sort.value === "-") {
    filteredProducts.sort((a, b) => (a.price < b.price ? 1 : -1));
  } else if (sort.value === "none") {
    filteredProducts = [...products];
  }
  buildProducts(filteredProducts, shop);
});
