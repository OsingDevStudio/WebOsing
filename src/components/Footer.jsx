import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-6">
      <div className="max-w-6xl mx-auto px-5">
        
        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10 mb-10 text-center md:text-left">
          
          {/* LOGO & DESC */}
          <div>
            <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
              <img
                src="/logo.png"
                alt="logo"
                className="h-12 invert brightness-0"
              />
              <h4 className="text-lg font-semibold">Osing Dev Studio</h4>
            </div>

            <p className="text-slate-400 mb-5">
              Solusi digital inovatif untuk pertumbuhan bisnis Anda di era digital.
            </p>

            {/* SOCIAL */}
            <div className="flex justify-center md:justify-start gap-4">
              <a className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-orange-500 transition">
                <FaInstagram />
              </a>
              <a className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-orange-500 transition">
                <FaFacebook />
              </a>
              <a className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-orange-500 transition">
                <FaLinkedin />
              </a>
              <a className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-orange-500 transition">
                <FaGithub />
              </a>
            </div>
          </div>

          {/* LAYANAN */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Layanan</h4>
            <ul className="space-y-3 text-slate-400">
              <li className="hover:text-orange-500 cursor-pointer transition">
                Web Development
              </li>
              <li className="hover:text-orange-500 cursor-pointer transition">
                UI/UX Design
              </li>
              <li className="hover:text-orange-500 cursor-pointer transition">
                Mobile App
              </li>
              <li className="hover:text-orange-500 cursor-pointer transition">
                Digital Marketing
              </li>
            </ul>
          </div>

          {/* KONTAK */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <ul className="space-y-3 text-slate-400">
              
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <FaPhone className="text-orange-500" />
                +62 819-3843-4423
              </li>

              <li className="flex items-center gap-3 justify-center md:justify-start">
                <FaEnvelope className="text-orange-500" />
                osingdevstudio@gmail.com
              </li>

              <li className="flex items-center gap-3 justify-center md:justify-start">
                <FaMapMarkerAlt className="text-orange-500" />
                Banyuwangi, Indonesia
              </li>

            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 pt-6 text-center text-slate-500 text-sm">
          © 2026 Osing Dev Studio - Hak Cipta Dilindungi
        </div>
      </div>
    </footer>
  );
};

export default Footer;