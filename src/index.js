import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Game from "./Components/Game";
import * as serviceWorker from "./serviceWorker";
import { store } from "./store/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
