import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useState } from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Products from "./pages/Product";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;