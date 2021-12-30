import * as ReactDOM from "react-dom";
import * as React from "react";
import Home from "./src/Home.jsx";
import Dashboard from "./src/Dashboard.jsx";

const App = () =>  {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }
  return(
    <Dashboard />
  )
};
ReactDOM.render(
  React.createElement(App),
  document.getElementById("app")
);