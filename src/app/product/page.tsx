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
      applications: ["Drainase Jalan", "Saluran Irigasi"],
    },
    {
      name: "Box Culvert",
      category: "Saluran Drainase",
      description: "Gorong-gorong berbentuk kotak untuk drainase",
      sizes: ["600x600", "800x800", "1000x1000", "2000x2000"],
      mutu: ">= K-350",
      image_path: "/products/box-culvert.png",
      applications: ["Drainase Jalan", "Saluran Irigasi"],
    },
    {
      name: "Concrete Wall",
      category: "Bangunan",
      description:
        "Dinding beton untuk memberikan kekuatan, daya tahan, dan stabilitas pada sebuah bangunan",
      sizes: ["100x100", "150x150", "200x200", "300x300"],
      mutu: ">= K-350",
      image_path: "/products/concrete-wall-facade-h03-2k.png",
      applications: ["Drainase Jalan", "Saluran Irigasi"],
    },
    {
      name: "Road Barrier",
      category: "Produk Jalan",
      description: "Pembatas jalan untuk keamanan lalu lintas",
      sizes: ["300x700x2500", "600x1000x1000"],
      mutu: ">= K-350",
      image_path: "/products/barrier.png",
      applications: ["Drainase Jalan", "Saluran Irigasi"],
    },
    {
      name: "Panel Arsitektur",
      category: "Bangunan",
      description:
        "Pelapis luar bangunan yang dekoratif, pelindung dari elemen eksternal, serta sebagai elemen struktural atau non-struktural",
      sizes: ["50x100", "75x150", "100x200", "150x300"],
      mutu: ">= K-350",
      image_path: "/products/architectural-elements.h03-2k.png",
      applications: ["Drainase Jalan", "Saluran Irigasi"],
    },
    {
      name: "Cynder Block",
      category: "Bangunan",
      description:
        "Pelapis luar bangunan yang dekoratif, pelindung dari elemen eksternal, serta sebagai elemen struktural atau non-struktural",
      sizes: ["50x100", "75x150", "100x200", "150x300"],
      mutu: ">= K-350",
      image_path: "/products/cynder-block-h03-2k.png",
      applications: ["Drainase Jalan", "Saluran Irigasi"],
    },
    {
      name: "Concrete Facade",
      category: "Bangunan",
      description:
        "Pelapis luar bangunan yang dekoratif, pelindung dari elemen eksternal, serta sebagai elemen struktural atau non-struktural",
      sizes: ["50x100", "75x150", "100x200", "150x300"],
      mutu: ">= K-350",
      image_path: "/products/concrete-facade-h03-2k.png",
      applications: ["Drainase Jalan", "Saluran Irigasi"],
    },
    {
      name: "Concrete Slabs",
      category: "Bangunan",
      description:
        "Pelapis luar bangunan yang dekoratif, pelindung dari elemen eksternal, serta sebagai elemen struktural atau non-struktural",
      sizes: ["50x100", "75x150", "100x200", "150x300"],
      mutu: ">= K-350",
      image_path: "/products/concrete-slabs-on-wood-planks-h03-2k.png",
      applications: ["Drainase Jalan", "Saluran Irigasi"],
    },
    {
      name: "Concrete Wall",
      category: "Bangunan",
      description:
        "Pelapis luar bangunan yang dekoratif, pelindung dari elemen eksternal, serta sebagai elemen struktural atau non-struktural",
      sizes: ["50x100", "75x150", "100x200", "150x300"],
      mutu: ">= K-350",
      image_path: "/products/concrete-wall-h03-2k.png",
      applications: ["Drainase Jalan", "Saluran Irigasi"],
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
                  <div className="h-[300px] w-full mb-4 rounded-md relative">
                    <div className="relative h-full overflow-hidden rounded-t-lg flex items-center justify-center">
                      <Image
                        src={`/api/image?path=${product.image_path}`}
                        alt={product.name}
                        fill={true}
                        className="object-contain cursor-pointer hover:scale-115 transition-all z-1"
                      />
                      <div className="absolute bg-orange-500/100 h-40 w-40 rounded-full blur-2xl"></div>
                    </div>
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
                    <div className="flex justify-center items-center">
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
