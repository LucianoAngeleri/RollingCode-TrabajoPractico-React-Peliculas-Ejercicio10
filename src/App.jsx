import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import FormularioPeliculas from "./components/FormularioPeliculas";
import CardPelicula from "./components/CardPelicula";

function App() {
  return (
    <>
      <Container className="py-4">
        <h1 className="display-1 fw-bold">Ejercicio N°10</h1>
        <h2 className="display-2">Administrador de Películas</h2>
      </Container>
      <Container className="py-4">
        <FormularioPeliculas></FormularioPeliculas>
      </Container>
      <Container className="py-4">
        <h2 className="display-2">Películas disponibles</h2>
        <hr />
        <Row className="g-3 ">
          <CardPelicula nombre="Pelicula" genero="Comedia" descripcion="Esta es la descripcion de la pelicula" ></CardPelicula>
          <CardPelicula nombre="Pelicula" genero="Comedia" descripcion="Esta es la descripcion de la pelicula" ></CardPelicula>
          <CardPelicula nombre="Pelicula" genero="Comedia" descripcion="Esta es la descripcion de la pelicula" ></CardPelicula>
          <CardPelicula nombre="Pelicula" genero="Comedia" descripcion="Esta es la descripcion de la pelicula" ></CardPelicula>
        </Row>
      </Container>
      <Container fluid className="text-center text-bg-dark py-5 mt-5">
        <footer>
          <p>&copy; Todos los derechos reservados.</p>
        </footer>
      </Container>
    </>
  );
}

export default App;
