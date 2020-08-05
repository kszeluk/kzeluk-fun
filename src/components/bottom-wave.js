import React from "react";

import contact from "../images/contact.svg";

export const BottomWave = () => {
  return (
    <>
      <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 90 1440 160" style={{ transform: "rotate(180deg)"}}>
        <path fill="#2eb2ec" fill-opacity="0.42" d="M0,160L60,165.3C120,171,240,181,360,192C480,203,600,213,720,192C840,171,960,117,1080,117.3C1200,117,1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        <path fill="#0089b9" fill-opacity="0.47" d="M0,96L60,96C120,96,240,96,360,117.3C480,139,600,181,720,176C840,171,960,117,1080,96C1200,75,1320,85,1380,90.7L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        <path fill="#2eb2ec" fill-opacity="0.42" d="M0,128L80,144C160,160,320,192,480,186.7C640,181,800,139,960,138.7C1120,139,1280,181,1360,202.7L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
      </svg>
      <div
        style={{ backgroundColor: "#5bb6e3"}}
        className="text-white"
        id="kontakt"
      >
        <h1 className="text-white text-3xl sm:text-5xl text-center w-full py-8 my-0">Kontakt</h1>
        <div className="flex flex-col md:flex-row-reverse text-center justify-center pb-4 px-4 container mx-auto">
          <div className="flex-1 md:self-center">
            <img src={contact} className="m-0 py-8 lg:pl-20 pl-4"/>
          </div>
          <div className="flex-2">
            <div className="flex w-full flex-col items-center sm:flex-row mb-4 justify-center md:justify-start">
              <a className="rounded-full border p-2 mr-3 hidden sm:block" href="tel:+48604442837">
                <svg xmlns="https://www.w3.org/2000/svg" height="32" viewBox="0 0 24 24" width="32">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" fill="white" />
                </svg>
              </a>
              <a className="font-bold m-0 text-xl py-3" href="tel:+48604442837">
                +48 693 501 822
              </a>
              <div className="flex sm:hidden mb-8 mt-2">
                <a className="rounded-full border p-2 mr-8" href="tel:+48604442837">
                  <svg xmlns="https://www.w3.org/2000/svg" height="32px" viewBox="0 0 24 24" width="32px">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" fill="white" />
                  </svg>
                </a>
                <a className="rounded-full border p-2 mr-3" href="sms:+48604442837">
                  <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="32px" height="32px">
                    <path d="M0 0h24v24H0z" fill="none"/><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                  </svg>
                </a>
              </div>
            </div>
            <a className="flex w-full mb-8 sm:mb-4 justify-center md:justify-start" href="https://www.facebook.com/CentrumRehabilitacjiWroclaw">
              <div className="rounded-full border p-0 mr-3">
                <svg xmlns="https://www.w3.org/2000/svg" enable-background="new 0 0 144.083 144" height="48px" version="1.1" viewBox="0 0 144.083 144" width="48px" >
                  <path d="M90.792,36.304H77.596c-0.031,0-0.061,0.001-0.09,0.004c-13.323,0.042-15.063,9.345-15.07,17.476  c-0.018,0.076-0.028,0.154-0.028,0.235v5.708h-9.118c-0.552,0-1,0.448-1,1v14.077c0,0.553,0.448,1,1,1h9.118v30.891  c0,0.553,0.448,1,1,1h13.307c0.553,0,1-0.447,1-1V75.805h13.076c0.553,0,1-0.447,1-1V60.728c0-0.552-0.447-1-1-1H76.715v-7.567  h14.076c0.553,0,1-0.448,1-1V37.304C91.792,36.752,91.344,36.304,90.792,36.304z" fill="white" />
                </svg>
              </div>
              <div className="font-bold m-0 sm:py-2 sm:text-xl text-l py-3">
                /CentrumRehabilitacjiWroclaw
              </div>
            </a>
            <a className="flex w-full my-4 justify-center md:justify-start" href="mailto:kontakt@rehabilitacjaburzynski.pl">
              <div className="rounded-full border p-2 mr-3">
                <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="32px" height="32px">
                  <path d="M0 0h24v24H0z" fill="none"/><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div className="font-bold m-0 sm:py-2 sm:text-xl py-3 text-l">
                  kontakt@rehabilitacjaburzynski.pl
              </div>
            </a>
            <div className="flex w-full my-4 justify-center md:justify-start">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1368.121239786284!2d17.0440813766981!3d51.11985702694367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fe9dad8cc44ab%3A0xf2af6181b250a710!2sUlica%20Boles%C5%82awa%20Prusa%2038%2F40%2C%2050-319%20Wroc%C5%82aw!5e0!3m2!1spl!2spl!4v1596654484057!5m2!1spl!2spl" width="400" height="300" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}