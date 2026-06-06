import { Link, useParams } from 'react-router';
import {products} from '../../data/products';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './ProductDetail.css'

function ProductDetail() {
   const {id} = useParams();
   const product = products.find((p) => p.id == id);
   return(
        <Card className="mb-3">
            <Row className = 'g-0'>
                <Col md= {4}>
                <Card.Img src={product.imagen} className="h-100"style={{}}></Card.Img>
                </Col>
                <Col md={8}>
                    <Card.Body>
                       <Card.Title style={{fontSize:'2.5rem',textAlign:'center'}}>{product.nombre} - {product.autor}</Card.Title>
                       <Card.Text className='precioDetalles'> ${product.precio}</Card.Text>
                    
                    {product.stock > 0 ?(
                        <Card.Text className='stockProducto accent'>¡Solo quedan {product.stock} en stock!</Card.Text>
                    )
                    :
                    (
                        <Card.Text className='stockProducto'>¡No hay mas stock de este producto!</Card.Text>
                    )}
                        <Container className="d-flex gap-3 justify-content-center">
                        <Button className="btn btn-primary-custom estiloBotones"> Agregar al carrito </Button>
                        <Button className="btn btn-secondary-custom estiloBotones" as={Link} to={`/products`}>Volver</Button>
                        </Container>

                       <div className='contenedorSinopsis'>
                        <h3>Sinopsis</h3>
                        <p className='productoDescripcion'>{product.descripcion}</p>
                        </div>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    );
}
export default ProductDetail;