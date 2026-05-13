import React from "react";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Aril",
      location: "Surabaya",
      // Update background avatar agar serasi dengan palet hijau
      avatar: "https://ui-avatars.com/api/?name=Aril&background=408A71&color=fff&rounded=true",
      stars: 5,
      comment:
        '"Osing Dev Studio berhasil mengubah cara kami berjualan. Sekarang pelanggan di Surabaya bisa memesan Risol Aril dengan sangat mudah melalui katalog digital yang elegan. Sistemnya sangat responsif dan membantu meningkatkan branding premium produk kami secara signifikan!"',
    },
    {
      id: 2,
      name: "Sri Wahyuni",
      location: "Genteng",
      avatar: "https://ui-avatars.com/api/?name=Sri+Wahyuni&background=285A48&color=fff&rounded=true",
      stars: 5,
      comment:
        '"Aplikasi kasir kustom yang dibangun tim Osing Dev sangat membantu efisiensi di toko kami. Fiturnya lengkap sesuai permintaan dan tim developer-nya sangat responsif diajak diskusi. Garansinya juga beneran jalan!"',
    },
    {
      id: 3,
      name: "Gede Aris",
      location: "Muncar",
      avatar: "https://ui-avatars.com/api/?name=Gede+Aris&background=B0E4CC&color=091413&rounded=true",
      stars: 5,
      comment:
        '"Awalnya bingung cari partner untuk bangun MVP aplikasi startup saya di Banyuwangi. Untungnya ketemu Osing Dev Studio. Profesionalisme mereka setara agensi besar di kota besar, tapi dengan harga yang tetap bersahabat bagi startup."',
    },
  ];

  return (
    // Menggunakan bg-[#B0E4CC]/10 untuk warna latar belakang yang sangat soft
    <section className="py-20 bg-[#B0E4CC]/10">
      <div className="max-w-6xl mx-auto px-5">
        {/* JUDUL */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#091413] mb-12">
          Apa Kata <span className="text-[#408A71]">Mereka?</span>
        </h2>

        {/* GRID CARD */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 rounded-3xl shadow-sm border border-[#B0E4CC]/30 flex flex-col hover:shadow-md transition-shadow relative"
            >
              {/* PROFIL (DI ATAS) */}
              <div className="flex items-center gap-4 mb-6 text-left w-full">
                <img
                  src={item.avatar}
                  alt={item.name}
                  // Border avatar menggunakan warna #408A71
                  className="w-14 h-14 rounded-full border-2 border-[#408A71] object-cover"
                />
                <div>
                  <h4 className="font-bold text-[#091413] text-lg leading-tight">{item.name}</h4>
                  <p className="text-slate-400 text-sm">{item.location}</p>
                </div>
              </div>

              {/* BINTANG - Tetap Kuning agar familiar sebagai rating, tapi bisa juga diubah ke #408A71 */}
              <div className="flex gap-1 mb-4">
                {[...Array(item.stars)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>

              {/* KOMENTAR */}
              <p className="text-slate-600 leading-relaxed italic text-left">
                {item.comment}
              </p>
              
              {/* Dekorasi kecil di sudut card */}
              <div className="absolute top-4 right-8 text-6xl text-[#B0E4CC]/20 font-serif leading-none select-none">
                “
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;