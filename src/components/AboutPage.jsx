import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion
import { 
  FaEye, 
  FaRocket, 
  FaHandshake, 
  FaLightbulb, 
  FaChess, 
  FaQuoteLeft 
} from "react-icons/fa";

const AboutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Variasi Animasi
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const nilaiInti = [
    { icon: <FaHandshake />, title: "Integritas & Kepercayaan", desc: "Kami membangun hubungan jangka panjang melalui transparansi dan kejujuran." },
    { icon: <FaLightbulb />, title: "Inovasi Tanpa Henti", desc: "Kami mengadopsi teknologi terbaru agar bisnis Anda tetap relevan di masa depan." },
    { icon: <FaChess />, title: "Strategi Berbasis Data", desc: "Setiap kode didasarkan pada riset mendalam untuk hasil yang fungsional." }
  ];

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      {/* SECTION 1: HERO */}
      <section className="pt-32 pb-20 px-5 bg-[#091413] text-white relative overflow-hidden">
        {/* Dekorasi Animasi Lingkaran */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-[#408A71] rounded-full blur-[120px]"
        />

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <h2 className="text-[#408A71] font-bold tracking-[0.2em] uppercase mb-4 text-sm">Profil Perusahaan</h2>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Osing Dev Studio: <br /> 
              <span className="text-[#B0E4CC]">Meningkatkan</span> Kehadiran Digital Anda.
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg">
              Kami mentransformasi ide menjadi solusi digital luar biasa dengan teknologi website masa kini.
            </p>
            <div className="flex gap-8 border-t border-white/10 pt-8">
              <div><h3 className="text-3xl font-bold text-[#408A71]">50+</h3><p className="text-xs text-white/50 uppercase">Proyek Selesai</p></div>
              <div><h3 className="text-3xl font-bold text-[#408A71]">24/7</h3><p className="text-xs text-white/50 uppercase">Dukungan Ahli</p></div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1000" alt="Studio" className="rounded-2xl grayscale shadow-2xl border border-white/10" />
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: VISI & MISI (MOTIF KOTAK + ANIMASI) */}
      <section className="py-24 px-5 relative">
        <div className="absolute inset-0 z-0 opacity-[0.04]" 
          style={{ backgroundImage: `linear-gradient(#091413 1px, transparent 1px), linear-gradient(90deg, #091413 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
        />

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={staggerContainer}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 relative z-10"
        >
          <motion.div variants={fadeIn} className="p-10 rounded-[2.5rem] bg-[#f8faf9]/80 backdrop-blur-sm border border-gray-100 shadow-sm group hover:bg-white hover:shadow-2xl transition-all duration-500">
            <div className="w-16 h-16 bg-[#408A71] text-white rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:rotate-12 transition-transform"><FaEye /></div>
            <h3 className="text-3xl font-bold mb-5 text-[#091413]">Visi Kami</h3>
            <p className="text-gray-600 text-lg leading-relaxed">Menjadi pionir solusi digital yang memberdayakan setiap bisnis untuk mencapai potensi maksimalnya.</p>
          </motion.div>
          
          <motion.div variants={fadeIn} className="p-10 rounded-[2.5rem] bg-[#091413] text-white shadow-xl group hover:-translate-y-2 transition-all duration-500">
            <div className="w-16 h-16 bg-[#B0E4CC] text-[#091413] rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:-rotate-12 transition-transform"><FaRocket /></div>
            <h3 className="text-3xl font-bold mb-5">Misi Kami</h3>
            <ul className="space-y-4 text-white/70">
              <li className="flex gap-3"><span className="text-[#408A71] font-bold">✓</span> Ekosistem web intuitif & performa tinggi.</li>
              <li className="flex gap-3"><span className="text-[#408A71] font-bold">✓</span> Dukungan teknis yang proaktif.</li>
              <li className="flex gap-3"><span className="text-[#408A71] font-bold">✓</span> Digitalisasi UMKM standar premium.</li>
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 3: NILAI INTI */}
      <section className="py-24 px-5 bg-[#f0f4f3]">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={staggerContainer}
          className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8"
        >
          {nilaiInti.map((item, index) => (
            <motion.div 
              key={index} 
              variants={fadeIn}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm"
            >
              <div className="text-5xl text-[#285A48] mb-8 opacity-80">{item.icon}</div>
              <h4 className="text-xl font-bold mb-4">{item.title}</h4>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* SECTION 4: FILOSOFI KERJA (MOTIF DOTS + PARALLAX EFFECT) */}
      <section className="py-24 px-5 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.15]" 
          style={{ backgroundImage: `radial-gradient(#408A71 1.5px, transparent 1.5px)`, backgroundSize: '30px 30px' }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#091413] rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-2xl border border-white/5"
          >
            <div className="md:w-1/2 p-10 md:p-20 text-white flex flex-col justify-center">
              <h2 className="text-[#408A71] font-bold mb-4">Filosofi Kerja</h2>
              <h3 className="text-4xl font-bold mb-8">"Sinergi & <span className="text-[#B0E4CC]">Empati"</span></h3>
              <p className="text-white/60 text-lg mb-8 italic leading-relaxed">
                "Kami tidak hanya membangun baris kode, kami membangun solusi yang menghubungkan manusia dengan teknologi."
              </p>
              <div className="flex items-center gap-4 border-l-2 border-[#408A71] pl-6 py-2">
                <FaQuoteLeft className="text-[#408A71] text-2xl" />
                <p className="text-white/80 font-medium">Setiap proyek adalah karya seni yang fungsional.</p>
              </div>
            </div>

            <div className="md:w-1/2 bg-[#285A48]/40 backdrop-blur-xl p-10 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 w-full">
                {[
                  { n: "01", t: "Riset", bg: "bg-[#B0E4CC]", text: "text-[#091413]" },
                  { n: "02", t: "Strategi", bg: "bg-white/10", text: "text-white" },
                  { n: "03", t: "Eksekusi", bg: "bg-white/10", text: "text-white" },
                  { n: "04", t: "Optimasi", bg: "bg-[#408A71]", text: "text-white" }
                ].map((step, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
                    className={`${step.bg} aspect-square rounded-3xl flex flex-col items-center justify-center ${step.text} border border-white/10 shadow-lg`}
                  >
                    <span className="text-4xl font-black">{step.n}</span>
                    <p className="text-[11px] uppercase tracking-widest font-bold mt-2">{step.t}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="py-20 px-5 text-center"
      >
        <h3 className="text-3xl font-bold text-[#091413] mb-8">Siap Berkolaborasi Bersama Kami?</h3>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate("/kontak-kami")}
          className="bg-[#408A71] text-white px-12 py-4 rounded-full font-extrabold shadow-xl hover:bg-[#285A48] transition-colors"
        >
          Hubungi Kami Sekarang
        </motion.button>
      </motion.section>
    </div>
  );
};

export default AboutPage;