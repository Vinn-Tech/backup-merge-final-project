import React from "react";
import banner from "../assets/img/banner.png";
import grad from "../assets/img/grad.png";
import { useNavigate } from "react-router-dom";

export const Banner = () => {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/login'); // Replace '/login' with the actual path of your login page
  };

  return (
    <div className="hidden laptop:flex flex-row   ">
      <div className=" relative w-4/6">
        <img src={banner} alt="" className="w-full h-[14rem]" />
        <img
          src={grad}
          alt=""
          className="absolute top-0 left-0 w-full h-[14rem]"
        />
      </div>
      <div className="bg-[#6148FF] w-2/6  flex justify-center items-center">
        <div className=" flex flex-wrap w-[14rem] "> 
        <p className="text-white font-semibold text-2xl">Belajar dari Praktisi Terbaik!</p>
        <button 
        onClick={handleLogin}
        className="bg-white text-[#6148FF] rounded-lg text-xs font-bold p-2 w-full  ">IKUTI KELAS</button>
        </div>
      </div>
    </div>
  );
};
