"use client";

import {
  Target,
  Eye,
  Award,
  Users,
  Factory,
  Shield,
  TrendingUp,
  Heart,
  Wrench,
  Building2,
  CheckCircle2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { QualityTable } from "@/components/QualityTable";
import { Certificates } from "@/components/Certificates";
import { Clients } from "@/components/Clients";
import FarraconBackground from "@/components/images/precast-background(1).jpg";
import Image from "next/image";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import Link from "next/link";
import FarrasindoLogo from "@/components/images/logos/farrasindo-group.png";
import CitiCraneLogo from "@/components/images/logos/citi-crane.png";
import CitiPumpLogo from "@/components/images/logos/citi-pump.png";
import FreshBetonLogo from "@/components/images/logos/freshbeton.png";
import GBPLogo from "@/components/images/logos/gunung-bumi-perkasa.png";
import IntijayaLogo from "@/components/images/logos/intijaya.png";
import SimiLogo from "@/components/images/logos/simi.png";
import PrecastAsset from "@/components/images/precast-background(2).jpg";
import CranePrecastAsset from "@/components/images/assets/crane-precast.jpg";
import { useRef } from "react";

export default function AboutPage() {
  const companyScrollRef = useRef<HTMLDivElement | null>(null);
  const values = [
    {
      icon: Target,
      title: "Visi",
      description:
        "Menjadi produsen beton pracetak terkemuka di Indonesia dengan standar kualitas internasional yang mendukung pembangunan infrastruktur berkelanjutan.",
      color: "yellow",
    },
    {
      icon: Eye,
      title: "Misi",
      description:
        "Menyediakan produk beton pracetak berkualitas tinggi yang mendukung pembangunan infrastruktur Indonesia dengan harga kompetitif dan pelayanan terbaik.",
      color: "yellow",
    },
    {
      icon: Award,
      title: "Komitmen Kualitas",
      description:
        "Setiap produk diproduksi dengan standar SNI dan dikontrol ketat untuk memastikan kualitas terbaik. Kami berkomitmen untuk tidak berkompromi pada kualitas.",
      color: "yellow",
    },
    {
      icon: Users,
      title: "Tim Profesional",
      description:
        "Didukung oleh tim ahli berpengalaman di bidang teknik sipil dan produksi beton pracetak dengan pengalaman lebih dari 15 tahun.",
      color: "yellow",
    },
  ];

  const milestones = [
    { year: "2009", event: "Pendirian PT Farracon Precast", icon: Factory },
    {
      year: "2012",
      event: "Bergabung dengan Farrasindo Group",
      icon: Building2,
    },
    { year: "2015", event: "Sertifikasi ISO 9001:2015", icon: Award },
    {
      year: "2017",
      event: "Ekspansi Pabrik & Peningkatan Kapasitas",
      icon: TrendingUp,
    },
    { year: "2020", event: "Melayani 100+ Klien Terpercaya", icon: Users },
    { year: "2022", event: "Sertifikasi SNI Produk", icon: Shield },
    { year: "2024", event: "500+ Proyek Berhasil Diselesaikan", icon: Heart },
  ];

  const coreValues = [
    {
      title: "Integritas",
      description:
        "Kami berkomitmen untuk selalu jujur dan transparan dalam setiap aspek bisnis",
    },
    {
      title: "Inovasi",
      description:
        "Terus berinovasi dalam teknologi dan proses produksi untuk hasil terbaik",
    },
    {
      title: "Kualitas",
      description: "Tidak pernah berkompromi pada kualitas produk dan layanan",
    },
    {
      title: "Kepuasan Pelanggan",
      description:
        "Mengutamakan kepuasan pelanggan melalui produk dan layanan berkualitas",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] pt-20 bg-black">
        <div className="container mx-auto px-4 z-1 relative flex items-center justify-center h-full">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="mb-6 text-4xl font-bold">
              Tentang Farracon Precast
            </h1>
            <p className="text-xl text-yellow-100 mb-8">
              Membangun Indonesia dengan produk beton pracetak berkualitas
              tinggi sejak 2009
            </p>
          </div>
        </div>
        <Image
          src={PrecastAsset}
          alt="Precast Background"
          fill={true}
          className="object-cover opacity-40"
        />
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
                <div className="bg-yellow-50 p-4 rounded-lg border-2 border-yellow-200">
                  <div className="text-3xl text-yellow-600 mb-2">50.000+</div>
                  <p className="text-gray-600">Unit Produksi/Bulan</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg border-2 border-yellow-200">
                  <div className="text-3xl text-yellow-600 mb-2">5 Tahun</div>
                  <p className="text-gray-600">Garansi Produk</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden hover:scale-105 transition-all cursor-pointer">
                <Image
                  src={CranePrecastAsset}
                  alt="Crane Precast"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Visi Misi */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {values.map((value, index) => {
              const colorClasses = {
                yellow: "bg-yellow-100 text-yellow-600",
              };

              return (
                <Card
                  key={index}
                  className="border-2 border-yellow-200 hover:border-yellow-400 transition-colors cursor-pointer hover:scale-105 shadow-lg transition-all"
                >
                  <CardContent className="p-6">
                    <div
                      className={`w-12 h-12 rounded-lg ${
                        colorClasses[value.color as keyof typeof colorClasses]
                      } flex items-center justify-center mb-4`}
                    >
                      <value.icon size={24} />
                    </div>
                    <h3 className="mb-2 text-gray-900">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Farrasindo Group Section */}
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4 overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div id="farrasindo-group-1">
                <ScrollAnimation direction="left">
                  <h2 className="text-yellow-500 mb-4 text-4xl font-bold">
                    Bagian dari Farrasindo Group
                  </h2>
                  <p className="text-gray-600 mb-6 text-lg">
                    Farracon Precast merupakan bagian dari{" "}
                    <Link
                      href="https://farrasindo.com"
                      target="_blank"
                      className="text-yellow-600 hover:underline font-semibold"
                    >
                      <span>Farrasindo Group</span>
                    </Link>
                    , perusahaan terkemuka yang bergerak di bidang penyewaan
                    alat berat dan peralatan konstruksi beton.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Dengan dukungan Farrasindo Group, kami mampu memberikan
                    solusi terintegrasi untuk kebutuhan konstruksi Anda - mulai
                    dari produk beton pracetak berkualitas hingga alat berat
                    yang dibutuhkan untuk instalasi dan pembangunan.
                  </p>
                  <div className="flex gap-4 flex-col md:flex-row">
                    <div className="bg-white rounded-lg p-4 flex-1 border-2 border-yellow-200">
                      <div className="text-yellow-600 mb-2">
                        Solusi Terintegrasi
                      </div>
                      <p className="text-sm text-gray-600">
                        Produk beton + alat berat dalam satu grup
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-4 flex-1 border-2 border-yellow-200">
                      <div className="text-yellow-600 mb-2">
                        Pengalaman Luas
                      </div>
                      <p className="text-sm text-gray-600">
                        Expertise di industri konstruksi
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
              <div className="h-full flex items-center" id="farrasindo-group-2">
                <ScrollAnimation direction="right">
                  <Card className="bg-white shadow-xl border-yellow-200 w-full">
                    <CardContent className="p-8">
                      <div className="flex flex-col items-center justify-center mb-6 w-full">
                        <Link
                          href={"https://farrasindo-cp.co.id"}
                          target="_blank"
                        >
                          <Image
                            src={FarrasindoLogo}
                            alt="Farrasindo Group Logo"
                            width={300}
                          />
                        </Link>
                        <div
                          className="flex gap-2 items-center overflow-x-auto px-4 pb-4 w-full scrollbar-hide cursor-grab active:cursor-grabbing"
                          style={{
                            scrollbarWidth: "none",
                          }}
                          ref={companyScrollRef}
                          onMouseDown={(e) => {
                            const ele = companyScrollRef.current;
                            if (!ele) return;
                            ele.dataset.isDown = "true";
                            ele.dataset.startX = `${e.pageX - ele.offsetLeft}`;
                            ele.dataset.scrollLeft = `${ele.scrollLeft}`;
                          }}
                          onMouseLeave={(e) => {
                            const ele = companyScrollRef.current;
                            if (!ele) return;
                            ele.dataset.isDown = "false";
                          }}
                          onMouseUp={(e) => {
                            const ele = companyScrollRef.current;
                            if (!ele) return;
                            ele.dataset.isDown = "false";
                          }}
                          onMouseMove={(e) => {
                            const ele = companyScrollRef.current;
                            if (!ele || ele.dataset.isDown !== "true") return;
                            e.preventDefault();
                            const x = e.pageX - ele.offsetLeft;
                            const walk = (x - Number(ele.dataset.startX)) * 1.5; //scroll-fast
                            ele.scrollLeft =
                              Number(ele.dataset.scrollLeft) - walk;
                          }}
                        >
                          <Image
                            onDragStart={(e) => e.preventDefault()}
                            className="shadow-lg rounded-xl select-none"
                            src={CitiCraneLogo}
                            alt="Citi Crane Logo"
                            width={80}
                          />
                          <Image
                            onDragStart={(e) => e.preventDefault()}
                            src={CitiPumpLogo}
                            alt="Citi Pump Logo"
                            className="shadow-lg rounded-xl select-none"
                            width={80}
                          />
                          <Image
                            onDragStart={(e) => e.preventDefault()}
                            src={FreshBetonLogo}
                            alt="Fresh Beton Logo"
                            className="shadow-lg rounded-xl p-1 select-none"
                            width={80}
                          />
                          <Image
                            onDragStart={(e) => e.preventDefault()}
                            src={GBPLogo}
                            alt="Gunung Bumi Perkasa Logo"
                            className="shadow-lg rounded-xl p-1 select-none"
                            width={80}
                          />
                          <Image
                            onDragStart={(e) => e.preventDefault()}
                            src={IntijayaLogo}
                            alt="Intijaya Logo"
                            className="shadow-lg rounded-xl p-1 select-none"
                            width={80}
                          />
                          <Image
                            onDragStart={(e) => e.preventDefault()}
                            src={SimiLogo}
                            alt="Simi Logo"
                            className="shadow-lg rounded-xl p-1 select-none"
                            width={80}
                          />
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle2
                            className="text-yellow-600 flex-shrink-0 mt-1"
                            size={20}
                          />
                          <div>
                            <div className="text-gray-900 mb-1">
                              Sewa Alat Berat
                            </div>
                            <p className="text-sm text-gray-600">
                              Excavator, concrete mixer, crane, dan lainnya
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2
                            className="text-yellow-600 flex-shrink-0 mt-1"
                            size={20}
                          />
                          <div>
                            <div className="text-gray-900 mb-1">
                              Peralatan Concrete
                            </div>
                            <p className="text-sm text-gray-600">
                              Concrete pump, vibrator, dan equipment lainnya
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2
                            className="text-yellow-600 flex-shrink-0 mt-1"
                            size={20}
                          />
                          <div>
                            <div className="text-gray-900 mb-1">
                              Penambangan Bahan Baku
                            </div>
                            <p className="text-sm text-gray-600">
                              Menyediakan bahan baku (pasir, batu, dll) untuk
                              kebutuhan concrete
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2
                            className="text-yellow-600 flex-shrink-0 mt-1"
                            size={20}
                          />
                          <div>
                            <div className="text-gray-900 mb-1">
                              After Sales & Service
                            </div>
                            <p className="text-sm text-gray-600">
                              Layanan sparepart dan service alat berat serta
                              concrete pump
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2
                            className="text-yellow-600 flex-shrink-0 mt-1"
                            size={20}
                          />
                          <div>
                            <div className="text-gray-900 mb-1">
                              Operator Berpengalaman
                            </div>
                            <p className="text-sm text-gray-600">
                              Tim profesional untuk operasional alat berat
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-green-600 font-semibold text-lg">
              Perjalanan Kami
            </div>
            <h2 className="mb-4 text-gray-900 text-4xl font-bold">
              Milestone Perusahaan
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dari awal pendirian hingga menjadi produsen beton pracetak
              terkemuka di Indonesia
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Timeline Line */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-500 hidden md:block"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {milestones.map((milestone, index) => {
                  const isEven = index % 2 === 0;

                  return (
                    <div
                      key={index}
                      className={`relative flex items-center ${
                        isEven ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                    >
                      {/* Content Card */}
                      <div
                        className={`w-full md:w-5/12 ${
                          isEven
                            ? "md:text-right md:pr-12"
                            : "md:text-left md:pl-12"
                        }`}
                      >
                        <Card className="hover:shadow-xl transition-all transform hover:-translate-y-1 duration-300 bg-white border-2 border-yellow-200">
                          <CardContent className="p-6">
                            <div
                              className={`flex items-center gap-4 ${
                                isEven ? "md:flex-row-reverse" : "md:flex-row"
                              }`}
                            >
                              <div className="bg-yellow-500 w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0">
                                <milestone.icon
                                  className="text-white"
                                  size={28}
                                />
                              </div>
                              <div
                                className={`flex-1 ${
                                  isEven ? "md:text-right" : "md:text-left"
                                }`}
                              >
                                <div className="text-3xl text-yellow-600 mb-2">
                                  {milestone.year}
                                </div>
                                <p className="text-gray-700 text-lg">
                                  {milestone.event}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Center Dot */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
                        <div className="w-6 h-6 bg-white border-4 border-yellow-600 rounded-full shadow-lg"></div>
                      </div>

                      {/* Empty Space for alternating layout */}
                      <div className="hidden md:block md:w-5/12"></div>
                    </div>
                  );
                })}
              </div>

              {/* Start Point */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 hidden md:block">
                <div className="w-4 h-4 bg-yellow-600 rounded-full"></div>
              </div>

              {/* End Point */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8 hidden md:block">
                <div className="w-4 h-4 bg-yellow-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-green-600 font-semibold text-lg">
              Nilai-Nilai Kami
            </div>
            <h2 className="mb-4 text-gray-900 text-4xl font-bold">
              Prinsip yang Kami Pegang
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {coreValues.map((value, index) => (
              <Card
                key={index}
                className="bg-yellow-50 border-yellow-200 hover:scale-105 transition-all cursor-pointer hover:shadow-lg transition-all"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-2xl mb-3 text-yellow-600">
                    {index + 1}
                  </div>
                  <h3 className="mb-2 text-gray-900 text-xl">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-black rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden">
            <Image
              src={FarraconBackground}
              fill={true}
              alt="Farracon Precast"
              className="object-cover absolute inset-0 z-0 w-full rounded-2xl opacity-20"
            />
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="mb-4 text-4xl">
                  Mengapa Memilih Farracon Precast?
                </h3>
                <p className="mb-6 text-yellow-100">
                  Kami memahami kebutuhan industri konstruksi modern yang
                  menuntut kualitas, ketepatan waktu, dan efisiensi biaya.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-white/20 rounded-full p-1 mt-1">
                      <div className="bg-white rounded-full w-2 h-2"></div>
                    </div>
                    <div>
                      <div className="mb-1">Fasilitas Produksi Modern</div>
                      <p className="text-yellow-100 text-sm">
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
                      <p className="text-yellow-100 text-sm">
                        Setiap batch produk melalui pengujian laboratorium
                        sesuai standar SNI.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-white/20 rounded-full p-1 mt-1">
                      <div className="bg-white rounded-full w-2 h-2"></div>
                    </div>
                    <div>
                      <div className="mb-1">Customisasi Produk</div>
                      <p className="text-yellow-100 text-sm">
                        Kami dapat menyesuaikan dimensi dan spesifikasi sesuai
                        kebutuhan proyek Anda.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:scale-105 transition-transform cursor-pointer">
                  <div className="mb-2 text-2xl">50.000+</div>
                  <p className="text-yellow-100 text-sm">Unit Produksi/Bulan</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:scale-105 transition-transform cursor-pointer">
                  <div className="mb-2 text-2xl">24/7</div>
                  <p className="text-yellow-100 text-sm">Customer Support</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:scale-105 transition-transform cursor-pointer">
                  <div className="mb-2 text-2xl">ISO 9001</div>
                  <p className="text-yellow-100 text-sm">Certified</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:scale-105 transition-transform cursor-pointer">
                  <div className="mb-2 text-2xl">5 Tahun</div>
                  <p className="text-yellow-100 text-sm">Garansi Produk</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Certificates */}
      <QualityTable />
      <Certificates />
      <Clients />
    </div>
  );
}
