import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Lock Scroll
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [menuOpen]);

  // Scroll Logic
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    const target = document.querySelector(id);
    if (target) {
      setMenuOpen(false);
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const navLinks = [
    { name: "Beranda", id: "#home" },
    { name: "Layanan", id: "#layanan" },
    { name: "Tentang", id: "#tentang" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        scrolled || menuOpen ? "bg-white shadow-md py-2" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 flex justify-between items-center">
        {/* LOGO */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleScrollTo("#home")}>
          <img
            src="/logo.png"
            alt="logo"
            className={`h-[45px] transition-all duration-300 ${scrolled || menuOpen ? "" : "invert brightness-0"}`}
          />
          <h1 className={`font-bold text-xl transition-colors ${scrolled || menuOpen ? "text-slate-900" : "text-white"}`}>
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
                active === item.id.replace("#", "") ? "text-orange-500" : scrolled ? "text-slate-600 hover:text-orange-500" : "text-white/90 hover:text-white"
              }`}
            >
              {item.name}
            </button>
          ))}
          <a
            href="https://wa.me/6281938434423"
            target="_blank"
            rel="noopener noreferrer"
            className={`font-semibold text-sm transition-colors ${scrolled ? "text-slate-600 hover:text-orange-500" : "text-white/90 hover:text-white"}`}
          >
            Kontak Kami
          </a>
        </nav>

        {/* HAMBURGER BUTTON */}
        <button
          className={`md:hidden text-2xl p-2 z-[110] outline-none transition-colors ${menuOpen || scrolled ? "text-slate-900" : "text-white"}`}
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
        <div className="flex flex-col h-full pt-28 px-10 gap-8 bg-white">
          {navLinks.map((item, index) => (
            <button
              key={item.id}
              onClick={() => handleScrollTo(item.id)}
              style={{ 
                transitionDelay: menuOpen ? `${(index + 1) * 100}ms` : "0ms" 
              }}
              className={`text-left text-2xl font-bold transition-all duration-500 transform ${
                menuOpen ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
              } ${active === item.id.replace("#", "") ? "text-orange-500" : "text-slate-800"}`}
            >
              {item.name}
            </button>
          ))}
          
          {/* KONTAK KAMI MOBILE DENGAN ANIMASI */}
          <a
            href="https://wa.me/6281938434423"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            style={{ 
              transitionDelay: menuOpen ? `${(navLinks.length + 1) * 100}ms` : "0ms" 
            }}
            className={`text-left text-2xl font-bold text-slate-800 hover:text-orange-500 transition-all duration-500 transform ${
              menuOpen ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            Kontak Kami
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;