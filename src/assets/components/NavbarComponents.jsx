import { faBell, faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from "../img/logo.png";

const NavbarComponents = () => {
  return (
    <div className="parents bg-[#6148FF] w-full h-[6.5rem] flex items-center justify-between px-[5rem] py-[2rem] font-poppins">
      <div className="nav-left-section flex items-center w-[60%] gap-[2.5rem]">
        <div className="logo-section flex gap-[0.5rem] w-[30%]">
          <div className="img-logo-container">
            <img src={logo} alt="RealSkills" className="w-[3rem] h-[3rem]" />
          </div>
          <div className="brand-text-container flex items-center">
            <span className="text-white text-[2rem]">RealSkills</span>
          </div>
        </div>

        <div className="input section flex items-center w-[80%] h-[4.5rem] relative">
          <input
            type="text"
            placeholder="Cari Kursus terbaik..."
            className="border-2 border-[#D0D0D0] w-full h-[100%] rounded-[1.5rem] px-[2rem] text-[1rem] outline-none leading-[1.25rem]"
          />
          <div className="search-icon absolute right-[2rem] transform -translate-y-1/2 top-1/2 bg-[#6148FF] px-[.75rem] py-[.45rem] rounded-[.5rem]">
            <FontAwesomeIcon
              icon={faSearch}
              size="md"
              style={{ color: "#FFFFFF" }}
            />
          </div>
        </div>
      </div>

      <div className="nav-right-section w-[20%] flex">
        <div className="link-section flex justify-evenly gap-[1rem] w-full">
          <div className='bars-icon-section flex items-center bg-[#489CFF] gap-[0.75rem] px-[2.25rem] py-[.5rem] rounded-[1rem]'>
            <FontAwesomeIcon
              icon={faBars}
              size="xl"
              style={{ color: "#FFFFFF" }}
            />
            <span className='text-white font-semibold leading-[1.5rem] tracking-wide font-montserrat'>Kelas</span>
          </div>

          <div className='bell-icon-section flex items-center'>
            <FontAwesomeIcon
              icon={faBell}
              size="xl"
              style={{ color: "#FFFFFF" }}
            />
          </div>

          <div className='user-icon-section flex items-center'>
            <FontAwesomeIcon
              icon={faUser}
              size="xl"
              style={{ color: "#FFFFFF" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponents;
