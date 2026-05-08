import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ContactPage from "./components/ContactPage";
import Banner from "./components/Banner";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials"; 
import About from "./components/About";
import Stats from "./components/Stats";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <main>
            <section id="home"><Banner /></section>
            <section id="layanan"><Services /></section>
            <Testimonials /> 
            <section id="tentang"><About /></section>
            <Stats />
            <CTA />
            <Footer />
          </main>
        } />
        <Route path="/kontak" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;