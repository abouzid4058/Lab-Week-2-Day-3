import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import DisplayProducts from "./displayProducts";
import Cart from "./Cart";

function Navbar(props) {
  const { products, handleAdd, handleSubtract } = props;

  // Total quantity across all products
  const totalQty = products.reduce((sum, p) => sum + p.qty, 0);

  return (
    <Router>
      <div>
        {/* Top Navigation Bar */}
        <nav className="shop-navbar d-flex align-items-center justify-content-between px-4">
          {/* Logo / Home link */}
          <Link to="/" className="navbar-logo text-white text-decoration-none">
            Shop 2 <span className="logo-r">R</span>eact
          </Link>

          {/* Cart icon + total count */}
          <Link to="/cart" className="cart-link text-white text-decoration-none d-flex align-items-center">
            <FontAwesomeIcon icon={faShoppingCart} className="me-2" />
            <span>{totalQty} items</span>
          </Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <DisplayProducts
                products={products}
                handleAdd={handleAdd}
                handleSubtract={handleSubtract}
              />
            }
          />
          <Route
            path="/cart"
            element={<Cart products={products} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default Navbar;
