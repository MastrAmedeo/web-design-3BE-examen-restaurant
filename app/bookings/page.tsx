import Image from "next/image";
import Parallax from "../components/parallax";
import TpBalise from "../components/TpBalise";
import Booking_display from "../components/booking_display"

export default function Home() {
  return (
    <>
      
      <div className="bg-[url(/photos_huile/287A8283.jpg)] bg-fixed bg-cover bg-center">
        <div className="pt-150">
          <h1 className = "text-center">
            <Parallax><TpBalise href = "#section-réservations">
              réservations
            </TpBalise></Parallax>
          </h1>
        </div>
      </div>
      <div className="bg-[#697851] min-h-screen pt-10">
          <p className="px-5" id = "section-réservations" style={{ scrollMarginTop: '13rem' }}>
            Vous pouvez voir vos réservation sur cette page.
            <Booking_display/>
          </p>
      </div>
    </>    
  );
}