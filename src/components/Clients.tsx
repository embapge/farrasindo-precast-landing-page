import Testimonial from "./Testimonial";
import ClientDetail from "./ClientDetail";

export function Clients() {
  const testimonials = [
    {
      name: "Ir. Bambang Suryanto",
      position: "Project Manager",
      // company: "PT Wijaya Karya",
      company: "",
      text: "Farracon Precast memberikan kualitas produk yang konsisten dan pengiriman yang selalu tepat waktu. Sangat membantu kelancaran proyek kami.",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=ahmad",
    },
    {
      name: "Drs. Ahmad Hidayat",
      position: "Site Manager",
      // company: "PT Adhi Karya",
      company: "",
      text: "Produk U-Ditch dari Farracon Precast memiliki kualitas yang sangat baik dengan harga yang kompetitif. Rekomendasikan untuk proyek infrastruktur.",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=bambang",
    },
    {
      name: "Eng. Siti Nurhaliza, ST",
      position: "Chief Engineer",
      // company: "Agung Podomoro Land",
      company: "",
      text: "Pelayanan yang profesional dan produk berkualitas tinggi. Tim Farracon Precast sangat responsif terhadap kebutuhan custom produk kami.",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=sdfd",
    },
  ];

  return (
    <section id="clients" className="py-20">
      <div className="container mx-auto px-4">
        <ClientDetail />

        {/* Testimonials */}
        <div className="mb-12">
          <Testimonial testimonials={testimonials} />
          {/* <div className="text-center mb-12">
            <div className="text-xl font-semibold text-green-500">
              Testimoni Klien
            </div>
            <h2 className="mb-4 text-gray-900 text-4xl font-bold">
              Apa Kata Mereka Tentang Kami
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t pt-4">
                    <div className="text-gray-900">{testimonial.name}</div>
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
          </div> */}
        </div>
      </div>
    </section>
  );
}
