import { Routes, Route } from "react-router";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Topbar from "./components/Topbar/Topbar";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";

// carrito
import { useState } from "react";
import { CartContext, estadoCart } from "./context/CartContext";
// PRUEBA CARRITO
//import { products } from "./data/products.js";


function App() {
  //carrito
  const [cart, setCart] = useState([
  // PRUEBA CARRITO { ...products[0], cantidad: 1 }, 
  //{ ...products[1], cantidad: 1 } 
  ]);

  return (
    <>
      <Topbar />

      <Navbar />

      <main>
        <CartContext.Provider value={{ cart, ...estadoCart(cart, setCart) }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </CartContext.Provider>
      </main>
      
      <Footer />
    </>
  );
}

export default App;