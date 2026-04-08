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
        <a href="#packages" className="btn-accent">
  View Packages
</a>
      </div>
    </section>
  );
}