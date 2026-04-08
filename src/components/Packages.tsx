export default function Packages() {
  const packages = [
    "Machalilla (Los Frailes + Isla de la Plata)",
    "Santo Domingo & Tsáchilas Experience",
    "Quito Cultural Tour",
    "Complete Ecuador Package",
  ];

  return (
    <section id="packages" className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Our Packages
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {packages.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition slide-up"
            >
              <h3 className="text-xl font-semibold mb-3">{item}</h3>
              <p className="mb-4">
                Discover the beauty of Ecuador with this unique experience.
              </p>
              <button className="bg-[var(--color-danger)] text-white px-4 py-2 rounded hover:scale-105 transition">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}