import Image from "next/image";
import AstraLogo from "@/components/images/clients/acset-astra-logo.png";
import AdhiAPGLogo from "@/components/images/clients/adhi-apg-logo.png";
import GnpLogo from "@/components/images/clients/gnp-logo.png";
import GreenPramukaLogo from "@/components/images/clients/green-pramuka-logo.png";
import IbisLogo from "@/components/images/clients/ibis-hotel-logo.png";
import PertaminaLogo from "@/components/images/clients/pertamina-logo.png";
import PuprLogo from "@/components/images/clients/pupr-logo.png";
import RocketJayaLogo from "@/components/images/clients/roket-jaya-abadi-logo.png";
import SerpongGardenLogo from "@/components/images/clients/serpong-garden-logo.png";
import SkyHouseLogo from "@/components/images/clients/sky-house-bsd-logo.png";
import SpringHillLogo from "@/components/images/clients/spring-hill-terrace-logo.jpg";
import SunterLogo from "@/components/images/clients/sunter-icon-logo.jpg";
import TmiiLogo from "@/components/images/clients/tmii-logo.png";
import TransparkBintaroLogo from "@/components/images/clients/transpark-bintaro-logo.png";

export default function ClientDetail() {
  const images = [
    AstraLogo,
    AdhiAPGLogo,
    GnpLogo,
    GreenPramukaLogo,
    IbisLogo,
    PertaminaLogo,
    PuprLogo,
    RocketJayaLogo,
    SerpongGardenLogo,
    SkyHouseLogo,
    SpringHillLogo,
    SunterLogo,
    TmiiLogo,
    TransparkBintaroLogo,
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
            src={img}
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
