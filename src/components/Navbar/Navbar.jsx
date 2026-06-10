import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router";
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
          <Nav className="ms-auto">

            <NavLink to="/" className="nav-link">
              Home
            </NavLink>

            <NavLink to="/products" className="nav-link">
              Productos
            </NavLink>

            <NavLink to="/cart" className="nav-link">
              Carrito
            </NavLink>

            <NavLink to="/contact" className="nav-link">
              Contacto
            </NavLink>

            <NavLink to="/about" className="nav-link">
              Nosotros
            </NavLink>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;