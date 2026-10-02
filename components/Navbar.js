"use client";

import { useState } from "react";
import Link from "next/link";
import SearchOverlay from "./SearchOverlay";
import CartDrawer from "./CartDrawer";
import { useCart } from "./CartProvider";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const { setCartOpen, cartCount } = useCart();

  return (
    <>
      <header className="navbar">

        <Link href="/" className="logo">
          solune.
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-links">
          <Link href="/products">
            SHOP ALL
          </Link>

          <Link href="/story">
            OUR STORY
          </Link>

          <Link href="/ritual">
            THE RITUAL
          </Link>
        </nav>

        <div className="nav-actions">

          {/* Search */}
          <button
            aria-label="Search products"
            className="icon-button"
            onClick={() => {
              setSearchOpen(true);
              setMenuOpen(false);
            }}
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="11" cy="11" r="6.5" />
              <path d="m16 16 5 5" />
            </svg>
          </button>

          {/* Shopping Bag */}
          <button
            aria-label="Shopping bag"
            className="icon-button bag-button"
            onClick={() => setCartOpen(true)}
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M5 8h14l-1 13H6L5 8Z" />
              <path d="M9 8V6a3 3 0 0 1 6 0v2" />
            </svg>

            {cartCount > 0 && (
              <span className="cart-count">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu */}
          <button
            className={`mobile-menu ${
              menuOpen ? "active" : ""
            }`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
          </button>

        </div>

        {/* Mobile Navigation */}
        <nav
          className={`mobile-nav ${
            menuOpen ? "show" : ""
          }`}
        >
          <Link
            href="/products"
            onClick={() => setMenuOpen(false)}
          >
            SHOP ALL
          </Link>

          <Link
            href="/story"
            onClick={() => setMenuOpen(false)}
          >
            OUR STORY
          </Link>

          <Link
            href="/ritual"
            onClick={() => setMenuOpen(false)}
          >
            THE RITUAL
          </Link>
        </nav>

      </header>

      {/* Search */}
      {searchOpen && (
        <SearchOverlay
          onClose={() => setSearchOpen(false)}
        />
      )}

      {/* Cart */}
      <CartDrawer />
    </>
  );
}