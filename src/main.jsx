import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./AuthContext.jsx";
import { SnackBarProvider } from "./SnackBarContext.jsx";
import ThemeProvider from "./ThemeContext.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
//console.log(import.meta.env.VITE_GOOGLE_CLIENT_ID);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <SnackBarProvider>
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <AuthProvider>
          <App />
        </AuthProvider>
        </GoogleOAuthProvider>
      </SnackBarProvider>
    </ThemeProvider>
  </StrictMode>
);
