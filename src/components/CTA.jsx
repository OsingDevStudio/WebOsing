import { FaWhatsapp } from "react-icons/fa";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-center">
      <div className="max-w-3xl mx-auto px-5">
        
        {/* TITLE */}
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Siap Membangun Website Impian?
        </h3>

        {/* DESC */}
        <p className="text-white/80 text-lg mb-8">
          Konsultasikan kebutuhan website Anda dengan tim profesional kami secara gratis
        </p>

        {/* BUTTON */}
        <a
          href="https://wa.me/6281938434423"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition"
        >
          <FaWhatsapp className="text-xl" />
          Hubungi Kami Sekarang
        </a>
      </div>
    </section>
  );
};

export default CTA;