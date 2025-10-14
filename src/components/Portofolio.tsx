import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { MapPin, Calendar } from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

export function Portofolio() {
  const projects = [
    {
      title: "Proyek Drainase Jalan Tol Trans Jawa",
      location: "Jakarta - Surabaya",
      year: "2024",
      category: "Infrastruktur Jalan",
      description:
        "Penyediaan 10.000 unit U-Ditch dan Box Culvert untuk sistem drainase jalan tol",
      products: ["U-Ditch", "Box Culvert", "Cover U-Ditch"],
      image:
        "https://images.unsplash.com/photo-1649644625092-6a66a59cffda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MXx8fHwxNzYwMDgwMjQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Pembangunan Perumahan Griya Asri",
      location: "Tangerang, Banten",
      year: "2024",
      category: "Perumahan",
      description: "Pengadaan paving block dan kanstin untuk 500 unit rumah",
      products: ["Paving Block", "Kanstin", "Grass Block"],
      image:
        "https://images.unsplash.com/photo-1716037999044-98a8e85dfa1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb25zdHJ1Y3Rpb24lMjBwcm9qZWN0fGVufDF8fHx8MTc1OTk5NjMwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Kawasan Industri Karawang",
      location: "Karawang, Jawa Barat",
      year: "2023",
      category: "Industri",
      description:
        "Sistem drainase lengkap untuk kawasan industri seluas 50 hektar",
      products: ["U-Ditch", "Box Culvert", "Manhole"],
      image:
        "https://images.unsplash.com/photo-1730148005805-51a70e63d2ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwY29uY3JldGUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjAwODAyNDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Revitalisasi Trotoar Kota Semarang",
      location: "Semarang, Jawa Tengah",
      year: "2023",
      category: "Fasilitas Publik",
      description:
        "Pemasangan paving block dan kanstin untuk trotoar sepanjang 5 km",
      products: ["Paving Block", "Kanstin", "Road Barrier"],
      image:
        "https://images.unsplash.com/photo-1603753910171-24a77f633bf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMGRyYWluYWdlJTIwY2hhbm5lbHxlbnwxfHx8fDE3NjAwODAyNDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Pembangunan Gedung Perkantoran",
      location: "Jakarta Selatan",
      year: "2023",
      category: "Komersial",
      description:
        "Penyediaan panel lantai dan tiang pancang untuk gedung 15 lantai",
      products: ["Panel Lantai", "Tiang Pancang"],
      image:
        "https://images.unsplash.com/photo-1591180566452-88208818594b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMHByb2R1Y3RzJTIwd2FyZWhvdXNlfGVufDF8fHx8MTc2MDA4MDI0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Jembatan Sungai Brantas",
      location: "Mojokerto, Jawa Timur",
      year: "2022",
      category: "Infrastruktur",
      description:
        "Pengadaan balok girder untuk pembangunan jembatan bentang 40 meter",
      products: ["Balok Girder", "Tiang Pancang"],
      image:
        "https://images.unsplash.com/photo-1649644625092-6a66a59cffda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MXx8fHwxNzYwMDgwMjQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <section id="portofolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-4">
            Portofolio
          </div>
          <h2 className="mb-4 text-gray-900">
            Proyek yang Telah Kami Kerjakan
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Dipercaya oleh ratusan kontraktor dan developer untuk berbagai
            proyek infrastruktur di seluruh Indonesia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-blue-600">{project.category}</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="mb-3 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin size={16} className="text-blue-600" />
                    {project.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar size={16} className="text-blue-600" />
                    {project.year}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.products.map((product, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {product}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Ingin melihat lebih banyak proyek kami? Hubungi tim kami untuk
            informasi lengkap dan kunjungan site.
          </p>
        </div>
      </div>
    </section>
  );
}
