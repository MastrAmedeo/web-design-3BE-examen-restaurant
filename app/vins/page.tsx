import Image from "next/image";

export default function Home() {
  return (
  <div className="bg-[url(/photos_vin/_87A2399.jpg)] bg-fixed bg-cover bg-center min-h-200">
    <div className="pt-150">
      <h1 className="bg-[#697851] py-3 rounded shadow-md text-center text-bold">
          Notre Vin
      </h1>
      <p>
        ici nous venderons notre vin, si vous êtes intéressés, vous pouvez nous contacter.
      </p>
    </div>
  </div>      
  );
}
