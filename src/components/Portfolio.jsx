import React, { useState } from "react";
import { FaExternalLinkAlt, FaTag, FaTimes } from "react-icons/fa";

const Portfolio = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Risol Aril - Web Ordering System",
      category: "Food & Beverage Solution",
      description: "Platform katalog digital dan manajemen pesanan untuk UMKM kuliner. Menghadirkan pengalaman belanja premium dengan navigasi menu yang intuitif.",
      images: [
        "Risol1.png", 
        "Risol2.jpeg",
        "Risol3.jpeg",
      ],
      tags: ["React", "Custom UI", "Order System"],
    },
    {
      id: 2,
      title: "E-Commerce Produk Lokal",
      category: "E-Commerce",
      description: "Platform belanja online responsif untuk jangkauan pasar produk unggulan daerah.",
      images: [
        "/umkm-laptop.jpg",
        "/umkm-hp1.jpg",
        "/umkm-hp2.jpg",
      ],
      tags: ["Next.js", "PostgreSQL"],
    },
  ];

  return (
    /* 
       MENAMBAHKAN MOTIF TITIK-TITIK:
       Menggunakan inline style radial-gradient agar seragam dengan ContactPage.
    */
    <section 
      id="portofolio" 
      className="py-24 bg-slate-50 relative overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(#cbd5e1 1.2px, transparent 1.2px)`,
        backgroundSize: '24px 24px'
      }}
    >
      <div className="max-w-6xl mx-auto px-5 relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="text-[#408A71] font-bold tracking-widest uppercase text-sm bg-white/50 px-4 py-1 rounded-full backdrop-blur-sm border border-slate-200/50">
            Showcase Terkini
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#091413] mt-4">
            Proyek Pilihan <span className="text-[#408A71]">Osing Dev</span>
          </h2>
        </div>

        {/* GRID PROJECT */}
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div 
              key={project.id} 
              /* Menggunakan bg-white/80 dan backdrop-blur agar motif titik terlihat samar di balik kartu */
              className="bg-white/80 backdrop-blur-md rounded-[32px] overflow-hidden shadow-xl shadow-slate-200/50 border border-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:bg-white/90"
            >
              {/* DISPLAY MULTI-DEVICE */}
              <div className="p-4">
                <div className="relative h-64 md:h-80 bg-slate-100 rounded-2xl overflow-hidden cursor-pointer">
                  
                  {/* Laptop View */}
                  <div 
                    className="absolute inset-0 p-6 flex justify-center items-center"
                    onClick={() => setSelectedImg(project.images[0])}
                  >
                    <div className="w-full h-full relative shadow-2xl rounded-lg overflow-hidden border-[6px] border-[#091413]">
                      <img 
                        src={project.images[0]} 
                        alt="Desktop"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* HP 1 */}
                  <div 
                    className="absolute bottom-4 left-8 w-20 md:w-24 aspect-[9/19] bg-[#091413] rounded-2xl border-[3px] border-[#091413] shadow-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:-rotate-3 z-10 overflow-hidden"
                    onClick={(e) => { e.stopPropagation(); setSelectedImg(project.images[1]); }}
                  >
                    <img src={project.images[1]} alt="Mobile 1" className="w-full h-full object-cover" />
                  </div>

                  {/* HP 2 */}
                  <div 
                    className="absolute bottom-4 right-8 w-20 md:w-24 aspect-[9/19] bg-[#091413] rounded-2xl border-[3px] border-[#091413] shadow-2xl transition-transform duration-500 group-hover:-translate-y-4 group-hover:rotate-3 z-10 overflow-hidden"
                    onClick={(e) => { e.stopPropagation(); setSelectedImg(project.images[2]); }}
                  >
                    <img src={project.images[2]} alt="Mobile 2" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* INFO CONTENT */}
              <div className="p-8 pt-2">
                <div className="flex items-center gap-2 text-[#408A71] text-xs font-bold uppercase mb-3">
                  <FaTag /> {project.category}
                </div>
                <h3 className="text-2xl font-bold text-[#091413] mb-3 group-hover:text-[#408A71] transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{project.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="text-[10px] bg-slate-100 text-slate-500 px-2 py-1 rounded-md font-medium">{tag}</span>
                    ))}
                  </div>
                  <button className="text-[#091413] hover:text-[#408A71] transition-colors"><FaExternalLinkAlt /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[999] bg-[#091413]/90 backdrop-blur-sm flex items-center justify-center p-5 animate-in fade-in duration-300"
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute top-10 right-10 text-white text-3xl"><FaTimes /></button>
          <img 
            src={selectedImg} 
            className="max-w-full max-h-[85vh] rounded-xl shadow-2xl object-contain border-4 border-white/10"
            alt="Full Preview"
          />
        </div>
      )}
    </section>
  );
};

export default Portfolio;