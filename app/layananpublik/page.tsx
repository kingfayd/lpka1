import Header from "../components/Header";
import Footer from "../components/Footer";
import LayananInformasiPublik from "../components/LayananInformasiPublik";

export default function LayananInformasiPublikPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <LayananInformasiPublik />
      <Footer />
    </main>
  );
}
