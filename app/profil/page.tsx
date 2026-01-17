"use client";

import WaveBackground from "../components/WaveBackground";

export default function ProfilPage() {
    return (
      <>
        <style jsx global>{`
          @keyframes floatSlow {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-40px); }
            100% { transform: translateY(0px); }
          }
  
          @keyframes floatFast {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-60px); }
            100% { transform: translateY(0px); }
          }
  
          @keyframes floatMedium {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-50px); }
            100% { transform: translateY(0px); }
          }
  
          .animate-floatSlow {
            animation: floatSlow 20s ease-in-out infinite;
          }
  
          .animate-floatMedium {
            animation: floatMedium 15s ease-in-out infinite;
          }
  
          .animate-floatFast {
            animation: floatFast 10s ease-in-out infinite;
          }
        `}</style>

        <main className="relative min-h-screen overflow-hidden bg-slate-900">
          {/* HERO SECTION DENGAN BACKGROUND GELAP */}
          <section className="relative pt-24 pb-20 px-4 md:px-6 overflow-hidden bg-slate-900">
            {/* KONTEN HERO */}
            <div className="container mx-auto max-w-7xl relative z-10">
              <div className="text-center" data-aos="fade-down">
                <h2 className="text-sm md:text-base font-medium text-gray-300 mb-3 tracking-wide">
                KEMENTERIAN IMIGRASI DAN PEMASYARAKATAN RI
                </h2>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                  LEMBAGA PEMBINAAN<br />
                  <span className="text-white">KUSUS ANAK KELAS 1 TANGERANG</span>
                </h1>
                <p className="text-base md:text-lg text-white max-w-3xl mx-auto leading-relaxed font-normal mt-6" data-aos="fade-up" data-aos-delay="100">
                  Selamat datang di website Lembaga Pembinaan Khusus Anak Kelas 1 Tangerang, 
                  kami berkomitmen untuk menjaga keamanan dan membangun kepribadian 
                  para warga binaan serta memberikan pelayanan yang optimal.
                </p>
              </div>
            </div>

            {/* WAVE DI BAWAH TEKS SELAMAT DATANG */}
            <WaveBackground />
          </section>

          {/* KONTEN UTAMA */}
          {false && (
          <section className="relative z-10 py-8 md:py-12 px-4 md:px-6 bg-white">
            <div className="container mx-auto max-w-7xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12">
                {/* TENTANG LPKA */}
                <div 
                  className="bg-white rounded-lg p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200" 
                  data-aos="fade-right" 
                  data-aos-delay="200"
                >
                  <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4 pb-3 border-b border-gray-200">
                    Tentang LPKA Kelas 1 Tangerang
                  </h2>
                  <div className="space-y-3 text-sm md:text-base text-slate-600 leading-relaxed">
                    <p>
                      Lembaga Pembinaan Khusus Anak (LPKA) Kelas 1 Tangerang merupakan unit pelaksana teknis
                      yang melaksanakan pembinaan terhadap Anak Berhadapan dengan Hukum
                      secara humanis dan berkelanjutan.
                    </p>
                    <p>
                      LPKA Kelas 1 Tangerang memiliki peran strategis dalam memberikan pembinaan,
                      pendidikan, serta pelatihan keterampilan kepada anak didik
                      pemasyarakatan agar siap kembali ke masyarakat.
                    </p>
                    <p>
                      Pembinaan dilaksanakan dengan menjunjung tinggi perlindungan hak
                      anak, nilai kemanusiaan, serta pendekatan pembelajaran yang
                      berkelanjutan.
                    </p>
                  </div>
                </div>

                {/* INFORMASI SINGKAT */}
                <div 
                  className="bg-white rounded-lg p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200" 
                  data-aos="fade-left" 
                  data-aos-delay="200"
                >
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-4 pb-3 border-b border-gray-200">
                    Informasi Singkat
                  </h3>
                  <ul className="space-y-3 text-sm md:text-base text-slate-600">
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-2 min-w-[8px]">•</span>
                      <div>
                        <span className="font-semibold text-slate-800">Nama:</span>{" "}
                        <span className="text-slate-600">Lembaga Pembinaan Khusus Anak Kelas 1 Tangerang</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-2 min-w-[8px]">•</span>
                      <div>
                        <span className="font-semibold text-slate-800">Kelas:</span>{" "}
                        <span className="text-slate-600">Kelas 1</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-2 min-w-[8px]">•</span>
                      <div>
                        <span className="font-semibold text-slate-800">Lokasi:</span>{" "}
                        <span className="text-slate-600">Tangerang, Banten</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-2 min-w-[8px]">•</span>
                      <div>
                        <span className="font-semibold text-slate-800">Tugas Pokok:</span>{" "}
                        <span className="text-slate-600">Pembinaan Anak Berhadapan dengan Hukum</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-2 min-w-[8px]">•</span>
                      <div>
                        <span className="font-semibold text-slate-800">Fungsi:</span>{" "}
                        <span className="text-slate-600">Pembinaan, pendidikan & reintegrasi sosial</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-2 min-w-[8px]">•</span>
                      <div>
                        <span className="font-semibold text-slate-800">Landasan:</span>{" "}
                        <span className="text-slate-600">UU Sistem Peradilan Pidana Anak</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* VISI MISI */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
                <div 
                  className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-6 md:p-8 text-white shadow-lg" 
                  data-aos="fade-up" 
                  data-aos-delay="300"
                >
                  <h3 className="text-xl md:text-2xl font-bold mb-4">
                    Visi
                  </h3>
                  <p className="text-sm md:text-base text-blue-50 leading-relaxed">
                    Menjadi lembaga pembinaan yang profesional, humanis, dan berkelanjutan 
                    dalam membina anak berhadapan dengan hukum untuk reintegrasi sosial yang optimal.
                  </p>
                </div>

                <div 
                  className="bg-gradient-to-br from-blue-700 to-blue-600 rounded-lg p-6 md:p-8 text-white shadow-lg" 
                  data-aos="fade-up" 
                  data-aos-delay="400"
                >
                  <h3 className="text-xl md:text-2xl font-bold mb-4">
                    Misi
                  </h3>
                  <p className="text-sm md:text-base text-blue-50 leading-relaxed">
                    Melaksanakan pembinaan anak berhadapan dengan hukum melalui pendekatan 
                    pendidikan, pelatihan keterampilan, dan reintegrasi sosial dengan 
                    menjunjung tinggi hak-hak anak dan nilai kemanusiaan.
                  </p>
                </div>
              </div>

              {/* TUJUAN DAN FUNGSI */}
              <div className="bg-gray-50 rounded-lg p-6 md:p-8 border border-gray-200" data-aos="fade-up" data-aos-delay="500">
                <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-6 pb-3 border-b border-gray-200">
                  Tujuan dan Fungsi
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-blue-700 mb-3">Tujuan</h4>
                    <ul className="space-y-2 text-sm md:text-base text-slate-600">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        <span>Membina anak berhadapan dengan hukum secara humanis</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        <span>Menyiapkan reintegrasi sosial yang optimal</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        <span>Melindungi hak-hak anak selama proses pembinaan</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-700 mb-3">Fungsi</h4>
                    <ul className="space-y-2 text-sm md:text-base text-slate-600">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        <span>Pembinaan kepribadian dan karakter</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        <span>Pendidikan formal dan non-formal</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        <span>Pelatihan keterampilan dan vokasi</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          )}
        </main>
      </>
    );
  }