import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router";
import { BsCart3, BsSearch } from 'react-icons/bs';
import logo from "../../assets/logo/logo.png";
import "./Navbar.css";

function NavBar() {
  return (
    <Navbar className="custom-navbar" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img
            src={logo}
            alt="Tinta&Papel"
            className="navbar-logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>

          <div className="navbar-search">
            <BsSearch className="search-icon" />
            <input
              type="text"
              placeholder="Buscar..."
            />
          </div>

          <Nav className="ms-auto">

            <NavLink to="/products" className="nav-link">
              Productos
            </NavLink>

            <NavLink to="/contact" className="nav-link">
              Contacto
            </NavLink>

            <NavLink to="/cart" className="nav-link">
              <BsCart3 className="cart-icon"/>
            </NavLink>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;