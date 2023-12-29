import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import logo from "../../assets/img/logo.png";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { login } from "../../services/auth/login-user";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { CookieKeys, CookieStorage } from "../../utils/cookies";

const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,24}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const NOTELP_REGEX = /^(62|08)\d{10,11}$/;
const ERROR_BORDER_COLOR = "border-red-600 focus:outline-red-600";
const SUCCESS_BORDER_COLOR = "border-green-600 focus:outline-green-600";

export const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [emailTelp, setEmailTelp] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const tampilPassword = () => {
    setShowPassword(!showPassword);
  };

        //Testing
  const inputEmailTelp = (e) => {
    setEmailTelp(e.target.value);
  };

  const inputPassword = (e) => {
    setPassword(e.target.value);
  };

  const emailTelpValid =
    EMAIL_REGEX.test(emailTelp) || NOTELP_REGEX.test(emailTelp);
  const passwordValid = PASSWORD_REGEX.test(password);
  const emailTelpLengthValid = emailTelp.length > 0;
  const passwordLengthValid = password.length > 0;

  const colorBorderEmailTelp = () => {
    if (emailTelpLengthValid > 0 && !emailTelpValid) {
      return ERROR_BORDER_COLOR;
    } else if (emailTelpLengthValid > 0 && emailTelpValid) {
      return SUCCESS_BORDER_COLOR;
    }
  };

  const colorBorderPassword = () => {
    if (passwordLengthValid && !passwordValid) {
      return ERROR_BORDER_COLOR;
    } else if (passwordLengthValid && passwordValid) {
      return SUCCESS_BORDER_COLOR;
    }
  };

  const handleLoginUser = async () => {
    try {
      const response = await login({
        email: emailTelp,
        password: password,
      });
      toast.success(response?.data?.message, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      CookieStorage.set(CookieKeys.AuthToken, response.data.data.token);
      navigate("/kelas");
    } catch (error) {
      toast.error(error?.response?.data?.error?.detail, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  //Testing
  return (
    <div className="flex flex-row justify-center items-center h-screen font-poppins  ">
      <div className="flex flex-col justify-center items-center  h-full  laptop:w-7/12">
        <div className="flex flex-col justify-start text-sm">
          <h3 className="flex  mb-3 text-3xl font-bold text-[#6148FF] justify-center laptop:justify-start">
            Masuk
          </h3>
          <label className="flex flex-col mb-2">Email/Telepon</label>
          <input
            type="email"
            className={`border rounded-xl p-3 mb-3  laptop:w-[22rem]  mobile: w-[94vw] ${colorBorderEmailTelp()}`}
            placeholder="Contoh: johndee@gmail.com/62..."
            onChange={(e) => inputEmailTelp(e)}
          ></input>
          <span className="flex justify-between mb-2">
            <label>Masukkan Password</label>

            <a href="/reset" className="text-[#6148FF]">
              {" "}
              Lupa Password
            </a>
          </span>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className={`border rounded-xl p-3  laptop:w-[22rem] mobile: w-[94vw] mb-4 ${colorBorderPassword()}`}
              placeholder="Masukkan Password"
              onChange={(e) => inputPassword(e)}
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              size="xl"
              className="absolute  top-3 right-4 cursor-pointer text-gray-400"
              onClick={tampilPassword}
            />
          </div>
          <button
            className="border rounded-xl p-2 laptop:w-[22rem] mobile:w-[94vw] mb-6 bg-blue-300 text-white hover:bg-[#6148FF]"
            onClick={handleLoginUser}
          >
            Masuk
          </button>
          <p className="flex flex-row justify-center gap-2">
            Belum punya akun?
            <span className="font-semibold text-[#6148FF]">
              <a href="register"> Daftar di sini</a>
            </span>
          </p>
          <span className="laptop:hidden mobile: font-bold text-[#6148FF] flex justify-center mt-2">
            <a href="/"> Masuk Tanpa Login</a>
          </span>
        </div>
      </div>
      <div className=" hidden laptop:flex justify-center items-center h-full w-5/12 bg-[#6148FF]">
        <img src={logo} alt=" " className="w-40 h-40"></img>
        <h1 className="font-bold text-4xl text-white">RealSkills</h1>
      </div>
    </div>
  );
};
