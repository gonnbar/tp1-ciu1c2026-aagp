import {Col, Container, Row } from 'react-bootstrap';
import {products} from "../../data/products"
import ProductCard from "../../components/ProductCard/ProductCard";
import { useSearchParams } from 'react-router';
import { useState } from 'react';
import Filters from '../../components/Filters/Filters';
import SearchBar from "../../components/SearchBar/SearchBar"

function Products() {
    const [searchParams] = useSearchParams() // leo parametros
    const categoriaURL = searchParams.get("category") // categoria ---> viene desde home
    // FILTROS ---> GONZA
    const [category, setCategory] = useState(categoriaURL || "");
    const [priceMin, setPriceMin] = useState("");
    const [priceMax, setPriceMax] = useState("");
    const [stockMin, setStockMin] = useState("");
    const [search, setSearch] = useState("");
    const categories = [...new Set(products.map(p => p.categoria))]

    // empieza el filtro por categorias
    const productosFiltrados = products.filter((producto) =>{
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
            (priceMin === "" ||producto.precio >= Number(priceMin)) &&
            (priceMax === "" ||producto.precio <= Number(priceMax));
    return (
       coincideBusqueda &&
       coincideCategoria &&
       coincideStock &&
       coincidePrecio
     );
   });
    return(
        <Container className='page-container'>
             <Row>
                <Col md={3}>
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
           setPriceMax={setPriceMax} />
        </Col>
        <Col md={9}>
        <Row className="mt-4 g-2 align-items-stretch">
            {productosFiltrados.map((p) =>(
                // displey flex para que laas card se estiren lo mismo
                <Col lg={4} md={6} sm={12} key={p.id} className="d-flex align-items-stretch">
                <ProductCard producto={p}/>
                </Col>
            ))}
        </Row>
        </Col>
    </Row>
    </Container>
    );
}
export default Products;