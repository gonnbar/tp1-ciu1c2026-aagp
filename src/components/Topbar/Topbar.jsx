import { Container } from "react-bootstrap";
import { BsTruck, BsCreditCard, BsBook } from "react-icons/bs";
import "./Topbar.css";

function Topbar() {
  return (
    <div className="top-bar">

      <Container>

        <div className="top-bar-content">
          <span>
            <BsBook />
            Envíos a todo el país
          </span>

          <span>
            <BsTruck />
            Gratis desde $50.000
          </span>

          <span>
            <BsCreditCard />
            3 cuotas sin interés
          </span>
        </div>

      </Container>

    </div>
  );
}

export default Topbar;