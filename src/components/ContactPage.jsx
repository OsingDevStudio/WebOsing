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
  FaPaperPlane,
  FaClock,
  FaCopy,
  FaCheck
} from "react-icons/fa";

const ContactPage = () => {
  // Link navigasi langsung ke Google Maps
  const googleMapsDirectUrl = "https://maps.app.goo.gl/cDDLccEEsKYd13AC9?g_st=ac";
  
  // Link Embed untuk tampilan visual peta
  const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.828741369796!2d114.3292410750095!3d-8.219985991812502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd15100029dc95f%3A0x805888551ca759f5!2sOsing%20Dev%20Studio!5e0!3m2!1sid!2sid!4v1715767845321!5m2!1sid!2sid";

  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    pesan: ""
  });

  const [copied, setCopied] = useState(false);
  const alamatLengkap = "Dusun Krajan, Rejosari, Kec. Glagah, Kabupaten Banyuwangi, Jawa Timur.";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopyAlamat = () => {
    navigator.clipboard.writeText(alamatLengkap);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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

          {/* Social Media Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            {[
              { icon: <FaPhoneAlt />, label: "Telepon", val: "0819-3843-4423", color: "text-[#408A71]", bg: "bg-[#B0E4CC]/20", link: "tel:081938434423", btn: "Hubungi Langsung", theme: "bg-[#091413]" },
              { icon: <FaWhatsapp />, label: "WhatsApp", val: "0819-3843-4423", color: "text-green-500", bg: "bg-green-50", link: "https://wa.me/6281938434423", btn: "Chat Sekarang", theme: "bg-[#408A71]" },
              { icon: <FaInstagram />, label: "Instagram", val: "@osingdevstudio", color: "text-pink-500", bg: "bg-pink-50", link: "https://www.instagram.com/osingdevstudio/", btn: "Lihat Profil", theme: "bg-gradient-to-tr from-[#408A71] to-[#091413]" },
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

          {/* CARD KUNJUNGI STUDIO KAMI */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-6xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-white via-white to-slate-50/50 backdrop-blur-xl rounded-[40px] p-6 md:p-10 shadow-2xl border border-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-[#408A71]/5 rounded-full blur-3xl -ml-10 -mt-10"></div>
              
              <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
                
                {/* Informasi Kiri */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
                  <div>
                    <div className="w-14 h-14 bg-gradient-to-tr from-[#408A71] to-[#B0E4CC] text-white rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-md shadow-[#408A71]/20">
                      <FaMapMarkerAlt />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-[#091413] mb-3 tracking-tight leading-tight">
                      Kunjungi <span className="text-[#408A71]">Studio</span> Kreatif Kami
                    </h2>
                    <p className="text-slate-500 text-sm md:text-base font-medium">
                      Mari bicarakan proyek masa depan Anda secara tatap muka dengan tim expert kami sambil menikmati kopi hangat.
                    </p>
                  </div>

                  {/* Kotak Alamat */}
                  <div className="bg-slate-100/80 border border-slate-200/60 p-5 rounded-2xl relative group">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Alamat Kantor</span>
                    <p className="text-sm font-semibold text-slate-700 leading-relaxed pr-8">
                      {alamatLengkap}
                    </p>
                    <button 
                      onClick={handleCopyAlamat}
                      className="absolute top-4 right-4 text-slate-400 hover:text-[#408A71] transition-colors p-1.5 bg-white rounded-lg shadow-sm"
                    >
                      {copied ? <FaCheck className="text-green-500 text-xs" /> : <FaCopy className="text-xs" />}
                    </button>
                    {copied && <span className="absolute right-12 top-5 text-[10px] bg-green-500 text-white px-2 py-0.5 rounded font-bold">Tersalin!</span>}
                  </div>

                  <div className="flex flex-col gap-3 pt-2">
                    <div className="flex items-center gap-3 text-slate-600">
                      <FaClock className="text-[#408A71] text-sm" />
                      <span className="text-xs md:text-sm font-medium">Senin - Sabtu: <strong className="text-slate-800">09.00 - 17.00 WIB</strong></span>
                    </div>
                    <div className="text-[11px] font-bold text-[#408A71] bg-[#B0E4CC]/20 px-4 py-2 rounded-full w-fit animate-pulse">
                      📍 Klik area peta untuk navigasi langsung
                    </div>
                  </div>
                </div>

                {/* Visual Peta (Responsive Color) */}
                <div className="lg:col-span-7 h-[350px] sm:h-[400px] md:h-[480px] rounded-[30px] overflow-hidden border-4 border-white shadow-xl relative group">
                  
                  <a 
                    href={googleMapsDirectUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="absolute inset-0 z-30 block w-full h-full bg-transparent cursor-pointer"
                  >
                    <span className="sr-only">Buka Google Maps</span>
                  </a>

                  {/* Overlay efek hover khusus desktop */}
                  <div className="absolute inset-0 bg-black/5 md:group-hover:bg-transparent transition-all duration-500 z-20 pointer-events-none"></div>
                  
                  <iframe
                    title="Peta Osing Dev Studio"
                    src={googleMapsEmbedUrl}
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy"
                    // md:grayscale membuat hitam putih di desktop, berwarna di HP. 
                    // group-hover:grayscale-0 membuat jadi berwarna saat di-hover di desktop.
                    className="md:grayscale contrast-115 md:group-hover:grayscale-0 md:group-hover:scale-105 transition-all duration-1000 ease-out pointer-events-none relative z-10"
                  ></iframe>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Form Proyek WhatsApp */}
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