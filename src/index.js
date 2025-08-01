// src/index.js
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import PoliticaCookies from "./PoliticaCookies";
import "./style.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/politica-cookies" element={<PoliticaCookies />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);