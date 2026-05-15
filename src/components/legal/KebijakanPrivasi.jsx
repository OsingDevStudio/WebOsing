import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { 
  FaClipboardList, 
  FaUserSecret, 
  FaUserShield, 
  FaUserEdit 
} from "react-icons/fa";

const KebijakanPrivasi = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const privacyPoints = [
    {
      icon: <FaClipboardList />,
      title: "Pengumpulan Informasi",
      content: "Kami mengumpulkan data yang Anda berikan secara sukarela seperti nama, kontak, dan detail teknis proyek melalui formulir di situs kami. Data ini hanya digunakan untuk kepentingan komunikasi dan pengembangan solusi digital Anda."
    },
    {
      icon: <FaUserSecret />,
      title: "Kerahasiaan Informasi",
      content: "Seluruh informasi bisnis, ide kreatif, dan data pribadi yang Anda bagikan kepada Osing Dev bersifat rahasia. Kami menjamin data tersebut tidak akan disebarluaskan kepada pihak ketiga tanpa persetujuan tertulis dari Anda."
    },
    {
      icon: <FaUserShield />,
      title: "Keamanan Pelanggan",
      content: "Kami menerapkan protokol keamanan siber yang ketat dan enkripsi data untuk melindungi aset digital pelanggan dari akses yang tidak sah, perubahan, atau kebocoran informasi selama masa kerja sama."
    },
    {
      icon: <FaUserEdit />,
      title: "Hak Pelanggan",
      content: "Sebagai pelanggan, Anda berhak untuk meninjau, memperbarui, atau meminta penghapusan data pribadi Anda dari sistem kami kapan saja. Kami berkomitmen untuk menghargai kendali penuh Anda atas informasi pribadi."
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
            Privacy Policy
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#091413] mb-6">
            Kebijakan <span className="text-[#408A71]">Privasi</span>
          </h1>
          <p className="text-gray-500 text-lg mb-16 max-w-2xl">
            Bagaimana Osing Dev Studio menjaga, melindungi, dan menghormati data pribadi Anda di setiap langkah transformasi digital.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {privacyPoints.map((point, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:border-[#408A71]/20 transition-all duration-500"
              >
                <div className="w-14 h-14 bg-[#091413] text-[#B0E4CC] rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {point.icon}
                </div>
                <h3 className="text-xl font-bold text-[#091413] mb-4 group-hover:text-[#408A71] transition-colors">
                  {point.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {point.content}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Trust Banner */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-20 p-10 rounded-[3rem] bg-gradient-to-br from-[#091413] to-[#1a2e2b] text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
          >
            <div className="relative z-10">
              <h4 className="text-2xl font-bold mb-2">Privasi Anda Aman Bersama Kami.</h4>
              <p className="text-[#B0E4CC]/70">Punya pertanyaan lebih lanjut mengenai penggunaan data?</p>
            </div>
            <button 
              className="relative z-10 px-8 py-4 bg-[#408A71] hover:bg-[#285A48] text-white rounded-2xl font-bold transition-all shadow-lg"
              onClick={() => window.location.href = '/kontak-kami'}
            >
              Hubungi Tim Legal
            </button>
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#408A71] rounded-full blur-[100px] opacity-20 -mr-20 -mt-20" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default KebijakanPrivasi;