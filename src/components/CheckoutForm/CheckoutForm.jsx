import { useState } from "react";

import Form from "react-bootstrap/Form"

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";


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
      errores.nombre = "El apellido es obligatorio";
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

    setErrors(errores);

    if (Object.keys(errores).length > 0) {
      return;
    }

    setShowModal(true);
  };

  return (

    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label> Nombre </Form.Label>
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
        <Form.Group>
          <Form.Label> Apellido </Form.Label>
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
        <Form.Group>
          <Form.Label> Telefono </Form.Label>
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
        <Form.Group>
          <Form.Label> E-Mail</Form.Label>
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

        <Form.Group>
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
        <Form.Group>
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
        <Form.Group>
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
        <Form.Group>
          <Form.Label>Provincia/Estado</Form.Label>
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
        <Form.Group>
          <Form.Label>Pais</Form.Label>
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
        <Form.Group>
          <Form.Label>Codigo Postal</Form.Label>
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


        <Form.Group>
          <Form.Label>Metodo de entrega</Form.Label>

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

        <Form.Group>
          <Form.Label> Observaciones </Form.Label>
          <Form.Control
            name="observaciones"
            as="textarea"
            maxLength={500}
            value={formData.observaciones}
            onChange={handleChange}
          />
        </Form.Group>

        <Button
          variant="success"
          type="submit"
        >
          Finalizar compra
        </Button>

      </Form>

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Compra realizada
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Gracias por su compra.
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
  )
}


export default CheckoutForm;
