import { FaWhatsapp } from "react-icons/fa";

const CTA = () => {
  return (
    <section className="py-20 bg-[#091413] relative overflow-hidden text-center">
      {/* Dekorasi Cahaya Halus */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="w-[300px] h-[300px] bg-[#408A71]/20 rounded-full blur-[120px] mx-auto"></div>
      </div>

      <div className="max-w-3xl mx-auto px-5 relative z-10">
        
        {/* TITLE */}
        <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Siap Membangun <span className="text-[#B0E4CC]">Website Impian?</span>
        </h3>

        {/* DESC */}
        <p className="text-slate-300 text-lg md:text-xl mb-10 leading-relaxed">
          Konsultasikan kebutuhan website Anda dengan tim profesional kami secara gratis. Mari wujudkan ide Anda menjadi kenyataan digital.
        </p>

        {/* BUTTON */}
        <a
          href="https://wa.me/6281938434423"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#408A71] hover:bg-[#285A48] text-white px-10 py-4 rounded-full text-lg font-bold shadow-lg shadow-[#408A71]/20 hover:shadow-xl hover:shadow-[#408A71]/40 hover:-translate-y-1 transition-all duration-300"
        >
          <FaWhatsapp className="text-2xl" />
          Hubungi Kami Sekarang
        </a>
        
        {/* Teks Tambahan Kecil */}
        <p className="text-slate-500 text-sm mt-6">
          Respons cepat dalam hitungan jam di hari kerja.
        </p>
      </div>
    </section>
  );
};

export default CTA;