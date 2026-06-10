import {Col, Container, Row } from 'react-bootstrap';
import {products} from "../../data/products"
import ProductCard from "../../components/ProductCard/ProductCard";

function Products() {
    return(
    <Container>
        <Row>
            {products.map((p) =>(
                <Col lg={4} md={4} sm={4} key={p.id}>
                <ProductCard producto={p}/>
                </Col>
            ))}
        </Row>
    </Container>
    );
}
export default Products;