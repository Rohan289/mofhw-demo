import * as ReactDOM from "react-dom";
import * as React from "react";

const App = () => <p>Hello New World</p>;
ReactDOM.render(
  React.createElement(App),
  document.getElementById("app")
);