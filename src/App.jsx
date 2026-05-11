import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About"; 
import Stats from "./components/Stats"; 
import Portfolio from "./components/Portfolio"; 
import Services from "./components/Services"; 
import Testimonials from "./components/Testimonials"; 
import CTA from "./components/CTA"; 
import Footer from "./components/Footer";
import ContactPage from "./components/ContactPage";

function App() {
  return (
    <div className="font-sans text-slate-900 bg-white">
      <Navbar />
      
      <Routes>
        {/* HALAMAN UTAMA */}
        <Route path="/" element={
          <main>
            <Banner />
            <Services />
            <Portfolio />
            <Testimonials />
            <Stats />
            <About />
            <CTA />
          </main>
        } />

        {/* HALAMAN KONTAK */}
        <Route path="/kontak-kami" element={<ContactPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;