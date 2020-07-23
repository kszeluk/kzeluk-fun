import React from "react";
import { SectionTitle } from "./SectionTitle";

import ScrollAnimation from "react-animate-on-scroll";

export const PoznajNasSection = () => {
  return (
    <ScrollAnimation animateIn="fadeIn">
      <section className="bg-white border-b py-8" id="o-nas">
        <SectionTitle
          title="POZNAJ NAS"
        />

        <div className="container max-w-3xl mx-auto m-8">
          <div className="flex flex-wrap flex-col-reverse md:flex-row items-center">
            <div className="w-5/6 sm:w-2/3 p-6">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">Mgr Bartosz Burzyński</h3>
              <p className="text-gray-900">Fizjoterapeuta</p>
              <p className="text-gray-600 mb-8">Połączenie fizjoterapii ze sportem jest moim hobby, które w miarę postępującego czasu pragnę poszerzać.</p>
            </div>
            <div className="w-full sm:w-1/3 p-6  justify-center flex">
              <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
                <img src="http://www.rehabilitacjaburzynski.pl/images/upload/o-nas/bartosz-burzynski-new.jpg" className="h-full w-full" />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap flex-col-reverse md:flex-row-reverse py-4 items-center">
            <div className="w-5/6 sm:w-2/3 p-6">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">Dr Lilianna Jaworska-Burzyńska</h3>
              <p className="text-gray-900">Fizjoterapeuta</p>
              <p className="text-gray-600 mb-8">Łączenie pracy z ciałem z psychoterapią było zawsze moją pasją. Możliwość łączenia pasji z rozwojem kariery naukowej oraz pracą jest moim największym celem.</p>
            </div>
            <div className="w-full sm:w-1/3 p-6 justify-center flex">
              <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
                <img src="http://www.rehabilitacjaburzynski.pl/images/upload/o-nas/lilianna-jaworska-new.jpg" className="h-full w-full" />
              </div>
            </div>
          </div>

        </div>
      </section>
  
    </ScrollAnimation>
 );
}