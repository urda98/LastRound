import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Cart() {
  const {cart, removeProductFromCart, clearCart} = useContext(CartContext);

  return (
    <div className="d-flex flex-column align-items-center mt-4">
      <h2>🛒 Carrito</h2>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <ul className="list-unstyled text-center">
          {cart.map((prod, index) => (
            <li key={index}>
              {prod.name} - {prod.price}
              <Button variant="danger" size="sm" className="ms-2" onClick={() => removeProductFromCart(prod)}>
                <FontAwesomeIcon icon={faTrash} size="lg" />
              </Button>
            </li>
          ))}
        </ul>
      )}
      <Button variant="secondary" onClick={() => clearCart()}>Vaciar carrito</Button>  
    </div>
  );
}