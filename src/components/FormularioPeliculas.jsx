import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import CardPelicula from "./CardPelicula";

class Pelicula {
    constructor(nombre, descripcion, genero) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.genero = genero;
    }
}

const FormularioPeliculas = () => {
    const peliculasLocalStorage = JSON.parse(localStorage.getItem("listaPeliculas")) || []
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [genero, setGenero] = useState("");
    const [peliculas, setPeliculas] = useState(peliculasLocalStorage);
    const [nombreNoValido, setNombreNoValido] = useState(false);
    const [descripcionNoValida, setDescripcionNoValida] = useState(false);
    const [generoNoValido, setGeneroNoValido] = useState(false);

    useEffect(() => {
        localStorage.setItem("listaPeliculas",JSON.stringify(peliculas)); 
    }, [peliculas]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (nombre.trim().length < 2 || nombre.trim().length > 100) {
            setNombreNoValido(true);
            return;
        }
        if (descripcion.trim().length < 5 || descripcion.trim().length > 500) {
            setDescripcionNoValida(true);
            return;
        }
        if (genero !== "comedia" && genero !== "drama" && genero !== "infantil") {
            setGeneroNoValido(true);
            return;
        }

        const pelicula = new Pelicula(nombre, descripcion, genero);
        setPeliculas([...peliculas, pelicula]);
        setNombre("")
        setDescripcion("")
        setGenero("")
        setNombreNoValido(false);
        setDescripcionNoValida(false);
        setGeneroNoValido(false);

    };
    return (
        <>
            <Container className="py-4">
                <Row className="g-3 px-3 pb-5 px-md-5 rounded-5 border border-1 shadow-lg text-bg-dark">
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
                                    value={nombre} maxLength="100" minLength="2" required isInvalid={nombreNoValido} />
                                {nombreNoValido && (<Form.Control.Feedback type="invalid">La descripción debe tener al menos 2 caracteres y 100 caracteres como máximo.</Form.Control.Feedback>)}
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="inputDescripcion">
                                <Form.Label>Descripción de la Película</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Escriba una descripción sobre la película..." onChange={(e) => setDescripcion(e.target.value)}
                                    value={descripcion} maxLength="500" minLength="5" isInvalid={descripcionNoValida} required />
                                {descripcionNoValida && (<Form.Control.Feedback type="invalid">La descripción debe tener al menos 5 caracteres y 500 caractere como máximo.</Form.Control.Feedback>)}
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="inputGenero">
                                <Form.Label>Género de la Película</Form.Label>
                                <Form.Select onChange={(e) => setGenero(e.target.value)} value={genero} isInvalid={generoNoValido} required>
                                    <option defaultValue>Selecciona un género</option>
                                    <option value="comedia">Comedia</option>
                                    <option value="drama">Drama</option>
                                    <option value="infantil">Infantil</option>
                                </Form.Select>
                                {generoNoValido && (<Form.Control.Feedback type="invalid">Debe ingresar un género válido</Form.Control.Feedback>)}
                            </Form.Group>
                            <Col className="d-flex justify-content-center">
                                <Button variant="primary" type="submit" className="rounded-pill shadow py-2 px-3 py-md-3 px-md-4 fs-4">Guardar Película</Button>
                            </Col>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <Container className="py-4">
                <h3 className="display-3">Películas Disponibles</h3>
                <hr />
                <Row className="g-3">
                    {
                        peliculas.map((pelicula, index) => (
                            <CardPelicula nombre={pelicula.nombre} genero={pelicula.genero} descripcion={pelicula.descripcion} key={index}></CardPelicula>
                        ))
                    }
                </Row>
            </Container>
        </>
    );
};

export default FormularioPeliculas;