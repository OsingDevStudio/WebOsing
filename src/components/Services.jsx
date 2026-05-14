import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaPalette,
  FaBolt,
  FaMobileAlt,
  FaHeadset,
} from "react-icons/fa";

const servicesData = [
  {
    icon: FaPalette,
    title: "Desain Modern",
    desc: "Tampilan website elegan, responsive, dan sesuai tren terbaru.",
  },
  {
    icon: FaBolt,
    title: "Pengerjaan Cepat",
    desc: "Proses pembuatan website efisien tanpa mengorbankan kualitas.",
  },
  {
    icon: FaMobileAlt,
    title: "Responsive",
    desc: "Website optimal di semua perangkat, dari HP hingga desktop.",
  },
  {
    icon: FaHeadset,
    title: "Support 24/7",
    desc: "Kami siap membantu dan memberikan solusi terbaik untuk bisnis Anda.",
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section 
      id="layanan" 
      className="py-24 bg-slate-50 relative overflow-hidden"
      style={{
        /* MOTIF KOTAK-KOTAK (GRID PATTERN) */
        backgroundImage: `
          linear-gradient(to right, #e2e8f0 1px, transparent 1px),
          linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px' // Menentukan ukuran kotak
      }}
    >
      <div className="max-w-6xl mx-auto px-5 relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-[#408A71] font-bold tracking-widest uppercase text-xs bg-white/80 px-4 py-1 rounded-full border border-slate-200 backdrop-blur-sm mb-4 inline-block">
            Layanan Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#091413]">
            Kenapa Harus <span className="text-[#408A71]">Kami?</span>
          </h2>

          <p className="text-slate-600 max-w-xl mx-auto">
            Kami memberikan layanan terbaik untuk mendukung kesuksesan digital bisnis Anda
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100} 
                /* Efek Glassmorphism agar motif kotak terlihat halus di balik kartu */
                className="group bg-white/80 backdrop-blur-md p-8 rounded-2xl text-center shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer relative overflow-hidden border border-white"
              >
                {/* ICON BOX */}
                <div className="w-[70px] h-[70px] mx-auto mb-6 flex items-center justify-center rounded-2xl bg-[#B0E4CC]/30 group-hover:bg-gradient-to-r from-[#408A71] to-[#285A48] transition-all duration-500 transform group-hover:rotate-6">
                  <Icon className="text-3xl text-[#408A71] group-hover:text-white transition-colors duration-300" />
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-bold mb-3 text-[#091413]">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* HOVER LINE */}
                <div className="absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#408A71] to-[#285A48] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;