import React from "react";
import Img from "gatsby-background-image";

import ScrollAnimation from "react-animate-on-scroll";

export const CrookedTile = ({ img, title, description, delay }) => {
  return (
    <ScrollAnimation className="relative rounded-lg block sm:flex items-center bg-gray-100 shadow-xl md:mx-3 flex-1 my-4" style={{ minHeight: "10rem" }} delay={delay} animateIn="zoomIn">
      <div className="flex relative flex-1 self-stretch">
        <Img
          className="absolute flex flex-1 self-stretch h-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg"
          style={{ minHeight: "10rem" }}
          fluid={ img }
          alt=""
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="h-full flex items-center bg-gray-100 rounded-lg" style={{ flex: 2}}>
        <div className="p-6 md:p-3 md:pr-4 md:pl-5 md:py-8 h-full">
          <h4 className="text-primary">{ title }</h4>
          <p className="text-gray-600">{ description }</p>
        </div>
        <svg className="hidden sm:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="50,0 60,0 50,100 0,100" />
        </svg>
      </div>
    </ScrollAnimation>
  )
}