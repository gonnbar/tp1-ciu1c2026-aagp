import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState({})

  const [showModal, setShowModal] = useState(false);

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

    if (!formData.email.trim()) {
      errores.email = "El email es obligatorio";
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      formData.email &&
      !emailRegex.test(formData.email)
    ) {
      errores.email = "Email inválido";
    }

    setErrors(errores);

    if (Object.keys(errores).length > 0) {
      return;
    }

    setShowModal(true);

    setFormData({
      nombre: "",
      email: "",
      mensaje: "",
    });
  };

  return (
    <>
      <Form noValidate onSubmit={handleSubmit} className="page-container">

        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>

          <Form.Control
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            isInvalid={!!errors.nombre}
          />

          <Form.Control.Feedback type="invalid">
            {errors.nombre}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>

          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
          />

          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Mensaje</Form.Label>

          <Form.Control
            as="textarea"
            rows={5}
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            isInvalid={!!errors.mensaje}
          />

          <Form.Control.Feedback type="invalid">
            {errors.mensaje}
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
        >
          Enviar
        </Button>
      </Form >

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Mensaje enviado
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Gracias por contactarnos.
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowModal(false)}
          >
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

    </>

  );
}

export default Contact;
