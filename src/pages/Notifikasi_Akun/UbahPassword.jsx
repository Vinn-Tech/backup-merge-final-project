import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import pencil from "../../assets/img/icon/pencil.png";
import settings from "../../assets/img/icon/settings.png";
import pay from "../../assets/img/icon/pay.png";
import out from "../../assets/img/icon/out.png";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { postUbahPassword } from "../../services/notifikasi_akun/ubah_password";
import { Navbar } from "@material-tailwind/react";
import { NavbarLogin } from "../../components/NavbarLogin";

export const UbahPassword = () => {
  const navigate = useNavigate();
  const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,24}$/;
  const ERROR_BORDER_COLOR = "border-red-600 focus:outline-red-600";
  const SUCCESS_BORDER_COLOR = "border-green-600 focus:outline-green-600";

  const [FormInput, setFormInput] = useState({
    password: "",
    changePassword: "",
    confirmChangePassword: "",
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [ChangePasswordVisible, setChangePasswordVisible] = useState(false);
  const [ConfirmChangePasswordVisible, setConfirmChangePasswordVisible] =
    useState(false);

  const isPasswordLengthValid = FormInput.password.length > 0;
  const isPasswordValid = PASSWORD_REGEX.test(FormInput.password);

  const isChangePasswordLengthValid = FormInput.changePassword.length > 0;
  const isChangePasswordValid = PASSWORD_REGEX.test(FormInput.changePassword);

  const isConfirmPasswordLengthValid =
    FormInput.confirmChangePassword.length > 0;
  const isConfirmPasswordValid = PASSWORD_REGEX.test(
    FormInput.confirmChangePassword
  );

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };

  const toggleChangePassword = () => {
    setChangePasswordVisible((prevVisible2) => !prevVisible2);
  };
  const toggleConfirmChangePassword = () => {
    setConfirmChangePasswordVisible((prevVisible3) => !prevVisible3);
  };

  const handleInput = (e) => {
    const { id, value } = e.target;
    setFormInput({
      ...FormInput,
      [id]: value,
    });
  };

  const passwordBorderClass = () => {
    if (isPasswordLengthValid && !isPasswordValid) {
      return ERROR_BORDER_COLOR;
    } else if (isPasswordLengthValid && isPasswordValid) {
      return SUCCESS_BORDER_COLOR;
    }
  };

  const ChangePasswordBorderClass = () => {
    if (isChangePasswordLengthValid && !isChangePasswordValid) {
      return ERROR_BORDER_COLOR;
    } else if (isChangePasswordLengthValid && isChangePasswordValid) {
      return SUCCESS_BORDER_COLOR;
    }
  };

  const ConfirmPasswordBorderClass = () => {
    if (isConfirmPasswordLengthValid && !isConfirmPasswordValid) {
      return ERROR_BORDER_COLOR;
    } else if (isConfirmPasswordLengthValid && isConfirmPasswordValid) {
      return SUCCESS_BORDER_COLOR;
    }
  };

  const handleChangePassword = async () => {
    const formReset = {
      old_password: FormInput.password,
      new_password: FormInput.changePassword,
      confirm_new_password: FormInput.changePassword,
    };
    try {
      const response = await postUbahPassword(formReset);
      if (response && response.data) {
        toast.success(response.data.message, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        console.error("Invalid response format:", response);
      }
    } catch (error) {
      toast.error(error.response?.data?.error, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.log(error, "err reset");
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const password = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="parents">
      <div className="navbar-component hidden laptop:flex">
        <NavbarLogin />
      </div>

      <div className="hero-section flex flex-col gap-2 w-full laptop:h-[11rem] bg-[#EBF3FC] ">
        <div className="back-section hidden laptop:flex items-center cursor-pointer mt-[2.3rem] mb-[0.7rem] gap-[1.25rem] mx-[11.5rem]">
          <FontAwesomeIcon
            icon={faArrowLeft}
            size="lg"
            style={{ color: "#6148FF" }}
            onClick={() => {
              navigate("/");
            }}
          />
          <a
            className="font-black font-montserrat text-[1rem] text-[#6148FF]"
            href="/"
          >
            Kembali ke Beranda
          </a>
        </div>
        <div className="flex mx-[0.9rem] mt-[1rem] justify-center items-center">
          <div className="modal flex flex-col laptop:border laptop:border-[#6148FF] min-h-screen laptop:h-auto w-full laptop:w-[75%] rounded-[1rem] mb-[4rem]">
            <div className="title hidden laptop:flex w-full h-[4.8rem] justify-center items-center laptop:bg-[#6148FF] rounded-t-2xl">
              <span className=" flex laptop:justify-center laptop:items-center text-white font-bold text-[1.8rem] py-3">
                Akun
              </span>
            </div>
            <div className="flex flex-row w-full flex-grow rounded-b-2xl">
              {/* Left Section */}
              <div className="left-section hidden laptop:flex w-1/2 m-[2rem]">
                <div className="flex flex-col gap-5 font-poppins">
                  <div className="flex flex-row gap-4">
                    <img
                      src={pencil}
                      alt=""
                      className="w-[1.6rem] h-[1.6rem] "
                    />
                    <a
                      className="text-black text-[0.9rem] font-bold hover:text-[#6148FF]"
                      href="/profil"
                    >
                      Profil Saya
                    </a>
                  </div>
                  <hr />
                  <div className=" flex flex-row gap-4">
                    <img
                      src={settings}
                      alt=""
                      className="w-[1.5rem] h-[1.5rem]"
                    />
                    <span className="text-[#6148FF] text-[1.1rem] font-bold">
                      Ubah Password
                    </span>
                  </div>
                  <hr />
                  <div className=" flex flex-row gap-4">
                    <img src={pay} alt="" className="w-[1.5rem] h-[1.5rem]" />
                    <a
                      className="text-black text-[0.9rem] font-bold hover:text-[#6148FF]"
                      href="/riwayatPembayaran"
                    >
                      Riwayat Pembayaran
                    </a>
                  </div>
                  <hr />
                  <div className=" flex flex-row gap-4">
                    <img src={out} alt="" className="w-[1.5rem] h-[1.5rem]" />
                    <a
                      className="text-black text-[0.9rem] font-bold hover:text-[#6148FF]"
                      href="/"
                    >
                      Keluar
                    </a>
                  </div>
                  <hr />
                  <div className=" flex justify-center items-center p-5">
                    <span className="text-l text-[#8A8A8A]">Version 1.1.0</span>
                  </div>
                </div>
              </div>

              {/* Right Section*/}
              <div className="right-section w-full laptop:w-1/2 laptop:mx-[4rem] laptop:my-[2rem]">
                <div className="back-section flex items-center gap-3 laptop:hidden ">
                  <Link
                    to="/settings"
                    className="text-black text-[1rem] font-bold font-montserrat mb-[1rem]"
                  >
                    <FontAwesomeIcon
                      icon={faArrowLeft}
                      size="xl"
                      style={{ color: "black" }}
                    />
                  </Link>
                </div>
                <div className="title-section flex laptop:justify-evenly laptop:items-center mobile:justify-start mobile:items-start">
                  <h1 className="text-[1.8rem] font-bold text-black ">
                    Ubah Password
                  </h1>
                </div>

                <div className="password-lama flex flex-col gap-2 font-poppins mt-[1.5rem]">
                  <span className="text-[1rem] ">Masukan Password Lama</span>

                  <div className="relative">
                    <input
                      id="password"
                      type={passwordVisible ? "text" : "password"}
                      placeholder="Masukan Password Lama"
                      onChange={(e) => handleInput(e)}
                      value={FormInput.password}
                      className={`border-2 border-[#D0D0D0] rounded-[1rem] py-[0.7rem] px-[1rem] w-full relative ${passwordBorderClass()}`}
                      required
                    />
                    <div className="cursor-pointer absolute right-[3rem] top-1/2 transform -translate-y-1/2">
                      {isPasswordLengthValid && !isPasswordValid && (
                        <FontAwesomeIcon
                          icon={faCircleXmark}
                          size="xl"
                          style={{ color: "#FF0000" }}
                        />
                      )}
                      {isPasswordLengthValid && isPasswordValid && (
                        <FontAwesomeIcon
                          icon={faCircleCheck}
                          size="xl"
                          style={{ color: "#188E55" }}
                        />
                      )}
                    </div>
                    <FontAwesomeIcon
                      icon={passwordVisible ? faEyeSlash : faEye}
                      size="xl"
                      style={{ color: "#8A8A8A" }}
                      onClick={togglePasswordVisibility}
                      className="cursor-pointer eye-icon absolute right-[1rem] top-1/2 transform -translate-y-1/2"
                    />
                  </div>
                </div>

                <div className="password-baru flex flex-col gap-2 font-poppins mt-[0.8rem]">
                  <span className="text-[1rem]">Masukan Password Baru</span>
                  <div className="relative">
                    <input
                      id="changePassword"
                      type={ChangePasswordVisible ? "text" : "password"}
                      placeholder="Masukan Password Baru"
                      onChange={(e) => handleInput(e)}
                      value={FormInput.changePassword}
                      className={`border-2 border-[#D0D0D0] rounded-[1rem] py-[0.7rem] px-[1rem] w-full relative ${ChangePasswordBorderClass()}`}
                      required
                    />
                    <div className="cursor-pointer absolute right-[3rem] top-1/2 transform -translate-y-1/2">
                      {isChangePasswordLengthValid &&
                        !isChangePasswordValid && (
                          <FontAwesomeIcon
                            icon={faCircleXmark}
                            size="xl"
                            style={{ color: "#FF0000" }}
                          />
                        )}
                      {isChangePasswordLengthValid && isChangePasswordValid && (
                        <FontAwesomeIcon
                          icon={faCircleCheck}
                          size="xl"
                          style={{ color: "#188E55" }}
                        />
                      )}
                    </div>
                    <FontAwesomeIcon
                      icon={ChangePasswordVisible ? faEyeSlash : faEye}
                      size="xl"
                      style={{ color: "#8A8A8A" }}
                      onClick={toggleChangePassword}
                      className="cursor-pointer eye-icon absolute right-[1rem] top-1/2 transform -translate-y-1/2"
                    />
                  </div>
                  {isChangePasswordLengthValid && !isChangePasswordValid && (
                    <div className="text-red-600 text-xs mt-2">
                      Setidaknya satu huruf besar. <br />
                      Setidaknya satu huruf kecil. <br />
                      Setidaknya satu angka.
                      <br />
                      Panjang total antara 8 dan 24 karakter.
                    </div>
                  )}

                  {isChangePasswordLengthValid && isChangePasswordValid && (
                    <div className="text-green-600 text-sm mt-2 font-bold">
                      Password Sangat Kuat
                    </div>
                  )}
                </div>

                <div className="ulangi-password-baru flex flex-col gap-2 font-poppins mt-[0.8rem]">
                  <span className="text-[1rem]">Ulangi Password Baru</span>
                  <div className="relative">
                    <input
                      id="confirmChangePassword"
                      type={ConfirmChangePasswordVisible ? "text" : "password"}
                      placeholder="Ulangi Password Baru"
                      onChange={(e) => handleInput(e)}
                      value={FormInput.confirmChangePassword}
                      className={`border-2 border-[#D0D0D0] rounded-[1rem] py-[0.7rem] px-[1rem] w-full relative ${ConfirmPasswordBorderClass()}`}
                    />
                    <div className="cursor-pointer absolute right-[3rem] top-1/2 transform -translate-y-1/2">
                      {isConfirmPasswordLengthValid &&
                        !isConfirmPasswordValid && (
                          <FontAwesomeIcon
                            icon={faCircleXmark}
                            size="xl"
                            style={{ color: "#FF0000" }}
                          />
                        )}
                      {isConfirmPasswordLengthValid &&
                        isConfirmPasswordValid && (
                          <FontAwesomeIcon
                            icon={faCircleCheck}
                            size="xl"
                            style={{ color: "#188E55" }}
                          />
                        )}
                    </div>
                    <FontAwesomeIcon
                      icon={ConfirmChangePasswordVisible ? faEyeSlash : faEye}
                      size="xl"
                      style={{ color: "#8A8A8A" }}
                      onClick={toggleConfirmChangePassword}
                      className="cursor-pointer eye-icon absolute right-[1rem] top-1/2 transform -translate-y-1/2"
                    />
                  </div>
                  {isConfirmPasswordLengthValid && !isConfirmPasswordValid && (
                    <div className="text-red-600 text-xs mt-2">
                      Setidaknya satu huruf besar. <br />
                      Setidaknya satu huruf kecil. <br />
                      Setidaknya satu angka.
                      <br />
                      Panjang total antara 8 dan 24 karakter.
                    </div>
                  )}

                  {isConfirmPasswordLengthValid && isConfirmPasswordValid && (
                    <div className="text-green-600 text-sm mt-2 font-bold">
                      Password Sangat Kuat
                    </div>
                  )}
                </div>
                <button
                  className="bg-blue-300 w-full text-white text-[1.2rem] py-[0.7rem] px-[1rem] mt-[1.3rem] rounded-2xl hover:bg-[#6148FF] font-poppins relative"
                  type="submit"
                  disabled={
                    !isPasswordLengthValid ||
                    !isPasswordValid ||
                    !isConfirmPasswordLengthValid ||
                    !isConfirmPasswordValid
                  }
                  onClick={() => {
                    handleChangePassword();
                  }}
                >
                  Ubah Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div />
    </div>
  );
};
