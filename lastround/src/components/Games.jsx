import { Card, Button, Row, Col } from "react-bootstrap";

export default function Games ({ product, addProductToCart }) {

    return (
        <Col md={3}>
            <Card className="mb-4 shadow-sm">
              <Card.Img variant="top" src={product.img} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>Precio: {product.price}</Card.Text>
                <Card.Text>Stock Disponible: {product.stock}</Card.Text>
                <Button variant="primary" onClick={() => addProductToCart(product)}>Agregar</Button>
              </Card.Body>
            </Card>
        </Col>
    )
}