import { Card, Col } from "react-bootstrap";

const CardPelicula = ({nombre,genero,descripcion}) => {
    return (
        <Col xs={12} sm={12} md={6} lg={3}>
            <Card className="text-bg-dark rounded-4">
                    <Card.Header className="border-primary">
                        <Card.Title className="text-primary">Titulo: {nombre}</Card.Title>
                    </Card.Header>
                <Card.Body>
                    <Card.Subtitle className="py-3">Género: {genero}</Card.Subtitle>
                    <Card.Text className="border-top pt-3">{descripcion}</Card.Text>
                </Card.Body>
                
            </Card>
        </Col>

    );
};

export default CardPelicula;