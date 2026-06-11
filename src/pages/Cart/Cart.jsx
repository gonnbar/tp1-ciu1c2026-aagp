import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router";
import CartItem from "../../components/CartItem/CartItem";
import { Container, Table, Button, Modal, Alert, Card } from "react-bootstrap";

function Cart() {
  const { cart, vaciarCarrito, calcularTotal, calcularCantidadTotal } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false); 

  if (cart.length === 0) {
    return (
      <Container className="page-container text-center">
        <Alert variant="light" style={{ backgroundColor: "var(--color-surface)", borderColor: "var(--color-border)", color: "var(--color-text)" }}>
            Tu carrito está vacío.
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="page-container">
        <h2 className="mb-4 text-center page-title">
            Tu Carrito de Compras
        </h2>
      
        <Table responsive striped bordered hover className="mt-3" style={{ borderColor: "var(--color-border)" }}>
            <thead>
                <tr className="text-center" style={{ backgroundColor: "var(--color-surface)" }}>
                    <th className="text-start">Producto</th>
                    <th>Precio Unitario</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                    <th>Eliminar</th>
                    </tr>
            </thead>
            <tbody>
                {cart.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))}
            </tbody>
        </Table>

        <div className="d-flex justify-content-end text-end my-4">
            <Card className="p-3 custom-card" style={{ minWidth: "280px" }}>

                <p className="mb-2" style={{ color: "var(--color-text)" }}>
                Productos totales: <span className="fw-bold">{calcularCantidadTotal()}</span>
                </p>
                <h4 className="mb-3" style={{ color: "var(--color-text)" }}>
                    Total: <span className="price">${calcularTotal()}</span>
                </h4>
          
                <Button className="btn btn-primary-custom w-100 fw-bold" as={Link} to="/contact">
                    Finalizar compra
                </Button>

                <Button className="btn btn-secondary-custom size-sm w-100 mt-2" onClick={vaciarCarrito}>
                    Vaciar Carrito
                </Button>

            </Card>
        </div>

    </Container>
  );
}

export default Cart;