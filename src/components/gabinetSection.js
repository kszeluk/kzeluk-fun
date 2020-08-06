import React from "react";
import Img from "gatsby-background-image";


export const GabinetSection = ({ biuro }) => {
  return (
    <Img
      className="bg-gray-100 p-8 py-20 flex justify-end xl:pr-16"
      id="gabinet"
      fluid={biuro}
      Tag="section"
      style={{ backgroundPosition: "left" }}
    >
      <div className="container max-w-3xl mx-auto m-8">
        <div className="flex flex-col justify-between lg:py-8 break-words">
          <span className="text-3xl sm:text-4xl text-right font-bold text-secondary">
            PROFESJONALNY
          </span>
          <span className="text-3xl sm:text-4xl text-right mt-4 font-bold text-primary">
            GABINET
          </span>
          <span className="text-right text-xl flex mt-16 w-3/5 xl:w-1/2 self-end text-gray-900 tracking-wider">
            Proponujemy fizjoterapię, którą przeprowadzamy w nowoczesnym i eleganckim gabinecie.
          </span>
        </div>
      </div>
    </Img>
 );
}