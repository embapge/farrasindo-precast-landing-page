"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        toast.success("Terima kasih! Tim kami akan segera menghubungi Anda.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      } else {
        const data = await res.json();
        toast.error(data.error || "Gagal mengirim pesan.");
        console.log(data);
      }
    } catch (err) {
      console.log(err);
      toast.error("Gagal mengirim pesan.");
    }
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telepon",
      details: ["+62 8157 5453 564 (WhatsApp)"],
      color: "blue",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["marketing@farrasindo-cp.co.id"],
      color: "green",
    },
    {
      icon: MapPin,
      title: "Alamat",
      details: [
        "PT. Farracon Precast Industri - Sanja, Kec. Citeureup, Kabupaten Bogor, Jawa Barat",
      ],
      color: "purple",
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      details: ["Senin - Jumat: 08.00 - 17.00 WIB", "Sabtu: 08.00 - 14.00 WIB"],
      color: "orange",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full mb-4">
            Hubungi Kami
          </div>
          <h2 className="mb-4 text-gray-900">
            Konsultasi Gratis untuk Proyek Anda
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Tim ahli kami siap membantu Anda menemukan solusi terbaik untuk
            kebutuhan beton pracetak proyek Anda
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <Card className="border-gray-300 hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-gray-900">Kirim Pesan</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Nama Lengkap *
                    </label>
                    <Input
                      name="name"
                      className="border-gray-400"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Masukkan nama lengkap"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 ">
                    <div>
                      <label className="block text-sm mb-2 text-gray-700">
                        Email *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        className="border-gray-400"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2 text-gray-700">
                        No. Telepon *
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        className="border-gray-400"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="08xx xxxx xxxx"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Nama Perusahaan
                    </label>
                    <Input
                      name="company"
                      className="border-gray-400"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Nama perusahaan Anda"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Pesan *
                    </label>
                    <Textarea
                      name="message"
                      className="border-gray-400"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Ceritakan kebutuhan proyek Anda..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className={`w-full bg-orange-400 hover:bg-orange-500 ${
                      isSubmitting
                        ? "opacity-50 cursor-not-allowed animate-pulse"
                        : ""
                    }`}
                    disabled={isSubmitting}
                  >
                    <div className="flex">
                      <Send className="mr-2" size={18} />
                      Kirim Pesan
                    </div>
                  </Button>

                  {isSubmitting && (
                    <span>Sedang proses pengiriman pesan, mohon tunggu...</span>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>

          <div>
            <div className="grid gap-6 mb-6">
              {contactInfo.map((info, index) => {
                const colorClasses = {
                  blue: "bg-blue-100 text-blue-600",
                  green: "bg-green-100 text-green-600",
                  purple: "bg-purple-100 text-purple-600",
                  orange: "bg-orange-100 text-orange-600",
                };

                return (
                  <Card
                    key={index}
                    className="border-gray-300 hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-12 h-12 rounded-lg ${
                            colorClasses[
                              info.color as keyof typeof colorClasses
                            ]
                          } flex items-center justify-center flex-shrink-0`}
                        >
                          <info.icon size={24} />
                        </div>
                        <div>
                          <h3 className="mb-2 text-gray-900">{info.title}</h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-600">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card className="bg-orange-400 text-white hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <h3 className="mb-4">Butuh Penawaran Cepat?</h3>
                <p className="text-orange-100 mb-4">
                  Hubungi sales representative kami untuk mendapatkan penawaran
                  harga dan konsultasi teknis secara langsung.
                </p>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/+6281575453564"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white text-orange-600 px-6 py-3 rounded-lg text-center hover:bg-orange-50 transition-colors"
                  >
                    WhatsApp Sales Team
                  </a>
                  <a
                    href="tel:+6281575453564"
                    className="block bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg text-center hover:bg-white/20 transition-colors"
                  >
                    Telepon Langsung
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map placeholder */}
        <Card className="border-none shadow-lg">
          <CardContent className="p-0" style={{ paddingBottom: 0 }}>
            <div className="bg-gray-200 h-96 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1982.082978902547!2d106.8666529!3d-6.500664!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c10047241beb%3A0x68f67ee23518188f!2sPT.%20FARRACON%20PRECAST%20INDUSTRI!5e0!3m2!1sen!2sid!4v1760433976546!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Farracon Precast"
              ></iframe>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
