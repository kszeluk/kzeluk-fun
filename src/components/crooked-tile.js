import React from "react";

export const CrookedTile = ({ img, title, description }) => {
  return (
    <div className="relative rounded-lg block sm:flex items-center bg-gray-100 shadow-xl md:mx-3 flex-1 my-4" style={{ minHeight: "10rem" }}>
      <div className="relative w-full lg:w-3/7 h-full overflow-hidden rounded-t-lg lg:rounded-t-none lg:rounded-l-lg" style={{ minHeight: "10rem" }}>
        <img className="absolute inset-0 w-full h-full object-cover object-center" src={ img } alt="" />
      </div>
      <div className="w-full lg:w-4/7 h-full flex items-center bg-gray-100 rounded-lg">
        <div className="p-6 lg:p-3 lg:pr-4 lg:pl-5 lg:py-8 h-full">
          <h4>{ title }</h4>
          <p className="text-gray-600">{ description }</p>
          <a className="flex items-baseline mt-3 text-indigo-600 hover:text-indigo-900 focus:text-indigo-900" href="">
            <span>Czytaj więcej</span>
            <span className="text-xs ml-1">&#x279c;</span>
          </a>
        </div>
        <svg className="hidden sm:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="50,0 60,0 50,100 0,100" />
        </svg>
      </div>
    </div>
  )
}