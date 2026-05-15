import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (location.pathname === "/") {
        const sections = document.querySelectorAll("section[id]");
        const scrollY = window.pageYOffset;
        sections.forEach((current) => {
          const sectionHeight = current.offsetHeight;
          const sectionTop = current.offsetTop - 100;
          const sectionId = current.getAttribute("id");
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            setActive(sectionId);
          }
        });
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const handleScrollTo = (id) => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const target = document.querySelector(id);
        if (target) window.scrollTo({ top: target.offsetTop - 80, behavior: "smooth" });
      }, 100);
    } else {
      const target = document.querySelector(id);
      if (target) window.scrollTo({ top: target.offsetTop - 80, behavior: "smooth" });
    }
  };

  const navLinks = [{ name: "Beranda", id: "#home" }];

  // Helper function untuk styling link aktif
  const getLinkStyle = (path) => {
    const isCurrentPath = location.pathname === path;
    if (isCurrentPath) return "text-[#408A71]";
    if (scrolled || location.pathname !== "/") return "text-[#285A48] hover:text-[#408A71]";
    return "text-white/90 hover:text-[#B0E4CC]";
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
      scrolled || menuOpen || location.pathname !== "/" ? "bg-white shadow-md py-2" : "bg-transparent py-5"
    }`}>
      <div className="max-w-6xl mx-auto px-5 flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleScrollTo("#home")}>
          <img src="/logo.png" alt="logo" className={`h-[45px] transition-all duration-300 ${
            scrolled || menuOpen || location.pathname !== "/" ? "" : "invert brightness-0"
          }`} />
          <h1 className={`font-bold text-xl transition-colors ${
            scrolled || menuOpen || location.pathname !== "/" ? "text-[#091413]" : "text-white"
          }`}>Osing Dev Studio</h1>
        </div>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <button key={item.id} onClick={() => handleScrollTo(item.id)}
              className={`font-semibold text-sm transition-colors ${
                active === item.id.replace("#", "") && location.pathname === "/" 
                ? "text-[#408A71]" 
                : (scrolled || location.pathname !== "/") 
                ? "text-[#285A48] hover:text-[#408A71]" 
                : "text-white/90 hover:text-[#B0E4CC]"
              }`}>
              {item.name}
            </button>
          ))}

          {/* Link Tentang Kami */}
          <button onClick={() => { setMenuOpen(false); navigate("/tentang-kami"); }}
            className={`font-semibold text-sm transition-colors ${getLinkStyle("/tentang-kami")}`}>
            Tentang Kami
          </button>

          {/* Link Kontak Kami */}
          <button onClick={() => { setMenuOpen(false); navigate("/kontak-kami"); }}
            className={`font-semibold text-sm transition-colors ${getLinkStyle("/kontak-kami")}`}>
            Kontak Kami
          </button>
        </nav>

        <button className={`md:hidden text-2xl p-2 z-[110] outline-none ${
          menuOpen || scrolled || location.pathname !== "/" ? "text-[#091413]" : "text-white"
        }`} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div className={`md:hidden fixed inset-0 bg-white z-[105] transition-transform duration-500 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex flex-col h-full pt-28 px-10 gap-8 bg-white text-[#091413]">
          {navLinks.map((item) => (
            <button key={item.id} onClick={() => handleScrollTo(item.id)} 
              className={`text-left text-2xl font-bold ${active === item.id.replace("#", "") ? "text-[#408A71]" : "text-[#091413]"}`}>
              {item.name}
            </button>
          ))}
          
          <button onClick={() => { setMenuOpen(false); navigate("/tentang-kami"); }}
            className={`text-left text-2xl font-bold ${location.pathname === "/tentang-kami" ? "text-[#408A71]" : "text-[#091413]"}`}>
            Tentang Kami
          </button>

          <button onClick={() => { setMenuOpen(false); navigate("/kontak-kami"); }}
            className={`text-left text-2xl font-bold ${location.pathname === "/kontak-kami" ? "text-[#408A71]" : "text-[#091413]"}`}>
            Kontak Kami
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;