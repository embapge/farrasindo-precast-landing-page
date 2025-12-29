"use client";

import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Youtube,
} from "lucide-react";
import { useRouter } from "next/navigation";
import PrecastAsset from "@/components/images/precast-background.jpg";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { push } = useRouter();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-[140px]">
      <div className="container mx-auto px-6 md:px-10 pb-12">
        <div className="w-full relative p-6 rounded-lg overflow-hidden -translate-y-1/3 cursor-pointer hover:scale-105 transition-all shadow-lg/40">
          <Image
            src={PrecastAsset}
            fill={true}
            alt="Precast Background"
            className="object-cover absolute inset-0 z-0 w-full rounded-lg bg-gray-800"
          />
          <div className="flex md:flex-row flex-col md:gap-12">
            <div className="text-white z-10 flex flex-col flex-1 gap-2 justify-center">
              <span className="font-semibold text-white text-sm md:text-lg">
                Dapatkan penawaran
              </span>
              <h2 className="mb-4 text-3xl md:text-4xl md:text-white text-gray-700">
                Siap Memulai Proyek Anda?
              </h2>
            </div>
            <div className="gap-2 flex flex-2 flex-col">
              <div className="flex md:flex-row flex-col w-full gap-4">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all cursor-pointer hover:scale-105 flex items-center justify-center w-full min-h-[100px]">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-center gap-4">
                      <div className="hidden md:block ring ring-2 rounded-full p-3">
                        <Mail />
                      </div>
                      <div>
                        <span className="flex items-center gap-2 mb-1">
                          <div className="md:hidden inline-flex  rounded-full p-1">
                            <Mail size={20} />
                          </div>
                          Email Address
                        </span>
                        <span className="font-semibold">
                          marketing@farrasindo-cp.co.id
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all cursor-pointer hover:scale-105 flex items-center justify-center w-full shrink-2 md:min-w-[300px]">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-center gap-4">
                      <div className="hidden md:block ring ring-2 rounded-full p-3">
                        <Phone />
                      </div>
                      <div>
                        <span className="flex items-center gap-3 mb-1">
                          <div className="md:hidden inline-flex  rounded-full p-1">
                            <Phone size={20} />
                          </div>
                          Phone Number
                        </span>
                        <span className="font-semibold">+62-8157-5453-564</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="text-center relative mt-5">
                <Link
                  href={`https://wa.me/6281575453564?message=Halo%20Farracon%20Precast,%20saya%20ingin%20mendapatkan%20penawaran%20untuk%20proyek%20saya.`}
                  target="_blank"
                  rel="noreferrer"
                  className="backdrop-blur-sm bg-orange-500/30 hover:bg-orange-500/30 text-white text-md px-8 py-4 hover:scale-105 transition-all cursor-pointer border border-orange-500 rounded-lg "
                >
                  Dapatkan penawaran
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="text-white mb-4 flex items-center gap-3">
              <Image
                src="/assets/logo-minified.png"
                alt="FARRACON PRECAST"
                className="object-contain"
                width={80}
                height={80}
              />
              <span className="font-semibold leading-7 text-2xl">
                FARRACON <br /> PRECAST <br /> INDUSTRI
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Produsen beton pracetak terpercaya dengan standar kualitas
              internasional untuk mendukung pembangunan infrastruktur Indonesia.
            </p>
            <div className="mt-4 pt-4 border-t border-gray-800 mb-4">
              <p className="text-sm text-gray-500 mb-2">Bagian dari</p>
              <div className="text-orange-500 mb-2">FARRASINDO GROUP</div>
              <p className="text-sm text-gray-400">
                Solusi terintegrasi untuk kebutuhan konstruksi dan infrastruktur
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-orange-500 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-orange-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-orange-500 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-orange-500 transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Navigasi</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => push("home")}
                  className="hover:text-orange-400 transition-colors"
                >
                  Beranda
                </button>
              </li>
              <li>
                <button
                  onClick={() => push("about")}
                  className="hover:text-orange-400 transition-colors"
                >
                  Tentang Kami
                </button>
              </li>
              <li>
                <button
                  onClick={() => push("product")}
                  className="hover:text-orange-400 transition-colors"
                >
                  Produk
                </button>
              </li>
              <li>
                <button
                  onClick={() => push("portofolio")}
                  className="hover:text-orange-400 transition-colors"
                >
                  Portofolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => push("contact")}
                  className="hover:text-orange-400 transition-colors"
                >
                  Kontak
                </button>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white mb-4">Produk Utama</h3>
            <ul className="space-y-2">
              <li className="hover:text-orange-400 transition-colors cursor-pointer">
                U-Ditch
              </li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">
                Box Culvert
              </li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">
                Paving Block
              </li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">
                Road Barrier
              </li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">
                Panel Lantai
              </li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">
                Tiang Pancang
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-4">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="flex-shrink-0 mt-1" size={18} />
                <span className="text-sm">
                  PT. Farracon Precast Industri - Sanja, Kec. Citeureup,
                  Kabupaten Bogor, Jawa Barat
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="flex-shrink-0" size={18} />
                <Link
                  href={`tel:081575453564`}
                  className="hover:text-orange-500"
                >
                  <span className="text-sm">+62 8157 5453 564</span>
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="flex-shrink-0" size={18} />
                <Link
                  href={`mailto:marketing@farrasindo-cp.co.id`}
                  target="__blank"
                  className="hover:text-orange-500"
                >
                  <span className="text-sm">marketing@farrasindo-cp.co.id</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} PT Farracon Precast. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-orange-400 transition-colors">
                Syarat & Ketentuan
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                Kebijakan Privasi
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
