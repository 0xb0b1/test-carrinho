import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Header } from "./components/Header";
import { Cart } from "./pages/Cart";
import { ProductListing } from "./pages/ProductListing";
import GlobalStyles from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />

      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <ToastContainer autoClose={2000} />
    </BrowserRouter>
  );
}

export default App;
