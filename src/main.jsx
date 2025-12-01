import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import { router } from "./routes/router.jsx";
import AuthProvider from "./contexts/AuthContext/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        toastOptions={{
          style: {
            background: "#1E293B",
            color: "#fff",
          },
          success: {
            style: {
              background: "#16A34A",
              color: "#fff",
            },
          },
          error: {
            style: {
              background: "#DC2626",
              color: "#fff",
            },
          },
        }}
      />
    </AuthProvider>
  </StrictMode>
);
