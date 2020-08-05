import React from "react";

export const Card = ({ title, description, img }) => {
  return (
    <div className="md:mx-2 mb-4 md:mb-0 flex-1 py-4">
      <div className="flex max-w-md overflow-hidden h-full">
        <div className="w-1/3 flex items-start mt-2">
          <img src={img} className="m-0" />
        </div>
        <div className="w-2/3 p-4 py-0">
          <h1 className="text-gray-900 font-bold text-lg mb-2">{ title }</h1>
          <p className="mt-1 text-gray-600 text-sm">{ description }</p>
        </div>
      </div>
    </div>    
  );
}