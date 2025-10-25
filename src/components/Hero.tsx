import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    toast.success("Terima kasih! Tim kami akan segera menghubungi Anda.");
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
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
          <div className="inline-block px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full mb-4">
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
            <Card>
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
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Masukkan nama lengkap"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-2 text-gray-700">
                        Email *
                      </label>
                      <Input
                        name="email"
                        type="email"
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
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Ceritakan kebutuhan proyek Anda..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-yellow-500 hover:bg-yellow-600"
                  >
                    <Send className="mr-2" size={18} />
                    Kirim Pesan
                  </Button>
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
                  <Card key={index}>
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

            <Card className="bg-yellow-500 text-white">
              <CardContent className="p-6">
                <h3 className="mb-4">Butuh Penawaran Cepat?</h3>
                <p className="text-yellow-100 mb-4">
                  Hubungi sales representative kami untuk mendapatkan penawaran
                  harga dan konsultasi teknis secara langsung.
                </p>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/6281575453564"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white text-yellow-600 px-6 py-3 rounded-lg text-center hover:bg-yellow-50 transition-colors"
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
        <Card>
          <CardContent className="p-0">
            <div className="bg-gray-200 h-96 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0!2d107.0!3d-6.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMDAuMCJTIDEwN8KwMDAnMDAuMCJF!5e0!3m2!1sen!2sid!4v1234567890"
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
