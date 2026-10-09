"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./ritual.css";

const morningSteps = [
  {
    number: "01",
    title: "Cleanse with care",
    text: "Begin with a gentle cleanse to refresh your skin and prepare it for the steps ahead.",
    image: "/images/ritual/morning-cleanse.jpg",
    label: "THE RESET",
  },
  {
    number: "02",
    title: "Give your skin a drink",
    text: "Apply your serum to support a hydrated, comfortable-looking complexion.",
    image: "/images/ritual/serum-step.jpg",
    label: "THE BOOST",
  },
  {
    number: "03",
    title: "Seal in the good",
    text: "Follow with moisturizer to help keep your skin feeling soft and hydrated.",
    image: "/images/ritual/moisturizer-step.jpg",
    label: "THE COMFORT",
  },
  {
    number: "04",
    title: "Protect your glow",
    text: "Finish your morning routine with broad-spectrum sunscreen. Reapply as directed, especially outdoors.",
    image: "/images/ritual/sun-protection.jpg",
    label: "THE PROTECTION",
  },
];

const eveningSteps = [
  {
    number: "01",
    title: "Wash the day away",
    text: "Gently cleanse to remove everyday buildup, makeup, and sunscreen.",
  },
  {
    number: "02",
    title: "Apply your serum",
    text: "Choose a serum that suits your skin's needs and follow its product directions.",
  },
  {
    number: "03",
    title: "Finish with moisture",
    text: "Apply your moisturizer and give yourself a moment to slow down.",
  },
];

export default function RitualPage() {
  return (
    <>
      <Navbar />

      <main className="ritual-page">
        <section className="ritual-hero">
          <div className="ritual-hero-copy">
            <p className="ritual-eyebrow">THE SOLUNE RITUAL</p>
            <h1>
              Come back
              <span>to yourself.</span>
            </h1>
            <p className="ritual-hero-description">
              Skincare doesn't have to be complicated. A few thoughtful
              steps, a little consistency, and a moment that belongs to you.
            </p>
            <a href="#morning-ritual" className="ritual-text-link">
              FIND YOUR EVERYDAY RITUAL <span>↓</span>
            </a>
          </div>

          <div className="ritual-hero-photo">
            <img
              src="/images/ritual/ritual-hero.jpg"
              alt="Solune-inspired skincare products in warm natural light"
            />
            <span className="ritual-photo-note">A MOMENT, JUST FOR YOU</span>
          </div>
        </section>

        <section className="ritual-philosophy">
          <p className="ritual-eyebrow">LESS, BUT WITH INTENTION</p>
          <h2>
            Your skin is yours.
            <span>Your ritual should be, too.</span>
          </h2>
          <p>
            There is no one-size-fits-all routine. Start with the essentials,
            pay attention to what your skin needs, and build habits that feel
            good to return to.
          </p>
          <div className="ritual-values">
            <div>
              <span>01</span>
              <h3>Keep it simple</h3>
              <p>A routine you can return to is better than one that feels like a chore.</p>
            </div>
            <div>
              <span>02</span>
              <h3>Stay consistent</h3>
              <p>Give your skin time to adjust and follow product directions.</p>
            </div>
            <div>
              <span>03</span>
              <h3>Make it yours</h3>
              <p>Choose products based on your skin's needs, not every passing trend.</p>
            </div>
          </div>
        </section>

        <section className="ritual-morning" id="morning-ritual">
          <div className="ritual-section-heading">
            <p className="ritual-eyebrow">01 / THE MORNING</p>
            <h2>A softer start <span>to your day.</span></h2>
            <p>Four simple steps to help you feel refreshed, hydrated, and ready to step out.</p>
          </div>

          <div className="ritual-step-grid">
            {morningSteps.map((step) => (
              <article className="ritual-step-card" key={step.number}>
                <div className="ritual-step-image">
                  <img src={step.image} alt={step.title} loading="lazy" />
                  <span className="ritual-step-number">{step.number}</span>
                </div>
                <p className="ritual-step-label">{step.label}</p>
                <h3>{step.title}</h3>
                <p className="ritual-step-text">{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="ritual-evening">
          <div className="ritual-evening-image">
            <img src="/images/ritual/evening-ritual.jpg" alt="Solune skincare essentials styled for an evening ritual" loading="lazy" />
          </div>
          <div className="ritual-evening-copy">
            <p className="ritual-eyebrow">02 / THE EVENING</p>
            <h2>Let the day <span>settle.</span></h2>
            <p className="ritual-evening-intro">
              Your evening routine is a chance to reset. Keep it gentle and
              give your skin the care it needs before you rest.
            </p>
            <div className="ritual-evening-steps">
              {eveningSteps.map((step) => (
                <div className="ritual-evening-step" key={step.number}>
                  <span>{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="/shop" className="ritual-text-link">
              FIND YOUR SKINCARE ESSENTIALS ↗
            </a>
          </div>
        </section>

        <section className="ritual-note">
          <span className="ritual-note-mark">“</span>
          <p>
            The best routine isn't the longest one.
            <span>It's the one that feels right for you.</span>
          </p>
          <span className="ritual-note-caption">A LITTLE SOLUNE REMINDER</span>
        </section>

        <section className="ritual-shop">
          <p className="ritual-eyebrow">YOUR ROUTINE, YOUR WAY</p>
          <h2>Meet your everyday <span>essentials.</span></h2>
          <p>Find the pieces that fit naturally into your ritual.</p>
          <a href="/shop" className="ritual-shop-button">SHOP ALL PRODUCTS ↗</a>
        </section>
      </main>

      <Footer />
    </>
  );
}
