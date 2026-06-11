import { Link, useParams } from 'react-router';
import { products } from '../../data/products';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './ProductDetail.css'
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function ProductDetail() {
    const { id } = useParams();
    const { agregarProducto } = useContext(CartContext)
    const product = products.find((p) => p.id == id);
    return (
        <div className='contenedorCard'>
            <Card className="mb-3 estiloDetalle">
                <Row className='g-0'>
                    <Col md={4}>
                        <Card.Img className='estiloImagen' src={product.imagen}></Card.Img>
                    </Col>
                    <Col md={8}>
                        <Card.Body>
                            <Card.Title style={{ fontSize: '2rem', textAlign: 'center' }}>{product.nombre} - {product.autor}</Card.Title>
                            <Card.Text className='precioDetalles price'> ${product.precio}</Card.Text>

                            {product.stock > 0 ? (
                                <Container className="d-flex gap-3 justify-content-center contendorBotones" >
                                    <Button className="estiloBotones btn btn-primary-custom" onClick={() => agregarProducto(product)} > Agregar Al Carrito </Button>
                                    <Button className="btn btn-secondary-custom estiloBotones" as={Link} to={`/products`}>Volver</Button>
                                </Container>
                            )
                                :
                                (
                                    <Container className="d-flex gap-3 justify-content-center">
                                        <Button className="buttonSinStock estiloBotones"> Sin Stock </Button>
                                        <Button className="btn btn-secondary-custom estiloBotones" as={Link} to={`/products`}>Volver</Button>
                                    </Container>
                                )}
                            <div className='contenedorSinopsis'>
                                <h3>Sinopsis</h3>
                                <p className='productoDescripcion'>{product.descripcion}</p>
                            </div>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </div>
    );
}
export default ProductDetail;