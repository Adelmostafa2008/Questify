import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./AuthContext.jsx";
import { SnackBarProvider } from "./SnackBarContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SnackBarProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </SnackBarProvider>
  </StrictMode>
);
