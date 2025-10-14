"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Building2, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { useRouter } from "next/navigation";

export default function PortofolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { push } = useRouter();

  const projects = [
    {
      title: "Proyek Drainase Jalan Tol Trans Jawa",
      location: "Jakarta - Surabaya",
      year: "2024",
      category: "Infrastruktur Jalan",
      client: "PT Jasa Marga (Persero) Tbk",
      description:
        "Penyediaan 10.000 unit U-Ditch dan Box Culvert untuk sistem drainase jalan tol sepanjang 500 km. Proyek berskala nasional dengan standar kualitas tinggi.",
      products: ["U-Ditch", "Box Culvert", "Cover U-Ditch"],
      value: "Rp 25 Miliar",
      duration: "12 bulan",
      image:
        "https://images.unsplash.com/photo-1649644625092-6a66a59cffda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MXx8fHwxNzYwMDgwMjQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Pembangunan Perumahan Griya Asri",
      location: "Tangerang, Banten",
      year: "2024",
      category: "Perumahan",
      client: "Sinar Mas Land",
      description:
        "Pengadaan paving block, kanstin, dan grass block untuk pembangunan 500 unit rumah di kawasan premium Tangerang.",
      products: ["Paving Block", "Kanstin", "Grass Block"],
      value: "Rp 8 Miliar",
      duration: "8 bulan",
      image:
        "https://images.unsplash.com/photo-1716037999044-98a8e85dfa1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb25zdHJ1Y3Rpb24lMjBwcm9qZWN0fGVufDF8fHx8MTc1OTk5NjMwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Kawasan Industri Karawang",
      location: "Karawang, Jawa Barat",
      year: "2023",
      category: "Industri",
      client: "PT Wijaya Karya (Persero) Tbk",
      description:
        "Sistem drainase lengkap untuk kawasan industri seluas 50 hektar dengan kapasitas besar untuk menampung aliran air hujan.",
      products: ["U-Ditch", "Box Culvert", "Manhole"],
      value: "Rp 15 Miliar",
      duration: "10 bulan",
      image:
        "https://images.unsplash.com/photo-1730148005805-51a70e63d2ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwY29uY3JldGUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjAwODAyNDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Revitalisasi Trotoar Kota Semarang",
      location: "Semarang, Jawa Tengah",
      year: "2023",
      category: "Fasilitas Publik",
      client: "Pemerintah Kota Semarang",
      description:
        "Pemasangan paving block dan kanstin untuk trotoar sepanjang 5 km di jalan protokol kota Semarang.",
      products: ["Paving Block", "Kanstin", "Road Barrier"],
      value: "Rp 5 Miliar",
      duration: "6 bulan",
      image:
        "https://images.unsplash.com/photo-1603753910171-24a77f633bf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMGRyYWluYWdlJTIwY2hhbm5lbHxlbnwxfHx8fDE3NjAwODAyNDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Pembangunan Gedung Perkantoran",
      location: "Jakarta Selatan",
      year: "2023",
      category: "Komersial",
      client: "Agung Podomoro Land",
      description:
        "Penyediaan panel lantai dan tiang pancang untuk gedung perkantoran 15 lantai di kawasan bisnis Jakarta Selatan.",
      products: ["Panel Lantai", "Tiang Pancang"],
      value: "Rp 18 Miliar",
      duration: "14 bulan",
      image:
        "https://images.unsplash.com/photo-1591180566452-88208818594b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMHByb2R1Y3RzJTIwd2FyZWhvdXNlfGVufDF8fHx8MTc2MDA4MDI0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Jembatan Sungai Brantas",
      location: "Mojokerto, Jawa Timur",
      year: "2022",
      category: "Infrastruktur",
      client: "PT Adhi Karya (Persero) Tbk",
      description:
        "Pengadaan balok girder untuk pembangunan jembatan bentang 40 meter di atas sungai Brantas dengan teknologi prategang.",
      products: ["Balok Girder", "Tiang Pancang"],
      value: "Rp 12 Miliar",
      duration: "8 bulan",
      image:
        "https://images.unsplash.com/photo-1649644625092-6a66a59cffda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MXx8fHwxNzYwMDgwMjQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Proyek MRT Jakarta Fase 2",
      location: "Jakarta",
      year: "2022",
      category: "Infrastruktur",
      client: "PT MRT Jakarta",
      description:
        "Penyediaan berbagai komponen beton pracetak untuk pembangunan stasiun dan jalur MRT Jakarta fase 2.",
      products: ["Panel Lantai", "U-Ditch", "Box Culvert"],
      value: "Rp 35 Miliar",
      duration: "18 bulan",
      image:
        "https://images.unsplash.com/photo-1583169828149-5973ebae36f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVjYXN0JTIwY29uY3JldGUlMjBmYWN0b3J5fGVufDF8fHx8MTc2MDA4MDI0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Bandara Internasional Kertajati",
      location: "Majalengka, Jawa Barat",
      year: "2021",
      category: "Infrastruktur",
      client: "PT Angkasa Pura II",
      description:
        "Pengadaan sistem drainase bandara dan area parkir dengan paving block untuk bandara internasional.",
      products: ["U-Ditch", "Box Culvert", "Paving Block"],
      value: "Rp 22 Miliar",
      duration: "12 bulan",
      image:
        "https://images.unsplash.com/photo-1730148005805-51a70e63d2ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwY29uY3JldGUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjAwODAyNDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const categories = [
    "all",
    "Infrastruktur Jalan",
    "Infrastruktur",
    "Perumahan",
    "Industri",
    "Fasilitas Publik",
    "Komersial",
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] pt-20">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1649644625092-6a66a59cffda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MXx8fHwxNzYwMDgwMjQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Portofolio Projects"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-orange-900/50"></div>
        </div>

        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-white mb-6 text-5xl lg:text-6xl">
                Portofolio Proyek Kami
              </h1>
              <p className="text-white/90 mb-8 text-xl">
                Dipercaya oleh ratusan kontraktor dan developer untuk berbagai
                proyek infrastruktur di seluruh Indonesia. Dari jalan tol hingga
                perumahan, kami telah berkontribusi membangun Indonesia.
              </p>
              <Button
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-6 cursor-pointer"
                onClick={() => push("contact")}
              >
                Mulai Proyek Anda
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 bg-white border-b border-gray-300">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl text-orange-600 mb-2">500+</div>
              <p className="text-gray-600">Proyek Selesai</p>
            </div>
            <div>
              <div className="text-3xl text-orange-600 mb-2">100+</div>
              <p className="text-gray-600">Klien Terpercaya</p>
            </div>
            <div>
              <div className="text-3xl text-orange-600 mb-2">Rp 500M+</div>
              <p className="text-gray-600">Total Nilai Proyek</p>
            </div>
            <div>
              <div className="text-3xl text-orange-600 mb-2">15+</div>
              <p className="text-gray-600">Tahun Pengalaman</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                onClick={() => setSelectedCategory(cat)}
                className={
                  selectedCategory === cat
                    ? "bg-orange-600 hover:bg-orange-700"
                    : "border-orange-600 text-orange-600 hover:bg-orange-50"
                }
              >
                {cat === "all" ? "Semua Kategori" : cat}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-shadow border-gray-200"
              >
                <div className="relative h-72">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-orange-600">{project.category}</Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="mb-2">{project.title}</h3>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        {project.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {project.year}
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3 text-sm text-gray-600">
                    <Building2 size={16} className="text-orange-600" />
                    <span>{project.client}</span>
                  </div>

                  <p className="text-gray-600 mb-4 text-justify">
                    {project.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-4 pb-4 border-b border-gray-300">
                    <div>
                      <div className="text-sm text-gray-500">Nilai Proyek</div>
                      <div className="text-orange-600">{project.value}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Durasi</div>
                      <div className="text-gray-900">{project.duration}</div>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-gray-700 mb-2">
                      Produk yang digunakan:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.products.map((product, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="text-xs border-orange-600 text-orange-700"
                        >
                          {product}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-white">
        <div className="container mx-auto">
          <Card className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-none">
            <CardContent className="p-12 text-center">
              <h2 className="mb-4">Proyek Anda Berikutnya?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                Bergabunglah dengan ratusan klien yang telah mempercayakan
                proyek mereka kepada Farracon Precast. Konsultasikan kebutuhan
                proyek Anda dengan tim ahli kami.
              </p>
              <Button className="bg-orange-600 hover:bg-orange-700" size="lg">
                Mulai Proyek Anda
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
