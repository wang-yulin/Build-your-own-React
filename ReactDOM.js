function render(element, container) {
  const { type, props } = element
  const dom = document.createElement(type)

  //handle props
  Object.keys(props).forEach((key) => {
    if (key !== "children") {
      dom[key] = props[key]
    }
  })
  //handle children
  const { children } = props
  if (children) {
    if (Array.isArray(children)) {
      children.forEach(child => render(child, dom))
    } else if (typeof children === "string") {
      const node = document.createTextNode(children)
      dom.appendChild(node)
    } else {
      render(children, dom)
    }
  }

  container.appendChild(dom)
}

const ReactDOM = {
  render,
}

export { ReactDOM } 