import React from "react";
import ReactDOM from "react-dom/client";
import { NomeProvider } from "./context/NomeContext/NomeContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NomeProvider>
      <App />
    </NomeProvider>
  </React.StrictMode>
);
