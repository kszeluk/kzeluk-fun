import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components";
import logo from "../images/logo2.png"


const LogoTitle = styled.h3`
  margin: 0;
  height: 50px;
  padding: 0;
  line-height: 50px;
`;

const Header = ({ siteTitle }) => {
  const navigation = React.createRef();
  const isMenuDisplayed = React.createRef(false);

  return (
    <nav className="flex items-center p-2 flex-wrap">
      <a href="#" className="p-1 mr-2 inline-flex items-center">
        <img src={logo} alt="logo" style={{ margin: 0, height: "48px" }} />
        <span 
          className="text-xl font-bold uppercase tracking-wide ml-2 hidden sm:inline"
          style={{ color: "#488f3c" }}
        >Centrum Rehabilitacji</span>
      </a>
      <button
        className="inline-flex p-3 rounded lg:hidden ml-auto outline-none nav-toggler"
        data-target="#navigation"
        onClick={() => {
          console.log(isMenuDisplayed.current);

          if (!isMenuDisplayed.current) {
            document.getElementById("navigation").style.display = "block";
          } else {
            document.getElementById("navigation").style.display = "none";
          }
        
          isMenuDisplayed.current = !isMenuDisplayed.current;
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="36px" height="36px"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>      </button>
      <div
        className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"
        id="navigation"
        ref={navigation}
      >
        <div
          className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto"
        >
          <a
            href="#"
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
          >
            <span>Home</span>
          </a>
          <a
            href="#"
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
          >
            <span>About</span>
          </a>
          <a
            href="#"
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
          >
            <span>Services</span>
          </a>
          <a
            href="#"
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
          >
            <span>Gallery</span>
          </a>
          <a
            href="#"
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
          >
            <span>Products</span>
          </a>
          <a
            href="#"
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
          >
            <span>Contact Us</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
