import { buildNav } from "./nav/nav.js";
const main = document.getElementById("main");

async function getTemplate(elem, file) {
  const template = document.createElement("template");
  const data = await (await fetch(`/public/components/${file}`)).text();
  template.innerHTML = data;
  let e = template.content.querySelector(elem);
  return e;
}

function insertElement(sibling, newNode, position) {
  if (position === "after") {
    sibling.parentNode.insertBefore(newNode, sibling);
  } else {
    sibling.parentNode.insertBefore(newNode, sibling.nextSibling);
  }
}

function insertHeroTitle() {
  document.getElementById("hero-text").innerText = document.title;
}

async function getElements() {
  let nav = await getTemplate("nav", "/nav/nav.html");
  let mobileNav = await getTemplate("nav", "/mobileNav/mobileNav.html");
  let footer = await getTemplate("footer", "/footer/footer.html");
  let hero = await getTemplate("div", "/hero/hero.html");
  insertElement(main, nav, "after");
  insertElement(main, mobileNav, "before");
  insertElement(main, footer, "before");
  insertElement(main, hero, "after");

  buildNav();
  insertHeroTitle();
}
getElements();
