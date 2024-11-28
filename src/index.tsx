import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Tasks from "./Components/Tasks";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
     <Tasks/>
  </React.StrictMode>
);
