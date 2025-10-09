import { Row } from "react-bootstrap";
import Games from '../components/Games';
import { useEffect, useState } from "react";

export default function Products({ addProductToCart }) {
  // Simulamos productos de ejemplo
/*   const products = [
    { id: 1, name: "Producto 1", img: "https://placehold.co/300x200", price: "$100", stock: 5 },
    { id: 2, name: "Producto 2", img: "https://placehold.co/300x200", price: "$200", stock: 5 },
    { id: 3, name: "Producto 3", img: "https://placehold.co/300x200", price: "$300", stock: 5 },
    { id: 4, name: "Producto 4", img: "https://placehold.co/300x200", price: "$400", stock: 5 },
  ]; */

  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://68e6a13110e3f82fbf3cc2ce.mockapi.io/Juego")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
                      console.log(data);
      })
      .catch((error) => console.error("Error al cargar productos:", error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando productos...</p>;

  return (
    <div className="mt-4">
      <h2 className="mb-4">Sección de Productos</h2>
      <Row>
        {products.map((prod) => (
          <Games key={prod.id} product={prod} addProductToCart={addProductToCart}/>
        ))}
      </Row>
    </div>
  );
}