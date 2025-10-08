import { Card, Button, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";

export default function Products({ addProductToCart }) {
  // Simulamos productos de ejemplo
  const products = [
    { id: 1, nombre: "Producto 1", img: "https://placehold.co/300x200", precio: "$100", stock: 5 },
    { id: 2, nombre: "Producto 2", img: "https://placehold.co/300x200", precio: "$200", stock: 5 },
    { id: 3, nombre: "Producto 3", img: "https://placehold.co/300x200", precio: "$300", stock: 5 },
    { id: 4, nombre: "Producto 4", img: "https://placehold.co/300x200", precio: "$400", stock: 5 },
  ];

/*   const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("mockAPI")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.items || data);
      })
      .catch((error) => console.error("Error al cargar productos:", error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando personajes...</p>; */

  return (
    <div className="mt-4">
      <h2 className="mb-4">Sección de Productos</h2>
      <Row>
        {products.map((prod) => (
          <Col key={prod.id} md={3}>
            <Card className="mb-4 shadow-sm">
              <Card.Img variant="top" src={prod.img} />
              <Card.Body>
                <Card.Title>{prod.nombre}</Card.Title>
                <Card.Text>Precio: {prod.precio}</Card.Text>
                <Card.Text>Stock Disponible: {prod.stock}</Card.Text>
                <Button variant="primary" onClick={() => addProductToCart(prod)}>Agregar</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}