"use client";

import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./journal.css";

const articles = [
  {
    id: 1, category: "SKINCARE",
    title: "The Right Moisturizer for Your Skin Type",
    description: "Discover how to choose a moisturizer that suits your skin and fits effortlessly into your routine.",
    date: "OCT 02, 2026", readTime: "4 MIN READ",
    image: "/images/journal/moisturizer.jpg",
  },
  {
    id: 2, category: "BEAUTY",
    title: "5 Simple Skincare Habits for Glowing Skin",
    description: "Small, consistent habits can make skincare feel simpler. Start with these everyday essentials.",
    date: "SEP 25, 2026", readTime: "5 MIN READ",
    image: "/images/journal/glowing-skin.jpg",
  },
  {
    id: 3, category: "WELLNESS",
    title: "Making Space for Your Everyday Ritual",
    description: "A slower morning, a little quiet, and a few minutes that belong entirely to you.",
    date: "SEP 18, 2026", readTime: "3 MIN READ",
    image: "/images/journal/wellness-tea.jpg",
  },
  {
    id: 4, category: "SKINCARE",
    title: "What Your Serum Is Really Doing",
    description: "Learn where serums fit into a routine and how to choose one based on your skin's needs.",
    date: "SEP 11, 2026", readTime: "4 MIN READ",
    image: "/images/journal/serum-ritual.jpg",
  },
  {
    id: 5, category: "LIFESTYLE",
    title: "A Little Self-Care on Busy Days",
    description: "You don't need an elaborate routine to make time for yourself. Begin with small moments.",
    date: "SEP 04, 2026", readTime: "3 MIN READ",
    image: "/images/journal/self-care.jpg",
  },
  {
    id: 6, category: "SKINCARE",
    title: "Building a Simple Morning Routine",
    description: "Cleanse, moisturize, protect. Get to know the basics of a practical morning skincare routine.",
    date: "AUG 28, 2026", readTime: "5 MIN READ",
    image: "/images/journal/morning-routine.jpg",
  },
  {
    id: 7, category: "BEAUTY",
    title: "Getting to Know Your Skin",
    description: "Understanding how your skin feels throughout the day can help you make more informed choices.",
    date: "AUG 21, 2026", readTime: "4 MIN READ",
    image: "/images/journal/skin-glow.jpg",
  },
  {
    id: 8, category: "WELLNESS",
    title: "The Beauty of a Nighttime Wind-Down",
    description: "Create a gentle evening ritual that helps you slow down before bed.",
    date: "AUG 14, 2026", readTime: "3 MIN READ",
    image: "/images/journal/night-ritual.jpg",
  },
  {
    id: 9, category: "SKINCARE",
    title: "Why Daily Sun Protection Matters",
    description: "Explore the role sunscreen plays in a balanced daytime skincare routine.",
    date: "AUG 07, 2026", readTime: "5 MIN READ",
    image: "/images/journal/sun-protection.jpg",
  },
];

const categories = ["ALL", "SKINCARE", "WELLNESS", "LIFESTYLE", "BEAUTY"];

export default function JournalPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [search, setSearch] = useState("");

  const filteredArticles = useMemo(() => {
    const query = search.trim().toLowerCase();
    return articles.filter((article) => {
      const matchesCategory =
        activeCategory === "ALL" || article.category === activeCategory;
      const matchesSearch =
        !query ||
        `${article.title} ${article.description} ${article.category}`
          .toLowerCase()
          .includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <>
      <Navbar />
      <main className="journal-page">
        <section className="journal-hero">
          <div className="journal-hero-content">
            <p className="eyebrow">THE SOLUNE JOURNAL</p>
            <h1>A little more <span>about skin.</span></h1>
            <p>Skincare notes, everyday rituals, and thoughtful reads for feeling good in your own skin.</p>
            <a href="#journal-articles" className="journal-hero-link">EXPLORE THE JOURNAL ↓</a>
          </div>
          <div className="journal-hero-image">
            <img src="/images/journal/journal-hero.jpg" alt="Warm, natural skincare still life" />
          </div>
        </section>

        <section className="journal-intro">
          <p className="eyebrow">NOTES ON EVERYDAY BEAUTY</p>
          <h2>Thoughtful reads. <span>Gentler routines.</span></h2>
          <p>From understanding skincare essentials to finding small moments of calm, this is your space to learn, explore, and make your routine your own.</p>
        </section>

        <section className="journal-listing" id="journal-articles">
          <div className="journal-toolbar">
            <div className="journal-categories" aria-label="Filter articles by category">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={activeCategory === category ? "active" : ""}
                  aria-pressed={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            <label className="journal-search">
              <span aria-hidden="true">⌕</span>
              <input
                type="search"
                placeholder="Search articles..."
                aria-label="Search journal articles"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </label>
          </div>

          <div className="journal-results">
            <p>{filteredArticles.length} {filteredArticles.length === 1 ? "ARTICLE" : "ARTICLES"}</p>
            {(activeCategory !== "ALL" || search) && (
              <button type="button" onClick={() => { setActiveCategory("ALL"); setSearch(""); }}>
                CLEAR FILTERS ×
              </button>
            )}
          </div>

          {filteredArticles.length ? (
            <div className="journal-grid">
              {filteredArticles.map((article, index) => (
                <article className="journal-card" key={article.id}>
                  <a href={`/journal/${article.id}`} className="journal-card-image" aria-label={`Read ${article.title}`}>
                    {index === 0 && activeCategory === "ALL" && !search && <span className="journal-tag">EDITOR'S NOTE</span>}
                    <img src={article.image} alt={article.title} loading="lazy" />
                    <span className="journal-card-arrow" aria-hidden="true">↗</span>
                  </a>
                  <div className="journal-card-content">
                    <div className="journal-card-meta"><span>{article.category}</span><span>{article.readTime}</span></div>
                    <h3><a href={`/journal/${article.id}`}>{article.title}</a></h3>
                    <p>{article.description}</p>
                    <div className="journal-card-bottom"><span>{article.date}</span><a href={`/journal/${article.id}`}>READ ARTICLE ↗</a></div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="journal-empty">
              <p className="eyebrow">NOTHING HERE JUST YET</p>
              <h2>No matching <span>articles.</span></h2>
              <p>Try another search or choose a different category.</p>
              <button type="button" onClick={() => { setActiveCategory("ALL"); setSearch(""); }}>VIEW ALL ARTICLES</button>
            </div>
          )}
        </section>

        <section className="journal-cta">
          <p className="eyebrow">READY FOR YOUR NEXT RITUAL?</p>
          <h2>Find your everyday <span>essentials.</span></h2>
          <a href="/shop">EXPLORE OUR PRODUCTS ↗</a>
        </section>
      </main>
      <Footer />
    </>
  );
}
