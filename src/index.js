import React from "react";
import { render } from "react-dom";
// import Root from './components/Root'

// render(<Root />, document.getElementById('container'))
function HelloWorld() {
  return <h1> "HelloWorld" </h1>;
}

render(<HelloWorld />, document.getElementById("container"));
