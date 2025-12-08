import Image from "next/image";
import Parallax from "./components/parallax"
import TpBalise from "./components/TpBalise";

export default function Home() {
  return (
        <>
        <div className="bg-[url(/photos_huile/287A8560.jpg)] bg-fixed bg-cover bg-center">
          <div className="pt-150">
            <h1 className = "text-center">
              <Parallax><TpBalise href = "#section-Accueil">
                Accueil
              </TpBalise></Parallax></h1>
          </div>
          <div className="bg-[#697851] min-h-screen pt-10">
            <p className="" id="section-Accueil"style={{ scrollMarginTop: '13rem' }}>
              Soyez les binevenus chez Willie Wonka.
            </p>
          </div>
        </div>
        </>
  );
}
