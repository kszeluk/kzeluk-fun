import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-scroll";

import logo from "../images/logo2.png"


const Header = ({ siteTitle }) => {
  const navigation = React.createRef();
  const isMenuDisplayed = React.createRef(false);

  return (
    <>
      <div style={{ width: "100%", height: "75px", backgroundColor: "#d4edff" }}></div>
      <nav className="flex items-center p-2 flex-wrap fixed z-30 w-full top-0" style={{ backgroundColor: "#d4edff", opacity: 0.85}}>
        <a href="#" className="p-1 mr-2 inline-flex items-center">
          <img src={logo} alt="logo" style={{ margin: 0, height: "48px" }} />
          <span 
            className="text-xl font-bold uppercase tracking-wide ml-2 hidden sm:inline text-primary"
          >
            Centrum 
            <span className="text-secondary"> Rehabilitacji</span>
          </span>
        </a>
        <button
          className="inline-flex p-3 rounded lg:hidden ml-auto outline-none nav-toggler"
          data-target="#navigation"
          onClick={() => {
            if (!isMenuDisplayed.current) {
              document.getElementById("navigation").style.display = "block";
            } else {
              document.getElementById("navigation").style.display = "none";
            }
          
            isMenuDisplayed.current = !isMenuDisplayed.current;
          }}
        >
          <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1b1f4c" width="36px" height="36px"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>      </button>
        <div
          className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto text-primary"
          id="navigation"
          ref={navigation}
          onClick={() => {
            if (isMenuDisplayed.current) {
              document.getElementById("navigation").style.display = "none";
            }
          
            isMenuDisplayed.current = !isMenuDisplayed.current;
          }}
        >
          <div
            className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto"
          >
            <Link
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:bg-gray-900 hover:text-white cursor-pointer"
              activeClass="font-bold"
              to="oferta"
              spy={true}
              smooth={true}
              offset={-48}
              duration={500}
            >
              Oferta
            </Link>
            <Link
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:bg-gray-900 hover:text-white cursor-pointer"
              activeClass="font-bold"
              to="nasze-metody"
              spy={true}
              smooth={true}
              offset={-48}
              duration={500}
            >
              Nasze metody
            </Link>
            <Link
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:bg-gray-900 hover:text-white cursor-pointer"
              activeClass="font-bold"
              to="o-nas"
              spy={true}
              smooth={true}
              offset={-48}
              duration={500}
            >
              O nas
            </Link>
            <Link
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:bg-gray-900 hover:text-white cursor-pointer"
              activeClass="font-bold"
              to="kontakt"
              spy={true}
              smooth={true}
              offset={-48}
              duration={500}
            >
              Kontakt
            </Link>
            <Link
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:bg-gray-900 hover:text-white cursor-pointer"
              to="kontakt"
              spy={true}
              smooth={true}
              offset={-48}
              duration={500}
            >
              Umów wizytę
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
