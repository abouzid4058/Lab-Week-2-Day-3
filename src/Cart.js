import React from "react";

function Cart(props) {
  const { products } = props;

  // Only show items with qty >= 1
  const cartItems = products.filter((p) => p.qty >= 1);

  return (
    <div className="cart-container px-4 pt-4">
      <h5 className="mb-3">Your Cart Items</h5>

      <div className="cart-list">
        {cartItems.length === 0 ? (
          <p className="text-muted">Your cart is empty.</p>
        ) : (
          cartItems.map((product) => (
            <div
              key={product.id}
              className="cart-item d-flex align-items-center border-bottom py-3"
            >
              <img
                src={product.image}
                alt={product.desc}
                width="80"
                height="80"
                className="me-4"
                style={{ objectFit: "cover" }}
              />
              <div>
                <div className="fw-bold">{product.desc}</div>
                <div>Quantity: {product.qty}</div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Cart;
