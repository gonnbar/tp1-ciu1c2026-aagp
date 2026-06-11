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

import { useState, useEffect } from "react";
import { CartContext, estadoCart } from "./context/CartContext";

function App() {

    const [cart, setCart] = useState( () => {
          const carritoGuardado = localStorage.getItem("carritoItems")
          return carritoGuardado ? JSON.parse(carritoGuardado) : [];
        });

    useEffect( () => {
          localStorage.setItem("carritoItems", JSON.stringify(cart))
        }, [cart]);

    return (
          <>
            <Topbar />

            <Navbar />

            <main>
              <CartContext.Provider value={{ cart, ...estadoCart(cart, setCart) }}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/products/:id" element={<ProductDetail />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </CartContext.Provider>
            </main>
            
            <Footer />
          </>
        );
}

export default App;
