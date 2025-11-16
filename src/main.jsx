import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import EvolutionPage from "./pages/EvolutionPage.jsx";
import PortfolioPage from "./pages/PortfolioPage.jsx";
import CreateWebsitePage from "./pages/CreateWebsitePage.jsx";
import "./styles/pages/evolution-page.css";
import "./styles/pages/portfolio-page.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/evolucao-digital" element={<EvolutionPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/criacao-de-site" element={<CreateWebsitePage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
