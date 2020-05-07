import React from "react";
import { render } from "react-dom";
import App from "./App";
import getFacts from "./facts";

getFacts()
  .then((facts) => {
    console.log(facts);
    render(<App facts={facts} />, document.querySelector("#root"));
  })
  .catch((err) => console.log(err));
