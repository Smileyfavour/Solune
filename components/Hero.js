export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="eyebrow">BEAUTY IN YOUR OWN NATURE</p>

        <h1>
          Come as you are.
          <span>Glow as you go.</span>
        </h1>

        <p className="hero-description">
          Good skin days start with feeling good in your skin. Simple,
          considered care for the beautiful everyday.
        </p>

        <a href="#products" className="dark-button">
          SHOP FOR OUR PRODUCTS <span>→</span>
        </a>
      </div>

      <div className="hero-image">
        <img
          src="/images/lady.jpg"
          alt="Skincare products"
        />
      </div>
    </section>
  );
}