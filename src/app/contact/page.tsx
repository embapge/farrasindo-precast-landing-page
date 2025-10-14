import { Contact } from "@/components/Contact";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[88vh] min-h-[400px] pt-20">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1583169828149-5973ebae36f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVjYXN0JTIwY29uY3JldGUlMjBmYWN0b3J5fGVufDF8fHx8MTc2MDA4MDI0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
              <p>+62 21 1234 5678</p>
            </div>
            <div className="text-center">
              <Mail className="mx-auto mb-2" size={24} />
              <p className="text-sm text-orange-100">Email</p>
              <p>info@farraconprecast.co.id</p>
            </div>
            <div className="text-center">
              <MapPin className="mx-auto mb-2" size={24} />
              <p className="text-sm text-orange-100">Lokasi</p>
              <p>Bekasi, Jawa Barat</p>
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
