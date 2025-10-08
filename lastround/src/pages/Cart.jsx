export default function Cart({ productCart }) {
  return (
    <div className="d-flex flex-column align-items-center mt-4">
      <h2>🛒 Carrito</h2>
      {productCart.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <ul className="list-unstyled text-center">
          {productCart.map((prod, index) => (
            <li key={index}>
              {prod.name} - {prod.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}