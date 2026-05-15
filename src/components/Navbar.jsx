import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [legalDropdown, setLegalDropdown] = useState(false); // State baru untuk Perjanjian
  
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false);
    setProfileDropdown(false);
    setLegalDropdown(false);
    window.scrollTo(0, 0);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 ${
      scrolled || menuOpen || !["/"].includes(location.pathname) ? "bg-white shadow-md py-2" : "bg-transparent py-5"
    }`}>
      <div className="max-w-6xl mx-auto px-5 flex justify-between items-center">
        {/* LOGO */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavigation("/")}>
          <img src="/logo.png" alt="logo" className={`h-[40px] ${scrolled || location.pathname !== "/" ? "" : "invert brightness-0"}`} />
          <h1 className={`font-bold text-xl ${scrolled || location.pathname !== "/" ? "text-[#091413]" : "text-white"}`}>Osing Dev</h1>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => handleNavigation("/")} className={`font-semibold text-sm ${isActive("/") ? "text-[#408A71]" : (scrolled || location.pathname !== "/" ? "text-[#091413]" : "text-white")}`}>Beranda</button>
          
          {/* DROPDOWN PROFILE */}
          <div 
            className="relative"
            onMouseEnter={() => setProfileDropdown(true)}
            onMouseLeave={() => setProfileDropdown(false)}
          >
            <button className={`font-semibold text-sm flex items-center gap-1 py-2 ${location.pathname.includes("/profile") ? "text-[#408A71]" : (scrolled || location.pathname !== "/" ? "text-[#091413]" : "text-white")}`}>
              Profile <FaChevronDown size={10} />
            </button>
            
            {profileDropdown && (
              <div className="absolute top-[100%] left-0 w-48 bg-white shadow-xl rounded-lg py-2 border border-gray-100 flex flex-col">
                <button onClick={() => handleNavigation("/profile/tentang-kami")} className="px-4 py-2 text-sm text-left hover:bg-[#f0f7f5] hover:text-[#408A71] text-gray-800 transition-colors">Tentang Kami</button>
                <button onClick={() => handleNavigation("/profile/struktur-organisasi")} className="px-4 py-2 text-sm text-left hover:bg-[#f0f7f5] hover:text-[#408A71] text-gray-800 transition-colors">Struktur Organisasi</button>
              </div>
            )}
          </div>

          {/* DROPDOWN PERJANJIAN (Legal) */}
          <div 
            className="relative"
            onMouseEnter={() => setLegalDropdown(true)}
            onMouseLeave={() => setLegalDropdown(false)}
          >
            <button className={`font-semibold text-sm flex items-center gap-1 py-2 ${["/syarat-ketentuan", "/kebijakan-privasi"].includes(location.pathname) ? "text-[#408A71]" : (scrolled || location.pathname !== "/" ? "text-[#091413]" : "text-white")}`}>
              Perjanjian <FaChevronDown size={10} />
            </button>
            
            {legalDropdown && (
              <div className="absolute top-[100%] left-0 w-48 bg-white shadow-xl rounded-lg py-2 border border-gray-100 flex flex-col">
                <button onClick={() => handleNavigation("/syarat-ketentuan")} className="px-4 py-2 text-sm text-left hover:bg-[#f0f7f5] hover:text-[#408A71] text-gray-800 transition-colors">Syarat & Ketentuan</button>
                <button onClick={() => handleNavigation("/kebijakan-privasi")} className="px-4 py-2 text-sm text-left hover:bg-[#f0f7f5] hover:text-[#408A71] text-gray-800 transition-colors">Kebijakan Privasi</button>
              </div>
            )}
          </div>

          <button onClick={() => handleNavigation("/kontak-kami")} className={`font-semibold text-sm ${isActive("/kontak-kami") ? "text-[#408A71]" : (scrolled || location.pathname !== "/" ? "text-[#091413]" : "text-white")}`}>Kontak Kami</button>
        </nav>

        {/* MOBILE TOGGLE */}
        <button className={`md:hidden text-2xl ${scrolled || menuOpen || location.pathname !== "/" ? "text-[#091413]" : "text-white"}`} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU PANEL */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-[1000] flex flex-col p-10 pt-24 gap-6 overflow-y-auto">
          <button onClick={() => handleNavigation("/")} className="text-2xl font-bold text-left">Beranda</button>
          
          <div className="border-l-4 border-[#408A71] pl-4 flex flex-col gap-4">
            <span className="text-gray-400 text-sm font-bold tracking-widest uppercase">Profile</span>
            <button onClick={() => handleNavigation("/profile/tentang-kami")} className="text-xl font-bold text-left text-gray-800">Tentang Kami</button>
            <button onClick={() => handleNavigation("/profile/struktur-organisasi")} className="text-xl font-bold text-left text-gray-800">Struktur Organisasi</button>
          </div>

          <div className="border-l-4 border-[#408A71] pl-4 flex flex-col gap-4">
            <span className="text-gray-400 text-sm font-bold tracking-widest uppercase">Perjanjian</span>
            <button onClick={() => handleNavigation("/syarat-ketentuan")} className="text-xl font-bold text-left text-gray-800">Syarat & Ketentuan</button>
            <button onClick={() => handleNavigation("/kebijakan-privasi")} className="text-xl font-bold text-left text-gray-800">Kebijakan Privasi</button>
          </div>

          <button onClick={() => handleNavigation("/kontak-kami")} className="text-2xl font-bold text-left">Kontak Kami</button>
        </div>
      )}
    </header>
  );
};

export default Navbar;