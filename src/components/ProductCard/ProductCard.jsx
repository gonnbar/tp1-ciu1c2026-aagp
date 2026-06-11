import { Button, Card, CardBody } from "react-bootstrap";
import { Link } from "react-router";
import './ProductCard.css'
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function ProductCard({ producto }) {
  const { agregarProducto } = useContext(CartContext)
  return (
    <Card className="custom-card cardEstilo overflow-hidden">
      <Card.Img src={producto.imagen} className="card-img-top"></Card.Img>
      <Card.Body>
        <Card.Title className="primary">{producto.nombre}</Card.Title>
        <Card.Subtitle className={'mb-2 text-muted'}>{producto.categoria}</Card.Subtitle>
        <Card.Text className="price">${producto.precio}</Card.Text>
      </Card.Body>
      {
        producto.stock > 0 ? (
          <Card.Footer className="d-flex gap-2 border-0 bg-transparent shadow-none">
            <p className="stockProducto accent">¡Solo quedan {producto.stock} en stock!</p>
            <Button className="btn btn-primary-custom" onClick={() => agregarProducto(producto)}> Agregar al carrito </Button>
            <Button className="btn btn-secondary-custom" as={Link} to={`/products/${producto.id}`}>Ver Detalle</Button>
          </Card.Footer>
        )
          : (
            <Card.Footer className="d-flex gap-2 border-0 bg-transparent shadow-none">
              <p className="stockProducto accent mb-0">¡No hay mas stock de este producto!</p>
              <Button className="estiloBotonSinStock" style={{ fontSize: "0.9rem" }}>Producto Sin stock</Button>
              <Button className="btn btn-secondary-custom" as={Link} to={`/products/${producto.id}`}>Ver Detalle</Button>
            </Card.Footer>
          )
      }
    </Card>
  );
}
export default ProductCard;


