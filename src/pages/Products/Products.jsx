import { Col, Container, Row } from 'react-bootstrap';
import { products } from "../../data/products"
import ProductCard from "../../components/ProductCard/ProductCard";
import { useSearchParams } from 'react-router';
import { useState } from 'react';
import Filters from '../../components/Filters/Filters';
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Products.css";

function Products() {
    const [searchParams] = useSearchParams()
    const categoriaURL = searchParams.get("category")

    const [category, setCategory] = useState(categoriaURL || "");
    const [priceMin, setPriceMin] = useState("");
    const [priceMax, setPriceMax] = useState("");
    const [stockMin, setStockMin] = useState("");
    const [search, setSearch] = useState("");
    const categories = [...new Set(products.map(p => p.categoria))]

    const productosFiltrados = products.filter((producto) => {
        const coincideBusqueda =
            producto.nombre
                .toLowerCase()
                .includes(search.toLowerCase());
        const coincideCategoria =
            category === "" ||
            producto.categoria === category;
        const coincideStock =
            stockMin === "" ||
            producto.stock >= Number(stockMin);
        const coincidePrecio =
            (priceMin === "" || producto.precio >= Number(priceMin)) &&
            (priceMax === "" || producto.precio <= Number(priceMax));
        return (
            coincideBusqueda &&
            coincideCategoria &&
            coincideStock &&
            coincidePrecio
        );
    });
    return (
        <Container className='page-container'>
            <Row>
                <Col md={3} className="mb-4 mb-md-0">
                    <SearchBar
                        search={search}
                        setSearch={setSearch}
                    />

                    <Filters
                        categories={categories}
                        category={category}
                        setCategory={setCategory}
                        stockMin={stockMin}
                        setStockMin={setStockMin}
                        priceMin={priceMin}
                        setPriceMin={setPriceMin}
                        priceMax={priceMax}
                        setPriceMax={setPriceMax}
                    />
                </Col>

                <Col md={9}>
                    <Row className="g-5 align-items-stretch">
                        {productosFiltrados.map((p) => (
                            <Col lg={4} md={6} sm={12} key={p.id} className="d-flex align-items-stretch">
                                <ProductCard producto={p} />
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container >
    );
}
export default Products;