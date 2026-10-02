"use client";

import { useCart } from "./CartProvider";

export default function CartDrawer() {
  const {
    cartItems,
    cartOpen,
    setCartOpen,
    increaseQuantity,
    decreaseQuantity,
    cartCount,
    subtotal,
  } = useCart();

  if (!cartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="cart-backdrop"
        onClick={() => setCartOpen(false)}
      />

      {/* Cart Drawer */}
      <aside className="cart-drawer">

        {/* Header */}
        <div className="cart-header">
          <h2>
            Your bag <span>({cartCount})</span>
          </h2>

          <button
            className="cart-close"
            onClick={() => setCartOpen(false)}
            aria-label="Close cart"
          >
            ✕
          </button>
        </div>

        {/* Items */}
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <p>Your bag is empty.</p>

              <button
                onClick={() => setCartOpen(false)}
              >
                CONTINUE SHOPPING
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                className="cart-item"
                key={item.name}
              >
                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.name}
                />

                {/* Product Details */}
                <div className="cart-item-details">
                  <h3>{item.name}</h3>

                  <p>{item.size}</p>

                  {/* Line Item Total */}
                  <strong>
                    ${(item.price * item.quantity).toFixed(0)}
                  </strong>

                  {/* Quantity */}
                  <div className="quantity-selector">
                    <button
                      onClick={() =>
                        decreaseQuantity(item.name)
                      }
                      aria-label={`Decrease ${item.name} quantity`}
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        increaseQuantity(item.name)
                      }
                      aria-label={`Increase ${item.name} quantity`}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="cart-footer">

            {/* Subtotal */}
            <div className="cart-subtotal">
              <span>Subtotal</span>

              <strong>
                ${subtotal.toFixed(0)}
              </strong>
            </div>

            <p className="shipping-note">
              Shipping calculated at checkout
            </p>

            {/* Continue Shopping */}
            <button
              className="checkout-button"
              onClick={() => setCartOpen(false)}
            >
              CONTINUE SHOPPING
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
