export function create_node({type, cssClass}){
    const node = document.createElement(type);
    node.classList.add(...cssClass);
    return node;
}