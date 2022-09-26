import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import SimpleHabit from "./components/simpleHabit";
import "@fortawesome/fontawesome-free/js/all.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <SimpleHabit />
  </React.StrictMode>
);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
