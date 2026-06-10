import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Button } from "react-bootstrap";

function CartItem({ item }) {
  const { aumentarCantidad, disminuirCantidad, eliminarProductoDeCarrito } = useContext(CartContext);

  const calcularSubtotal = (precio, cantidad) => {
    return precio * cantidad;
  };

  return (
    <tr className="align-middle text-center" style={{ backgroundColor: "var(--color-surface)" }}>
      <td className="fw-bold text-start" style={{ color: "var(--color-text)" }}>
        {item.nombre}
      </td>
      <td className="price">
        ${item.precio}
      </td>
      <td>
        <Button variant="link" className="text-dark p-0 me-2 fw-bold text-decoration-none" onClick={() => disminuirCantidad(item.id)}> - </Button>
        <span className="fw-bold mx-2" style={{ color: "var(--color-text)" }}> {item.cantidad} </span>
        <Button variant="link" className="text-dark p-0 ms-2 fw-bold text-decoration-none" onClick={() => aumentarCantidad(item.id)}> + </Button>
      </td>
      <td className="price">
        ${calcularSubtotal(item.precio, item.cantidad)}
      </td>
      <td>
        <Button variant="link" className="text-danger p-0" onClick={() => eliminarProductoDeCarrito(item.id)}>
          Quitar producto del carrito.
        </Button>
      </td>
    </tr>
  );
}

export default CartItem;