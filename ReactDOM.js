function render(element, container) {
  const { type, props } = element
  const dom =
    type === "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(type)

  //handle props
  Object.keys(props).forEach((key) => {
    if (key !== "children") {
      dom[key] = props[key]
    }
  })
  //handle children
  props.children && props.children.forEach(child => this.render(child, dom))

  container.appendChild(dom)
}

const ReactDOM = {
  render,
}

export { ReactDOM } 