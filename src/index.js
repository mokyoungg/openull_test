import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./style/global";

import ChartTableContainer from "./components/ChartTableContainer";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ChartTableContainer />
  </React.StrictMode>,
  document.getElementById("root")
);
