import { React } from '../React'
import { ReactDOM } from '../ReactDOM'

const element = (
  <div id="app">
    <h1>Hello World!</h1>
  </div>
)

console.log(element);
const container = document.getElementById("root")
ReactDOM.render(element, container)