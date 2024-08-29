import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// 기본 Root Component
createRoot(document.getElementById("root")).render(
  // App = Root Root Compoent
  <App />
);
