//===React===
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//===Routing===
import { BrowserRouter, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
