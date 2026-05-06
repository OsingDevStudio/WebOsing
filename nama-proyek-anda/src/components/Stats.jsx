import { useEffect, useRef, useState } from "react";

const statsData = [
  { number: 150, label: "Proyek Selesai" },
  { number: 98, label: "Klien Puas" },
  { number: 24, label: "Tim Profesional" },
  { number: 5, label: "Tahun Pengalaman" },
];

const Stats = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const sectionRef = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const animateNumbers = () => {
      if (animated.current) return;

      statsData.forEach((item, index) => {
        let current = 0;
        const increment = item.number / 50;

        const update = () => {
          current += increment;

          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] =
              current < item.number ? Math.ceil(current) : item.number;
            return newCounts;
          });

          if (current < item.number) {
            setTimeout(update, 20);
          }
        };

        update();
      });

      animated.current = true;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateNumbers();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {statsData.map((item, index) => (
          <div key={index}>
            {/* NUMBER */}
            <div className="text-4xl md:text-5xl font-extrabold mb-2 bg-gradient-to-r from-white to-orange-300 bg-clip-text text-transparent">
              {counts[index]}
            </div>

            {/* LABEL */}
            <div className="text-sm md:text-base opacity-80 font-medium">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;