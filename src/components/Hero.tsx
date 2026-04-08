export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center text-center bg-[var(--color-secondary)] text-white">
      <div className="container slide-up">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Explore Ecuador with TourismEC
        </h1>
        <p className="mb-6 text-lg">
          Beaches, culture, and adventure in one unforgettable journey.
        </p>
        <a
          href="#packages"
          className="bg-[var(--color-accent)] text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
        >
          View Packages
        </a>
      </div>
    </section>
  );
}