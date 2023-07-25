function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map(child => {
        return typeof child === "object" ? child : this.createTextElement(child)
      }),
    }
  }
}
function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
    }
  }
}
const React = {
  createElement,
  createTextElement
}

export { React } 