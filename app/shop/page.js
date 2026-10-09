"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/components/CartProvider";

const products = [
  {
    id: 1,
    name: "The Daily Glow Serum",
    category: "Serums",
    type: "NOURISH • BRIGHTEN",
    price: 38,
    size: "30 ML / 1.0 FL OZ",
    tag: "BESTSELLER",
    image: "/images/serum_wheat.jpg",
  },
  {
    id: 2,
    name: "The Gentle Cleanser",
    category: "Cleansers",
    type: "CLEANSE • RESET",
    price: 26,
    size: "150 ML / 5.0 FL OZ",
    image: "/images/serum_cream.jpg",
  },
  {
    id: 3,
    name: "The Everyday Cream",
    category: "Moisturizers",
    type: "HYDRATE • RESTORE",
    price: 34,
    size: "50 ML / 1.7 FL OZ",
    tag: "SKIN FAVORITE",
    image: "/images/sunscreen.jpg",
  },
  {
    id: 4,
    name: "Dew Drop Moisturizer",
    category: "Moisturizers",
    type: "HYDRATE • PLUMP",
    price: 36,
    size: "50 ML / 1.7 FL OZ",
    image: "/images/serum_bb.jpg",
  },
  {
    id: 5,
    name: "Soft Reset Face Wash",
    category: "Cleansers",
    type: "CLEANSE • SOOTHE",
    price: 24,
    size: "150 ML / 5.0 FL OZ",
    image: "/images/soft_reset_wash.jpg",
  },
  {
    id: 6,
    name: "Morning Light Vitamin C",
    category: "Serums",
    type: "BRIGHTEN • PROTECT",
    price: 42,
    size: "30 ML / 1.0 FL OZ",
    tag: "NEW",
    image: "/images/morning_light_vitamin_c.jpg",
  },
  {
    id: 7,
    name: "Calm Skin Barrier Serum",
    category: "Serums",
    type: "CALM • REPAIR",
    price: 40,
    size: "30 ML / 1.0 FL OZ",
    image: "/images/calm_skin_barrier_serum.jpg",
  },
  {
    id: 8,
    name: "Cloud Cream Moisturizer",
    category: "Moisturizers",
    type: "SOFTEN • HYDRATE",
    price: 35,
    size: "50 ML / 1.7 FL OZ",
    image: "/images/cloud_cream.jpg",
  },
  {
    id: 9,
    name: "Daily Defense SPF 50",
    category: "Sunscreen",
    type: "PROTECT • HYDRATE",
    price: 32,
    size: "50 ML / 1.7 FL OZ",
    tag: "EVERYDAY",
    image: "/images/Daily_defense.jpg",
  },
  {
    id: 10,
    name: "Sun Veil SPF 30",
    category: "Sunscreen",
    type: "PROTECT • GLOW",
    price: 29,
    size: "50 ML / 1.7 FL OZ",
    image: "/images/sun_veil.jpg",
  },
  {
    id: 11,
    name: "Velvet Cleansing Balm",
    category: "Cleansers",
    type: "MELT • CLEANSE",
    price: 31,
    size: "80 G / 2.8 OZ",
    image: "/images/velvet_cleansing.jpg",
  },
  {
    id: 12,
    name: "Milk Cloud Cleanser",
    category: "Cleansers",
    type: "CLEANSE • NOURISH",
    price: 28,
    size: "150 ML / 5.0 FL OZ",
    image: "/images/serum_cream.jpg",
  },
  {
    id: 13,
    name: "Rose Water Essence",
    category: "Toners",
    type: "REFRESH • BALANCE",
    price: 25,
    size: "120 ML / 4.0 FL OZ",
    image: "/images/serum_wheat.jpg",
  },
  {
    id: 14,
    name: "The Balancing Toner",
    category: "Toners",
    type: "BALANCE • REFINE",
    price: 27,
    size: "150 ML / 5.0 FL OZ",
    image: "/images/serum_wheat.jpg",
  },
  {
    id: 15,
    name: "Midnight Recovery Oil",
    category: "Face Oils",
    type: "RESTORE • NOURISH",
    price: 44,
    size: "30 ML / 1.0 FL OZ",
    tag: "NIGHT RITUAL",
    image: "/images/serum_wheat.jpg",
  },
  {
    id: 16,
    name: "Golden Glow Face Oil",
    category: "Face Oils",
    type: "GLOW • NOURISH",
    price: 41,
    size: "30 ML / 1.0 FL OZ",
    image: "/images/serum_wheat.jpg",
  },
  {
    id: 17,
    name: "Overnight Renewal Cream",
    category: "Creams",
    type: "RENEW • RESTORE",
    price: 39,
    size: "50 ML / 1.7 FL OZ",
    image: "/images/sunscreen.jpg",
  },
  {
    id: 18,
    name: "Rich Recovery Cream",
    category: "Creams",
    type: "NOURISH • REPAIR",
    price: 43,
    size: "50 ML / 1.7 FL OZ",
    image: "/images/sunscreen.jpg",
  },
  {
    id: 19,
    name: "Bare Skin Gel Cream",
    category: "Creams",
    type: "LIGHTWEIGHT • HYDRATE",
    price: 33,
    size: "50 ML / 1.7 FL OZ",
    image: "/images/sunscreen.jpg",
  },
  {
    id: 20,
    name: "Sunday Reset Mask",
    category: "Masks",
    type: "RESET • SOOTHE",
    price: 30,
    size: "75 ML / 2.5 FL OZ",
    tag: "WEEKEND RITUAL",
    image: "/images/serum_cream.jpg",
  },
  {
    id: 21,
    name: "Overnight Water Mask",
    category: "Masks",
    type: "HYDRATE • RESTORE",
    price: 34,
    size: "75 ML / 2.5 FL OZ",
    image: "/images/serum_cream.jpg",
  },
  {
    id: 22,
    name: "Bright Eyes Eye Cream",
    category: "Eye Care",
    type: "BRIGHTEN • SMOOTH",
    price: 37,
    size: "15 ML / 0.5 FL OZ",
    image: "/images/sunscreen.jpg",
  },
  {
    id: 23,
    name: "Soft Focus Eye Serum",
    category: "Eye Care",
    type: "DEPUFF • HYDRATE",
    price: 39,
    size: "15 ML / 0.5 FL OZ",
    image: "/images/serum_wheat.jpg",
  },
  {
    id: 24,
    name: "Silk Body Lotion",
    category: "Body Care",
    type: "HYDRATE • SOFTEN",
    price: 29,
    size: "250 ML / 8.4 FL OZ",
    image: "/images/sunscreen.jpg",
  },
  {
    id: 25,
    name: "Nourishing Body Oil",
    category: "Body Care",
    type: "NOURISH • GLOW",
    price: 32,
    size: "100 ML / 3.4 FL OZ",
    image: "/images/serum_wheat.jpg",
  },
  {
    id: 26,
    name: "The Soft Body Wash",
    category: "Body Care",
    type: "CLEANSE • SOOTHE",
    price: 24,
    size: "250 ML / 8.4 FL OZ",
    image: "/images/serum_cream.jpg",
  },
  {
    id: 27,
    name: "Hydration Essentials Set",
    category: "Sets",
    type: "CLEANSE • HYDRATE • GLOW",
    price: 78,
    size: "3 PIECE SET",
    tag: "BEST VALUE",
    image: "/images/serum_table.jpg",
  },
  {
    id: 28,
    name: "The Morning Ritual Set",
    category: "Sets",
    type: "CLEANSE • NOURISH • PROTECT",
    price: 89,
    size: "3 PIECE SET",
    image: "/images/serum_table.jpg",
  },
  {
    id: 29,
    name: "The Night Ritual Set",
    category: "Sets",
    type: "CLEANSE • RESTORE • NOURISH",
    price: 96,
    size: "3 PIECE SET",
    tag: "NIGHT RITUAL",
    image: "/images/serum_table.jpg",
  },
  {
    id: 30,
    name: "The Complete Solune Ritual",
    category: "Sets",
    type: "THE FULL ROUTINE",
    price: 145,
    size: "5 PIECE SET",
    tag: "COMPLETE RITUAL",
    image: "/images/serum_table.jpg",
  },
];

