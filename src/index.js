import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { ThemeContextProvider, UserProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
