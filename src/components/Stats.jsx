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
      // GANTI: Background menggunakan warna hijau gelap #091413
      className="py-20 bg-[#091413] text-white relative overflow-hidden"
    >
      {/* Dekorasi halus di background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-64 h-64 bg-[#408A71] rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-10 text-center relative z-10">
        {statsData.map((item, index) => (
          <div key={index}>
            {/* NUMBER */}
            {/* GANTI: Gradasi angka dari Putih ke Hijau Pucat #B0E4CC */}
            <div className="text-4xl md:text-5xl font-extrabold mb-2 bg-gradient-to-r from-white via-white to-[#B0E4CC] bg-clip-text text-transparent">
              {counts[index]}{item.number === 98 ? "%" : "+"}
            </div>

            {/* LABEL */}
            {/* GANTI: Warna label menggunakan putih dengan opacity agar tidak terlalu dominan */}
            <div className="text-sm md:text-base text-[#B0E4CC] opacity-80 font-medium tracking-wide uppercase">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;