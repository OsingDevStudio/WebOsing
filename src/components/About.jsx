import {
  FaCheckCircle,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const About = () => {
  return (
    <section id="tentang" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT - OWNER CARD */}
        <div className="flex justify-center">
          {/* Card dengan border halus warna hijau pucat */}
          <div className="bg-white rounded-3xl p-5 shadow-xl border border-[#B0E4CC]/20 text-center max-w-sm w-full hover:-translate-y-2 transition duration-300">
            
            {/* IMAGE */}
            <div className="w-[260px] h-[260px] mx-auto rounded-2xl overflow-hidden shadow-md">
              <img
                src="owner.jpeg"
                alt="owner"
                className="w-full h-full object-cover"
              />
            </div>

            {/* INFO */}
            <div className="mt-5">
              <h3 className="text-xl font-bold text-[#091413]">
                Anggy Mutydinata
              </h3>
              <p className="text-[#408A71] text-sm font-semibold mb-3">
                Founder & CEO Osing Dev Studio
              </p>

              {/* SOCIAL */}
              <div className="flex justify-center gap-3">
                {[
                  { icon: <FaInstagram />, link: "#" },
                  { icon: <FaLinkedin />, link: "#" },
                  { icon: <FaGithub />, link: "#" },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-[#408A71] hover:text-white transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT - TEXT */}
        <div>
          {/* Badge Tentang Kami */}
          <span className="inline-block bg-[#B0E4CC]/30 text-[#285A48] px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Tentang Kami
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#091413]">
            Membangun <span className="text-[#408A71]">Solusi Digital</span>{" "}
            untuk Masa Depan
          </h2>

          <p className="text-slate-600 mb-8 leading-relaxed">
            Osing Dev Studio adalah mitra terpercaya Anda dalam transformasi
            digital. Kami berkomitmen menghadirkan website berkualitas tinggi
            yang membantu bisnis berkembang pesat di era digital dengan sentuhan desain yang presisi.
          </p>

          {/* FEATURES */}
          <div className="flex flex-col gap-5 mb-8">
            
            {/* VISI */}
            <div className="flex gap-4 p-4 rounded-xl bg-slate-50 hover:bg-white hover:shadow-md hover:translate-x-2 transition-all cursor-pointer group">
              <FaCheckCircle className="text-[#408A71] text-xl mt-1" />
              <div>
                <h4 className="font-semibold text-[#091413]">Visi</h4>
                <p className="text-sm text-slate-600">
                  Menjadi penyedia layanan website terpercaya yang membantu
                  bisnis berkembang di era digital melalui inovasi berkelanjutan.
                </p>
              </div>
            </div>

            {/* MISI */}
            <div className="flex gap-4 p-4 rounded-xl bg-slate-50 hover:bg-white hover:shadow-md hover:translate-x-2 transition-all cursor-pointer group">
              <FaCheckCircle className="text-[#408A71] text-xl mt-1" />
              <div>
                <h4 className="font-semibold text-[#091413]">Misi Kami</h4>
                <p className="text-sm text-slate-600">
                  Menyediakan website berkualitas modern, mendukung UMKM naik kelas, 
                  dan memberikan layanan teknis yang cepat serta profesional.
                </p>
              </div>
            </div>
          </div>

          {/* BUTTON */}
          <a
            href="https://wa.me/6281938434423"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#408A71] to-[#285A48] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-[#408A71]/30 hover:-translate-y-1 transition-all duration-300"
          >
            Diskusi Proyek →
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;