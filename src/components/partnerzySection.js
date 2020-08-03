import React from "react";
import { SectionTitle } from "./SectionTitle";

import siwy from "../images/siwy.png";
import cnm from "../images/cnm.jpg";
import ks from "../images/kspolonia.jpg";

import ScrollAnimation from "react-animate-on-scroll";


export const PartnersSection = () => {
  return (
    <ScrollAnimation animateIn="fadeIn">
      <section className="bg-white py-8" id="partnerzy">
        <SectionTitle
          title="PARTNERZY"
        />

        <div className="container max-w-3xl mx-auto m-8">
          <div className="flex flex-col md:flex-row justify-around">
            <div className="flex justify-center">
              <img src={ks} className="shadow-2xl" />
            </div>
            <div className="flex justify-center my-8 md:my-0">
              <img src={cnm} className="shadow-2xl" />
            </div>
            <div className="flex justify-center">
              <img src={siwy} className="shadow-2xl" />
            </div>
          </div>
        </div>
      </section>
  
    </ScrollAnimation>
 );
}