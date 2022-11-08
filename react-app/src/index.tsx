import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./unit1/App";
// import App2 from "./unit1/App2";
import App from "./unit6/App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// setInterval(() => {
//   root.render(
//     <React.StrictMode>
//       {/* <App /> */}
//       <App />
//     </React.StrictMode>
//   );
// }, 1000);

root.render(
  <React.StrictMode>
    {/* <App /> */}
    <App />
  </React.StrictMode>
);
