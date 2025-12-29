import { Target, Eye, Award, Users } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function About() {
  const values = [
    {
      icon: Target,
      title: "Visi",
      description:
        "Menjadi produsen beton pracetak terkemuka di Indonesia dengan standar kualitas internasional.",
    },
    {
      icon: Eye,
      title: "Misi",
      description:
        "Menyediakan produk beton pracetak berkualitas tinggi yang mendukung pembangunan infrastruktur Indonesia.",
    },
    {
      icon: Award,
      title: "Komitmen Kualitas",
      description:
        "Setiap produk diproduksi dengan standar SNI dan dikontrol ketat untuk memastikan kualitas terbaik.",
    },
    {
      icon: Users,
      title: "Tim Profesional",
      description:
        "Didukung oleh tim ahli berpengalaman di bidang teknik sipil dan produksi beton pracetak.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-4">
            Tentang Kami
          </div>
          <h2 className="mb-4 text-gray-900">PT Farracon Precast</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Dengan pengalaman lebih dari 15 tahun, Farracon Precast adalah
            perusahaan manufaktur beton pracetak yang telah dipercaya oleh
            ratusan kontraktor dan developer di seluruh Indonesia. Kami
            berkomitmen untuk menyediakan produk berkualitas tinggi dengan harga
            kompetitif.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => (
            <Card
              key={index}
              className="border-2 hover:border-blue-600 transition-colors"
            >
              <CardContent className="p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="text-blue-600" size={24} />
                </div>
                <h3 className="mb-2 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="mb-4">Mengapa Memilih Farracon Precast?</h3>
              <p className="mb-6 text-blue-100">
                Kami memahami kebutuhan industri konstruksi modern yang menuntut
                kualitas, ketepatan waktu, dan efisiensi biaya.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-white/20 rounded-full p-1 mt-1">
                    <div className="bg-white rounded-full w-2 h-2"></div>
                  </div>
                  <div>
                    <div className="mb-1">Fasilitas Produksi Modern</div>
                    <p className="text-blue-100 text-sm">
                      Dilengkapi dengan mesin dan teknologi terkini untuk
                      memastikan presisi dan konsistensi produk.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-white/20 rounded-full p-1 mt-1">
                    <div className="bg-white rounded-full w-2 h-2"></div>
                  </div>
                  <div>
                    <div className="mb-1">Quality Control Ketat</div>
                    <p className="text-blue-100 text-sm">
                      Setiap batch produk melalui pengujian laboratorium sesuai
                      standar SNI.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-white/20 rounded-full p-1 mt-1">
                    <div className="bg-white rounded-full w-2 h-2"></div>
                  </div>
                  <div>
                    <div className="mb-1">Customisasi Produk</div>
                    <p className="text-blue-100 text-sm">
                      Kami dapat menyesuaikan dimensi dan spesifikasi sesuai
                      kebutuhan proyek Anda.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="mb-2">50.000+</div>
                <p className="text-blue-100 text-sm">Unit Produksi/Bulan</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="mb-2">24/7</div>
                <p className="text-blue-100 text-sm">Customer Support</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="mb-2">ISO 9001</div>
                <p className="text-blue-100 text-sm">Certified</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="mb-2">5 Tahun</div>
                <p className="text-blue-100 text-sm">Garansi Produk</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
