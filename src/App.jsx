import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import FormularioPeliculas from "./components/FormularioPeliculas";

function App() {
  return (
    <>
      <Container className="py-4">
        <h1 className="display-1 fw-bold">Ejercicio N°10</h1>
        <h2 className="display-2">Administrador de Películas</h2>
      </Container>
      <FormularioPeliculas></FormularioPeliculas>
      <Container fluid className="text-center text-bg-dark py-5 mt-5">
        <footer>
          <p>&copy; Todos los derechos reservados.</p>
        </footer>
      </Container>
    </>
  );
}

export default App;
