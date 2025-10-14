"use client";

import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { useRouter } from "next/navigation";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, RefObject } from "react";

function scroll(ref: RefObject<HTMLDivElement>, direction: "left" | "right") {
  if (ref.current) {
    const scrollAmount = 300;
    ref.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  }
}

export default function Testimonial({ testimonials }: { testimonials: any[] }) {
  const { push } = useRouter();
  const testimonialUseRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <div className="container mx-auto md:px-4">
        <div className="text-center mb-16">
          <div className="text-xl font-semibold text-green-500">
            Testimoni Klien
          </div>
          <h2 className="mb-4 text-gray-900 text-4xl font-bold">
            Apa Kata Mereka Tentang Kami
          </h2>
        </div>
        {/* 
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white shadow-xl/20 border-none transition-all transform hover:-translate-y-2 duration-300 cursor-pointer"
            >
              <CardContent className="p-8">
                <div className="flex flex-col gap-1 mb-6">
                  <div className="flex items-center mb-2 justify-center relative h-[150px] w-[150px] rounded-full overflow-hidden mx-auto">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill={true}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-6 h-6 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic text-sm">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-gray-400 pt-6">
                  <div className="text-gray-900 mb-1">{testimonial.name}</div>
                  <p className="text-sm text-gray-600">
                    {testimonial.position}
                  </p>
                  <p className="text-sm text-yellow-600">
                    {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

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
              onClick={() => scroll(testimonialUseRef, "left")}
              className="bg-orange-500 p-2 rounded-l-lg cursor-pointer hover:scale-105 transition-all hover:bg-orange-600 text-white"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll(testimonialUseRef, "right")}
              className="bg-orange-500 p-2 rounded-r-lg cursor-pointer hover:scale-105 transition-all hover:bg-orange-600 text-white"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div> */}

        <div
          ref={testimonialUseRef}
          className="flex gap-6 overflow-x-auto pb-10 px-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white shadow-xl/20 border-none transition-all transform hover:-translate-y-2 duration-300 cursor-pointer min-w-[300px]"
            >
              <CardContent className="p-8">
                <div className="flex flex-col gap-1 mb-6">
                  <div className="flex items-center mb-2 justify-center relative h-[150px] w-[150px] rounded-full overflow-hidden mx-auto">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill={true}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-6 h-6 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic text-sm">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-gray-400 pt-6">
                  <div className="text-gray-900 mb-1">{testimonial.name}</div>
                  <p className="text-sm text-gray-600">
                    {testimonial.position}
                  </p>
                  <p className="text-sm text-yellow-600">
                    {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-3">
          <button
            onClick={() => push("products")}
            className="border-orange-600 text-orange-600 hover:bg-orange-50 inline-flex items-center cursor-pointer hover:scale-105 transition-all font-semibold"
          >
            Lihat Semua Produk
            <ArrowRight className="ml-2" size={18} />
          </button>
        </div>

        {/* <div className="text-center mt-12">
          <button
            onClick={() => push("about")}
            className="border-yellow-600 text-yellow-600 hover:bg-yellow-50 inline-flex items-center cursor-pointer hover:scale-105 transition-all font-semibold"
          >
            Lihat Semua Testimoni
            <ArrowRight className="ml-2" size={18} />
          </button>
        </div> */}
      </div>
    </>
  );
}
