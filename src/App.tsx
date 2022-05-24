import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Header } from "./components/Header";
import { CartProvider } from "./hooks/useCart";
import { Cart } from "./pages/Cart";
import { ProductListing } from "./pages/ProductListing";
import GlobalStyles from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <GlobalStyles />
        <Header />

        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

        <ToastContainer
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
