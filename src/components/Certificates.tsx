import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { FileCheck } from "lucide-react";

export function Certificates() {
  const certificates = [
    {
      icon: FileCheck,
      title: "TKDN Certificate",
      issuer: "Kementerian Perindustrian RI",
      description: "Tingkat Komponen Dalam Negeri",
      year: "2023",
      color: "purple",
    },
  ];

  const achievements = [
    {
      year: "2024",
      title: "Best Precast Supplier Award",
      organization: "Indonesia Construction Association",
    },
    {
      year: "2023",
      title: "Quality Excellence Award",
      organization: "National Quality Forum",
    },
    {
      year: "2022",
      title: "Green Industry Certification",
      organization: "Ministry of Industry",
    },
  ];

  return (
    <section id="certificates" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-green-600 font-semibold text-lg">
            Sertifikat & Penghargaan
          </div>
          <h2 className="mb-4 text-gray-900 text-4xl font-bold">
            Sertifikasi dan Standar Mutu
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Komitmen kami terhadap kualitas dibuktikan dengan berbagai
            sertifikasi nasional dan internasional
          </p>
        </div>

        <div className="flex gap-6 mb-8">
          {certificates.map((cert, index) => {
            const colorClasses = {
              blue: "bg-blue-100 text-blue-600",
              green: "bg-green-100 text-green-600",
              purple: "bg-purple-100 text-purple-600",
              orange: "bg-orange-100 text-orange-600",
              yellow: "bg-yellow-100 text-yellow-600",
            };

            return (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow border-none shadow-xl cursor-pointer hover:scale-105 transition-all mx-auto"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 rounded-full ${
                      colorClasses[cert.color as keyof typeof colorClasses]
                    } flex items-center justify-center mx-auto mb-4`}
                  >
                    <cert.icon size={32} />
                  </div>
                  <h3 className="mb-2 text-gray-900">{cert.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {cert.description}
                  </p>
                  <div className="text-xs text-gray-500 mb-2">
                    {cert.issuer}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    Valid: {cert.year}
                  </Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* <div className="max-w-4xl mx-auto">
          <Card className="bg-yellow-500 text-white">
            <CardContent className="p-8">
              <h3 className="mb-6 text-center text-3xl">
                Penghargaan & Prestasi
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                      <div className="text-3xl mb-2">{achievement.year}</div>
                      <div className="mb-2">{achievement.title}</div>
                      <p className="text-yellow-100 text-sm">
                        {achievement.organization}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div> */}

        {/* <div className="text-center">
          <p className="text-gray-600 mb-6">
            Semua sertifikat dapat diverifikasi dan tersedia untuk ditinjau oleh
            calon mitra bisnis
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-green-600 px-4 py-2">
              ✓ Terakreditasi SNI
            </Badge>
            <Badge className="bg-blue-600 px-4 py-2">✓ ISO Certified</Badge>
            <Badge className="bg-purple-600 px-4 py-2">✓ TKDN Verified</Badge>
          </div>
        </div> */}
      </div>
    </section>
  );
}
