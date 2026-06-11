import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router";
import { BsCart3, BsSearch } from 'react-icons/bs';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import logo from "../../assets/logo/logo.png";
import "./Navbar.css";

function NavBar() {
  const { calcularCantidadTotal } = useContext(CartContext);

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

            <NavLink to="/products" className="nav-link">
              Productos
            </NavLink>

            <NavLink to="/contact" className="nav-link">
              Contacto
            </NavLink>

            <NavLink to="/cart" className="nav-link cart-link">
              <BsCart3 className="cart-icon" />
              {calcularCantidadTotal() > 0 && (
                <span className="cart-badge">
                  {calcularCantidadTotal()}
                </span>
              )}
            </NavLink>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;