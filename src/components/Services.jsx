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
    // bg-white agar kontras dengan section lain, atau bisa gunakan bg-slate-50 jika ingin tetap lembut
    <section id="layanan" className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-5">
        
        {/* HEADER */}
        <div className="text-center mb-16" data-aos="fade-up">
          {/* text-[#091413] untuk heading utama */}
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
                className="group bg-white p-8 rounded-2xl text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer relative overflow-hidden border border-slate-100"
              >
                {/* ICON BOX */}
                {/* bg-[#B0E4CC]/30 untuk warna kotak ikon yang lembut */}
                {/* group-hover:bg-gradient-to-r from-[#408A71] to-[#285A48] saat di-hover */}
                <div className="w-[70px] h-[70px] mx-auto mb-6 flex items-center justify-center rounded-2xl bg-[#B0E4CC]/30 group-hover:bg-gradient-to-r from-[#408A71] to-[#285A48] transition-all duration-500">
                  {/* Warna ikon default #408A71 */}
                  <Icon className="text-3xl text-[#408A71] group-hover:text-white transition-colors duration-300" />
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-semibold mb-3 text-[#091413]">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* HOVER LINE */}
                {/* Garis bawah menggunakan gradasi hijau #408A71 ke #285A48 */}
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#408A71] to-[#285A48] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;