import React from "react";
import pourazowe from "../images/stany-pourazowy.webp";

export const Tile = ({ title, image, children }) => {
  return (
    <div className="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0">
      <div className="bg-white rounded-lg overflow-hidden shadow relative">
        <img className="h-56 w-full object-cover object-center" src={ pourazowe } alt="" style={{ margin: 0 }}/>
        <div className="p-3 h-auto md:h-32">
          <a 
            href="#"
            className="block text-blue-500 hover:text-blue-600 font-semibold mb-2 text-lg md:text-base lg:text-lg text-center"
          >
            { title }
          </a>
          <div className="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
            { children }
          </div>
        </div>
      </div>
    </div>
 );
}