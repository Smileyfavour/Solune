"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./contact.css"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General enquiry",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const { name, email, subject, message } = formData;

    const mailtoLink =
      `mailto:hello@solune.com` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\n${message}`
      )}`;

    window.location.href = mailtoLink;
    setSubmitted(true);
  }

  return (
    <>
      <Navbar />

      <main className="contact-page">
        {/* HERO */}
        <section className="contact-hero">
          <p className="eyebrow">WE'RE HERE FOR YOU</p>

          <h1>
            Let's have a
            <span>little conversation.</span>
          </h1>

          <p>
            Questions about your order, our products, or finding your
            everyday ritual? We'd love to hear from you.
          </p>
        </section>

        {/* CONTACT CONTENT */}
        <section className="contact-layout">
          <div className="contact-info">
            <p className="eyebrow">GET IN TOUCH</p>

            <h2>
              A little help
              <span>goes a long way.</span>
            </h2>

            <p className="contact-description">
              Whether you need help choosing a product or have a question
              about an order, send us a message and we'll help you find
              your way.
            </p>

            <div className="contact-detail">
              <span>01 / EMAIL</span>
              <a href="mailto:hello@solune.com">
                hello@solune.com
              </a>
            </div>

            <div className="contact-detail">
              <span>02 / CUSTOMER CARE</span>
              <p>Product questions, orders & returns</p>
            </div>

            <div className="contact-detail">
              <span>03 / FOLLOW ALONG</span>
              <p>Everyday rituals, little moments, and all things Solune.</p>
            </div>

            <div className="contact-note">
              <span>♡</span>
              <p>
                Every message matters to us. We look forward to hearing
                from you.
              </p>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="contact-form-wrapper">
            <p className="eyebrow">SEND US A NOTE</p>

            <h2>How can we help?</h2>

            {submitted && (
              <p className="contact-notice" role="status">
                Your email app should open with your message prepared.
                Please send the email to complete your enquiry.
              </p>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-field">
                <label htmlFor="contact-name">YOUR NAME</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="What should we call you?"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-email">EMAIL ADDRESS</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-subject">WHAT'S THIS ABOUT?</label>
                <select
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                >
                  <option>General enquiry</option>
                  <option>Product question</option>
                  <option>Order enquiry</option>
                  <option>Shipping and delivery</option>
                  <option>Returns and exchanges</option>
                  <option>Collaboration</option>
                  <option>Something else</option>
                </select>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">YOUR MESSAGE</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell us what's on your mind..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                />
              </div>

              <button type="submit" className="contact-submit">
                SEND YOUR MESSAGE <span>↗</span>
              </button>

              <p className="contact-privacy">
                Your details are only included in your enquiry.
              </p>
            </form>
          </div>
        </section>

        {/* CLOSING */}
        <section className="contact-closing">
          <p className="eyebrow">A LITTLE REMINDER</p>

          <h2>
            Take care of your skin.
            <span>And yourself, too.</span>
          </h2>

          <a href="/shop" className="contact-shop-link">
            EXPLORE OUR COLLECTION ↗
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}