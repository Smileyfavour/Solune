import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./story.css"

export default function StoryPage() {
  return (
    <>
      <Navbar />

      <main className="story-page">
        {/* HERO */}
        <section className="story-hero">
          <div className="story-hero-content">
            <p className="eyebrow">OUR STORY</p>

            <h1>
              Beauty,
              <span>in your own nature.</span>
            </h1>

            <p className="story-hero-text">
              Solune was created for the everyday moments that bring you back
              to yourself. Thoughtful skincare, simple rituals, and products
              made to become part of your life.
            </p>
          </div>
        </section>

        {/* INTRO */}
        <section className="story-intro">
          <div className="story-intro-image">
            <img
              src="/images/black-skinned.jpg"
              alt="Woman enjoying her skincare ritual"
            />
          </div>

          <div className="story-intro-content">
            <p className="eyebrow">THE SOLUNE WAY</p>

            <h2>
              Skincare should feel
              <span>like a ritual.</span>
            </h2>

            <p>
              We believe taking care of your skin doesn't have to be
              complicated. It can be quiet. It can be intentional. It can be
              five minutes in the morning before the day begins.
            </p>

            <p>
              Solune is built around thoughtful essentials that make those
              little moments feel good, without asking you to become someone
              else to feel beautiful.
            </p>
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="story-philosophy">
          <p className="eyebrow">OUR PHILOSOPHY</p>

          <h2>
            Less noise.
            <span>More ritual.</span>
          </h2>

          <p>
            We choose simplicity over excess and consistency over complicated
            routines. Every product has a purpose, every step has a place, and
            every ritual is yours to make your own.
          </p>
        </section>

        {/* RITUAL */}
        <section className="ritual-section">
          <div className="ritual-image">
            <img
              src="/images/blue_bottle_serum.jpg"
              alt="Solune skincare products"
            />
          </div>

          <div className="ritual-content">
            <p className="eyebrow">THE RITUAL</p>

            <h2>
              Three simple steps.
              <span>One everyday ritual.</span>
            </h2>

            <div className="ritual-steps">
              <div className="ritual-step">
                <span>01</span>
                <div>
                  <h3>CLEANSE</h3>
                  <p>
                    Start fresh. Gently cleanse away the day and make space
                    for what comes next.
                  </p>
                </div>
              </div>

              <div className="ritual-step">
                <span>02</span>
                <div>
                  <h3>NOURISH</h3>
                  <p>
                    Give your skin what it needs with thoughtful ingredients
                    designed for everyday care.
                  </p>
                </div>
              </div>

              <div className="ritual-step">
                <span>03</span>
                <div>
                  <h3>RESTORE</h3>
                  <p>
                    Finish with comfort and hydration, leaving your skin soft,
                    balanced, and ready for whatever comes next.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CLOSING */}
        <section className="story-closing">
          <p className="eyebrow">A NOTE FROM US</p>

          <h2>
            Come as you are.
            <span>Glow as you go.</span>
          </h2>

          <p>
            Your skin doesn't need to be perfect. Your routine doesn't need to
            be complicated. There is beauty in showing up for yourself,
            exactly as you are.
          </p>

          <a href="/shop" className="story-cta">
            SHOP THE COLLECTION ↗
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}