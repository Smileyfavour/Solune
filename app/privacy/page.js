"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./privacy.css";



const sections = [
  {
    title: "1. Information We Collect",
    content:
      "When you visit Solune, place an order, create an account, or contact us, we may collect information such as your name, email address, phone number, billing and shipping address, and order details. We may also collect information about how you interact with our website, including pages visited, products viewed, browser type, device information, and general usage data. We collect only information that is reasonably necessary to operate our website, process orders, improve our services, and communicate with you.",
  },
  {
    title: "2. How We Use Your Information",
    content:
      "We use the information we collect to process and fulfil orders, arrange deliveries, send order confirmations and updates, respond to enquiries, provide customer support, and manage your account where applicable. We may also use it to improve our products and website experience, understand customer preferences, prevent fraudulent activity, maintain website security, and meet our legal obligations. Where required, we will obtain your consent before sending marketing communications, and you can withdraw that consent at any time.",
  },
  {
    title: "3. Cookies and Tracking Technologies",
    content:
      "Solune may use cookies and similar technologies to keep the website functioning, remember preferences, support shopping cart features, understand website performance, and improve your browsing experience. Some cookies may be necessary for essential website functions, while others may be used for analytics or personalisation. You can manage cookies through your browser settings. Disabling certain cookies may affect the availability or functionality of some parts of the website.",
  },
  {
    title: "4. How We Share Your Information",
    content:
      "We do not sell your personal information. We may share relevant information with trusted service providers when necessary to operate our business, such as payment processors, delivery and logistics providers, website hosting services, customer support tools, and security or analytics providers. These parties should use the information only for the services they provide and handle it appropriately. We may also disclose information where required by law, to protect our rights, or to address fraud, security issues, or misuse of our services.",
  },
  {
    title: "5. Data Security",
    content:
      "We take reasonable technical and organisational measures to help protect personal information against unauthorised access, loss, misuse, alteration, or disclosure. These measures may include access controls, secure service providers, and appropriate safeguards for information handled through our website. However, no website, storage system, or method of electronic transmission can be guaranteed to be completely secure. We therefore cannot promise absolute security, but we work to protect the information entrusted to us.",
  },
  {
    title: "6. Data Retention",
    content:
      "We retain personal information only for as long as reasonably necessary for the purposes described in this policy, including fulfilling orders, maintaining relevant records, resolving disputes, providing customer support, and meeting legal or regulatory requirements. The appropriate retention period depends on the type of information and why it was collected. When information is no longer needed, we will take reasonable steps to delete it or securely dispose of it, subject to any applicable retention obligations.",
  },
  {
    title: "7. Your Privacy Rights",
    content:
      "Depending on the laws that apply to you, you may have the right to request access to your personal information, ask us to correct inaccurate details, request deletion, object to or restrict certain processing, withdraw consent where processing is based on consent, or request a copy of information in a suitable format. You may also have the right to raise a complaint with the relevant data protection authority. To exercise an applicable right, contact us using the details in the Contact Us section. We may need to verify your identity before responding.",
  },
  {
    title: "8. Third-Party Links and Services",
    content:
      "Our website may contain links to third-party websites, platforms, or services. These external services operate independently and may have their own privacy policies and practices. Solune does not control how third parties collect, use, or protect information on their platforms. We encourage you to review the privacy information of any external service you choose to use, particularly before providing personal or payment information.",
  },
  {
    title: "9. Children's Privacy",
    content:
      "Solune's website and services are not intended to knowingly collect personal information from children who are not permitted to use the services under applicable law. We do not intentionally collect children's personal information without any consent or authorisation required by law. If you believe a child has provided us with personal information inappropriately, please contact us so we can review the matter and take reasonable steps where necessary.",
  },
  {
    title: "10. International Data Transfers",
    content:
      "Some of our service providers may process or store information in countries other than the country in which you live. Where personal information is transferred across borders, we will take reasonable steps to ensure that the transfer and subsequent handling are consistent with applicable data protection requirements. The protections available to your information may vary depending on the laws of the relevant country and the safeguards that apply to the transfer.",
  },
  {
    title: "11. Changes to This Privacy Policy",
    content:
      "We may update this Privacy Policy from time to time to reflect changes to our website, business practices, service providers, or legal obligations. When we make changes, we will update the policy on this page and revise the date of the latest update where appropriate. We encourage you to review this page periodically so you understand how your information is handled. Where required by law, we will provide additional notice or seek consent for material changes.",
  },
  {
    title: "12. Contact Us",
    content:
      "If you have questions about this Privacy Policy, would like more information about how your personal information is handled, or want to exercise a privacy right, please contact the Solune team through the contact details or customer support channel provided on our website. When making a request, please describe your concern clearly so we can direct it to the appropriate person and respond as reasonably as possible.",
  },
];

// Keep your existing 12-section `sections` array above this component.

