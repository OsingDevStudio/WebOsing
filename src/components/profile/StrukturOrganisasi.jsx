import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaUserTie, FaCode, FaPaintBrush, FaDatabase } from "react-icons/fa";

const StrukturOrganisasi = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="bg-white min-h-screen pt-32 pb-20 px-5 relative">
      {/* MOTIF KOTAK-KOTAK (GRID PATTERN) */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `linear-gradient(#091413 1px, transparent 1px), linear-gradient(90deg, #091413 1px, transparent 1px)`, 
          backgroundSize: '40px 40px' 
        }} 
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#408A71] font-bold uppercase tracking-[0.3em] text-sm mb-4"
          >
            Our Core Team
          </motion.h2>
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-black text-[#091413]"
          >
            Struktur Organisasi
          </motion.h1>
          <div className="w-24 h-1 bg-[#408A71] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Organization Tree Structure */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          {/* Level 1: Anggy Mutydinata */}
          <motion.div variants={itemVariants} className="mb-16 relative">
            <div className="bg-[#091413] text-white p-8 rounded-[2.5rem] shadow-2xl text-center w-72 border-b-4 border-[#408A71] group hover:-translate-y-2 transition-transform duration-300 relative z-20">
              <div className="w-20 h-20 bg-[#408A71] rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl shadow-lg">
                <FaUserTie />
              </div>
              <h3 className="font-bold text-xl tracking-wide uppercase">Anggy Mutydinata</h3>
              <p className="text-[#B0E4CC] text-sm font-medium mt-1">CEO & Lead Frontend Developer</p>
            </div>
            {/* Connecting Line Down */}
            <div className="absolute left-1/2 -bottom-16 w-0.5 h-16 bg-gray-200 -translate-x-1/2 hidden md:block z-10"></div>
          </motion.div>

          {/* Level 2: Core Team */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32 relative w-full max-w-4xl pt-4">
            {/* Horizontal Line for MD */}
            <div className="absolute top-0 left-1/4 right-1/4 h-0.5 bg-gray-200 hidden md:block"></div>

            {/* Backend - Dimas Prayogo */}
            <motion.div variants={itemVariants} className="relative pt-8">
              <div className="absolute top-0 left-1/2 w-0.5 h-8 bg-gray-200 -translate-x-1/2 hidden md:block"></div>
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl hover:shadow-2xl transition-all text-center group backdrop-blur-sm bg-white/80">
                <div className="w-16 h-16 bg-[#f0f7f5] text-[#408A71] rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl group-hover:bg-[#408A71] group-hover:text-white transition-all duration-300">
                  <FaDatabase />
                </div>
                <h4 className="font-bold text-lg text-[#091413] uppercase tracking-tight">Dimas Prayogo</h4>
                <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest mt-2">Backend Developer</p>
              </div>
            </motion.div>

            {/* UI/UX - Amelia Amirah Alodia */}
            <motion.div variants={itemVariants} className="relative pt-8">
              <div className="absolute top-0 left-1/2 w-0.5 h-8 bg-gray-200 -translate-x-1/2 hidden md:block"></div>
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl hover:shadow-2xl transition-all text-center group backdrop-blur-sm bg-white/80">
                <div className="w-16 h-16 bg-[#f0f7f5] text-[#408A71] rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl group-hover:bg-[#408A71] group-hover:text-white transition-all duration-300">
                  <FaPaintBrush />
                </div>
                <h4 className="font-bold text-lg text-[#091413] uppercase tracking-tight">Amelia Amirah Alodia</h4>
                <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest mt-2">UI/UX Designer</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 text-center"
        >
          <div className="inline-block p-1 px-4 rounded-full bg-[#f0f7f5] text-[#408A71] text-xs font-bold uppercase tracking-widest mb-4">
            Collaborative Spirit
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto italic text-sm">
            "Sinergi antara manajemen, pengembangan teknis, dan estetika visual adalah kunci kami dalam menciptakan produk digital yang luar biasa."
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default StrukturOrganisasi;