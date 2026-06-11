import { useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router";
import Form from "react-bootstrap/Form"
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { Container, Row, Col, Card } from "react-bootstrap";
import { BsArrowLeft } from "react-icons/bs";
import "./CheckoutForm.css"

function CheckoutForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    calle: "",
    altura: "",
    ciudad: "",
    provincia: "",
    pais: "",
    codPostal: "",
    metodoEntrega: "",
    observaciones: "",
  });

  const [errors, setErrors] = useState({})

  const [showModal, setShowModal] = useState(false)

  const [totalCompra, setTotalCompra] = useState(0);

  const { cart, vaciarCarrito, calcularTotal } = useContext(CartContext)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errores = {};

    if (!formData.nombre.trim()) {
      errores.nombre = "El nombre es obligatorio";
    }

    if (!formData.apellido.trim()) {
      errores.apellido = "El apellido es obligatorio";
    }

    if (!formData.email.trim()) {
      errores.email = "El email es obligatorio";
    }

    if (!formData.telefono.trim()) {
      errores.telefono = "El teléfono es obligatorio";
    }

    if (!formData.calle.trim()) {
      errores.calle = "La calle es obligatoria";
    }

    if (!formData.metodoEntrega) {
      errores.metodoEntrega =
        "Seleccione un método de entrega";
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      formData.email &&
      !emailRegex.test(formData.email)
    ) {
      errores.email = "Email inválido";
    }

    if (
      cart.length === 0
    ) {
      errores.carrito = "El carrito esta vacio"
    }

    setErrors(errores);

    if (Object.keys(errores).length > 0) {
      return;
    }

    setTotalCompra(calcularTotal());

    setShowModal(true);

    vaciarCarrito();

    setFormData({
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
      calle: "",
      altura: "",
      ciudad: "",
      provincia: "",
      pais: "",
      codPostal: "",
      metodoEntrega: "",
      observaciones: "",
    });
  };

  return (

    <>
      <Container className="page-container custom-number-inputs">
        <Card className="checkout-card">
          <Card.Body>
            <Form noValidate onSubmit={handleSubmit}>
              <h5 className="mt-4 mb-3">
                Datos personales
              </h5>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      required
                      name="nombre"
                      type="text"
                      value={formData.nombre}
                      onChange={handleChange}
                      isInvalid={!!errors.nombre}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.nombre}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                      required
                      name="apellido"
                      type="text"
                      value={formData.apellido}
                      onChange={handleChange}
                      isInvalid={!!errors.apellido}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.apellido}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control
                      required
                      name="telefono"
                      type="tel"
                      value={formData.telefono}
                      onChange={handleChange}
                      isInvalid={!!errors.telefono}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.telefono}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      required
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={8}>
                  <Form.Group className="mb-3">
                    <Form.Label>Calle</Form.Label>
                    <Form.Control
                      required
                      name="calle"
                      type="text"
                      value={formData.calle}
                      onChange={handleChange}
                      isInvalid={!!errors.calle}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.calle}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>Altura</Form.Label>
                    <Form.Control
                      required
                      name="altura"
                      type="number"
                      value={formData.altura}
                      onChange={handleChange}
                      isInvalid={!!errors.altura}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.altura}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Control
                      required
                      name="ciudad"
                      type="text"
                      value={formData.ciudad}
                      onChange={handleChange}
                      isInvalid={!!errors.ciudad}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.ciudad}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Provincia</Form.Label>
                    <Form.Control
                      required
                      name="provincia"
                      type="text"
                      value={formData.provincia}
                      onChange={handleChange}
                      isInvalid={!!errors.provincia}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.provincia}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>País</Form.Label>
                    <Form.Control
                      required
                      name="pais"
                      type="text"
                      value={formData.pais}
                      onChange={handleChange}
                      isInvalid={!!errors.pais}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.pais}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Código Postal</Form.Label>
                    <Form.Control
                      required
                      name="codPostal"
                      type="number"
                      value={formData.codPostal}
                      onChange={handleChange}
                      isInvalid={!!errors.codPostal}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.codPostal}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <h5 className="mt-4 mb-3">
                Información de entrega
              </h5>

              <Form.Group className="mb-3">
                <Form.Label>Método de entrega</Form.Label>

                <Form.Select
                  name="metodoEntrega"
                  value={formData.metodoEntrega}
                  onChange={handleChange}
                  isInvalid={!!errors.metodoEntrega}
                >
                  <option value="">
                    Seleccione una opción
                  </option>

                  <option value="retiro">
                    Retirar en sucursal
                  </option>

                  <option value="normal">
                    Envío normal
                  </option>

                  <option value="prioritario">
                    Envío prioritario
                  </option>
                </Form.Select>

                <Form.Control.Feedback type="invalid">
                  {errors.metodoEntrega}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Observaciones</Form.Label>

                <Form.Control
                  as="textarea"
                  rows={4}
                  name="observaciones"
                  maxLength={500}
                  value={formData.observaciones}
                  onChange={handleChange}
                  placeholder="Aclaraciones para la entrega (opcional)"
                />

                <small className="text-muted">
                  {formData.observaciones.length}/500 caracteres
                </small>
              </Form.Group>

              {errors.carrito && (
                <Alert variant="danger">
                  {errors.carrito}
                </Alert>
              )}

              <Button
                variant="success"
                type="submit"
                className="btn btn-primary-custom w-100 mt-4"
              >
                Confirmar compra
              </Button>

              <Button
                as={Link}
                to="/cart"
                variant="link"
                className="back-cart-link w-100 mt-2"
              >
                <BsArrowLeft className="me-2" />
                Volver al carrito
              </Button>

            </Form>

            <Modal
              show={showModal}
              onHide={() => setShowModal(false)}
              centered
            >
              <Modal.Header
                closeButton
                style={{
                  backgroundColor: "var(--color-surface)",
                  borderColor: "var(--color-border)"
                }}
              >
                <Modal.Title className="page-title">
                  Compra realizada con éxito
                </Modal.Title>
              </Modal.Header>

              <Modal.Body
                style={{
                  backgroundColor: "var(--color-bg)",
                  color: "var(--color-text)"
                }}
              >
                <p>La orden de compra será enviada a tu email.</p>

                <h5>
                  Monto final:
                  {" "}
                  <span className="price">
                    ${totalCompra}
                  </span>
                </h5>
              </Modal.Body>

              <Modal.Footer
                style={{
                  backgroundColor: "var(--color-surface)",
                  borderColor: "var(--color-border)"
                }}
              >
                <Button
                  className="btn btn-primary-custom"
                  onClick={() => setShowModal(false)}
                  as={Link} to="/"
                >
                  Aceptar
                </Button>
              </Modal.Footer>
            </Modal>

          </Card.Body>
        </Card>
      </Container>
    </>
  )
}

export default CheckoutForm;