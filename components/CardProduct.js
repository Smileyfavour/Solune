"use client";

import { useCart } from "./CartProvider";

export default function ProductCard({
  image,
  tag,
  category,
  name,
  price,
  details,
}) {
  const { addToCart } = useCart();

  const product = {
    image,
    tag,
    category,
    name,
    price: Number(price),
    size: details,
  };

  return (
    <article className="product-card">
      <div className="product-image">
        {tag && <span className="product-tag">{tag}</span>}

        <img src={image} alt={name} />

        <button
          className="quick-add"
          aria-label={`Add ${name} to cart`}
          onClick={() => addToCart(product)}
        >
          +
        </button>
      </div>

      <div className="product-info">
        <p className="product-category">{category}</p>

        <h3>{name}</h3>

        <div className="product-meta">
          <span>${price}</span>
          <span>{details}</span>
        </div>
      </div>
    </article>
  );
}