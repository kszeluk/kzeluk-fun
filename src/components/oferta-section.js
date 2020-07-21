import React from "react";

import { CrookedTile } from "./crooked-tile"
import { SectionTitle } from "./SectionTitle"

import pourazowe from "../images/stany-pourazowy.webp";
import kregoslup from "../images/bole-kregoslupa.webp";
import reum from "../images/choroby-reumatyczne.webp"

export const OfertaSection = () => {
  return (
    <section className="py-8 border-b">
      <SectionTitle
        title="Poznaj szczegóły oferty rehabilitacji"
      />
      <div className="xl:px-4">
        <div className="block lg:flex justify-between md:-mx-2 px-16">
          <CrookedTile 
            title="STANY POURAZOWE"
            description="Rehabilitacja po urazach ma na celu odzyskanie sprawności sprzed wypadku."
            img={pourazowe}
          />
          <CrookedTile
            title="BÓLE KRĘGOSŁUPA"
            description="Przeciążony kręgosłup wysyła więcej sygnałów..."
            img={kregoslup}
          />
          <CrookedTile
            title="CHOROBY REUMATYCZNE"
            description="Objawiają się zmianami w obrębie stawów i kości, powodując ból."
            img={reum}
          />
        </div>
      </div>
    </section>
  );
}