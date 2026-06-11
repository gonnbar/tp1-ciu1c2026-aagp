import Form from "react-bootstrap/Form"
import "./Filters.css"

function Filters({categories, category, setCategory, stockMin, setStockMin, priceMin, setPriceMin, priceMax, setPriceMax}) {
  return (
    <Form.Group className="custom-number-inputs">
      <Form.Label> Categoria </Form.Label>
      <Form.Select
        value={category}
        onChange={(e) => setCategory(e.target.value)}>
        <option value="">Todas</option>
        {categories.map(cat => (
          <option
            key={cat}
            value={cat}>
            {cat}
          </option>
        ))}
      </Form.Select>
      <Form.Label> Stock </Form.Label>
      <Form.Control
        type="number"
        placeholder="0"
        min={0}
        value={stockMin}
        onChange={(e) => setStockMin(e.target.value)}
      />
      <Form.Label> Precio Minimo </Form.Label>
      <Form.Control
        type="number"
        placeholder="0"
        min={0}
        value={priceMin}
        onChange={(e) => setPriceMin(e.target.value)}
      />
      <Form.Label> Precio Maximo</Form.Label>
      <Form.Control
        type="number"
        placeholder="0"
        min={0}
        value={priceMax}
        onChange={(e) => setPriceMax(e.target.value)}
      />
    </Form.Group>
  )
}

//
// import Filters from '../../components/Filters/Filters';
//
// import { useState } from "react";
//const categories = [
//  ...new Set(products.map(p => p.categoria))
//  ];
// /  const [category, setCategory] = useState("");
//
//   const [stockMin, setStockMin] = useState("");
//
//   const [priceMin, setPriceMin] = useState("");
//
//   const [priceMax, setPriceMax] = useState("");
//
//   const categories = [
//     ...new Set(products.map(p => p.categoria))
//   ];
// /]
//
// combina busqueda y filtro
// //  const productosFiltrados = products.filter((producto) => {
//
//     const coincideBusqueda =
//       producto.nombre
//         .toLowerCase()
//         .includes(search.toLowerCase());
//
//     const coincideCategoria =
//       category === "" ||
//       producto.categoria === category;
//
//     const coincideStock =
//       stockMin === "" ||
//       producto.stock >= Number(stockMin);
//
//     const coincidePrecio =
//       (priceMin === "" ||producto.precio >= Number(priceMin)) &&
//       (priceMax === "" ||producto.precio <= Number(priceMax));
//
//     return (
//       coincideBusqueda &&
//       coincideCategoria &&
//       coincideStock &&
//       coincidePrecio
//     );
//   });
//      <Container className='page-container'>
      //   <Filters
      //     categories={categories}
      //     category={category}
      //     setCategory={setCategory}
      //     stockMin={stockMin}
      //     setStockMin={setStockMin}
      //     priceMin={priceMin}
      //     setPriceMin={setPriceMin}
      //     priceMax={priceMax}
      //     setPriceMax={setPriceMax} />
      // </Container>
      //
//
//esto iria donde se usa

export default Filters;
