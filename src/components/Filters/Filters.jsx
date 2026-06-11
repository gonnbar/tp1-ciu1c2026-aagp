import Form from "react-bootstrap/Form"
import "./Filters.css"

function Filters({
  categories, 
  category, 
  setCategory, 
  stockMin, 
  setStockMin, 
  priceMin, 
  setPriceMin, 
  priceMax, 
  setPriceMax}) {
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
export default Filters;