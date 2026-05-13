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
    <footer className="bg-[#091413] text-white pt-16 pb-6">
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
              <h4 className="text-xl font-bold tracking-tight text-white">
                Osing <span className="text-[#408A71]">Dev</span> Studio
              </h4>
            </div>

            <p className="text-slate-400 mb-6 leading-relaxed">
              Solusi digital inovatif untuk pertumbuhan bisnis Anda. Kami mengombinasikan desain estetis dengan performa teknis yang handal.
            </p>

            {/* SOCIAL */}
            <div className="flex justify-center md:justify-start gap-4">
              {[
                { icon: <FaInstagram />, link: "#" },
                { icon: <FaFacebook />, link: "#" },
                { icon: <FaLinkedin />, link: "#" },
                { icon: <FaGithub />, link: "#" },
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={social.link}
                  className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl hover:bg-[#408A71] hover:border-[#408A71] transition-all duration-300 group"
                >
                  <span className="group-hover:scale-110 transition-transform">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* LAYANAN */}
          <div className="md:pl-10">
            <h4 className="text-lg font-semibold mb-6 text-[#B0E4CC]">Layanan</h4>
            <ul className="space-y-3 text-slate-400">
              {["Web Development", "UI/UX Design", "Mobile App", "Digital Marketing"].map((service, idx) => (
                <li key={idx} className="hover:text-[#408A71] hover:translate-x-1 cursor-pointer transition-all duration-300">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* KONTAK */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#B0E4CC]">Kontak Kami</h4>
            <ul className="space-y-4 text-slate-400">
              
              <li className="flex items-center gap-3 justify-center md:justify-start group cursor-pointer">
                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#408A71]/10 text-[#408A71]">
                  <FaPhone />
                </div>
                <span className="group-hover:text-white transition-colors">+62 819-3843-4423</span>
              </li>

              <li className="flex items-center gap-3 justify-center md:justify-start group cursor-pointer">
                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#408A71]/10 text-[#408A71]">
                  <FaEnvelope />
                </div>
                <span className="group-hover:text-white transition-colors">osingdevstudio@gmail.com</span>
              </li>

              <li className="flex items-center gap-3 justify-center md:justify-start group cursor-pointer">
                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#408A71]/10 text-[#408A71]">
                  <FaMapMarkerAlt />
                </div>
                <span className="group-hover:text-white transition-colors">Banyuwangi, Indonesia</span>
              </li>

            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/5 pt-8 mt-10 text-center text-slate-500 text-sm">
          <p>© 2026 <span className="text-slate-400 font-medium">Osing Dev Studio</span>. Made with Passion in Banyuwangi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;