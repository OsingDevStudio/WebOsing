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
          <div className="bg-white rounded-3xl p-5 shadow-xl text-center max-w-sm w-full hover:-translate-y-2 transition duration-300">
            
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
              <h3 className="text-xl font-bold text-slate-900">
                Anggy Mutydinata
              </h3>
              <p className="text-orange-500 text-sm font-semibold mb-3">
                Founder & CEO Osing Dev Studio
              </p>

              {/* SOCIAL */}
              <div className="flex justify-center gap-3">
                <a
                  href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 hover:bg-orange-500 hover:text-white transition"
                >
                  <FaInstagram />
                </a>

                <a
                  href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 hover:bg-orange-500 hover:text-white transition"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 hover:bg-orange-500 hover:text-white transition"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT - TEXT */}
        <div>
          <span className="inline-block bg-orange-100 text-orange-500 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Tentang Kami
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
            Membangun <span className="text-orange-500">Solusi Digital</span>{" "}
            untuk Masa Depan
          </h2>

          <p className="text-slate-600 mb-8 leading-relaxed">
            Osing Dev Studio adalah mitra terpercaya Anda dalam transformasi
            digital. Kami berkomitmen menghadirkan website berkualitas tinggi
            yang membantu bisnis berkembang pesat di era digital.
          </p>

          {/* FEATURES */}
          <div className="flex flex-col gap-5 mb-8">
            
            {/* VISI */}
            <div className="flex gap-4 p-4 rounded-xl bg-slate-50 hover:bg-white hover:shadow-md hover:translate-x-2 transition cursor-pointer">
              <FaCheckCircle className="text-orange-500 text-xl mt-1" />
              <div>
                <h4 className="font-semibold text-slate-900">Visi</h4>
                <p className="text-sm text-slate-600">
                  Menjadi penyedia layanan website terpercaya yang membantu
                  bisnis berkembang di era digital.
                </p>
              </div>
            </div>

            {/* MISI */}
            <div className="flex gap-4 p-4 rounded-xl bg-slate-50 hover:bg-white hover:shadow-md hover:translate-x-2 transition cursor-pointer">
              <FaCheckCircle className="text-orange-500 text-xl mt-1" />
              <div>
                <h4 className="font-semibold text-slate-900">Misi Kami</h4>
                <p className="text-sm text-slate-600">
                  Menyediakan website berkualitas modern, membantu UMKM go
                  digital, dan memberikan layanan cepat profesional.
                </p>
              </div>
            </div>
          </div>

          {/* BUTTON */}
          <a
            href="https://wa.me/6281938434423"
            target="_blank"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:-translate-y-1 transition"
          >
            Diskusi Proyek →
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;