import { Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router";
import { BsArrowRight } from "react-icons/bs";
import banner from "../../assets/img/banner.jpg";
import about from "../../assets/img/about.jpg";
import cat1 from "../../assets/img/cat1.jpg";
import cat2 from "../../assets/img/cat2.jpg";
import cat3 from "../../assets/img/cat3.jpg";
import cat4 from "../../assets/img/cat4.jpg";
import d1 from "../../assets/img/rayuela-cortazar.jpg";
import d2 from "../../assets/img/1984-g-orwell.jpg";
import d3 from "../../assets/img/principeCruel.jpg";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  const navegarCategoria = (categoria) => {
    navigate(`/products?category=${categoria}`)
  }

  return (
    <>
      <section
        className="hero-banner"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="hero-overlay">

          <Container>

            <div className="hero-content">
              <h1>Descubrí tu próxima lectura</h1>
              <Button
                className="btn btn-primary-custom hero-btn"
                onClick={() => navigate("/products")}
              >
                Explorar catálogo
                <BsArrowRight />
              </Button>
            </div>

          </Container>

        </div>
      </section>

      <section className="home-categories">

        <Container>

          <div className="section-title-wrapper">
            <h2>Categorías destacadas</h2>
            <hr className="title-divider" />
          </div>

          <div className="categories-grid">

            <div
              className="category-card"
              style={{ backgroundImage: `url(${cat1})` }} onClick={()=> navegarCategoria("Romance")}
            >
              <div className="category-overlay">
                <h4>Romance</h4>
              </div>
            </div>

            <div
              className="category-card"
              style={{ backgroundImage: `url(${cat2})` }} onClick={()=> navegarCategoria("Thriller")}
            >
              <div className="category-overlay">
                <h4>Ficción</h4>
              </div>
            </div>

            <div
              className="category-card"
              style={{ backgroundImage: `url(${cat3})` }} onClick={()=> navegarCategoria("Novela")}
            >
              <div className="category-overlay">
                <h4>Clásicos</h4>
              </div>
            </div>

            <div
              className="category-card"
              style={{ backgroundImage: `url(${cat4})` }} onClick={()=> navegarCategoria("Fantasia")}
            >
              <div className="category-overlay">
                <h4>Fantasía</h4>
              </div>
            </div>

          </div>

        </Container>

      </section>

      <section className="featured-books">

        <Container>

          <div className="section-title-wrapper">
            <h2>Los más vendidos</h2>
            <hr className="title-divider" />
          </div>

          <div className="featured-placeholder">

            {/* reemplazar por ProductCards */}

            <div className="book-placeholder custom-card">
              Libro destacado
            </div>

            <div className="book-placeholder custom-card">
              Libro destacado
            </div>

            <div className="book-placeholder custom-card">
              Libro destacado
            </div>

            <div className="book-placeholder custom-card">
              Libro destacado
            </div>

          </div>

        </Container>

      </section>

      <section className="about-section">

        <Container>

          <Row className="align-items-center">

            <Col lg={6}>
              <div className="about-text">
                <h2>Más que una librería</h2>
                <p>
                  Tinta & Papel nació con la idea de acercar grandes historias a nuevos lectores. Desde clásicos inolvidables hasta las últimas novedades, seleccionamos libros para quienes disfrutan descubrir nuevos mundos, aprender algo diferente o simplemente encontrar un momento para desconectarse y gozar de una buena lectura.
                </p>
              </div>
            </Col>

            <Col lg={6}>
              <img
                src={about}
                alt="Libros"
                className="about-image"
              />
            </Col>

          </Row>

        </Container>

      </section>

      <section className="home-cta">

        <Container>

          <h2>¿Listo para encontrar tu próxima lectura?</h2>
          <p>Miles de historias te están esperando.</p>
          <Button
            className="btn btn-primary-custom"
            onClick={() => navigate("/products")}
          >
            Ver catálogo
          </Button>

        </Container>

      </section>
    </>
  );
}

export default Home;