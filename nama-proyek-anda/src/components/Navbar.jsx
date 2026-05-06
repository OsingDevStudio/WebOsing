import { useEffect, useState } from "react";
import { FaWhatsapp, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 300) {
          current = section.getAttribute("id");
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur shadow-md py-2"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 flex justify-between items-center">
        
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="logo"
            className={`h-[60px] transition-all duration-300 ${
              scrolled ? "" : "invert brightness-0"
            }`}
          />
          <h1
            className={`text-xl font-bold transition ${
              scrolled ? "text-slate-900" : "text-white"
            }`}
          >
            Osing Dev Studio
          </h1>
        </div>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { name: "Beranda", id: "#home" },
            { name: "Layanan", id: "#layanan" },
            { name: "Tentang", id: "#tentang" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleScrollTo(item.id)}
              className={`relative font-medium transition ${
                scrolled ? "text-slate-600" : "text-white"
              } ${
                active === item.id.replace("#", "")
                  ? "text-orange-500"
                  : ""
              }`}
            >
              {item.name}

              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-orange-500 transition-all duration-300 ${
                  active === item.id.replace("#", "")
                    ? "w-full"
                    : "w-0"
                }`}
              />
            </button>
          ))}

          {/* BUTTON WA */}
          <a
            href="https://wa.me/6281938434423"
            target="_blank"
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-2 rounded-full flex items-center gap-2 hover:shadow-md hover:-translate-y-1 transition"
          >
            <FaWhatsapp className="text-lg" />
            Hubungi
          </a>
        </nav>

        {/* TOGGLE MOBILE */}
        <div
          className={`md:hidden text-2xl cursor-pointer transition ${
            scrolled ? "text-black" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars />
        </div>
      </div>

      {/* MENU MOBILE */}
      <div
        className={`md:hidden fixed top-[70px] left-0 w-full h-[calc(100vh-70px)] bg-white transition-all duration-300 ${
          menuOpen ? "left-0" : "-left-full"
        }`}
      >
        <div className="flex flex-col gap-6 p-6">
          {[
            { name: "Beranda", id: "#home" },
            { name: "Layanan", id: "#layanan" },
            { name: "Tentang", id: "#tentang" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleScrollTo(item.id)}
              className="text-slate-700 text-lg"
            >
              {item.name}
            </button>
          ))}

          <a
            href="https://wa.me/6281938434423"
            target="_blank"
            className="bg-orange-500 text-white px-5 py-3 rounded-full text-center flex items-center justify-center gap-2"
          >
            <FaWhatsapp />
            Hubungi Kami
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;