"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter } from "lucide-react";
import Image from "next/image";

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedMutu, setSelectedMutu] = useState("all");

  const allProducts = [
    // Saluran Drainase
    {
      category: "Saluran Drainase",
      name: "U-Ditch",
      description:
        "Saluran drainase berbentuk U untuk sistem pengairan dan drainase",
      sizes: [
        "30x30x120",
        "40x40x120",
        "50x50x120",
        "60x60x120",
        "80x80x120",
        "100x100x120",
      ],
      mutu: "K-300",
      applications: ["Saluran air", "Drainase jalan", "Irigasi"],
      price: "Rp 150.000 - 850.000",
      image: "/api/image?path=logos/farrasindo-group.png",
    },
    {
      category: "Saluran Drainase",
      name: "Cover U-Ditch",
      description: "Penutup untuk U-Ditch dengan berbagai pilihan beban",
      sizes: ["30x120", "40x120", "50x120", "60x120", "80x120", "100x120"],
      mutu: "K-350",
      applications: ["Penutup saluran", "Jalan kendaraan", "Area pejalan kaki"],
      price: "Rp 85.000 - 450.000",
      image: "/api/image?path=logos/farrasindo-group.png",
    },
    {
      category: "Saluran Drainase",
      name: "Box Culvert",
      description:
        "Saluran air berbentuk kotak untuk drainase dan gorong-gorong",
      sizes: ["100x100x100", "120x120x100", "150x150x100", "200x200x100"],
      mutu: "K-400",
      applications: ["Gorong-gorong", "Saluran bawah tanah", "Terowongan air"],
      price: "Rp 1.200.000 - 4.500.000",
      image: "/api/image?path=logos/farrasindo-group.png",
    },
    {
      category: "Saluran Drainase",
      name: "Manhole",
      description: "Lubang inspeksi untuk sistem drainase dan utilitas",
      sizes: ["Ø80", "Ø100", "Ø120", "Ø150"],
      mutu: "K-400",
      applications: ["Sistem drainase", "Jaringan kabel", "Utilitas"],
      price: "Rp 850.000 - 2.100.000",
      image: "/api/image?path=logos/farrasindo-group.png",
    },
    {
      category: "Saluran Drainase",
      name: "Buis Beton",
      description: "Pipa beton untuk gorong-gorong dan saluran air",
      sizes: ["Ø30", "Ø40", "Ø60", "Ø80", "Ø100"],
      mutu: "K-300",
      applications: ["Gorong-gorong", "Saluran air", "Drainase"],
      price: "Rp 65.000 - 450.000",
      image: "/api/image?path=logos/farrasindo-group.png",
    },
    // Produk Jalan
    {
      category: "Produk Jalan",
      name: "Paving Block",
      description: "Blok beton untuk perkerasan jalan dan area pejalan kaki",
      sizes: ["Uni-grass", "Segi enam", "Trihex", "Persegi panjang"],
      mutu: "K-175",
      applications: ["Trotoar", "Parkir", "Taman"],
      price: "Rp 45.000 - 95.000/m²",
      image: "/api/image?path=logos/farrasindo-group.png",
    },
    {
      category: "Produk Jalan",
      name: "Road Barrier",
      description: "Pembatas jalan untuk keamanan dan pengaturan lalu lintas",
      sizes: ["Tipe A (80cm)", "Tipe B (100cm)", "Tipe C (120cm)"],
      mutu: "K-350",
      applications: ["Pembatas jalan", "Median", "Pengaman"],
      price: "Rp 350.000 - 650.000",
      image: "/api/image?path=logos/farrasindo-group.png",
    },
    {
      category: "Produk Jalan",
      name: "Kanstin",
      description: "Pembatas tepi jalan dan trotoar",
      sizes: ["20x30x60", "25x40x60", "30x50x60"],
      mutu: "K-225",
      applications: ["Tepi jalan", "Trotoar", "Taman"],
      price: "Rp 35.000 - 75.000",
      image: "/api/image?path=logos/farrasindo-group.png",
    },
    {
      category: "Produk Jalan",
      name: "Grass Block",
      description: "Blok beton berongga untuk area hijau",
      sizes: ["60x40x8", "60x40x10"],
      mutu: "K-225",
      applications: ["Parkir hijau", "Taman", "Area resapan"],
      price: "Rp 55.000 - 85.000/m²",
      image: "/api/image?path=logos/farrasindo-group.png",
    },
    // Bangunan
    {
      category: "Bangunan",
      name: "Panel Lantai",
      description: "Panel beton untuk lantai bangunan bertingkat",
      sizes: ["120x600", "120x800", "120x1000"],
      mutu: "K-500",
      applications: ["Lantai gedung", "Bangunan industri", "Ruko"],
      price: "Rp 450.000 - 850.000",
      image: "/api/image?path=logos/farrasindo-group.png",
    },
    {
      category: "Bangunan",
      name: "Tiang Pancang",
      description: "Tiang fondasi untuk bangunan",
      sizes: ["25x25", "30x30", "35x35", "40x40"],
      mutu: "K-500",
      applications: ["Fondasi gedung", "Jembatan", "Dermaga"],
      price: "Rp 350.000 - 750.000/m",
      image: "/api/image?path=logos/farrasindo-group.png",
    },
    {
      category: "Bangunan",
      name: "Balok Girder",
      description: "Balok beton prategang untuk struktur jembatan",
      sizes: ["40x60", "50x80", "60x100"],
      mutu: "K-500",
      applications: ["Jembatan", "Flyover", "Struktur bentang"],
      price: "Hubungi Sales",
      image: "/api/image?path=logos/farrasindo-group.png",
    },
  ];

  const categories = ["all", "Saluran Drainase", "Produk Jalan", "Bangunan"];
  const mutuOptions = [
    "all",
    "K-175",
    "K-225",
    "K-300",
    "K-350",
    "K-400",
    "K-500",
  ];

  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesMutu = selectedMutu === "all" || product.mutu === selectedMutu;

    return matchesSearch && matchesCategory && matchesMutu;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Page Title */}
      <section className="py-12 bg-white border-gray-200 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full mb-4">
              Katalog Produk
            </div>
            <h1 className="mb-4 text-gray-900">
              Produk Beton Pracetak Berkualitas Tinggi
            </h1>
            <p className="text-gray-600 text-lg">
              Temukan produk beton pracetak berkualitas tinggi untuk berbagai
              kebutuhan proyek konstruksi Anda
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-4 bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="">
              <div className="relative bg-gray-100 rounded-md">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <Input
                  placeholder="Cari produk..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Semua Kategori" />
                </SelectTrigger>
                <SelectContent className="w-full">
                  <SelectItem value="all">Semua Kategori</SelectItem>
                  {categories.slice(1).map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedMutu} onValueChange={setSelectedMutu}>
                <SelectTrigger>
                  <SelectValue placeholder="Semua Mutu" />
                </SelectTrigger>
                <SelectContent className="w-full">
                  <SelectItem value="all">Semua Mutu</SelectItem>
                  {mutuOptions.slice(1).map((mutu) => (
                    <SelectItem key={mutu} value={mutu}>
                      {mutu}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-shadow border-gray-200"
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="bg-orange-600">{product.category}</Badge>
                    <Badge
                      variant="outline"
                      className="border-yellow-600 text-yellow-700"
                    >
                      {product.mutu}
                    </Badge>
                  </div>
                  <CardTitle className="text-gray-900">
                    {product.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[200px] w-full mb-4 rounded-md relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill={true}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-gray-600 mb-4">{product.description}</p>

                  <div className="mb-4">
                    <div className="text-sm text-gray-700 mb-2">
                      Ukuran tersedia:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((size, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-xs"
                        >
                          {size}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm text-gray-700 mb-2">Aplikasi:</div>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {app}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-sm text-gray-500">Harga mulai</div>
                        <div className="text-orange-600">{product.price}</div>
                      </div>
                      <Button className="bg-orange-600 hover:bg-orange-700">
                        Hubungi Sales
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-4">
                Tidak ada produk yang sesuai dengan filter Anda
              </p>
              <Button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                  setSelectedMutu("all");
                }}
                variant="outline"
                className="border-orange-600 text-orange-600"
              >
                Reset Filter
              </Button>
            </div>
          )}
          <div className="flex items-center gap-2 mt-4 px-2">
            <Filter size={16} className="text-gray-500" />
            <p className="text-sm text-gray-600">
              Menampilkan {filteredProducts.length} dari {allProducts.length}{" "}
              produk
            </p>
          </div>
        </div>
      </section>

      {/* Custom Order CTA */}
      <section className="py-12 bg-white">
        <div className="container mx-auto ">
          <Card className="rounded-none bg-gradient-to-r from-orange-600 to-yellow-600 text-white">
            <CardContent className="p-8 text-center">
              <h3 className="mb-4">Butuh Ukuran Custom?</h3>
              <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
                Kami menerima pesanan custom sesuai spesifikasi proyek Anda.
                Hubungi tim sales kami untuk konsultasi dan penawaran khusus.
              </p>
              <Button className="bg-white text-orange-600 hover:bg-orange-50">
                Konsultasi Custom Order
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
