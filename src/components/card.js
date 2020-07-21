import React from "react";

export const Card = ({ title, description, img }) => {
  return (
    <div className="md:mx-2 mb-4 md:mb-0 flex-1 py-4">
      <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden h-full">
        <div className="w-1/3 flex" style={{ alignItems: "center" }}>
          <img src={img} className="m-0" />
        </div>
        <div className="w-2/3 p-2">
          <h1 className="text-gray-900 font-bold text-xl">{ title }</h1>
          <p className="mt-2 text-gray-600 text-sm">{ description }</p>
        </div>
      </div>
    </div>    
  );
}