import Image from "next/image";

export default function ClientDetail() {
  const images = [
    "/clients/acset-astra-logo.png",
    "/clients/adhi-apg-logo.png",
    "/clients/gnp-logo.png",
    "/clients/green-pramuka-logo.png",
    "/clients/ibis-hotel-logo.png",
    "/clients/pertamina-logo.png",
    "/clients/pupr-logo.png",
    "/clients/roket-jaya-abadi-logo.png",
    "/clients/serpong-garden-logo.png",
    "/clients/sky-house-bsd-logo.png",
    "/clients/spring-hill-terrace-logo.jpg",
    "/clients/sunter-icon-logo.jpg",
    "/clients/tmii-logo.png",
    "/clients/transpark-bintaro-logo.png",
  ];
  return (
    <>
      <div className="text-center mb-16">
        <div className="text-green-500 font-semibold text-lg">
          Klien & Mitra
        </div>
        <h2 className="mb-4 text-gray-900 text-4xl font-bold">
          Dipercaya oleh Perusahaan Terkemuka
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Lebih dari 100 perusahaan konstruksi dan developer telah mempercayakan
          kebutuhan beton pracetak mereka kepada kami
        </p>
      </div>
      <div className="flex flex-wrap justify-center mb-40 gap-5 md:max-w-[60vw] mx-auto">
        {images.map((img, idx) => (
          <Image
            src={`/api/image?path=${img}`}
            alt={`Client ${idx + 1}`}
            className="hover:scale-120 transition-all cursor-pointer object-contain"
            width={120}
            height={120}
            key={idx}
          />
        ))}
      </div>
    </>
  );
}
