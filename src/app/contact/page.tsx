import { Contact } from "@/components/Contact";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PT. Farracon Precast Industri",
  description: "Perusahaan penyedia solusi beton pracetak berkualitas tinggi.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[88vh] min-h-[400px] pt-20">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="/api/image?path=/precast-background(3).jpg"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/80 via-orange-800/70 to-yellow-700/60"></div>
        </div>

        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-center mx-auto">
              <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full mb-6">
                Siap Melayani Anda 24/7
              </div>
              <h1 className="text-white mb-6 text-5xl lg:text-6xl">
                Hubungi Kami
              </h1>
              <p className="text-white/90 text-xl">
                Tim ahli kami siap membantu Anda menemukan solusi terbaik untuk
                kebutuhan beton pracetak proyek Anda
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Info */}
      <section className="py-8 bg-gradient-to-r from-orange-600 to-yellow-600 -mt-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-4 text-white">
            <div className="text-center">
              <Phone className="mx-auto mb-2" size={24} />
              <p className="text-sm text-orange-100">Telepon</p>
              <p>+62 8157 5453 564</p>
            </div>
            <div className="text-center">
              <Mail className="mx-auto mb-2" size={24} />
              <p className="text-sm text-orange-100">Email</p>
              <p>marketing@farrasindo-cp.co.id</p>
            </div>
            <div className="text-center">
              <MapPin className="mx-auto mb-2" size={24} />
              <p className="text-sm text-orange-100">Lokasi</p>
              <p>Citereup, Jawa Barat</p>
            </div>
            <div className="text-center">
              <Clock className="mx-auto mb-2" size={24} />
              <p className="text-sm text-orange-100">Jam Kerja</p>
              <p>Senin - Sabtu 08:00-17:00</p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
}
