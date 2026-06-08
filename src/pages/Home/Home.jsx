import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router";
import { BsBook, BsTruck, BsAward } from "react-icons/bs";
import { FaBookOpen } from "react-icons/fa";
import banner from "../../assets/img/banner-home.png";
import cat1 from "../../assets/img/cat1.jpg";
import cat2 from "../../assets/img/cat2.jpg";
import cat3 from "../../assets/img/cat3.jpg";
import d1 from "../../assets/img/rayuela-cortazar.jpg";
import d2 from "../../assets/img/1984-g-orwell.jpg";
import d3 from "../../assets/img/principeCruel.jpg";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <section className="banner-section">
        <img
          src={banner}
          alt="Cada libro es una nueva aventura"
          className="home-banner"
        />
      </section>

      <Container className="home-container">

        <section className="hero">

          <p className="hero-description">
            Bienvenido a Tinta&Papel, un espacio para descubrir historias,
            autores y nuevas aventuras.
          </p>

          <Button
            className="btn btn-primary-custom"
            onClick={() => navigate("/products")}
          >
            Explorar catálogo
          </Button>

        </section>

        <div className="section-title-wrapper">
          <h2>¿Por qué elegirnos?</h2>
          <hr className="title-divider" />
        </div>

        <section className="home-features">

          <div className="feature-card custom-card">
            <div className="icon-circle"><BsBook /></div>
            <h3>Amplio catálogo</h3>
            <p>
              Encontrá clásicos, novelas, ficción y mucho más.
            </p>
          </div>

          <div className="feature-card custom-card">
            <div className="icon-circle"><BsTruck /></div>
            <h3>Envíos rápidos</h3>
            <p>
              Recibí tus libros en la comodidad de tu hogar.
            </p>
          </div>

          <div className="feature-card custom-card">
            <div className="icon-circle"><BsAward /></div>
            <h3>Calidad garantizada</h3>
            <p>
              Seleccionamos cada libro pensando en vos.
            </p>
          </div>

        </section>

        <section className="home-categories">

          <div className="section-title-wrapper">
            <h2>Categorías destacadas</h2>
            <hr className="title-divider" />
          </div>

          <div className="categories-grid">

            <div className="custom-card category-card" style={{ backgroundImage: `url(${cat1})` }}
            onClick={() => navigate("/products")}>
              
              <div className="category-overlay">
                <h4>Novelas</h4>
                <p className="category-desc">Nuevos mundos te esperan.</p>
              </div>

            </div>

            <div className="custom-card category-card" style={{ backgroundImage: `url(${cat2})` }}
            onClick={() => navigate("/products")}>
              
              <div className="category-overlay">
                <h4>Ficción</h4>
                <p className="category-desc">Imaginación sin límites.</p>
              </div>

            </div>

            <div className="custom-card category-card" style={{ backgroundImage: `url(${cat3})` }} 
            onClick={() => navigate("/products")}>
              
              <div className="category-overlay">
                <h4>Clásicos</h4>
                <p className="category-desc">Lecturas que no pasan de moda.</p>
              </div>
              
            </div>

          </div>

        </section>

        <section className="featured-books">

          <div className="section-title-wrapper">
            <h2>Los más vendidos</h2>
            <hr className="title-divider" />
          </div>

          <div className="featured-grid">

            <div className="custom-card featured-book">
              <img src={d1} alt="El Principito" />
              <div className="featured-content">
                <h4>Rayuela</h4>
                <p className="price">$18.500</p>
                <Button
                  className="btn btn-primary-custom"
                  onClick={() => navigate("/products")}
                >
                  Ver detalle
                </Button>
              </div>
            </div>

            <div className="custom-card featured-book">
              <img src={d2} alt="1984" />
              <div className="featured-content">
                <h4>1984</h4>
                <p className="price">$22.000</p>
                <Button
                  className="btn btn-primary-custom"
                  onClick={() => navigate("/products")}
                >
                  Ver detalle
                </Button>
              </div>
            </div>

            <div className="custom-card featured-book">
              <img src={d3} alt="Orgullo y Prejuicio" />
              <div className="featured-content">
                <h4>Príncipe cruel</h4>
                <p className="price">$19.900</p>
                <Button
                  className="btn btn-primary-custom"
                  onClick={() => navigate("/products")}
                >
                  Ver detalle
                </Button>
              </div>
            </div>

          </div>

        </section>

        <section className="home-cta custom-card cta-flex">

          <div className="cta-left-icon">
            <FaBookOpen className="cta-icon" />
          </div>

          <div className="cta-center-text">
            <h2>Encontrá tu próxima lectura</h2>
            <p>Miles de historias te están esperando.</p>
          </div>

          <div className="cta-right-btn">
            <Button
              className="btn btn-primary-custom"
              onClick={() => navigate("/products")}
            >
              Ir al catálogo
            </Button>
          </div>
        </section>

      </Container>
    </>
  );
}

export default Home;
