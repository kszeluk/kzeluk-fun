import React from "react";
import { SectionTitle } from "./SectionTitle";

import biuro from "../images/biuro.png";



export const GabinetSection = () => {
  return (
    <section className="bg-gray-100 p-8 py-20 flex justify-end xl:pr-16" id="gabinet"
      style={{ backgroundImage: `url(${biuro})`, backgroundSize: "cover", backgroundPosition: "left" }}
    >
      <div className="container max-w-3xl mx-auto m-8">
        <div className="flex flex-col justify-between lg:py-8 break-words">
          <span className="text-3xl sm:text-4xl text-right font-bold" style={{ color: "#1e86c8" }}>
            PROFESJONALNY
          </span>
          <span className="text-3xl sm:text-4xl text-right mt-4 font-bold" style={{ color: "#1b1f4c"}}>
            GABINET
          </span>
          <span className="text-right text-xl flex mt-16 w-3/5 xl:w-1/2 self-end text-gray-800 tracking-wider bg-white sm:bg-transparent bg-opacity-40">
            Proponujemy fizjoterapię, którą przeprowadzamy w nowoczesnym i eleganckim gabinecie.
          </span>
        </div>
      </div>
    </section>
 );
}