import {
  FaPalette,
  FaBolt,
  FaMobileAlt,
  FaHeadset,
} from "react-icons/fa";

const servicesData = [
  {
    icon: FaPalette,
    title: "Desain Modern",
    desc: "Tampilan website elegan, responsive, dan sesuai tren terbaru.",
  },
  {
    icon: FaBolt,
    title: "Pengerjaan Cepat",
    desc: "Proses pembuatan website efisien tanpa mengorbankan kualitas.",
  },
  {
    icon: FaMobileAlt,
    title: "Responsive",
    desc: "Website optimal di semua perangkat, dari HP hingga desktop.",
  },
  {
    icon: FaHeadset,
    title: "Support 24/7",
    desc: "Kami siap membantu dan memberikan solusi terbaik untuk bisnis Anda.",
  },
];

const Services = () => {
  return (
    <section id="layanan" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-5">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="inline-block bg-orange-100 text-orange-500 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Layanan Unggulan
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Kenapa Harus <span className="text-orange-500">Kami?</span>
          </h2>

          <p className="text-slate-600 max-w-xl mx-auto">
            Kami memberikan layanan terbaik untuk mendukung kesuksesan digital bisnis Anda
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                {/* ICON */}
                <div className="w-[70px] h-[70px] mx-auto mb-6 flex items-center justify-center rounded-2xl bg-orange-100 group-hover:bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300">
                  <Icon className="text-3xl text-orange-500 group-hover:text-white transition" />
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-semibold mb-3 text-slate-900">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* HOVER LINE */}
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-orange-500 to-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;