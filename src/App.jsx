import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Logo from "./pages/components/Logo";
import Nav from "./pages/components/Nav";
import AdsEarth from "./pages/product/AdsEarth";
import ExtendedNetworks from "./pages/product/ExtendedNetworks";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProductDesign from "./pages/ProductDesign";
import Graphics from "./pages/Graphics";
import Footer from "./pages/components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Logo />
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/products" element={<ProductDesign />} />
        <Route path="/graphics" element={<Graphics />} />
        <Route path="/extended" element={<ExtendedNetworks />} />
        <Route path="/ads4earth" element={<AdsEarth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
