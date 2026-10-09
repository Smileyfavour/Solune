export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <h2>solune.</h2>
          <p>
            Simple, considered care for the beautiful everyday.
          </p>
        </div>

        <div className="footer-column">
          <h3>SHOP</h3>
          <a href="#">Shop All</a>
          <a href="#">Serums</a>
          <a href="#">Cleansers</a>
          <a href="#">Moisturizers</a>
        </div>

        <div className="footer-column">
          <h3>ABOUT</h3>
          <a href="#">Our Story</a>
          <a href="#">The Ritual</a>
          <a href="/journal">Journal</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-column">
          <h3>FOLLOW</h3>
          <a href="#">Instagram ↗</a>
          <a href="#">TikTok ↗</a>
          <a href="#">Pinterest ↗</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 solune. All rights reserved.</span>

        <div>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}