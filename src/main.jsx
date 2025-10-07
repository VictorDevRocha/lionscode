import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import EvolutionPage from "./pages/EvolutionPage.jsx";
import "./styles/pages/evolution-page.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/evolucao-digital" element={<EvolutionPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
