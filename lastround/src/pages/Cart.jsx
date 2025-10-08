export default function Cart({ productCart }) {
  return (
    <div>
      <h2>🛒 Carrito</h2>
      {productCart.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <ul>
          {productCart.map((prod, index) => (
            <li key={index}>
              {prod.nombre} - {prod.precio}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}