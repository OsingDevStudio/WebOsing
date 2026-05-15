import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
// import Stats from "./components/Stats";
import About from "./components/About"; 
import CTA from "./components/CTA"; 
import Footer from "./components/Footer";
import ContactPage from "./components/ContactPage";

// Profile Components
import TentangKami from "./components/profile/TentangKami"; 
import StrukturOrganisasi from "./components/profile/StrukturOrganisasi"; 

// Legal Components (Import Baru)
import SyaratKetentuan from "./components/legal/SyaratKetentuan";
import KebijakanPrivasi from "./components/legal/KebijakanPrivasi";

function App() {
  return (
    <div className="font-sans text-[#091413] bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <main>
            <Banner />
            <Services />
            <Portfolio />
            <Testimonials />
            {/* <Stats /> */}
            <About /> 
            <CTA />
          </main>
        } />
        
        {/* Profile Routes */}
        <Route path="/profile/tentang-kami" element={<TentangKami />} />
        <Route path="/profile/struktur-organisasi" element={<StrukturOrganisasi />} />
        
        {/* Legal Routes */}
        <Route path="/syarat-ketentuan" element={<SyaratKetentuan />} />
        <Route path="/kebijakan-privasi" element={<KebijakanPrivasi />} />
        
        {/* Contact Route */}
        <Route path="/kontak-kami" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;