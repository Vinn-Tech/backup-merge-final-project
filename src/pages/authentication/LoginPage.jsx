import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import logo from "../../assets/img/logo.png";

export const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const password = () => {
    setShowPassword(!showPassword);
  };

        //Testing
  return (
    <div className="flex flex-row justify-center items-center h-screen font-poppins ">
      <div className="flex flex-col justify-center items-center h-full w-7/12">
        <div className="flex flex-col justify-start text-sm">
        <h3 className="flex justify-left mb-3 text-3xl font-bold text-[#6148FF]">Masuk</h3>
        <label className="flex flex-col mb-1">Email/Telepon
        </label>
        <input  className="border rounded-xl p-2 w-[20rem] mb-2" placeholder="Contoh: johndee@gmail.com"></input>
        <span className="flex justify-between mb-1">
          <label>Masukkan Password</label>
          
          <a href="/reset" className="text-[#6148FF]"> Lupa Password</a>
         
        </span>
        <>
            <input
              type={showPassword ? "text" : "password"}
              className="border rounded-xl p-2 w-[20rem] mb-4"
              placeholder="Masukkan Password"
            />
            <FontAwesomeIcon
              icon={showPassword}
              className="absolute top-2 right-2 cursor-pointer"
              onClick={password}
            />
          </>
        <button className="border rounded-xl p-2 w-[20rem] mb-6 bg-[#6148FF] text-white ">Masuk</button>
        <p className="flex flex-row justify-center gap-2">
          Belum punya akun? 
          <span className="font-semibold text-[#6148FF]">
            <a href="register" > Daftar di sini</a>
          </span>

        </p>
        </div>
        
        </div>
      <div className="flex justify-center items-center h-full w-5/12 bg-[#6148FF]">
        <img src={logo} alt=" " className="w-40 h-40"></img>
        <h1 className="font-bold text-4xl text-white">RealSkills</h1>
      </div>
    </div>
  );
};
