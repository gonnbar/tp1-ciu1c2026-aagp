import { Button,Card,CardBody } from "react-bootstrap";
import { Link } from "react-router";
import './ProductCard.css'
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function ProductCard({producto}) {
  const {agregarProducto} = useContext(CartContext)
  return(
      <Card className="custom-card cardEstilo">
        <Card.Img src={producto.imagen} lass="card-img-top" style={{height:'250px',width:"100%",objectFit: 'contain'}}></Card.Img>
      <Card.Body>
        <Card.Title className="primary">{producto.nombre}</Card.Title>
        <Card.Subtitle  className ={'mb-2 text-muted'}>{producto.categoria}</Card.Subtitle>
        <Card.Text className="price">${producto.precio}</Card.Text>
      </Card.Body>
    {
      producto.stock > 0?(
        <Card.Footer className="d-flex gap-2 card border-0 bg-transparent shadow-none">
          <Button className="btn btn-primary-custom" onClick={() => agregarProducto(producto)}> Agregar al carrito </Button>
          <Button className="btn btn-secondary-custom" as={Link} to={`/products/${producto.id}`}>Ver Detalle</Button>
        </Card.Footer>
      )
      :(
        <Card.Footer className="d-flex gap-2 card border-0 bg-transparent shadow-none">
                   <Button className="estiloBotonSinStock">Sin Stock</Button>
                   <Button className="btn btn-secondary-custom" as={Link} to={`/products/${producto.id}`}>Ver Detalle</Button>
              </Card.Footer>
      )
    }
      </Card>
  );
}
export default ProductCard;


