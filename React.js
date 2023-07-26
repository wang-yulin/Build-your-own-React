function createElement(type, config, children) {

  const props = { ...config }

  const childrenLength = arguments.length - 2
  if (childrenLength === 1) {
    props.children = children
  } else if (childrenLength > 1) {
    const childArray = Array(childrenLength)
    for (let i = 0; i < childArray.length; i++) {
      childArray[i] = arguments[i + 2]
    }
    props.children = childArray
  }

  return {
    type,
    props
  }
}

const React = {
  createElement,
}

export { React } 