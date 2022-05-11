import React from "react";
import ReactDOM from "react-dom";
import * as ServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <div>
    <h1>Hello World</h1>
  </div>,
  document.getElementById("root")
);

ServiceWorker.register();
