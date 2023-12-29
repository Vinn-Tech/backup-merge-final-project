import React from "react";
import { Banner } from "../components/Banner";
import { KategoriBelajar } from "../components/KategoriBelajar";
import { KursusPopuler } from "../components/KursusPopuler";
import { NavbarLogin } from "../components/NavbarLogin";

export const BerandaLogin = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#EBF3FC] laptop:bg-white">
      <NavbarLogin />
      <Banner />
      <div className="bg-[#EBF3FC] ">
        <h1 className=" px-4 font-semibold text-md text-xl  laptop:hidden ">
          Kategori
        </h1>
        <div className=" overflow-x-auto mx-4 laptop:mx-0  laptop:flex-wrap">
          <KategoriBelajar />
        </div>
      </div>
      <KursusPopuler />
    </div>
  );
};
