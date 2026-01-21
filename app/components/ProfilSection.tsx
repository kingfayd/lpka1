export default function ProfilSection() {
    return (
      <section className="w-full bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* JUDUL */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Profil LPKA
          </h1>
  
          {/* DESKRIPSI */}
          <p className="text-gray-600 leading-relaxed mb-10">
          Lembaga Pembinaan Khusus Anak (LPKA) Kelas I Tangerang merupakan institusi yang bertugas menyelenggarakan pembinaan, pendidikan, serta pembimbingan bagi Anak Didik Pemasyarakatan (Andikpas) sebagai upaya mempersiapkan mereka agar mampu berkembang secara optimal dan siap kembali ke masyarakat. Proses pembinaan tersebut tidak hanya berfokus pada aspek akademik dan keterampilan, tetapi juga mencakup pembinaan mental, spiritual, dan sosial guna membentuk karakter yang berakhlak mulia.
          </p>
  
          {/* GRID VISI MISI */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* VISI */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Visi
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Terwujudnya pembinaan anak yang berorientasi pada pemulihan,
                pendidikan, dan reintegrasi sosial.
              </p>
            </div>
  
            {/* MISI */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Misi
              </h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Menyelenggarakan pembinaan kepribadian dan kemandirian</li>
                <li>Meningkatkan kualitas pendidikan dan keterampilan anak</li>
                <li>Mewujudkan layanan pemasyarakatan yang humanis</li>
                <li>Mendorong reintegrasi sosial yang berkelanjutan</li>
              </ul>
            </div>
          </div>
  
          {/* TUGAS & FUNGSI */}
          <div className="mt-12 bg-gray-50 p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Tugas dan Fungsi
            </h2>
            <p className="text-gray-600 leading-relaxed">
              LPKA bertugas melaksanakan pembinaan, perawatan, dan pendidikan
              terhadap anak binaan, serta memastikan pemenuhan hak-hak anak
              sesuai dengan ketentuan peraturan perundang-undangan.
            </p>
          </div>
        </div>
      </section>
    );
  }
  