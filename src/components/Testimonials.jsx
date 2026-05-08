import React from "react";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Bagus Setiawan",
      location: "Banyuwangi Kota",
      avatar: "https://ui-avatars.com/api/?name=Bagus+Setiawan&background=0D8ABC&color=fff&rounded=true",
      stars: 5,
      comment:
        '"Luar biasa! Osing Dev berhasil membuatkan website e-commerce untuk produk kopi saya. Tampilannya keren, cepat, dan sangat mudah digunakan. Omset penjualan online saya langsung naik drastis. Sangat direkomendasikan!"',
    },
    {
      id: 2,
      name: "Sri Wahyuni",
      location: "Genteng",
      avatar: "https://ui-avatars.com/api/?name=Sri+Wahyuni&background=f44336&color=fff&rounded=true",
      stars: 5,
      comment:
        '"Aplikasi kasir kustom yang dibangun tim Osing Dev sangat membantu efisiensi di toko kami. Fiturnya lengkap sesuai permintaan dan tim developer-nya sangat responsif diajak diskusi. Garansinya juga beneran jalan!"',
    },
    {
      id: 3,
      name: "Gede Aris",
      location: "Muncar",
      avatar: "https://ui-avatars.com/api/?name=Gede+Aris&background=ff9800&color=fff&rounded=true",
      stars: 5,
      comment:
        '"Awalnya bingung cari partner untuk bangun MVP aplikasi startup saya di Banyuwangi. Untungnya ketemu Osing Dev Studio. Profesionalisme mereka setara agensi besar di kota besar, tapi dengan harga yang tetap bersahabat bagi startup."',
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-5">
        {/* JUDUL */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">
          Apa Kata Mereka?
        </h2>

        {/* GRID CARD */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col hover:shadow-md transition-shadow"
            >
              {/* PROFIL (DI ATAS) */}
              <div className="flex items-center gap-4 mb-6 text-left w-full">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-14 h-14 rounded-full border-2 border-blue-500 object-cover"
                />
                <div>
                  <h4 className="font-bold text-slate-800 text-lg leading-tight">{item.name}</h4>
                  <p className="text-slate-400 text-sm">{item.location}</p>
                </div>
              </div>

              {/* BINTANG */}
              <div className="flex gap-1 mb-4">
                {[...Array(item.stars)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>

              {/* KOMENTAR */}
              <p className="text-slate-600 leading-relaxed italic text-left">
                {item.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;