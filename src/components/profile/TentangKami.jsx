import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  FaEye, 
  FaRocket, 
  FaHandshake, 
  FaLightbulb, 
  FaChess 
} from "react-icons/fa";

const TentangKami = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="bg-white min-h-screen overflow-x-hidden font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-20 px-5 bg-[#091413] text-white relative overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-[#408A71] rounded-full blur-[120px]"
        />
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <h2 className="text-[#408A71] font-bold tracking-[0.2em] uppercase mb-4 text-sm">Profile Perusahaan</h2>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Osing Dev Studio: <br /> 
              <span className="text-[#B0E4CC]">Meningkatkan</span> Kehadiran Digital Anda.
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg">
              Kami mentransformasi ide menjadi solusi digital luar biasa dengan teknologi website masa kini yang cepat, aman, dan responsif.
            </p>
            <div className="flex gap-8 border-t border-white/10 pt-8">
              <div><h3 className="text-3xl font-bold text-[#408A71]">50+</h3><p className="text-xs text-white/50 uppercase tracking-wider">Proyek Selesai</p></div>
              <div><h3 className="text-3xl font-bold text-[#408A71]">24/7</h3><p className="text-xs text-white/50 uppercase tracking-wider">Dukungan Ahli</p></div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }} 
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1000" 
              alt="Studio Osing Dev" 
              className="rounded-2xl grayscale shadow-2xl border border-white/10" 
            />
          </motion.div>
        </div>
      </section>

      {/* 2. VISI & MISI SECTION */}
      <section className="py-24 px-5 relative bg-white">
        <div className="absolute inset-0 z-0 opacity-[0.04]" style={{ backgroundImage: `linear-gradient(#091413 1px, transparent 1px), linear-gradient(90deg, #091413 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={staggerContainer} 
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 relative z-10"
        >
          <motion.div variants={fadeIn} className="p-10 rounded-[2.5rem] bg-[#f8faf9]/80 backdrop-blur-sm border border-gray-100 shadow-sm group hover:bg-white hover:shadow-2xl transition-all duration-500">
            <div className="w-16 h-16 bg-[#408A71] text-white rounded-2xl flex items-center justify-center text-3xl mb-8">
              <FaEye />
            </div>
            <h3 className="text-3xl font-bold mb-5 text-[#091413]">Visi Kami</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Menjadi pionir solusi digital yang memberdayakan setiap bisnis untuk mencapai potensi maksimalnya melalui inovasi teknologi yang inklusif.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="p-10 rounded-[2.5rem] bg-[#091413] text-white shadow-xl group hover:-translate-y-2 transition-all duration-500">
            <div className="w-16 h-16 bg-[#B0E4CC] text-[#091413] rounded-2xl flex items-center justify-center text-3xl mb-8">
              <FaRocket />
            </div>
            <h3 className="text-3xl font-bold mb-5">Misi Kami</h3>
            <ul className="space-y-4 text-white/70">
              <li className="flex gap-3"><span className="text-[#408A71] font-bold">✓</span> Membangun ekosistem web intuitif & performa tinggi.</li>
              <li className="flex gap-3"><span className="text-[#408A71] font-bold">✓</span> Memberikan dukungan teknis yang proaktif dan solutif.</li>
              <li className="flex gap-3"><span className="text-[#408A71] font-bold">✓</span> Mendigitalisasi UMKM dengan standar kualitas premium.</li>
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* 3. NILAI INTI / VALUES */}
      <section className="py-20 bg-gray-50 px-5 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[#408A71] font-bold uppercase tracking-widest text-sm mb-3">Nilai-Nilai Kami</h2>
            <h3 className="text-4xl font-bold text-[#091413]">Dasar Setiap Langkah Kami</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="text-4xl text-[#408A71] mb-6 flex justify-center"><FaHandshake /></div>
              <h4 className="text-xl font-bold mb-3 text-[#091413]">Integritas</h4>
              <p className="text-gray-500 text-sm leading-relaxed">Kejujuran dan transparansi dalam setiap proses pengerjaan proyek.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="text-4xl text-[#408A71] mb-6 flex justify-center"><FaLightbulb /></div>
              <h4 className="text-xl font-bold mb-3 text-[#091413]">Inovasi</h4>
              <p className="text-gray-500 text-sm leading-relaxed">Selalu mengeksplorasi teknologi web terbaru demi hasil yang fungsional.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="text-4xl text-[#408A71] mb-6 flex justify-center"><FaChess /></div>
              <h4 className="text-xl font-bold mb-3 text-[#091413]">Strategis</h4>
              <p className="text-gray-500 text-sm leading-relaxed">Setiap keputusan didasarkan pada data dan riset pasar yang akurat.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FILOSOFI KERJA (POSISI DI BAWAH NILAI-NILAI) */}
      <section className="py-24 bg-[#091413] text-white px-5 overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeIn}
          >
            <h2 className="text-[#408A71] font-bold uppercase tracking-widest text-sm mb-6">Filosofi Kerja</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 italic">
              "Sinergi & <span className="text-[#B0E4CC] not-italic text-shadow">Empati</span>"
            </h3>
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              "Kami tidak hanya membangun baris kode, kami membangun solusi yang menghubungkan manusia dengan teknologi."
            </p>
            <div className="border-l-4 border-[#408A71] pl-6 py-2">
              <p className="text-xl font-medium text-[#B0E4CC]">
                Setiap proyek adalah karya seni yang fungsional.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {[
              { num: "01", title: "RISET", color: "bg-[#B0E4CC] text-[#091413]" },
              { num: "02", title: "STRATEGI", color: "bg-white/10 text-white" },
              { num: "03", title: "EKSEKUSI", color: "bg-white/10 text-white" },
              { num: "04", title: "OPTIMASI", color: "bg-[#408A71] text-white" }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`${step.color} aspect-square rounded-[2rem] flex flex-col items-center justify-center gap-2 p-6 transition-transform hover:scale-105 cursor-default`}
              >
                <span className="text-4xl md:text-5xl font-black">{step.num}</span>
                <span className="text-[10px] md:text-xs font-bold tracking-[0.2em]">{step.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <motion.section 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        className="py-24 px-5 text-center bg-white"
      >
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-5xl font-bold text-[#091413] mb-8 leading-tight">
            Siap Membangun Masa Depan <br /> Digital Bersama Kami?
          </h3>
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/kontak-kami")}
            className="bg-[#408A71] text-white px-12 py-5 rounded-full font-extrabold shadow-2xl hover:bg-[#285A48] transition-all"
          >
            Mulai Diskusi Sekarang
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default TentangKami;