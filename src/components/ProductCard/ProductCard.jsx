import { Button,Card,CardBody } from "react-bootstrap";
import { Link } from "react-router";

function ProductCard({producto}) {
  return(
      <Card className="card border-0 bg-transparent shadow-none" style={{padding:'1rem'}}>
        <Card.Img src={producto.imagen} lass="card-img-top" style={{height:'250px',width:"100%",objectFit: 'contain'}}></Card.Img>
      <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Subtitle className ={'mb-2 text-muted'}>{producto.categoria}</Card.Subtitle>
        <Card.Text>${producto.precio}</Card.Text>
      </Card.Body>
    {
      producto.stock > 0?(
        <Card.Footer className="d-flex gap-2 card border-0 bg-transparent shadow-none">
          <Button> Agregar al carrito </Button>
          <Button as={Link} to={`/products/${producto.id}`}>Ver Detalle</Button>
        </Card.Footer>
      )
      :(
        <Card.Footer className="d-flex gap-2 card border-0 bg-transparent shadow-none">
                   <Button>Agregar al carrito</Button>
                   <Button as={Link} to={`/products/${producto.id}`}>Ver Detalle</Button>
              </Card.Footer>
      )
    }
      </Card>
  );
}
export default ProductCard;


