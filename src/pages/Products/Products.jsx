import {Col, Container, Row } from 'react-bootstrap';
import {products} from "../../data/products"
import ProductCard from "../../components/ProductCard/ProductCard";
import { useSearchParams } from 'react-router';

function Products() {
    const [searchParams] = useSearchParams() // leo parametros
    const category = searchParams.get("category") // busco valor asociado a categoria
    const productosFiltrados = category ? products.filter(p => p.categoria === category):products; 
    /* 
        Si la categoria existe ---> filtro todos los libros con misma categoria
        : sino entonces muestro el array de productos
    */
    return(
    <Container>
        <Row>
            {productosFiltrados.map((p) =>(
                <Col lg={4} md={4} sm={4} key={p.id}>
                <ProductCard producto={p}/>
                </Col>
            ))}
        </Row>
    </Container>
    );
}
export default Products;