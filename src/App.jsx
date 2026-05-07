import { HelmetProvider } from 'react-helmet-async'; // Import Provider
import SEO from "./components/SEO"; // Import komponen SEO yang akan kita buat
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Services from "./components/Services";
import Stats from "./components/Stats";
import About from "./components/About";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <HelmetProvider>
      {/* 
          Panggil komponen SEO di sini. 
          Isi title dan description sesuai dengan target keyword website kamu.
      */}
      <SEO 
        title="Jasa Pembuatan Website Profesional" 
        description="Solusi digital kreatif untuk membangun website responsif dan modern dengan teknologi terbaru."
      />
      
      <Navbar />
      <Banner />
      <Services />
      <Stats />
      <About />
      <CTA />
      <Footer />
    </HelmetProvider>
  );
}

export default App;