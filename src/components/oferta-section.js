import React from "react";

import { CrookedTile } from "./crooked-tile"
import { SectionTitle } from "./SectionTitle"

export const OfertaSection = ({ pourazowe, kregoslup, reumatyczne }) => {
  return (
    <section className="py-8 border-b" id="oferta">
      <SectionTitle
        title="Poznaj szczegóły oferty rehabilitacji"
      />
      <div className="container mx-auto px-4 sm:px-0 lg:flex justify-between items-stretch">
        <CrookedTile 
          title="STANY POURAZOWE"
          description="Rehabilitacja po urazach ma na celu odzyskanie sprawności sprzed wypadku."
          img={pourazowe}
          delay={0}
        />
        <CrookedTile
          title="BÓLE KRĘGOSŁUPA"
          description="Przeciążony kręgosłup wysyła więcej sygnałów..."
          img={kregoslup}
          delay={200}
        />
        <CrookedTile
          title="CHOROBY REUMATYCZNE"
          description="Objawiają się zmianami w obrębie stawów i kości, powodując ból."
          img={reumatyczne}
          delay={400}
        />  
      </div>
    </section>
  );
}