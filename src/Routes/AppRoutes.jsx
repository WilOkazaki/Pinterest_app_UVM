import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Aboutme from "../components/Funciones/Aboutme";
import Favorite from "../components/Funciones/Favorite";
import Logout from "../components/Funciones/Logout";
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/Aboutme" element={<Aboutme />} />
        <Route exact path="/Favorite" element={<Favorite />} />
        <Route exact path="/Logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}
export default AppRoutes;
