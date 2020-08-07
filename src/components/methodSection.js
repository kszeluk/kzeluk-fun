import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import { Card } from "./card";

export const MethodSection = ({ elektroterapia, ultradzwieki, swiatlo, kinesiology, taping, masaz, techniki }) => {
  return (
    <ScrollAnimation animateIn="fadeIn">
      <section className="bg-gray-100 py-8 border-b" id="nasze-metody">
        <h3 className="text-center text-primary">NOWOCZESNE METODY REHABILITACJI</h3>
        <div className="container mx-auto px-4 sm:px-0 text-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Card
              title="ELEKTROTERAPIA"
              description="Wireless Professional jest obecnie najbardziej zaawansowanym urządzeniem do elektroterapii."
              img={elektroterapia}
            />
            <Card
              title="ULTRADŹWIĘKI"
              description="Aparat BTL-4710 Smart służy do terapii ultradźwiękowej. Jest wysoce ceniony wśród terapeutów."
              img={ultradzwieki}
            />
            <Card
              title="TERAPIA ŚWIATŁEM"
              description="Lampa Bioptron dostarcza do naszego organizmu dawkę dziennego zapotrzebowania na światło, które jest niezbędne do jego prawidłowego funkcjonowania."
              img={swiatlo}
            />
            <Card
              title="KINESOLOGY TAPING"
              description="Kinesiology Taping jest metodą terapii, którą powszechnie stosuje się w wielu dziedzinach medycyny."
              img={kinesiology}
            />
            <Card
              title="TAPING SZTYWNY"
              description="Metoda leczenia poprzez aplikację na ciele, w ściśle określony sposób, nierozciągliwego lub elastycznego plastra."
              img={taping}
            />
            <Card
              title="MASAŻ"
              description="Masaż polega na odpowiednim doborze technik i chwytów, które pozwolą uzyskać pożądany efekt terapii."
              img={masaz}
            />
            <Card
              title="TECHNIKI OSTEOPATYCZNE"
              description="Osteopatia jest metodą, w której badanie manualne wykorzystywane jest do stawiania diagnozy i leczenia chorych."
              img={techniki}
            />
            <div className="md:mx-2 mb-4 md:mb-0 flex-1" />
            <div className="md:mx-2 mb-4 md:mb-0 flex-1" />
          </div>

        </div>
      </section>    
  
    </ScrollAnimation>
 )
}