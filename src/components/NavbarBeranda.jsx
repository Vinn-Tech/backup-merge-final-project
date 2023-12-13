import React from "react";
import logo from "../assets/img/logo.png";

export const NavbarBeranda = () => {
  return (
    
      <div className="hidden laptop:flex flex-row bg-[#6148FF] p-2 justify-between">
        <div className="flex  items-center text-white ml-[5rem]">
          <img src={logo} alt=" " className="w-12 h-12" />
          <h1 className=" text-lg mr-20">RealSkills</h1>
        <div className="flex relative">
          <input
            className="p-3 w-[25rem] flex justify-between rounded-lg"
            placeholder="Cari Kursus terbaik...."
          />
          <button className=" bg-[#6148FF] absolute right-3 mt-3 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="p-1"
            >
              <path
                d="M10 18C11.775 17.9996 13.4988 17.4054 14.897 16.312L19.293 20.708L20.707 19.294L16.311 14.898C17.405 13.4997 17.9996 11.7754 18 10C18 5.589 14.411 2 10 2C5.589 2 2 5.589 2 10C2 14.411 5.589 18 10 18ZM10 4C13.309 4 16 6.691 16 10C16 13.309 13.309 16 10 16C6.691 16 4 13.309 4 10C4 6.691 6.691 4 10 4Z"
                fill="#EBF3FC"
              />
              <path
                d="M11.4118 8.58609C11.7908 8.96609 11.9998 9.46809 11.9998 10.0001H13.9998C14.0007 9.47451 13.8974 8.95398 13.6959 8.46857C13.4944 7.98316 13.1987 7.54251 12.8258 7.17209C11.3118 5.66009 8.68683 5.66009 7.17383 7.17209L8.58583 8.58809C9.34583 7.83009 10.6558 7.83209 11.4118 8.58609Z"
                fill="#EBF3FC"
              />
            </svg>
          </button>
        </div>
        </div>
        <div className="flex items-center text-white mr-[10rem] gap-2 text-md font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
            >
              <path
                d="M8.8335 14.1666L13.0002 9.99992L8.8335 5.83325"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13 10H3"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13 2.5H16.3333C16.7754 2.5 17.1993 2.67559 17.5118 2.98816C17.8244 3.30072 18 3.72464 18 4.16667V15.8333C18 16.2754 17.8244 16.6993 17.5118 17.0118C17.1993 17.3244 16.7754 17.5 16.3333 17.5H13"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Masuk</p>
          </div>
      </div>
   
  );
};
