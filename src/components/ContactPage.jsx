import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  FaMapMarkerAlt, 
  FaWhatsapp, 
  FaInstagram, 
  FaArrowLeft, 
  FaPhoneAlt, 
  FaTiktok,
  FaPaperPlane 
} from "react-icons/fa";

const ContactPage = () => {
  // Link navigasi langsung untuk mempermudah pengunjung
  const googleMapsDirectUrl = "https://maps.app.goo.gl/kXpD444wZ68B5Y6z8";
  
  // Link Embed untuk tampilan visual peta
  const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.828741369796!2d114.3292410750095!3d-8.219985991812502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd15100029dc95f%3A0x805888551ca759f5!2sOsing%20Dev%20Studio!5e0!3m2!1sid!2sid!4v1715767845321!5m2!1sid!2sid";

  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    pesan: ""
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    const nomorWA = "6281938434423";
    const { nama, email, pesan } = formData;

    if (!nama || !pesan) {
      alert("Mohon isi Nama dan Pesan Anda.");
      return;
    }

    const pesanFinal = `Halo Osing Dev Studio,%0A%0A*Nama:* ${nama}%0A*Email:* ${email || "-"}%0A*Pesan:* ${pesan}`;
    window.open(`https://wa.me/${nomorWA}?text=${pesanFinal}`, "_blank");
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div 
      className="min-h-screen bg-slate-50 flex flex-col font-sans relative overflow-x-hidden"
      style={{
        backgroundImage: 'radial-gradient(#cbd5e1 1.2px, transparent 1.2px)',
        backgroundSize: '24px 24px'
      }}
    >
      <div className="pt-32 pb-20 px-6 flex-grow relative z-10">
        <div className="max-w-6xl mx-auto">
          
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="max-w-5xl mx-auto mb-10">
            <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-[#408A71] transition-colors font-medium bg-white/60 backdrop-blur-sm px-5 py-2 rounded-full border border-white/50 shadow-sm">
              <FaArrowLeft /> Kembali ke Beranda
            </Link>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-center mb-16">
            <h1 className="text-5xl font-extrabold text-[#091413] mb-4 tracking-tight">Hubungi Kami</h1>
            <p className="text-lg text-slate-600 font-medium italic">"Kami siap membantu mewujudkan ide digital Anda"</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10">
            {[
              { icon: <FaPhoneAlt />, label: "Telepon", val: "0819-3843-4423", color: "text-[#408A71]", bg: "bg-[#B0E4CC]/20", link: "tel:081938434423", btn: "Hubungi Langsung", theme: "bg-[#091413]" },
              { icon: <FaWhatsapp />, label: "WhatsApp", val: "0819-3843-4423", color: "text-green-500", bg: "bg-green-50", link: "https://wa.me/6281938434423", btn: "Chat Sekarang", theme: "bg-[#408A71]" },
              { icon: <FaInstagram />, label: "Instagram", val: "@osingdev", color: "text-pink-500", bg: "bg-pink-50", link: "https://www.instagram.com/osingdev/", btn: "Lihat Profil", theme: "bg-gradient-to-tr from-[#408A71] to-[#091413]" },
              { icon: <FaTiktok />, label: "TikTok", val: "@osing.dev.studio", color: "text-slate-900", bg: "bg-slate-100", link: "https://www.tiktok.com/@osing.dev.studio", btn: "Follow Kami", theme: "bg-slate-900" }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white/70 backdrop-blur-md p-8 rounded-[35px] shadow-xl border border-white/80 flex flex-col items-center text-center">
                <div className={`w-14 h-14 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center text-2xl mb-5`}>{item.icon}</div>
                <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">{item.label}</h3>
                <p className="text-lg font-bold text-[#091413] mb-4">{item.val}</p>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className={`w-full py-3 ${item.theme} text-white rounded-xl font-bold text-sm shadow-lg hover:scale-105 transition-all`}>{item.btn}</a>
              </motion.div>
            ))}
          </div>

          {/* Lokasi Studio - Peta Sekarang Bisa Diklik */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-6xl mx-auto mb-16">
            <div className="bg-white/80 backdrop-blur-xl rounded-[50px] p-4 md:p-8 shadow-2xl border border-white overflow-hidden">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div className="p-6">
                  <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center text-3xl mb-6 shadow-sm">
                    <FaMapMarkerAlt />
                  </div>
                  <h2 className="text-3xl font-black text-[#091413] mb-4 tracking-tight">Kunjungi <span className="text-[#408A71]">Studio</span> Kami</h2>
                  <p className="text-slate-600 leading-relaxed">
                    Dusun Krajan, Rejosari, Kec. Glagah, Kabupaten Banyuwangi. (Satu lokasi dengan Nanda Teknik).
                  </p>
                  <p className="mt-4 text-xs font-bold text-blue-600 uppercase tracking-widest italic">
                    *Klik peta untuk navigasi langsung
                  </p>
                </div>

                <div className="lg:col-span-2 h-[450px] md:h-[550px] rounded-[40px] overflow-hidden border-4 border-white shadow-inner relative group cursor-pointer">
                  {/* Overlay link transparan agar seluruh area peta bisa diklik ke Google Maps */}
                  <a 
                    href={googleMapsDirectUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="absolute inset-0 z-20 bg-transparent"
                  ></a>
                  
                  <iframe
                    title="Peta Osing Dev Studio"
                    src={googleMapsEmbedUrl}
                    width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                    className="grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 pointer-events-none"
                  ></iframe>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-6xl mx-auto mb-16">
            <div className="bg-[#091413] rounded-[50px] p-10 md:p-16 shadow-2xl relative overflow-hidden text-white">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#408A71]/20 rounded-full blur-[120px] -mr-40 -mt-40"></div>
              <div className="grid md:grid-cols-2 gap-12 relative z-10">
                <div>
                  <h2 className="text-4xl font-bold mb-6">Mulai Proyek <span className="text-[#B0E4CC]">Anda?</span></h2>
                  <p className="text-white/50 mb-10 text-lg">Konsultasikan kebutuhan digital Anda langsung ke WhatsApp kami.</p>
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-3xl border border-white/10 w-fit">
                    <FaPaperPlane className="text-[#B0E4CC]" />
                    <span className="font-medium italic text-sm">osingdevstudio@gmail.com</span>
                  </div>
                </div>
                
                <form className="space-y-4" onSubmit={handleWhatsAppSend}>
                  <input name="nama" type="text" placeholder="Nama Lengkap" required value={formData.nama} onChange={handleChange} className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-4 focus:border-[#408A71] outline-none transition-all placeholder:text-slate-500" />
                  <input name="email" type="email" placeholder="Email (Opsional)" value={formData.email} onChange={handleChange} className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-4 focus:border-[#408A71] outline-none transition-all placeholder:text-slate-500" />
                  <textarea name="pesan" placeholder="Ceritakan ide proyek Anda..." rows="3" required value={formData.pesan} onChange={handleChange} className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-4 focus:border-[#408A71] outline-none transition-all resize-none placeholder:text-slate-500"></textarea>
                  <button type="submit" className="w-full py-4 bg-[#408A71] text-white rounded-2xl font-bold hover:bg-[#B0E4CC] hover:text-[#091413] transition-all shadow-xl active:scale-95">
                    Kirim ke WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;