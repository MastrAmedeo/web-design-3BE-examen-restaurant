import Image from "next/image";
import Parallax from "../components/parallax";
import TpBalise from "../components/TpBalise";

export default function Home() {
  return (
    <>
      <div className="bg-[url(/photos_vin/_87A2399.jpg)] bg-fixed bg-cover bg-center">
        <div className="pt-150">
          {/* <div className="bg-[#697851] h-6"></div>espace au dessus du titre  */}
          <h1 className = "text-center">
            <Parallax><TpBalise href = "#section-vin">
              Notre Vin
            </TpBalise></Parallax>
          </h1>
        </div>
      </div>
      <div className="bg-[#697851] min-h-screen pt-10">
          <p className="" id = "section-vin" style={{ scrollMarginTop: '13rem' }}>
            ici nous venderons notre vin, si vous êtes intéressés, vous pouvez nous contacter.
          </p>
      </div>
    </>
  );
}
