import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import FormularioPeliculas from "./components/FormularioPeliculas";

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
