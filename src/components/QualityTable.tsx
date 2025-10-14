import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { CheckCircle2 } from "lucide-react";

export function QualityTable() {
  const concreteGrades = [
    {
      grade: "K-175",
      compressiveStrength: "14.53 MPa",
      applications: "Paving block, kanstin",
      standard: "SNI 03-0691-1996",
    },
    {
      grade: "K-225",
      compressiveStrength: "18.68 MPa",
      applications: "U-Ditch kecil, grass block",
      standard: "SNI 03-0691-1996",
    },
    {
      grade: "K-300",
      compressiveStrength: "24.90 MPa",
      applications: "U-Ditch sedang, box culvert",
      standard: "SNI 03-0691-1996",
    },
    {
      grade: "K-350",
      compressiveStrength: "29.05 MPa",
      applications: "U-Ditch besar, road barrier",
      standard: "SNI 03-0691-1996",
    },
    {
      grade: "K-400",
      compressiveStrength: "33.20 MPa",
      applications: "Box culvert besar, manhole",
      standard: "SNI 03-0691-1996",
    },
    {
      grade: "K-500",
      compressiveStrength: "41.50 MPa",
      applications: "Tiang pancang, panel lantai, girder",
      standard: "SNI 03-0691-1996",
    },
  ];

  const qualityStandards = [
    "SNI 03-0691-1996 - Bata Beton (Paving Block)",
    "SNI 03-2847-2019 - Persyaratan Beton Struktural",
    "SNI 8137:2015 - Beton Pracetak - Saluran U",
    "SNI 3419:2008 - Gorong-gorong Beton Bertulang",
    "ISO 9001:2015 - Sistem Manajemen Mutu",
  ];

  return (
    <section id="quality" className="pt-10 py-1 bg-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-green-600 font-semibold text-lg">
            Mutu & Kualitas
          </div>
          <h2 className="mb-4 text-gray-900 text-4xl font-bold">
            Tabel Mutu Beton
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Semua produk kami diproduksi dengan standar mutu yang ketat sesuai
            SNI dan telah teruji di laboratorium
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 overflow-x-auto">
            <Card className="border-gray-300 shadow-lg">
              <CardHeader>
                <CardTitle className="text-gray-900">
                  Spesifikasi Mutu Beton Pracetak
                </CardTitle>
              </CardHeader>
              <CardContent className="overflow-hidden">
                <div className="overflow-hidden">
                  <Table className="overflow-hidden">
                    <TableHeader>
                      <TableRow>
                        <TableHead>Mutu Beton</TableHead>
                        <TableHead>Kuat Tekan</TableHead>
                        <TableHead>Aplikasi Produk</TableHead>
                        <TableHead>Standar</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {concreteGrades.map((grade, index) => (
                        <TableRow key={index}>
                          <TableCell>
                            <Badge className="bg-yellow-500">
                              {grade.grade}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-gray-900">
                            {grade.compressiveStrength}
                          </TableCell>
                          <TableCell className="text-gray-600">
                            {grade.applications}
                          </TableCell>
                          <TableCell className="text-sm text-gray-600">
                            {grade.standard}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <span className="text-yellow-600">Catatan:</span> Setiap
                    batch produksi dilakukan uji kuat tekan sesuai standar SNI.
                    Kami menjamin produk yang dikirim memenuhi spesifikasi mutu
                    yang telah ditentukan.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="mb-6 border-gray-300 shadow-lg">
              <CardHeader>
                <CardTitle className="text-gray-900">
                  Standar Kualitas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {qualityStandards.map((standard, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2
                        className="text-green-600 flex-shrink-0 mt-1"
                        size={20}
                      />
                      <p className="text-sm text-gray-700">{standard}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-300 shadow-lg">
              <CardHeader>
                <CardTitle className="text-gray-900">Quality Control</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-900 mb-2">
                      Pengujian Material
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-yellow-500 h-2 rounded-full"
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-900 mb-2">
                      Kontrol Produksi
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-yellow-500 h-2 rounded-full"
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-900 mb-2">
                      Inspeksi Akhir
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-yellow-500 h-2 rounded-full"
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-gray-600">
                      Setiap tahap produksi diawasi ketat oleh tim quality
                      control bersertifikat.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
