import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./index.css";

import { Provider } from "react-redux";
import Store from "./redux/store";

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
// ReactDOM.render(<h1>Hello Nityam</h1>, document.getElementById("root"));
