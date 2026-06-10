import Form from "react-bootstrap/Form"

function SearchBar(search, setSearch) {
  return (
    <Form.Control
      type="text"
      value={search}
      onChange={setSearch(e.target.value)}
    />
  )
}

// const productosFiltrados = products.filter(product =>
//   product.name
//     .toLowerCase()
//     .includes(busqueda.toLowerCase())
// );
// {productosFiltrados.map(product => (
//     <div key={product.id}>
//       {product.name}
//     </div>
//   ))
// }
// ))}
// esto iria donde se usa

export default SearchBar;
