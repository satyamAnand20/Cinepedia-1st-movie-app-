import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { FavouritesProvider } from "./Contexts/FavouritesContext.jsx";
import "./css/index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FavouritesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FavouritesProvider>
  </StrictMode>
);
