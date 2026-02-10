const CartModal = ({ cart, closeCart, removeFromCart }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Cart Items ({cart.length})</h3>

        {cart.length === 0 && <p>No items in cart</p>}

        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} />
            <div>
              <p>{item.title}</p>
              <p>₹ {item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>
                Remove from Cart
              </button>
            </div>
          </div>
        ))}

        <button className="close-btn" onClick={closeCart}>
          Close
        </button>
      </div>
    </div>
  );
};

export default CartModal;