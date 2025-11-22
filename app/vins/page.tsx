import Image from "next/image";
import Parallax from "../components/parallax";

export default function Home() {
  return (
    <>
      <div className="bg-[url(/photos_vin/_87A2399.jpg)] bg-fixed bg-cover bg-center">
        <div className="pt-150">
          <div className="bg-[#697851] h-6"></div>
          <h1 className = "text-center"><Parallax>
              Notre Vin
          </Parallax></h1>
        </div>
      </div>
      <div className="bg-[#697851] min-h-screen pt-10">
          <p className="">
            ici nous venderons notre vin, si vous êtes intéressés, vous pouvez nous contacter.
          </p>
      </div>
    </>
  );
}
