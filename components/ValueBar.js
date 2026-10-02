const values = [
  "MADE FOR REAL LIFE",
  "GOOD FOR YOUR SKIN",
  "KIND TO THE PLANET",
];

export default function ValueBar() {
  return (
    <section className="value-bar">
      {values.map((value, index) => (
        <div className="value-item" key={value}>
          <span>0{index + 1}</span>
          <p>{value}</p>
        </div>
      ))}
    </section>
  );
}