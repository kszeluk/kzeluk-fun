import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Img from "gatsby-image";

import { SectionTitle } from "./SectionTitle";



export const PartnersSection = ({ siwy, cnm, ks }) => {
  console.log(siwy);

  return (
    <ScrollAnimation animateIn="fadeIn">
      <section className="bg-white py-8" id="partnerzy">
        <SectionTitle
          title="PARTNERZY"
        />

        <div className="container max-w-3xl mx-auto m-8">
          <div className="flex flex-col md:flex-row justify-around">
            <a className="flex justify-center" href="http://poloniawroclaw1.futbolowo.pl/">
              <Img fixed={ks} className="shadow-2xl" />
            </a>
            <a className="flex justify-center my-8 md:my-0" href="https://www.youtube.com/channel/UC2xqYwQL8foA74X0Nsf33vA">
              <Img fixed={cnm} className="shadow-2xl" />
            </a>
            <a className="flex justify-center" href="https://siwy-dym.com/">
              <Img fixed={siwy} className="shadow-2xl" />
            </a>
          </div>
        </div>
      </section>
  
    </ScrollAnimation>
 );
}