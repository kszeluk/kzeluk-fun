import React from "react";

import logo from "../images/logo2.png"

export const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto  px-8">
        <div className="w-full flex flex-col md:flex-row py-6">
          <div className="flex-1 mb-6">
            <a href="#" className="p-1 mr-2 inline-flex items-center">
              <img src={logo} alt="logo" style={{ margin: 0 }} />
              <span 
                className="text-xl text-white font-bold uppercase tracking-wide ml-2"
                style={{ color: "#488f3c" }}
              >Centrum Rehabilitacji</span>
            </a>
          </div>
          <div className="flex-1">
              <p className="uppercase text-gray-500 md:mb-4">Adres i kontakt</p>
              <ul className="list-reset mb-6 m-0">
                <li className="mt-2 inline-block md:block md:mr-0">
                  <div className="flex">
                    <svg xmlns="https://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" className="mr-2">
                      <path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    ul. PRUSA 38-40/22 (parter)<br /> 50-319 Wrocław
                  </div>
                </li>
                <li className="mt-2 inline-block md:block md:mr-0">
                  <div className="flex">
                    <svg xmlns="https://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" className="mr-2">
                      <path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    ul. ŁYSKORNIA 15 <br /> 98-350 BIAŁA / k.Wielunia
                  </div>
                </li>
                <li className="mt-2 inline-block md:block md:mr-0">
                  <div className="flex">
                    <svg xmlns="https://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" className="mr-2">
                      <path d="M0 0h24v24H0z" fill="none"/><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                    </svg>
                    <a href="tel:+48604442837">+48 604 442 837</a>
                  </div>
                </li>
              </ul>
            </div>
        </div>
      </div>
    </footer>
  );
}