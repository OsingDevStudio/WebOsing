import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About"; 
import Stats from "./components/Stats"; 
import Portfolio from "./components/Portfolio"; 
import Services from "./components/Services"; 
import Testimonials from "./components/Testimonials"; 
import CTA from "./components/CTA"; 
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans text-slate-900 bg-white">
      <Navbar />
      
      <main>
        {/* 1. Pembukaan */}
        <Banner />
        
        {/* 2. Alasan Memilih Kami */}
        <Services />

        {/* 3. Bukti Hasil Kerja */}
        <Portfolio />
        
        {/* 4. Testimoni Klien */}
        <Testimonials />

        {/* 5. Angka & Visi Misi */}
        <Stats />
        
        {/* 6. Tentang Kami (Sekarang pindah ke bawah Stats) */}
        <About />
        
        {/* 7. Penutup & Ajakan Bertindak */}
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;