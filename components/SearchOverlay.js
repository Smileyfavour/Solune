"use client";

import { useState } from "react";
import { useCart } from "./CartProvider";

const products = [
  {
    name: "The Daily Glow Serum",
    category: "NOURISH • BRIGHTEN",
    price: 38,
    displayPrice: "$38",
    size: "30 ML / 1.0 FL OZ",
    image: "/images/serum_wheat.jpg",
  },
  {
    name: "The Gentle Cleanser",
    category: "CLEANSE • RESET",
    price: 26,
    displayPrice: "$26",
    size: "150 ML / 5.0 FL OZ",
    image: "/images/serum_cream.jpg",
  },
  {
    name: "The Everyday Cream",
    category: "HYDRATE • RESTORE",
    price: 34,
    displayPrice: "$34",
    size: "50 ML / 1.7 FL OZ",
    image: "/images/sunscreen.jpg",
  },
];

export default function SearchOverlay({ onClose }) {
  const [searchTerm, setSearchTerm] = useState("");
  const { addToCart } = useCart();

  const filteredProducts = products.filter((product) => {
    const search = searchTerm.toLowerCase().trim();

    if (!search) return true;

    return (
      product.name.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search)
    );
  });

  const handleAddToBag = (product) => {
    addToCart(product);
  };

  return (
    <div className="search-overlay">
      <div className="search-container">

        {/* Search Input */}
        <div className="search-input-area">
          <svg
            viewBox="0 0 24 24"
            width="23"
            height="23"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
          >
            <circle cx="11" cy="11" r="6.5" />
            <path d="m16 16 5 5" />
          </svg>

          <input
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="What are you looking for?"
            autoFocus
          />

          <button
            className="search-close"
            onClick={onClose}
            aria-label="Close search"
          >
            ✕
          </button>
        </div>

        {/* Suggestions */}
        <div className="search-suggestions">
          <p className="search-label">
            EXPLORE OUR ESSENTIALS
          </p>

          <div className="search-product-grid">
            {filteredProducts.map((product) => (
              <div
                className="search-product-card"
                key={product.name}
              >
                <img
                  src={product.image}
                  alt={product.name}
                />

                <div className="search-product-info">
                  <h3>{product.name}</h3>

                  <div className="search-product-action">
                    <span>{product.displayPrice}</span>

                    <button
                      onClick={() => handleAddToBag(product)}
                    >
                      Add to bag
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <p className="search-no-results">
              No products found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}