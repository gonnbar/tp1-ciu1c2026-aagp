import { Link } from "react-router";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";
import logo from "../../assets/logo/logo.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="custom-footer">

        <div className="footer-container">

          <div className="footer-section">

            <div className="footer-brand">
              <img
                src={logo}
                alt="Tinta&Papel"
                className="footer-logo"
              />
            </div>

            <small>
              © {new Date().getFullYear()} - Todos los derechos reservados
            </small>

          </div>

          <div className="footer-section">

            <div className="social-icons">
              <a href="https://instagram.com/tintaypapel" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>

              <a href="https://facebook.com/tintaypapel" target="_blank" rel="noreferrer">
                <FaFacebook />
              </a>

              <a href="https://wa.me/5491112345678" target="_blank" rel="noreferrer">
                <FaWhatsapp />
              </a>
            </div>

            <button className="btn btn-primary-custom refund-btn">
              Botón de arrepentimiento
            </button>

          </div>

        </div>

    </footer>  
  );
}

export default Footer;