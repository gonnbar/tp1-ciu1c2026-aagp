import Form from "react-bootstrap/Form"

function SearchBar({search, setSearch}) {
  return (
    <Form.Control
      type="text"
      value={search}
      placeholder="Buscar por nombre"
      onChange={(e) => setSearch(e.target.value)}
    />
  )
}

export default SearchBar;


// import SearchBar from "../../components/SearchBar/SearchBar";
//
// import { useState } from "react";
//
// import { products } from "../../data/products"
//
// import ProductCard from "../../components/ProductCard/ProductCard";
// import { Container, Row, Col } from "react-bootstrap";
//



//USAR productosFiltrados DE Filters.jsx Y SACAR LO QUE NO SE VA A USAR
    //   {productosFiltrados.map((producto) => (
    //     <Card key={producto.id}>
    //       <Card.Body>
    //         <Card.Title>{producto.nombre}</Card.Title>
    //         <Card.Text>${producto.precio}</Card.Text>
    //       </Card.Body>
    //     </Card>
    //   ))}
    //
//   esto no va
    //   {productosFiltrados.map(product => (
    //     <div key={product.id}>
    //       {product.nombre}
    //     </div>
    //   ))}
//
//
//esto si va
      //  <Container className='page-container'>
      //   <SearchBar search={search}
      //     setSearch={setSearch}
      //   />
      // </Container>

// esto va para que vayan apareciendo las coincidencias, empieza vacio, de la otra forma empieza todo el catalogo y quedan las coincidencias
  // const productosFiltrados =
  //   search.trim() === ""
  //     ? []
  //     : products.filter(product =>
  //       product.nombre
  //         .toLowerCase()
  //         .includes(search.toLowerCase())
  //     );
  //

// esto si es en una pagina aparte, si no se usan las cards en products
    // <>
    //   <Container className="page-container">
    //     <SearchBar search={search} setSearch={setSearch} />
    //     <Row>
    //       {productosFiltrados.map((producto) => (
    //         <Col lg={4} md={4} sm={4} key={producto.id}>
    //           <ProductCard producto={producto} />
    //         </Col>
    //       ))}
    //     </Row>
    //
    //   </Container>
    //
    // </>

