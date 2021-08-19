// create a node
export function create_node({
  type = "div",
  attributes = {},
  properties = {},
  cssClass = [],
  children = [],
  event = null,
}) {
  const node = document.createElement(type);
  // classes
  node.classList.add(...cssClass);
  // attributes
  for (let a in attributes) {
    node.setAttribute(a, attributes[a]);
  }
  // properties
  for (let p in properties) {
    node[p] = properties[p];
  }
  // children
  children.forEach((c) => node.appendChild(c));
  // event
  if (event) node.addEventListener(event.type, event.fn);
  return node;
}
