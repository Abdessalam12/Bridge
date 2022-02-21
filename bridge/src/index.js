import React from "react";
import ReactDOM from "react-dom";

import Authentification from "./components/Authentification";
import Menu from "./components/Menu";

ReactDOM.render(
  <div>
    <Menu />
    <Authentification />
  </div>,

  document.getElementById("root")
);
