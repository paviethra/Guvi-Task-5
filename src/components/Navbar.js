const Navbar = ({ cartCount, openCart }) => {
  return (
    <header className="navbar">
      {/* Left - Logo */}
      <div className="nav-left">
        <span className="logo">FakeStore</span>
      </div>

      {/* Center - Menu */}
      <nav className="nav-center">
        <a href="#home">Home</a>
        <a href="#products">Products</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Right - Search + Cart */}
      <div className="nav-right">
        <input
          type="text"
          className="search-input"
          placeholder="Search products..."
        />

        <button className="cart-btn" onClick={openCart}>
          🛒
          <span className="cart-badge">{cartCount}</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;