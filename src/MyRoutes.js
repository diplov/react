import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/pages/Cart";
import Home from "./components/pages/Home";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
