import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartModal from "./components/CartModal";
import "./App.css";

function App() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // Fetch products
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  // Add to cart
  const addToCart = (product) => {
    const exists = cart.find(item => item.id === product.id);
    if (exists) {
      alert("Item already added to the cart");
      return;
    }
    setCart([...cart, product]);
  };

  // Remove from cart
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div>
      <Navbar cartCount={cart.length} openCart={() => setShowCart(true)} />

      <ProductList
        products={products}
        addToCart={addToCart}
      />

      {showCart && (
        <CartModal
          cart={cart}
          closeCart={() => setShowCart(false)}
          removeFromCart={removeFromCart}
        />
      )}
    </div>
  );
}

export default App;