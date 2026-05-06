import { useEffect, useState } from "react";
import { FaRocket } from "react-icons/fa";

const Banner = () => {
  const [offsetY, setOffsetY] = useState(0);

  // efek floating halus
  useEffect(() => {
    const interval = setInterval(() => {
      setOffsetY((prev) => (prev > 15 ? 0 : prev + 0.3));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('1.png')",
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 to-black/40" />

      {/* CONTENT */}
      <div
        className="relative z-10 text-white px-5 max-w-3xl transition-transform duration-300"
        style={{ transform: `translateY(${offsetY}px)` }}
      >
        {/* BADGE */}
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-5 py-2 rounded-full text-sm font-semibold mb-6">
          <FaRocket className="text-orange-400" />
          Digital Solution Expert
        </div>

        {/* TITLE */}
        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          <span className="text-orange-500">Bangun Website</span> <br />
          Profesional untuk Bisnismu
        </h2>

        {/* DESC */}
        <p className="text-lg md:text-xl opacity-90 mb-8">
          Solusi digital inovatif untuk mempercepat pertumbuhan bisnis dan brand Anda di ekosistem global.
        </p>

        {/* BUTTON */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button
            onClick={() => {
              document
                .querySelector("#layanan")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:-translate-y-1 transition"
          >
            Mulai Sekarang →
          </button>

          <a
            href="https://wa.me/6281938434423"
            target="_blank"
            className="flex items-center justify-center gap-2 border-2 border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition"
          >
            Konsultasi Gratis
          </a>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm flex flex-col items-center gap-1 animate-bounce opacity-80">
        <span>Scroll</span>
        <span>↓</span>
      </div>
    </section>
  );
};

export default Banner;