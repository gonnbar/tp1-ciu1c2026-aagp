import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
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
          
                <Button className="btn btn-primary-custom w-100 fw-bold" onClick={() => setShowModal(true)}>
                    Confirmar compra
                </Button>

                <Button className="btn btn-secondary-custom size-sm w-100 mt-2" onClick={vaciarCarrito}>
                    Vaciar Carrito
                </Button>

            </Card>
        </div>

        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
            <Modal.Header closeButton style={{ backgroundColor: "var(--color-surface)", borderColor: "var(--color-border)" }}>
                <Modal.Title className="page-title">Compra realizada con éxito</Modal.Title>
            </Modal.Header>
            
            <Modal.Body style={{ backgroundColor: "var(--color-bg)", color: "var(--color-text)" }}>
                <p>La orden de compra será enviada a tu email.</p>
                <h5>Monto final: <span className="price">${calcularTotal()}</span></h5>
            </Modal.Body>
            
            <Modal.Footer style={{ backgroundColor: "var(--color-surface)", borderColor: "var(--color-border)" }}>
                <Button className="btn btn-primary-custom" onClick={() => { setShowModal(false) }}>
                    Aceptar
                </Button>
            </Modal.Footer>
        </Modal>
    </Container>
  );
}

export default Cart;