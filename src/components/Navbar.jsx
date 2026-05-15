import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  
  const navigate = useNavigate();
  const location = useLocation();

  // FIX: Pengunci scroll yang lebih bersih
  useEffect(() => {
    const lockScroll = () => {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    };

    const unlockScroll = () => {
      document.body.style.overflow = "";
      document.body.style.height = "";
    };

    if (menuOpen) {
      lockScroll();
    } else {
      unlockScroll();
    }

    return () => unlockScroll();
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

  // FIX: Fungsi scroll yang memastikan menu tutup dulu baru scroll jalan
  const handleScrollTo = (id) => {
    setMenuOpen(false); // Ini akan memicu useEffect untuk unlock scroll
    const sectionId = id.replace("#", "");
    
    const performScroll = () => {
      const target = document.querySelector(id);
      if (target) {
        window.scrollTo({ top: target.offsetTop - 80, behavior: "smooth" });
        setActive(sectionId);
      }
    };

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(performScroll, 300); // Beri waktu navigasi antar halaman
    } else {
      // Jika sudah di home, langsung scroll
      setTimeout(performScroll, 100); 
    }
  };

  const navLinks = [{ name: "Beranda", id: "#home" }];

  const isActive = (idOrPath) => {
    if (idOrPath.startsWith("#")) {
      return active === idOrPath.replace("#", "") && location.pathname === "/";
    }
    return location.pathname === idOrPath;
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

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <button key={item.id} onClick={() => handleScrollTo(item.id)}
              className={`font-semibold text-sm transition-colors ${
                isActive(item.id) ? "text-[#408A71]" : (scrolled || location.pathname !== "/" ? "text-[#285A48]" : "text-white/90")
              }`}>
              {item.name}
            </button>
          ))}
          <button onClick={() => { setMenuOpen(false); navigate("/tentang-kami"); }}
            className={`font-semibold text-sm transition-colors ${isActive("/tentang-kami") ? "text-[#408A71]" : (scrolled || location.pathname !== "/" ? "text-[#285A48]" : "text-white/90")}`}>
            Tentang Kami
          </button>
          <button onClick={() => { setMenuOpen(false); navigate("/kontak-kami"); }}
            className={`font-semibold text-sm transition-colors ${isActive("/kontak-kami") ? "text-[#408A71]" : (scrolled || location.pathname !== "/" ? "text-[#285A48]" : "text-white/90")}`}>
            Kontak Kami
          </button>
        </nav>

        <button className={`md:hidden text-2xl p-2 z-[110] outline-none ${
          menuOpen || scrolled || location.pathname !== "/" ? "text-[#091413]" : "text-white"
        }`} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div className={`md:hidden fixed top-0 left-0 w-full bg-white z-[120] shadow-xl transition-transform duration-500 ease-in-out ${
        menuOpen ? "translate-y-0" : "-translate-y-full"
      }`}>
        <div className="flex w-full h-14 bg-black justify-end items-stretch">
          <button 
            className="w-14 bg-red-600 flex items-center justify-center text-white text-2xl active:bg-red-700 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            <FaTimes />
          </button>
        </div>

        <div className="flex flex-col py-10 px-10 gap-8 bg-white text-[#091413]">
          {navLinks.map((item) => (
            <button key={item.id} onClick={() => handleScrollTo(item.id)} 
              className={`text-left text-2xl font-bold transition-colors ${isActive(item.id) ? "text-[#408A71]" : "text-[#091413]"}`}>
              {item.name}
            </button>
          ))}
          
          <button onClick={() => { setMenuOpen(false); navigate("/tentang-kami"); }}
            className={`text-left text-2xl font-bold transition-colors ${isActive("/tentang-kami") ? "text-[#408A71]" : "text-[#091413]"}`}>
            Tentang Kami
          </button>

          <button onClick={() => { setMenuOpen(false); navigate("/kontak-kami"); }}
            className={`text-left text-2xl font-bold transition-colors ${isActive("/kontak-kami") ? "text-[#408A71]" : "text-[#091413]"}`}>
            Kontak Kami
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 bg-black/40 z-[115] md:hidden h-full" onClick={() => setMenuOpen(false)} />
      )}
    </header>
  );
};

export default Navbar;