const categories = [
  "ALL",
  "CLEANSERS",
  "SERUMS",
  "MOISTURIZERS",
  "CREAMS",
  "SUNSCREEN",
  "TONERS",
  "FACE OILS",
  "MASKS",
  "EYE CARE",
  "BODY CARE",
  "SETS",
];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const { addToCart } = useCart();

  const filteredProducts =
    activeCategory === "ALL"
      ? products
      : products.filter(
          (product) => product.category.toUpperCase() === activeCategory
        );

  return (
    <>
      <Navbar />

      <main className="shop-page">
        {/* SHOP HERO */}
        <section className="shop-hero">
          <p className="eyebrow">THE SOLUNE COLLECTION</p>

          <h1>
            Everything your skin needs,
            <span>nothing it doesn't.</span>
          </h1>

          <p>
            Thoughtful essentials for every step of your everyday ritual.
          </p>
        </section>

        {/* CATEGORY FILTER */}
        <section className="shop-controls">
          <div className="shop-categories">
            {categories.map((category) => (
              <button
                key={category}
                className={
                  activeCategory === category ? "active" : ""
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <p className="product-count">
            {filteredProducts.length}{" "}
            {filteredProducts.length === 1 ? "PRODUCT" : "PRODUCTS"}
          </p>
        </section>

        {/* PRODUCT GRID */}
        <section className="shop-grid">
          {filteredProducts.map((product) => (
            <article className="shop-product-card" key={product.id}>
              <div className="shop-product-image">
                {product.tag && (
                  <span className="shop-product-tag">
                    {product.tag}
                  </span>
                )}

                <img
                  src={product.image}
                  alt={product.name}
                />

                <button
                  className="shop-quick-add"
                  aria-label={`Add ${product.name} to cart`}
                  onClick={() => addToCart(product)}
                >
                  +
                </button>
              </div>

              <div className="shop-product-info">
                <p className="shop-product-type">
                  {product.type}
                </p>

                <div className="shop-product-name-row">
                  <h2>{product.name}</h2>
                  <span>${product.price}</span>
                </div>

                <p className="shop-product-size">
                  {product.size}
                </p>
              </div>
            </article>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}