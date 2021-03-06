import React from "react";
import Img from "gatsby-image/withIEPolyfill";

export const Wave = ({ image }) => {
  return (
    <>
      <div
        style={{ backgroundColor: "#5bb6e3"}}
        className="flex items-center flex-col-reverse md:flex-row"
      >
        <div className="flex flex-1 flex-col items-center">
          <h2 className="m-0 text-primary">Zespół wykwalifikowanych</h2>
          <h2 className="mb-8 text-primary">Fizjoterapeutów</h2>
          <p className="text-gray-900">
            Cały czas poszerzamy swoje kwalifikacje <br /> poprzez specjalistyczne kursy doskonalące.
          </p>
          <div className="my-8">
            <a className="mx-4 hover:underline text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg bg-secondary" href="#kontakt">Umów wizytę</a>
            <a class="mx-4 hover:underline bg-white text-gray-900 font-bold rounded-full my-6 py-4 px-8 shadow-lg" href="#o-nas">O nas</a>
          </div>
        </div>
        <div className="flex-1 md:m-0 my-3 w-full">
          <Img fluid={ image } style={{ minHeight: "40vh", maxHeight: "50vh", height: "40vw", objectFit: "contain" }} className="m-4" objectFit="contain" />
        </div>
      </div>
      <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 90 1440 160">
        <path fill="#2eb2ec" fill-opacity="0.42" d="M0,160L60,165.3C120,171,240,181,360,192C480,203,600,213,720,192C840,171,960,117,1080,117.3C1200,117,1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        <path fill="#0089b9" fill-opacity="0.47" d="M0,96L60,96C120,96,240,96,360,117.3C480,139,600,181,720,176C840,171,960,117,1080,96C1200,75,1320,85,1380,90.7L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        <path fill="#2eb2ec" fill-opacity="0.42" d="M0,128L80,144C160,160,320,192,480,186.7C640,181,800,139,960,138.7C1120,139,1280,181,1360,202.7L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
      </svg>
    </>
  )
}