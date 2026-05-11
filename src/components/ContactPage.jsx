import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaWhatsapp, FaInstagram, FaArrowLeft, FaPhoneAlt } from "react-icons/fa";

const ContactPage = () => {
  // Link Google Maps yang sudah kamu copy tadi
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Osing+Dev+Studio+Banyuwangi";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <div className="pt-32 pb-20 px-6 flex-grow">
        <div className="max-w-6xl mx-auto">
          
          {/* Navigasi Kembali */}
          <div className="max-w-5xl mx-auto mb-10">
            <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-orange-500 transition-colors font-medium group">
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Kembali ke Beranda
            </Link>
          </div>

          <div className="text-center mb-16">
            <h1 className="text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Hubungi Kami</h1>
            <p className="text-lg text-slate-600 font-medium">Pilih saluran komunikasi yang paling nyaman bagi Anda</p>
          </div>

          {/* GRID KARTU KONTAK */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-16">
            
            {/* 1. TELEPON */}
            <div className="bg-white p-10 rounded-[40px] shadow-xl shadow-slate-200/50 flex flex-col items-center text-center border border-slate-50 transition-all hover:scale-[1.02]">
              <div className="w-16 h-16 bg-indigo-50 text-indigo-500 rounded-2xl flex items-center justify-center text-3xl mb-6"><FaPhoneAlt /></div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Telepon</h3>
              <p className="text-2xl font-bold text-slate-800 mb-2">0819-3843-4423</p>
              <a href="tel:081938434423" className="mt-4 w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all text-center shadow-lg shadow-indigo-100">Hubungi Langsung</a>
            </div>

            {/* 2. WHATSAPP */}
            <div className="bg-white p-10 rounded-[40px] shadow-xl shadow-slate-200/50 flex flex-col items-center text-center border border-slate-50 transition-all hover:scale-[1.02]">
              <div className="w-16 h-16 bg-green-50 text-green-500 rounded-2xl flex items-center justify-center text-3xl mb-6"><FaWhatsapp /></div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">WhatsApp</h3>
              <p className="text-2xl font-bold text-slate-800 mb-2">0819-3843-4423</p>
              <a href="https://wa.me/6281938434423" target="_blank" rel="noopener noreferrer" className="mt-4 w-full py-4 bg-green-600 text-white rounded-2xl font-bold hover:bg-green-700 transition-all text-center shadow-lg shadow-green-100">Chat Sekarang</a>
            </div>

            {/* 3. INSTAGRAM */}
            <div className="bg-white p-10 rounded-[40px] shadow-xl shadow-slate-200/50 flex flex-col items-center text-center border border-slate-50 transition-all hover:scale-[1.02]">
              <div className="w-16 h-16 bg-pink-50 text-pink-500 rounded-2xl flex items-center justify-center text-3xl mb-6"><FaInstagram /></div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Instagram</h3>
              <p className="text-2xl font-bold text-slate-800 mb-2">@osingdev</p>
              <a href="https://instagram.com/osingdev" target="_blank" rel="noopener noreferrer" className="mt-4 w-full py-4 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white rounded-2xl font-bold hover:opacity-90 transition-all text-center shadow-lg shadow-pink-100">Kunjungi Profil</a>
            </div>

            {/* 4. GOOGLE MAPS */}
            <div className="bg-white p-10 rounded-[40px] shadow-xl shadow-slate-200/50 flex flex-col items-center text-center border border-slate-50 transition-all hover:scale-[1.02]">
              <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center text-3xl mb-6"><FaMapMarkerAlt /></div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Lokasi</h3>
              <p className="text-2xl font-bold text-slate-800 mb-2">Banyuwangi, Glagah</p>
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="mt-4 w-full py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all text-center shadow-lg shadow-blue-100">Buka di Maps</a>
            </div>
          </div>

          {/* JAM OPERASIONAL */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl shadow-slate-200/60 border border-slate-100">
              <h2 className="text-3xl font-extrabold text-orange-500 text-center mb-10 tracking-tight">Jam Operasional</h2>
              <div className="space-y-4">
                <div className="bg-slate-50/50 p-6 md:px-10 rounded-3xl flex justify-between items-center border border-slate-100">
                  <span className="text-xl md:text-2xl font-bold text-slate-800">Senin - Jumat</span>
                  <span className="text-xl md:text-2xl font-bold text-orange-500">08:00 - 20:00 WIB</span>
                </div>
                <div className="bg-slate-50/50 p-6 md:px-10 rounded-3xl flex justify-between items-center border border-slate-100">
                  <span className="text-xl md:text-2xl font-bold text-slate-800">Sabtu - Minggu</span>
                  <span className="text-xl md:text-2xl font-bold text-orange-500">08:00 - 21:00 WIB</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;