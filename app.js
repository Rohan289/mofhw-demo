import * as ReactDOM from "react-dom";
import * as React from "react";
import Home from "./src/Home.jsx";

const App = () => <Home />;
ReactDOM.render(
  React.createElement(App),
  document.getElementById("app")
);