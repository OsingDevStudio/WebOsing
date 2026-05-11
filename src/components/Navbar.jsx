import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  
  const navigate = useNavigate();
  const location = useLocation();

  // Lock Scroll saat menu mobile terbuka
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [menuOpen]);

  // Logic Scroll & Active Link
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
        if (target) {
          window.scrollTo({ top: target.offsetTop - 80, behavior: "smooth" });
        }
      }, 100);
    } else {
      const target = document.querySelector(id);
      if (target) {
        window.scrollTo({ top: target.offsetTop - 80, behavior: "smooth" });
      }
    }
  };

  // Menu "Layanan" dan "Tentang" telah dihapus dari array ini
  const navLinks = [
    { name: "Beranda", id: "#home" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        scrolled || menuOpen || location.pathname !== "/" ? "bg-white shadow-md py-2" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 flex justify-between items-center">
        {/* LOGO */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleScrollTo("#home")}>
          <img
            src="/logo.png"
            alt="logo"
            className={`h-[45px] transition-all duration-300 ${
              scrolled || menuOpen || location.pathname !== "/" ? "" : "invert brightness-0"
            }`}
          />
          <h1 className={`font-bold text-xl transition-colors ${
            scrolled || menuOpen || location.pathname !== "/" ? "text-slate-900" : "text-white"
          }`}>
            Osing Dev Studio
          </h1>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScrollTo(item.id)}
              className={`font-semibold text-sm transition-colors ${
                active === item.id.replace("#", "") && location.pathname === "/"
                  ? "text-orange-500" 
                  : (scrolled || location.pathname !== "/") ? "text-slate-600 hover:text-orange-500" : "text-white/90 hover:text-white"
              }`}
            >
              {item.name}
            </button>
          ))}
          
          {/* Tombol Kontak Kami tetap ada secara manual */}
          <button
            onClick={() => {
                setMenuOpen(false);
                navigate("/kontak");
            }}
            className={`font-semibold text-sm transition-colors ${
              location.pathname === "/kontak" 
                ? "text-orange-500" 
                : (scrolled || location.pathname !== "/") ? "text-slate-600 hover:text-orange-500" : "text-white/90 hover:text-white"
            }`}
          >
            Kontak Kami
          </button>
        </nav>

        {/* HAMBURGER BUTTON */}
        <button
          className={`md:hidden text-2xl p-2 z-[110] outline-none transition-colors ${
            menuOpen || scrolled || location.pathname !== "/" ? "text-slate-900" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden fixed inset-0 bg-white z-[105] transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-28 px-10 gap-8 bg-white text-slate-800">
          {navLinks.map((item, index) => (
            <button
              key={item.id}
              onClick={() => handleScrollTo(item.id)}
              style={{ transitionDelay: menuOpen ? `${(index + 1) * 100}ms` : "0ms" }}
              className={`text-left text-2xl font-bold transition-all duration-500 transform ${
                menuOpen ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
              } ${active === item.id.replace("#", "") && location.pathname === "/" ? "text-orange-500" : "text-slate-800"}`}
            >
              {item.name}
            </button>
          ))}
          
          <button
            onClick={() => {
              setMenuOpen(false);
              navigate("/kontak");
            }}
            style={{ transitionDelay: menuOpen ? `${(navLinks.length + 1) * 100}ms` : "0ms" }}
            className={`text-left text-2xl font-bold transition-all duration-500 transform ${
              menuOpen ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            } ${location.pathname === "/kontak" ? "text-orange-500" : "text-slate-800"}`}
          >
            Kontak Kami
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;