import React from "react";
import { Card } from "./card";

import elektroterapia from "../images/elektroterapia.webp";
import ultradzwieki from "../images/ultradzwieki.webp";
import swiatlo from "../images/terapia-swiatlem.webp";
import kinesiology from "../images/kinesiology-taping.webp";
import taping from "../images/taping-sztywny.webp";
import masaz from "../images/masaz.webp";
import techniki from "../images/techniki-osteopatyczne.webp";
import logo from "../images/logo.png";
import ScrollAnimation from "react-animate-on-scroll";

export const MethodSection = () => {
  return (
    <ScrollAnimation animateIn="fadeIn">
      <section className="bg-gray-100 py-8 border-b">
        <h3 className="text-center">NOWOCZESNE METODY REHABILITACJI</h3>
        <div className="px-4 text-gray-800">
          <div className="block md:flex justify-center md:-mx-2 px-12">
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
          </div>

          <div className="block md:flex justify-center md:-mx-2 px-12">
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
          </div>

          <div className="block md:flex justify-center md:-mx-2 px-12">
            <Card
              title="TECHNIKI OSTEOPATYCZNE"
              description="Osteopatia jest metodą, w której badanie manualne wykorzystywane jest do stawiania diagnozy i leczenia chorych."
              img={techniki}
            />
            <Card
              title="OFERTA"
              description="Poznaj szczegóły naszej oferty."
              img={logo}
            />
            <div className="md:mx-2 mb-4 md:mb-0 flex-1" />
          </div>

        </div>
      </section>    
  
    </ScrollAnimation>
 )
}