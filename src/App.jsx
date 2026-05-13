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
    // Menggunakan text-[#091413] sebagai warna font utama
    <div className="font-sans text-[#091413] bg-white">
      <Navbar />
      <Routes>
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
        <Route path="/kontak-kami" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;