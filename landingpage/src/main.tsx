import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // global primeiro, depois o CSS de cada componente
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);