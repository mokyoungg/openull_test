import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./style/global";
import Routes from "./Routes";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);
