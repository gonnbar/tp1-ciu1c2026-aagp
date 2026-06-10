import { createContext } from "react";

export const estadoCart = (cart, setCart) => {
  return {
    agregarProducto: (product) => {
      const productoEnCarrito = cart.find((p) => p.id === product.id);
      
      if (productoEnCarrito) {
        setCart(cart.map((p) => p.id === product.id ? { ...p, cantidad: p.cantidad + 1 } : p));
      } else {
        setCart([...cart, { ...product, cantidad: 1 }]);
      }
    },

    eliminarProductoDeCarrito: (id) => {
      setCart(cart.filter((p) => p.id !== id));
    },

    aumentarCantidad: (id) => {
      setCart(cart.map((p) => p.id === id ? { ...p, cantidad: p.cantidad + 1 } : p));
    },

    disminuirCantidad: (id) => {
      setCart(cart.map((p) => p.id === id && p.cantidad > 1 ? { ...p, cantidad: p.cantidad - 1 } : p));
    },

    vaciarCarrito: () => {
      setCart([]);
    },

    calcularTotal: () => {
      return cart.reduce((acum, item) => acum + item.precio * item.cantidad, 0);
    },

    calcularCantidadTotal: () => {
      return cart.reduce((acum, item) => acum + item.cantidad, 0);
    }
  };
};

export const CartContext = createContext();