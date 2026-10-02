export default function StorySection() {
  return (
    <section className="story-section">
      <div className="story-image">
        <img
          src="/images/serum_table.jpg"
          alt="Solune skincare product"
        />
      </div>

      <div className="story-content">
        <p className="eyebrow">A NOTE FROM US</p>

        <h2>
          Beauty feels better
          <span>when it feels like you.</span>
        </h2>

        <p>
          We believe your routine should be a moment to return to yourself.
          No complicated steps, no impossible standards. Just thoughtful
          essentials that make room for you to feel your best.
        </p>

        <a href="/story" className="text-link">
          GET TO KNOW US ↗
        </a>
      </div>
    </section>
  );
}