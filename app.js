import * as ReactDOM from "react-dom";
import * as React from "react";
import Dashboard from "./src/Dashboard.jsx";
const App = () =>  {
  return(
    <Dashboard />
  )
};
ReactDOM.render(
  React.createElement(App),
  document.getElementById("app")
);
