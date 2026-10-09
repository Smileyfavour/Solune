"use client";

import { useCart } from "@/components/CartProvider";

const products = [
  {
    tag: "BESTSELLER",
    category: "NOURISH • BRIGHTEN",
    name: "The Daily Glow Serum",
    price: 38,
    size: "30 ML / 1.0 FL OZ",
    image: "/images/serum_wheat.jpg",
  },
  {
    category: "CLEANSE • RESET",
    name: "The Gentle Cleanser",
    price: 26,
    size: "150 ML / 5.0 FL OZ",
    image: "/images/serum_cream.jpg",
  },
  {
    tag: "SKIN FAVORITE",
    category: "HYDRATE • RESTORE",
    name: "The Everyday Cream",
    price: 34,
    size: "50 ML / 1.7 FL OZ",
    image: "/images/sunscreen.jpg",
  },
];

export default function ProductSection() {
  const { addToCart } = useCart();

  return (
    <section className="products-section" id="products">
      <div className="products-header">
        <div>
          <p className="eyebrow">THE EVERYDAY EDIT</p>

          <h2>
            A little care goes <span>a long way.</span>
          </h2>
        </div>

        <a href="/shop" className="products-link">
          SHOP OUR FAVORITES ↗
        </a>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.name}>
            <div className="product-image">
              {product.tag && (
                <span className="product-tag">
                  {product.tag}
                </span>
              )}

              <img
                src={product.image}
                alt={product.name}
              />

              <button
                className="quick-add"
                aria-label={`Add ${product.name} to cart`}
                onClick={() => addToCart(product)}
              >
                +
              </button>
            </div>

            <div className="product-info">
              <p className="product-category">
                {product.category}
              </p>

              <div className="product-name-row">
                <h3>{product.name}</h3>

                <span>
                  ${product.price}
                </span>
              </div>

              <p className="product-size">
                {product.size}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
