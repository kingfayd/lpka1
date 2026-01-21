"use client";

export default function SambutanSection() {
  return (
    <section
      id="inovasi"
      className="relative w-full bg-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* FOTO KETUA */}
        <div className="flex justify-center md:justify-start">
          <img
            src="/images/ketua-lpka.jpg"
            alt="Ketua LPKA Tangerang"
            className="w-64 md:w-80 rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* KATA SAMBUTAN */}
        <div className="text-slate-800">
          <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-2">
            Kata Sambutan
          </h3>

          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">
            Kepala LPKA Kelas I Tangerang
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            Assalamu’alaikum Warahmatullahi Wabarakatuh.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            Puji syukur kita panjatkan ke hadirat Tuhan Yang Maha Esa,
            atas rahmat dan karunia-Nya website resmi Lembaga Pembinaan
            Khusus Anak Kelas I Tangerang ini dapat hadir sebagai sarana
            informasi dan pelayanan kepada masyarakat.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            Kami berkomitmen untuk terus meningkatkan pembinaan,
            pengawasan, serta pelayanan terbaik dalam rangka membentuk
            pribadi anak binaan yang mandiri, berakhlak, dan siap kembali
            ke masyarakat.
          </p>

          <div className="mt-6">
            <p className="font-semibold text-slate-900">
              Aldikan Nasution, A.md.IP., S.H., M.Si.
            </p>
            <p className="text-sm text-gray-500">
              Kepala LPKA Kelas I Tangerang
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
