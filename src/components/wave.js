import React from "react";

import burzynscy from "../images/burzynscy.png";


export const Wave = () => {
  return (
    <>
      <div
        style={{ backgroundColor: "#5bb6e3"}}
        className="px-10 md:px-20 lg:px-40 w-full flex flex-wrap flex-col md:flex-row items-center"
      >
        <div className="flex flex-col w-full flex-1 justify-center items-start text-center md:text-left text-white px-20">
          <h2 className="my-8 mb-0 text-3xl font-bold leading-tight">Zespół wykwalifikowanych</h2>
          <h2 className="my-8 mt-0 text-3xl font-bold leading-tight">Fizjoterapeutów</h2>
          <p class="leading-normal text-l mb-8" style={{ color: "#115379" }}>
            Cały czas poszerzamy swoje kwalifikacje <br /> poprzez specjalistyczne kursy doskonalące.
          </p>
          <div className="flex justify-around w-full">
            <a class="mx-auto lg:mx-0 hover:underline bg-white text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg" href="#"
              style={{ backgroundColor: "#115379"}}
            >Umów wizytę</a>
            <a class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg" href="#">O nas</a>
          </div>
        </div>
        <div className="flex-1 m-3">
          <img src={ burzynscy } style={{ maxHeight: "50vh" }} />
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 90 1440 160">
        <path fill="#2eb2ec" fill-opacity="0.42" d="M0,160L60,165.3C120,171,240,181,360,192C480,203,600,213,720,192C840,171,960,117,1080,117.3C1200,117,1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        <path fill="#0089b9" fill-opacity="0.47" d="M0,96L60,96C120,96,240,96,360,117.3C480,139,600,181,720,176C840,171,960,117,1080,96C1200,75,1320,85,1380,90.7L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        <path fill="#2eb2ec" fill-opacity="0.42" d="M0,128L80,144C160,160,320,192,480,186.7C640,181,800,139,960,138.7C1120,139,1280,181,1360,202.7L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
      </svg>
    </>
  )
}