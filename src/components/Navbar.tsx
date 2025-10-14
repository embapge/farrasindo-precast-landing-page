"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { push } = useRouter();
  const path = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Beranda", route: "/" as const },
    { label: "Tentang Kami", route: "/about" as const },
    { label: "Produk", route: "/product" as const },
    { label: "Portofolio", route: "/portofolio" as const },
    { label: "Kontak", route: "/contact" as const },
  ];

  const handleNavigation = (route: (typeof menuItems)[0]["route"]) => {
    push(route);
    setIsMobileMenuOpen(false);
  };

  console.log(path, "path");

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        path == "/product"
          ? "bg-white/90 shadow-lg"
          : isScrolled
          ? "bg-white/90 shadow-lg"
          : "backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => push("home")}
            className="flex items-center transition-opacity cursor-pointer hover:scale-105 trasition-all"
          >
            <Image
              src={"/assets/logo.png"}
              alt="Farracon Precast Logo"
              width={120}
              height={60}
            />
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.route}
                href={item.route}
                className={`${
                  item.route === path
                    ? "text-orange-600"
                    : path === "/product"
                    ? "text-black/70"
                    : isScrolled
                    ? "text-black/70"
                    : "text-white"
                } hover:text-orange-600 transition-colors font-medium`}
              >
                {item.label}
              </Link>
            ))}
            <Button
              onClick={() => push("contact")}
              className="bg-orange-500 hover:bg-orange-600"
            >
              Hubungi Kami
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-black/70 hover:text-orange-600 transition-colors cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <button
                  key={item.route}
                  onClick={() => handleNavigation(item.route)}
                  className={`text-left py-2 transition-colors ${
                    path === item.route
                      ? "text-orange-600"
                      : "text-gray-700 hover:text-orange-600"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => handleNavigation("/contact")}
                className="bg-orange-500 hover:bg-orange-600 w-full"
              >
                Hubungi Kami
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
