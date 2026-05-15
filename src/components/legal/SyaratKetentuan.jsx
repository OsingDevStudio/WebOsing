import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { 
  FaGavel, 
  FaWallet, 
  FaShieldVirus, 
  FaUserLock 
} from "react-icons/fa";

const SyaratKetentuan = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const sections = [
    {
      icon: <FaGavel />,
      title: "Ketentuan Umum Pekerjaan",
      content: "Osing Dev Studio memulai pengerjaan setelah cakupan proyek (scope of work) disepakati. Kami berhak menyesuaikan jadwal pengerjaan jika terjadi permintaan fitur tambahan di luar kesepakatan awal."
    },
    {
      icon: <FaWallet />,
      title: "Mekanisme Pembayaran",
      content: "Pembayaran dilakukan dalam dua tahap: Uang Muka (DP) sebesar 50% untuk memulai proyek, dan pelunasan 50% setelah proyek selesai diuji (UAT) sebelum penyerahan aset atau kode sumber."
    },
    {
      icon: <FaShieldVirus />,
      title: "Jaminan Garansi & Batasan Tanggung Jawab",
      content: "Kami memberikan garansi perbaikan bug selama 3 bulan setelah proyek selesai. Osing Dev tidak bertanggung jawab atas kerusakan yang disebabkan oleh perubahan kode oleh pihak ketiga atau kelalaian pengelolaan server klien."
    },
    {
      icon: <FaUserLock />,
      title: "Kerahasiaan & Keamanan Data",
      content: "Kami menjamin kerahasiaan seluruh ide bisnis dan data sensitif klien. Informasi tidak akan dibagikan kepada pihak luar tanpa persetujuan tertulis, kecuali untuk kebutuhan integrasi layanan pihak ketiga yang disepakati."
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-40 pb-20 px-5 relative overflow-hidden">
      {/* Background Motif Kotak-kotak */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(#091413 1px, transparent 1px), linear-gradient(90deg, #091413 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-block px-4 py-1 bg-[#f0f7f5] text-[#408A71] rounded-full text-xs font-bold tracking-widest mb-4 uppercase">
            Legal Document
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#091413] mb-6">
            Syarat & <span className="text-[#408A71]">Ketentuan</span>
          </h1>
          <p className="text-gray-500 text-lg mb-16 max-w-2xl">
            Kerangka kerja sama yang transparan untuk memastikan setiap proyek digital berjalan sukses dan aman bersama Osing Dev Studio.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {sections.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-[#f0f7f5] text-[#408A71] rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:bg-[#091413] group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#091413] mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {item.content}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="mt-16 p-8 rounded-[2rem] bg-[#091413] text-white text-center relative overflow-hidden">
             <div className="relative z-10">
                <p className="text-[#B0E4CC] font-medium italic">
                  "Integritas adalah fondasi utama kami. Setiap aturan dibuat untuk melindungi visi besar Anda."
                </p>
             </div>
             {/* Subtle Decorative Circle */}
             <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#408A71] rounded-full blur-[60px] opacity-30" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SyaratKetentuan;