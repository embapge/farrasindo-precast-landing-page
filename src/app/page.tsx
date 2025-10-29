"use client";

import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Award,
  Shield,
  Star,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useRef } from "react";
import { QualityTable } from "@/components/QualityTable";
import { useRouter } from "next/navigation";
import Image from "next/image";
import CranePrecastAsset from "@/components/images/assets/crane-precast.jpg";
import PrecastAsset from "@/components/images/precast-background.jpg";

// Simple AnimatedNumber component
import { useEffect, useState } from "react";
import { Clients } from "@/components/Clients";
function AnimatedNumber({ end }: { end: number }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let started = false;
    let start = 0;
    const duration = 1000;
    const increment = end / (duration / 16);

    const animate = () => {
      start += increment;
      if (start < end) {
        setValue(Math.floor(start));
        requestAnimationFrame(animate);
      } else {
        setValue(end);
      }
    };

    const onScroll = () => {
      if (!ref.current || started) return;
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        started = true;
        animate();
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
    // eslint-disable-next-line
  }, [end]);

  return (
    <span ref={ref} className="text-5xl text-orange-600 mb-2">
      {value}+
    </span>
  );
}

export default function HomePage() {
  const { push } = useRouter();
  const productsScrollRef = useRef<HTMLDivElement | null>(null);
  const portofolioScrollRef = useRef<HTMLDivElement | null>(null);
  const companyScrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (
    ref: React.RefObject<HTMLDivElement | null>,
    direction: "left" | "right"
  ) => {
    if (ref.current) {
      const scrollAmount = 400;
      ref.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const featuredProducts = [
    {
      name: "U-Ditch",
      category: "Saluran Drainase",
      description: "Saluran drainase berbentuk U untuk sistem pengairan",
      mutu: ">= K-350",
      sizes: [
        "300x300",
        "300x400",
        "300x500",
        "400x400",
        "400x500",
        "400x600",
        "500x500",
        "500x700",
        "600x600",
        "600x700",
        "600x800",
        "800x700",
        "800x800",
        "800x1000",
      ],
      image_path: "/products/u-ditch.png",
    },
    {
      name: "Box Culvert",
      category: "Saluran Drainase",
      description: "Gorong-gorong berbentuk kotak untuk drainase",
      sizes: ["600x600", "800x800", "1000x1000", "2000x2000"],
      mutu: ">= K-350",
      image_path: "/products/box-culvert.png",
    },
    {
      name: "Concrete Wall",
      category: "Bangunan",
      description:
        "Dinding beton untuk memberikan kekuatan, daya tahan, dan stabilitas pada sebuah bangunan",
      sizes: ["100x100", "150x150", "200x200", "300x300"],
      mutu: ">= K-350",
      image_path: "/products/concrete-wall-facade-h03-2k.png",
    },
    {
      name: "Road Barrier",
      category: "Produk Jalan",
      description: "Pembatas jalan untuk keamanan lalu lintas",
      sizes: ["300x700x2500", "600x1000x1000"],
      mutu: ">= K-350",
      image_path: "/products/barrier.png",
    },
    {
      name: "Panel Arsitektur",
      category: "Bangunan",
      description:
        "Pelapis luar bangunan yang dekoratif, pelindung dari elemen eksternal, serta sebagai elemen struktural atau non-struktural",
      sizes: ["50x100", "75x150", "100x200", "150x300"],
      mutu: ">= K-350",
      image_path: "/products/architectural-elements.h03-2k.png",
    },
  ];

  const featuredProjects = [
    {
      title: "Proyek Drainase Jalan Tol Trans Jawa",
      location: "Jakarta - Surabaya",
      year: "2024",
      image:
        "https://images.unsplash.com/photo-1649644625092-6a66a59cffda?w=400",
    },
    {
      title: "Pembangunan Perumahan Griya Asri",
      location: "Tangerang, Banten",
      year: "2024",
      image:
        "https://images.unsplash.com/photo-1716037999044-98a8e85dfa1a?w=400",
    },
    {
      title: "Kawasan Industri Karawang",
      location: "Karawang, Jawa Barat",
      year: "2023",
      image:
        "https://images.unsplash.com/photo-1730148005805-51a70e63d2ec?w=400",
    },
    {
      title: "Revitalisasi Trotoar Kota Semarang",
      location: "Semarang, Jawa Tengah",
      year: "2023",
      image:
        "https://images.unsplash.com/photo-1603753910171-24a77f633bf3?w=400",
    },
  ];

  const testimonials = [
    {
      name: "Ir. Bambang Suryanto",
      position: "Project Manager",
      company: "PT Wijaya Karya",
      text: "Farracon Precast memberikan kualitas produk yang konsisten dan pengiriman yang selalu tepat waktu. Sangat membantu kelancaran proyek kami.",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=ahmad",
    },
    {
      name: "Drs. Ahmad Hidayat",
      position: "Site Manager",
      company: "PT Adhi Karya",
      text: "Produk U-Ditch dari Farracon Precast memiliki kualitas yang sangat baik dengan harga yang kompetitif. Rekomendasikan untuk proyek infrastruktur.",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=bambang",
    },
    {
      name: "Eng. Siti Nurhaliza, ST",
      position: "Chief Engineer",
      company: "Agung Podomoro Land",
      text: "Pelayanan yang profesional dan produk berkualitas tinggi. Tim Farracon Precast sangat responsif terhadap kebutuhan custom produk kami.",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=sdfd",
    },
  ];

  const certificates = [
    {
      icon: Star,
      title: "TKDN Certificate",
      issuer: "Kementerian Perindustrian RI",
      description: "Tingkat Komponen Dalam Negeri",
      color: "yellow",
    },
  ];

  return (
    <div className="">
      {/* Hero Section with Full Screen Image */}
      <section className="relative md:h-screen pt-25 pb-10">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={`/api/image?path=/backgrounds/home-background1.jpg`}
            alt="Farracon Precast Factory"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-white mb-6 text-5xl lg:text-6xl">
                Solusi Beton Pracetak Berkualitas Tinggi untuk Infrastruktur
                Modern
              </h1>
              <p className="text-white/90 mb-10 text-xl max-w-3xl">
                Dipercaya oleh ratusan proyek infrastruktur di seluruh Indonesia
                dengan standar SNI dan ISO. Kualitas terjamin, pengiriman tepat
                waktu, harga kompetitif.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button
                  size="lg"
                  className="backdrop-blur-sm bg-orange-500/50 hover:bg-orange-500/50 text-white text-lg px-8 py-6 hover:scale-105 transition-all cursor-pointer border border-orange-500 "
                  onClick={() => push("product")}
                >
                  <span>Lihat Produk Kami</span>
                  <ArrowRight className="ml-2" size={24} />
                </Button>
                <div
                  // size="lg"
                  // variant="outline"
                  className="bg-white/10 cursor-pointer hover:scale-110 transition-all backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20 flex items-center justify-center text-white font-medium"
                  onClick={() => push("contact")}
                >
                  Konsultasi Gratis
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-white/10 cursor-pointer hover:scale-110 transition-all backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="text-orange-400 flex-shrink-0 mt-1"
                      size={24}
                    />
                    <div>
                      <div className="text-white">Kualitas Terjamin</div>
                      <p className="text-white/70 text-sm">
                        Sesuai SNI & ISO 9001
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 cursor-pointer hover:scale-110 transition-all backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="text-orange-400 flex-shrink-0 mt-1"
                      size={24}
                    />
                    <div>
                      <div className="text-white">Pengiriman Cepat</div>
                      <p className="text-white/70 text-sm">
                        On-time delivery 95%
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 cursor-pointer hover:scale-110 transition-all backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="text-orange-400 flex-shrink-0 mt-1"
                      size={24}
                    />
                    <div>
                      <div className="text-white">Harga Kompetitif</div>
                      <p className="text-white/70 text-sm">
                        Best value guarantee
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <AnimatedNumber end={15} />
              <p className="text-gray-600">Tahun Pengalaman</p>
            </div>
            <div>
              <AnimatedNumber end={500} />
              <p className="text-gray-600">Proyek Selesai</p>
            </div>
            <div>
              <AnimatedNumber end={100} />
              <p className="text-gray-600">Mitra Terpercaya</p>
            </div>
            <div>
              <AnimatedNumber end={50000} />
              <p className="text-gray-600">Unit/Bulan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-6">
            <div>
              <div className="text-lg text-green-600 font-semibold">
                Sejarah Perusahaan
              </div>
              <h2 className="mb-6 text-gray-900 text-4xl font-bold">
                15 Tahun Pengalaman Membangun Indonesia
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                PT Farracon Precast didirikan pada tahun 2009 dengan visi
                menjadi produsen beton pracetak terkemuka di Indonesia. Dengan
                pengalaman lebih dari 15 tahun, kami telah melayani ratusan
                proyek infrastruktur di seluruh nusantara.
              </p>
              <p className="text-gray-600 mb-6">
                Kami berkomitmen untuk terus berkontribusi dalam pembangunan
                infrastruktur Indonesia melalui produk-produk berkualitas tinggi
                yang memenuhi standar nasional dan internasional. Fasilitas
                produksi kami dilengkapi dengan teknologi modern dan didukung
                oleh tim profesional yang berpengalaman.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-orange-50 p-4 rounded-lg border-2 border-orange-200">
                  <div className="text-3xl text-orange-600 mb-2">50.000+</div>
                  <p className="text-gray-600">Unit Produksi/Bulan</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg border-2 border-orange-200">
                  <div className="text-3xl text-orange-600 mb-2">5 Tahun</div>
                  <p className="text-gray-600">Garansi Produk</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden hover:scale-105 transition-all cursor-pointer">
                <Image
                  src={`/api/image?path=/backgrounds/home-background1.jpg`}
                  width={750}
                  height={750}
                  alt="Crane Precast"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Overview with Horizontal Scroll */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-4">
            <div className="text-center w-full">
              <h2 className="mb-1 text-green-400 font-semibold text-xl">
                Produk Kami
              </h2>
              <h2 className="mb-4 text-gray-900 text-4xl font-bold">
                Produk Beton Pracetak Unggulan
              </h2>
            </div>
            <div className="hidden md:flex">
              <button
                onClick={() => scroll(productsScrollRef, "left")}
                className="bg-orange-500 p-2 rounded-l-lg cursor-pointer hover:scale-105 transition-all hover:bg-orange-600 text-white"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scroll(productsScrollRef, "right")}
                className="bg-orange-500 p-2 rounded-r-lg cursor-pointer hover:scale-105 transition-all hover:bg-orange-600 text-white"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div
            ref={productsScrollRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {featuredProducts.map((product, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-80 hover:shadow-xl transition-shadow snap-start border-gray-500/20"
              >
                <div className="relative h-80 overflow-hidden rounded-t-lg">
                  <div className="w-full h-full flex items-center justify-center">
                    <Image
                      src={`/api/image?path=${product.image_path}`}
                      width={200}
                      height={200}
                      alt="U Ditch"
                      className="z-1 cursor-pointer hover:scale-120 transition-all"
                    />
                    {/* <div className="absolute bg-orange-500/80 h-40 w-40 rounded-full blur-2xl"></div> */}
                  </div>
                  <div className="absolute bottom-0 w-full">
                    <div className="w-full flex justify-between p-3">
                      <Badge className="backdrop-blur-sm bg-orange-500/20 border border-orange-500/50">
                        <span className="font-semibold opacity-100 text-orange-500/70 text-sm">
                          {product.category}
                        </span>
                      </Badge>
                      <Badge className="bg-white-500/0 border border-orange-500/50">
                        <span className="font-semibold opacity-100 text-orange-300 text-sm">
                          {product.mutu}
                        </span>
                      </Badge>
                    </div>
                  </div>
                </div>
                <CardContent className="flex flex-col">
                  <h3 className="mb-2 text-gray-900">{product.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {product.description}
                  </p>
                  <div className="flex flex-col mb-3">
                    <span className="text-sm text-gray-500 mb-1">
                      Ukuran Tersedia:
                    </span>
                    <div className="w-full flex flex-wrap gap-2">
                      {product.sizes.map((size, idx) => (
                        <span
                          className="bg-gray-100 rounded-full text-gray-800 text-xs font-semibold py-1 px-2 rounded"
                          key={idx}
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500 mb-1">
                      Aplikasi:
                    </span>
                    <div className="w-full flex flex-wrap gap-2">
                      <span className="border border-black/20 text-gray-800 text-xs font-semibold py-1 px-2 rounded-full">
                        Saluran Drainase
                      </span>
                      <span className="border border-black/20 text-gray-800 text-xs font-semibold py-1 px-2 rounded-full">
                        Jalan & Trotoar
                      </span>
                      <span className="border border-black/20 text-gray-800 text-xs font-semibold py-1 px-2 rounded-full">
                        Bangunan Bertingkat
                      </span>
                      <span className="border border-black/20 text-gray-800 text-xs font-semibold py-1 px-2 rounded-full">
                        Jembatan
                      </span>
                    </div>
                  </div>
                  <div className="rounded-md border border-gray-200 my-3"></div>
                  <div className="flex flex-col gap-1 items-center justify-center">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded cursor-pointer text-sm flex items-center w-[150px] text-center justify-center hover:scale-105 transition-all">
                      Hubungi Sales
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-3">
            <button
              onClick={() => push("product")}
              className="border-orange-600 text-orange-600 hover:bg-orange-50 inline-flex items-center cursor-pointer hover:scale-105 transition-all font-semibold"
            >
              Lihat Semua Produk
              <ArrowRight className="ml-2" size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Portofolio Overview */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-4">
            <div className="text-center w-full">
              <h2 className="mb-1 text-green-400 font-semibold text-xl">
                Portofolio
              </h2>
              <h2 className="mb-4 text-gray-900 text-4xl font-bold">
                Projek Yang Telah Kami Kerjakan
              </h2>
            </div>
            <div className="hidden md:flex">
              <button
                onClick={() => scroll(portofolioScrollRef, "left")}
                className="bg-orange-500 p-2 rounded-l-lg cursor-pointer hover:scale-105 transition-all hover:bg-orange-600 text-white"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scroll(portofolioScrollRef, "right")}
                className="bg-orange-500 p-2 rounded-r-lg cursor-pointer hover:scale-105 transition-all hover:bg-orange-600 text-white"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div
            ref={portofolioScrollRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {featuredProjects.map((project, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-96 hover:shadow-xl transition-shadow snap-start overflow-hidden border-orange-500"
              >
                <div className="relative h-64">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <Badge className="mb-3 backdrop-blur-sm bg-orange-500/20 border border-orange-500/50">
                      {project.year}
                    </Badge>
                    <h3 className="mb-2">{project.title}</h3>
                    <p className="text-gray-200 text-sm">{project.location}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-3">
            <button
              onClick={() => push("portofolio")}
              className="border-orange-600 text-orange-600 hover:bg-orange-50 inline-flex items-center cursor-pointer hover:scale-105 transition-all font-semibold"
            >
              Lihat Semua Portofolio
              <ArrowRight className="ml-2" size={18} />
            </button>
          </div>
        </div>
      </section> */}

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="z-10 w-full relative py-12 px-6 min-h-[700px] md:min-h-[500px] flex flex-col justify-between">
          <Image
            src={PrecastAsset}
            fill={true}
            alt="Precast Background"
            className="object-cover absolute inset-0 z-0 w-full"
          />
          <div className="text-center mb-12 text-white z-10 relative">
            <h2 className="mb-20 md:mb-4 text-4xl">
              Mengapa Memilih Farracon Precast?
            </h2>
            <p className="text-orange-200 max-w-3xl mx-auto text-lg">
              Komitmen kami terhadap kualitas dan kepuasan pelanggan
            </p>
          </div>

          {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all cursor-pointer hover:scale-105 h-[150px] flex items-center justify-center">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-2">98%</div>
                <p className="text-orange-100">Tingkat Kepuasan Klien</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all cursor-pointer hover:scale-105 h-[150px] flex items-center justify-center">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-2">95%</div>
                <p className="text-orange-100">On-Time Delivery</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all cursor-pointer hover:scale-105 h-[150px] flex items-center justify-center">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-2">ISO</div>
                <p className="text-orange-100">Quality Certified</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all cursor-pointer hover:scale-105 h-[150px] flex items-center justify-center">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-2">24/7</div>
                <p className="text-orange-100">Customer Support</p>
              </CardContent>
            </Card>
          </div> */}

          <div className="text-center mt-12 relative">
            <Button
              size="lg"
              className="backdrop-blur-sm bg-orange-500/30 hover:bg-orange-500/50 text-white text-md px-8 py-4 hover:scale-105 transition-all cursor-pointer border border-orange-500 "
              onClick={() => push("about")}
            >
              <span>Pelajari Lebih Lanjut</span>
              <ArrowRight className="ml-2" size={24} />
            </Button>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-1 text-green-400 font-semibold text-xl">
              Sertifikasi & Standar
            </h2>
            <h2 className="mb-4 text-gray-900 text-4xl font-bold">
              Terjamin dengan Sertifikasi Resmi
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Komitmen kami terhadap kualitas dibuktikan dengan berbagai
              sertifikasi nasional dan internasional
            </p>
          </div>

          <div className="flex gap-8 max-w-5xl mx-auto w-full">
            {certificates.map((cert, index) => {
              const colorClasses = {
                yellow: "bg-yellow-500",
                orange: "bg-orange-500",
              };

              return (
                <Card
                  key={index}
                  className={`hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300 overflow-hidden border-orange-500 cursor-pointer mx-auto ${
                    colorClasses[cert.color as keyof typeof colorClasses]
                  }`}
                >
                  <CardContent className={`p-8 text-center  text-white`}>
                    <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
                      <cert.icon size={40} />
                    </div>
                    <h3 className="mb-3 text-white text-2xl">{cert.title}</h3>
                    <p className="text-white/90 mb-2">{cert.description}</p>
                    <p className="text-white/70 text-sm">{cert.issuer}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => push("about")}
              className="border-orange-600 text-orange-600 hover:bg-orange-50 inline-flex items-center cursor-pointer hover:scale-105 transition-all font-semibold"
            >
              Lihat Semua Sertifikat
              <ArrowRight className="ml-2" size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Quality Table Section */}
      {/* <QualityTable /> */}

      {/* Testimonials Section */}
      <Clients />
    </div>
  );
}
