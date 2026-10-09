"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/components/CartProvider";
import "./checkout.css";

export default function CheckoutPage() {
const { cartItems, subtotal } = useCart();

const [delivery, setDelivery] = useState("standard");
const [payment, setPayment] = useState("card");
const [promo, setPromo] = useState("");
const [message, setMessage] = useState("");

const [form, setForm] = useState({
email: "",
phone: "",
firstName: "",
lastName: "",
address: "",
apartment: "",
city: "",
state: "",
postalCode: "",
country: "Nigeria",
});

const shipping =
cartItems.length === 0
? 0
: delivery === "express"
? 10
: 5;

const total = subtotal + shipping;

const handleChange = (event) => {
const { name, value } = event.target;

setForm((currentForm) => ({
  ...currentForm,
  [name]: value,
}));

};

const handleSubmit = (event) => {
event.preventDefault();

```
if (cartItems.length === 0) {
  setMessage("Your bag is empty. Add a product before checking out.");
  return;
}

setMessage(
  "Your details have been received. Connect a payment provider to complete your order securely."
);
```

};

return (
<> <Navbar />

```
  <main className="checkout">
    <div className="checkout-topline">
      <p className="checkout-secure">
        <span aria-hidden="true">♧</span>
        SECURE CHECKOUT
      </p>
    </div>

    <div className="checkout-heading">
      <p className="checkout-eyebrow">YOUR SOLUNE RITUAL</p>
      <h1>Almost yours.</h1>
      <p className="checkout-intro">
        A little care, on its way to you.
      </p>
    </div>

    {cartItems.length === 0 ? (
      <section className="checkout-empty">
        <h2>Your bag is waiting.</h2>
        <p>
          You haven&apos;t added anything to your bag yet.
          Your next skincare ritual starts here.
        </p>
        <Link href="/#products" className="checkout-empty-button">
          EXPLORE OUR PRODUCTS
        </Link>
      </section>
    ) : (
      <form className="checkout-layout" onSubmit={handleSubmit}>
        <div className="checkout-form-column">
          <section className="checkout-section">
            <div className="checkout-section-heading">
              <span>01</span>
              <h2>Contact information</h2>
            </div>

            <label className="checkout-label" htmlFor="email">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />

            <label className="checkout-label" htmlFor="phone">
              Phone number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+234"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </section>

          <section className="checkout-section">
            <div className="checkout-section-heading">
              <span>02</span>
              <h2>Delivery details</h2>
            </div>

            <div className="checkout-two-column">
              <div>
                <label
                  className="checkout-label"
                  htmlFor="firstName"
                >
                  First name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label
                  className="checkout-label"
                  htmlFor="lastName"
                >
                  Last name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <label className="checkout-label" htmlFor="address">
              Street address
            </label>
            <input
              id="address"
              name="address"
              type="text"
              autoComplete="street-address"
              placeholder="House number and street name"
              value={form.address}
              onChange={handleChange}
              required
            />

            <label className="checkout-label" htmlFor="apartment">
              Apartment, suite, etc. (optional)
            </label>
            <input
              id="apartment"
              name="apartment"
              type="text"
              autoComplete="address-line2"
              value={form.apartment}
              onChange={handleChange}
            />

            <div className="checkout-two-column">
              <div>
                <label className="checkout-label" htmlFor="city">
                  City
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  autoComplete="address-level2"
                  value={form.city}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="checkout-label" htmlFor="state">
                  State
                </label>
                <input
                  id="state"
                  name="state"
                  type="text"
                  autoComplete="address-level1"
                  value={form.state}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="checkout-two-column">
              <div>
                <label
                  className="checkout-label"
                  htmlFor="postalCode"
                >
                  Postal code
                </label>
                <input
                  id="postalCode"
                  name="postalCode"
                  type="text"
                  autoComplete="postal-code"
                  value={form.postalCode}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="checkout-label" htmlFor="country">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  value={form.country}
                  onChange={handleChange}
                  required
                >
                  <option value="Nigeria">Nigeria</option>
                  <option value="Ghana">Ghana</option>
                  <option value="United Kingdom">
                    United Kingdom
                  </option>
                  <option value="United States">
                    United States
                  </option>
                  <option value="Canada">Canada</option>
                  <option value="South Africa">South Africa</option>
                </select>
              </div>
            </div>
          </section>

          <section className="checkout-section">
            <div className="checkout-section-heading">
              <span>03</span>
              <h2>Delivery method</h2>
            </div>

            <label className="checkout-option">
              <input
                type="radio"
                name="delivery"
                value="standard"
                checked={delivery === "standard"}
                onChange={(event) => setDelivery(event.target.value)}
              />
              <span className="checkout-option-content">
                <strong>Standard delivery</strong>
                <small>Estimated delivery in 3–7 business days</small>
              </span>
              <span className="checkout-option-price">$5.00</span>
            </label>

            <label className="checkout-option">
              <input
                type="radio"
                name="delivery"
                value="express"
                checked={delivery === "express"}
                onChange={(event) => setDelivery(event.target.value)}
              />
              <span className="checkout-option-content">
                <strong>Express delivery</strong>
                <small>Estimated delivery in 1–3 business days</small>
              </span>
              <span className="checkout-option-price">$10.00</span>
            </label>
          </section>

          <section className="checkout-section">
            <div className="checkout-section-heading">
              <span>04</span>
              <h2>Payment method</h2>
            </div>

            <label className="checkout-option">
              <input
                type="radio"
                name="payment"
                value="card"
                checked={payment === "card"}
                onChange={(event) => setPayment(event.target.value)}
              />
              <span className="checkout-option-content">
                <strong>Credit or debit card</strong>
                <small>Pay securely by card</small>
              </span>
            </label>

            <label className="checkout-option">
              <input
                type="radio"
                name="payment"
                value="transfer"
                checked={payment === "transfer"}
                onChange={(event) => setPayment(event.target.value)}
              />
              <span className="checkout-option-content">
                <strong>Bank transfer</strong>
                <small>Payment instructions can be provided at checkout</small>
              </span>
            </label>

            <p className="checkout-payment-note">
              Payment processing has not been connected yet.
              Your order will not be charged by submitting this form.
            </p>
          </section>
        </div>

        <aside className="checkout-summary">
          <div className="checkout-summary-heading">
            <h2>Your order</h2>
            <span>{cartItems.reduce(
              (count, item) => count + item.quantity,
              0
            )} items</span>
          </div>

          <div className="checkout-summary-items">
            {cartItems.map((item) => (
              <div
                className="checkout-summary-item"
                key={item.name}
              >
                <div className="checkout-summary-image">
                  <img src={item.image} alt={item.name} />
                  <span>{item.quantity}</span>
                </div>

                <div className="checkout-summary-product">
                  <h3>{item.name}</h3>
                  {item.size && <p>{item.size}</p>}
                </div>

                <p className="checkout-summary-price">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <div className="checkout-promo">
            <label className="checkout-label" htmlFor="promo">
              Promo code
            </label>
            <div className="checkout-promo-row">
              <input
                id="promo"
                type="text"
                placeholder="Enter code"
                value={promo}
                onChange={(event) => setPromo(event.target.value)}
              />
              <button
                type="button"
                onClick={() =>
                  setMessage(
                    "Promo code discounts are not available yet."
                  )
                }
              >
                APPLY
              </button>
            </div>
          </div>

          <div className="checkout-totals">
            <div>
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div>
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>

            <div className="checkout-total">
              <strong>Total</strong>
              <strong>${total.toFixed(2)}</strong>
            </div>
          </div>

          {message && (
            <p className="checkout-message" role="status">
              {message}
            </p>
          )}

          <button className="checkout-submit" type="submit">
            CONTINUE TO PAYMENT <span aria-hidden="true">→</span>
          </button>

          <p className="checkout-terms">
            By continuing, you agree to our{" "}
            <Link href="/terms">Terms of Service</Link> and{" "}
            <Link href="/privacy-policy">Privacy Policy</Link>.
          </p>

          <p className="checkout-summary-note">
            <span aria-hidden="true">♡</span>
            Thoughtfully made for your everyday ritual.
          </p>
        </aside>
      </form>
    )}
  </main>

  <Footer />
</>
);
}
