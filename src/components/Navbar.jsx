import { useEffect, useState } from "react";
import { FaBars, FaChevronDown } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  // State untuk Accordion di Mobile
  const [mobileProfileOpen, setMobileProfileOpen] = useState(false);
  const [mobileLegalOpen, setMobileLegalOpen] = useState(false);
  
  // State untuk Dropdown di Desktop
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [legalDropdown, setLegalDropdown] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false);
    setMobileProfileOpen(false);
    setMobileLegalOpen(false);
    window.scrollTo(0, 0);
  };

  const isHome = location.pathname === "/";

  return (
    <header className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 ${
      scrolled || menuOpen || !isHome ? "bg-white shadow-md py-2" : "bg-transparent py-5"
    }`}>
      <div className="max-w-6xl mx-auto px-5 flex justify-between items-center relative z-[1001]">
        {/* LOGO */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavigation("/")}>
          <img 
            src="/logo.png" 
            alt="logo" 
            className={`h-[40px] transition-all ${scrolled || !isHome || menuOpen ? "" : "invert brightness-0"}`} 
          />
          <h1 className={`font-bold text-xl transition-colors ${scrolled || !isHome || menuOpen ? "text-[#091413]" : "text-white"}`}>
            Osing Dev
          </h1>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => handleNavigation("/")} 
            className={`font-semibold text-sm ${isHome ? "text-[#408A71]" : (scrolled || !isHome ? "text-[#091413]" : "text-white")}`}
          >
            Beranda
          </button>
          
          {/* Profile Dropdown Desktop */}
          <div className="relative" onMouseEnter={() => setProfileDropdown(true)} onMouseLeave={() => setProfileDropdown(false)}>
            <button className={`font-semibold text-sm flex items-center gap-1 py-2 ${location.pathname.includes("/profile") ? "text-[#408A71]" : (scrolled || !isHome ? "text-[#091413]" : "text-white")}`}>
              Profile <FaChevronDown size={10} />
            </button>
            {profileDropdown && (
              <div className="absolute top-full left-0 w-48 bg-white shadow-xl rounded-lg py-2 border border-gray-100 flex flex-col overflow-hidden">
                <button onClick={() => handleNavigation("/profile/tentang-kami")} className="px-4 py-2 text-sm text-left hover:bg-[#f0f7f5] hover:text-[#408A71] text-gray-800 transition-colors">Tentang Kami</button>
                <button onClick={() => handleNavigation("/profile/struktur-organisasi")} className="px-4 py-2 text-sm text-left hover:bg-[#f0f7f5] hover:text-[#408A71] text-gray-800 transition-colors">Struktur Organisasi</button>
              </div>
            )}
          </div>

          {/* Perjanjian Dropdown Desktop */}
          <div className="relative" onMouseEnter={() => setLegalDropdown(true)} onMouseLeave={() => setLegalDropdown(false)}>
            <button className={`font-semibold text-sm flex items-center gap-1 py-2 ${["/syarat-ketentuan", "/kebijakan-privasi"].includes(location.pathname) ? "text-[#408A71]" : (scrolled || !isHome ? "text-[#091413]" : "text-white")}`}>
              Perjanjian <FaChevronDown size={10} />
            </button>
            {legalDropdown && (
              <div className="absolute top-full left-0 w-48 bg-white shadow-xl rounded-lg py-2 border border-gray-100 flex flex-col overflow-hidden">
                <button onClick={() => handleNavigation("/syarat-ketentuan")} className="px-4 py-2 text-sm text-left hover:bg-[#f0f7f5] hover:text-[#408A71] text-gray-800 transition-colors">Syarat & Ketentuan</button>
                <button onClick={() => handleNavigation("/kebijakan-privasi")} className="px-4 py-2 text-sm text-left hover:bg-[#f0f7f5] hover:text-[#408A71] text-gray-800 transition-colors">Kebijakan Privasi</button>
              </div>
            )}
          </div>

          <button 
            onClick={() => handleNavigation("/kontak-kami")} 
            className={`font-semibold text-sm ${location.pathname === "/kontak-kami" ? "text-[#408A71]" : (scrolled || !isHome ? "text-[#091413]" : "text-white")}`}
          >
            Kontak Kami
          </button>
        </nav>

        {/* MOBILE TOGGLE (Hamburger) */}
        <button 
          className={`md:hidden text-2xl relative z-[1002] transition-all ${
            scrolled || menuOpen || !isHome ? "text-[#091413]" : "text-white"
          } ${menuOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`} 
          onClick={() => setMenuOpen(true)}
        >
          <FaBars />
        </button>
      </div>

      {/* MOBILE SIDEBAR PANEL */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay (Klik untuk tutup) */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setMenuOpen(false)} 
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[998] md:hidden" 
            />

            {/* Sidebar Box (Slide from Left) */}
            <motion.div 
              initial={{ x: "-100%" }} 
              animate={{ x: 0 }} 
              exit={{ x: "-100%" }} 
              transition={{ type: "spring", damping: 25, stiffness: 200 }} 
              className="md:hidden fixed top-0 left-0 w-[75%] h-full bg-white z-[999] p-8 pt-24 shadow-2xl flex flex-col gap-6 rounded-r-[2.5rem]"
            >
              {/* Beranda */}
              <button 
                onClick={() => handleNavigation("/")} 
                className={`text-xl font-bold text-left ${isHome ? "text-[#408A71]" : "text-[#091413]"}`}
              >
                Beranda
              </button>
              
              {/* Profile Accordion */}
              <div className="flex flex-col">
                <button 
                  onClick={() => setMobileProfileOpen(!mobileProfileOpen)} 
                  className={`flex items-center justify-between text-xl font-bold w-full py-2 transition-colors ${mobileProfileOpen ? "text-[#408A71]" : "text-[#091413]"}`}
                >
                  Profile 
                  <FaChevronDown size={14} className={`transition-transform duration-300 ${mobileProfileOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileProfileOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }} 
                      animate={{ height: "auto", opacity: 1 }} 
                      exit={{ height: 0, opacity: 0 }} 
                      className="overflow-hidden flex flex-col pl-4 gap-4 mt-2 border-l-2 border-gray-100"
                    >
                      <button onClick={() => handleNavigation("/profile/tentang-kami")} className="text-gray-600 text-left font-medium active:text-[#408A71]">Tentang Kami</button>
                      <button onClick={() => handleNavigation("/profile/struktur-organisasi")} className="text-gray-600 text-left font-medium active:text-[#408A71]">Struktur Organisasi</button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Perjanjian Accordion */}
              <div className="flex flex-col">
                <button 
                  onClick={() => setMobileLegalOpen(!mobileLegalOpen)} 
                  className={`flex items-center justify-between text-xl font-bold w-full py-2 transition-colors ${mobileLegalOpen ? "text-[#408A71]" : "text-[#091413]"}`}
                >
                  Perjanjian 
                  <FaChevronDown size={14} className={`transition-transform duration-300 ${mobileLegalOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileLegalOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }} 
                      animate={{ height: "auto", opacity: 1 }} 
                      exit={{ height: 0, opacity: 0 }} 
                      className="overflow-hidden flex flex-col pl-4 gap-4 mt-2 border-l-2 border-gray-100"
                    >
                      <button onClick={() => handleNavigation("/syarat-ketentuan")} className="text-gray-600 text-left font-medium active:text-[#408A71]">Syarat & Ketentuan</button>
                      <button onClick={() => handleNavigation("/kebijakan-privasi")} className="text-gray-600 text-left font-medium active:text-[#408A71]">Kebijakan Privasi</button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Kontak Kami */}
              <button 
                onClick={() => handleNavigation("/kontak-kami")} 
                className={`text-xl font-bold text-left ${location.pathname === "/kontak-kami" ? "text-[#408A71]" : "text-[#091413]"}`}
              >
                Kontak Kami
              </button>

              <div className="mt-auto">
                <p className="text-[10px] text-gray-400 font-medium uppercase tracking-widest">© 2026 Osing Dev Studio</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;