const chapters = [
  {
    number: "01",
    eyebrow: "THE FOUNDATION",
    title: "Your information",
    description:
      "What we collect, how we use it, and the technologies that support your experience.",
    icon: "◌",
    start: 0,
    end: 4,
  },
  {
    number: "02",
    eyebrow: "THE PROMISE",
    title: "Your protection",
    description:
      "How information is handled, retained, shared, and safeguarded.",
    icon: "✳",
    start: 4,
    end: 8,
  },
  {
    number: "03",
    eyebrow: "YOUR CHOICES",
    title: "Your rights",
    description:
      "Your privacy choices, international transfers, and how to reach us.",
    icon: "♡",
    start: 8,
    end: 12,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />

      <main className="privacy-archive">
        {/* HERO */}
        <section className="archive-hero">
          <div className="archive-hero-top">
            <span>SOLUNE. / JOURNAL</span>
            <span className="archive-status">
              <span className="archive-status-dot" />
              YOUR PRIVACY MATTERS
            </span>
          </div>

          <div className="archive-hero-content">
            <div className="archive-hero-copy">
              <span className="archive-eyebrow">
                THE FINE PRINT, MADE HUMAN
              </span>

              <h1>
                Your privacy
                <br />
                is part of our <em>ritual.</em>
              </h1>

              <p>
                Thoughtful skincare begins with care. That same
                intention extends to the information you share
                with us. Here is how we handle it, protect it,
                and respect your choices.
              </p>

              <a href="#privacy-chapters" className="archive-hero-link">
                EXPLORE OUR POLICY <span>↓</span>
              </a>
            </div>

            <div className="archive-hero-art" aria-hidden="true">
              <div className="archive-art-orbit archive-orbit-one" />
              <div className="archive-art-orbit archive-orbit-two" />

              <div className="archive-art-center">
                <span className="archive-art-symbol">s.</span>
                <span className="archive-art-caption">
                  A LITTLE CLARITY.
                  <br />
                  A LOT OF CARE.
                </span>
              </div>

              <span className="archive-art-index">POLICY No. 001</span>
              <span className="archive-art-side-label">
                THE SOLUNE STANDARD
              </span>
            </div>
          </div>

          <div className="archive-hero-bottom">
            <span>PRIVACY POLICY</span>
            <span>LAST UPDATED · OCTOBER 2026</span>
            <span>12 SECTIONS</span>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="archive-intro">
          <div className="archive-intro-label">
            <span className="archive-small-label">A NOTE FROM SOLUNE</span>
            <span className="archive-intro-line" />
          </div>

          <div className="archive-intro-copy">
            <h2>
              Transparency should feel
              <br />
              <em>like second nature.</em>
            </h2>

            <p>
              This policy describes how Solune handles personal
              information when you browse our website, shop our
              products, or contact us. Please read the sections
              below to understand our practices and the choices
              available to you.
            </p>
          </div>
        </section>

        {/* CHAPTER OVERVIEW */}
        <section
          className="archive-chapters"
          id="privacy-chapters"
        >
          <div className="archive-section-heading">
            <div>
              <span className="archive-small-label">
                THE PRIVACY ARCHIVE
              </span>
              <h2>Know what matters.</h2>
            </div>

            <span className="archive-heading-note">
              THREE CHAPTERS · TWELVE SECTIONS
            </span>
          </div>

          <div className="archive-chapter-grid">
            {chapters.map((chapter) => (
              <a
                className="archive-chapter-card"
                href={`#chapter-${chapter.number}`}
                key={chapter.number}
              >
                <div className="archive-card-top">
                  <span>{chapter.number} / 03</span>
                  <span className="archive-card-icon">
                    {chapter.icon}
                  </span>
                </div>

                <span className="archive-card-eyebrow">
                  {chapter.eyebrow}
                </span>

                <h3>{chapter.title}</h3>

                <p>{chapter.description}</p>

                <div className="archive-card-bottom">
                  <span>
                    SECTIONS {String(chapter.start + 1).padStart(2, "0")}
                    {" – "}
                    {String(chapter.end).padStart(2, "0")}
                  </span>
                  <span className="archive-card-arrow">↗</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* EXPANDABLE POLICY CONTENT */}
        <section className="archive-policy">
          <div className="archive-policy-heading">
            <span className="archive-small-label">
              THE DETAILS, SECTION BY SECTION
            </span>

            <h2>
              Everything,
              <br />
              <em>explained clearly.</em>
            </h2>

            <p>
              Open any section to read the full details. Your
              questions deserve clear answers.
            </p>
          </div>

          <div className="archive-policy-content">
            {chapters.map((chapter) => (
              <div
                className="archive-policy-chapter"
                id={`chapter-${chapter.number}`}
                key={chapter.number}
              >
                <div className="archive-policy-chapter-heading">
                  <span className="archive-chapter-number">
                    {chapter.number}
                  </span>

                  <div>
                    <span className="archive-small-label">
                      {chapter.eyebrow}
                    </span>
                    <h3>{chapter.title}</h3>
                  </div>
                </div>

                <div className="archive-accordion">
                  {sections
                    .slice(chapter.start, chapter.end)
                    .map((section) => {
                      const originalIndex = sections.indexOf(section);

                      return (
                        <details
                          className="archive-accordion-item"
                          id={`privacy-${originalIndex + 1}`}
                          key={section.title}
                        >
                          <summary>
                            <span className="archive-accordion-title">
                              <span className="archive-accordion-number">
                                {String(originalIndex + 1).padStart(2, "0")}
                              </span>

                              <span>{section.title.replace(/^\d+\.\s*/, "")}</span>
                            </span>

                            <span
                              className="archive-accordion-toggle"
                              aria-hidden="true"
                            />
                          </summary>

                          <div className="archive-accordion-body">
                            <p>{section.content}</p>
                          </div>
                        </details>
                      );
                    })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="archive-contact">
          <div className="archive-contact-decoration" aria-hidden="true">
            s.
          </div>

          <div className="archive-contact-content">
            <span className="archive-small-label">
              WE BELIEVE IN OPEN CONVERSATIONS
            </span>

            <h2>
              Still have
              <br />
              <em>a question?</em>
            </h2>

            <p>
              If you would like to understand our privacy practices
              better or make a request about your personal
              information, our team is here to help.
            </p>

            <a href="/contact" className="archive-contact-button">
              CONTACT SOLUNE <span>↗</span>
            </a>
          </div>

          <div className="archive-contact-footer">
            <span>YOUR TRUST, NEVER TAKEN FOR GRANTED.</span>
            <span>SOLUNE. © 2026</span>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}