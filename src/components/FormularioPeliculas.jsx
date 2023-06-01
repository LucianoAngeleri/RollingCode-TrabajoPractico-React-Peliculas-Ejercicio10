import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

class Pelicula{
  constructor(nombre, descripcion, genero) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.genero = genero;
  }
}

const FormularioPeliculas = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [genero, setGenero] = useState("");
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    console.log(peliculas);
  }, [peliculas]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const pelicula = new Pelicula(nombre, descripcion, genero);
    setPeliculas([...peliculas, pelicula]);
    setNombre("")
    setDescripcion("")
    setGenero("")
  };
  return (
    <Row className="g-3 px-3 pb-5 px-md-5 rounded-5 border border-1 shadow-lg text-bg-secondary">
      <Col>
      <h3 className="display-3">Cargar una Película</h3>
      <hr />
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-4" controlId="inputNombre">
            <Form.Label>Nombre de Película</Form.Label>
            <Form.Control
              type="text"
              placeholder="Escribe el nombre de la película..."
              onChange={(e) => setNombre(e.target.value)}
              value={nombre}></Form.Control>
          </Form.Group>
          <Form.Group className="mb-4" controlId="inputDescripcion">
                <Form.Label>Descripción de la Película</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Escriba una descripción sobre la película..." onChange={(e) => setDescripcion(e.target.value)}
              value={descripcion}/>
            </Form.Group>
          <Form.Group className="mb-4" controlId="inputGenero">
            <Form.Label>Género de la Película</Form.Label>
            <Form.Select onChange={(e) => setGenero(e.target.value)} value={genero}>
                <option>Selecciona un género</option>
                <option value="accion">Acción</option>
                <option value="drama">Drama</option>
                <option value="aventura">Aventura</option>
                <option value="terror">Terror</option>
                <option value="ciencia ficcion">Ciencia Ficción</option>
            </Form.Select>
          </Form.Group>
          <Col className="d-flex justify-content-center">
            <Button variant="primary" type="submit" className="rounded-pill shadow py-2 px-3 py-md-3 px-md-4 fs-4">Guardar Película</Button>
          </Col>
        </Form>
      </Col>
    </Row>
  );
};

export default FormularioPeliculas;