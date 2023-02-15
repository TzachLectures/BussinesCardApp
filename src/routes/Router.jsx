import React from "react";
import { Route, Routes } from "react-router-dom";
import CardPage from "../cards/pages/CardPage";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import ROUTES from "./routesModel";

export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.CARDS} element={<CardPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.ROOT} element={<CardPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
