import Form from "react-bootstrap/Form"

function Filters(categories, category, setCategory, stockMin, setStockMin, priceMin, setPriceMin, priceMax, setPriceMax) {
  return (
    <Form.Group>
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
        onChange={(e) => setStockMin(Number(e.target.value))}
      />
      <Form.Label> Precio </Form.Label>
      <Form.Label> Minimo</Form.Label>
      <Form.Control
        type="number"
        placeholder="0"
        min={0}
        value={priceMin}
        onChange={(e) => setPriceMin(Number(e.target.value))}
      />
      <Form.Label> Maximo</Form.Label>
      <Form.Control
        type="number"
        placeholder="0"
        min={0}
        value={priceMax}
        onChange={(e) => setPriceMax(Number(e.target.value))}
      />
    </Form.Group>
  )
}

//const categories = [
//  ...new Set(products.map(p => p.categoria))
//  ];
//]
//esto iria donde se usa

export default Filters;
