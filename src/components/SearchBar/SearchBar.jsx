import Form from "react-bootstrap/Form";
import { BsSearch } from "react-icons/bs";
import "./SearchBar.css";

function SearchBar({ search, setSearch }) {
  return (
    <div className="catalog-search">
      <BsSearch className="search-icon" />
      <Form.Control
        type="text"
        value={search}
        placeholder="Buscar por nombre"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  )
}

export default SearchBar;