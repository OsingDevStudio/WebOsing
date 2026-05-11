import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  useEffect(() => {
    // Inisialisasi animasi AOS
    AOS.init({ 
      duration: 1000, 
      once: true,
      mirror: false 
    });
  }, []);

  return (
    <section id="portfolio" className="py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-5">
        
        {/* JUDUL SECTION */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Hasil Karya <span className="text-orange-500">Unggulan</span>
          </h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Kami mengubah ide menjadi kenyataan digital yang fungsional dan estetik. Lihat beberapa proyek yang telah kami selesaikan untuk klien kami.
          </p>
        </div>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Proyek 1 - Grid Besar (Kiri) */}
          <div 
            className="md:col-span-8 bg-slate-100 rounded-3xl overflow-hidden group relative h-[400px] border border-slate-200"
            data-aos="zoom-in-right"
          >
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
              alt="E-Commerce Project"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-8">
              <h3 className="text-white text-2xl font-bold">E-Commerce Modern</h3>
              <p className="text-white/80 text-sm">Fullstack Development - React & Node.js</p>
            </div>
          </div>

          {/* Proyek 2 - Grid Kecil Tinggi (Kanan) */}
          <div 
            className="md:col-span-4 bg-orange-50 rounded-3xl overflow-hidden group relative h-[400px] border border-slate-200"
            data-aos="zoom-in-left"
          >
            <img 
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop" 
              alt="Mobile UI Design"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-8">
              <h3 className="text-white text-xl font-bold">Mobile Apps UI</h3>
              <p className="text-white/80 text-sm">Responsive Design Specialist</p>
            </div>
          </div>

          {/* Proyek 3 - Grid Lebar (Bawah) */}
          <div 
            className="md:col-span-12 bg-slate-100 rounded-3xl overflow-hidden group relative h-[300px] border border-slate-200"
            data-aos="fade-up"
          >
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop" 
              alt="Corporate Website"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-8">
              <h3 className="text-white text-2xl font-bold">Corporate Landing Page</h3>
              <p className="text-white/80 text-sm">SEO Optimized & High Performance</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Portfolio;