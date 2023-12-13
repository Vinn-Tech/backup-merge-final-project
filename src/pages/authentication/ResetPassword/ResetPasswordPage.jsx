import {
  faCircleCheck,
  faCircleXmark,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { toast } from "react-toastify";
import logo from "../../../assets/img/logo.png";
import { postReset } from "../../../services/auth/reset-password";

const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,24}$/;
const ERROR_BORDER_COLOR = "border-red-600 focus:outline-red-600";
const SUCCESS_BORDER_COLOR = "border-green-600 focus:outline-green-600";

const ResetPasswordPage = () => {
  const [FormInput, setFormInput] = useState(
    {
      password: "",
      confirmPassword: "",
    }
  )
  // const [Password, setPassword] = useState("");
  // const [ConfirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [ConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const isPasswordLengthValid = FormInput.password.length > 0;
  const isConfirmPasswordLengthValid = FormInput.confirmPassword.length > 0;
  const isPasswordValid = PASSWORD_REGEX.test(FormInput.password);
  const isConfirmPasswordValid = PASSWORD_REGEX.test(FormInput.confirmPassword);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };

  const toggleConfirmPassword = () => {
    setConfirmPasswordVisible((prevVisible2) => !prevVisible2);
  };

  const handleInput = (e) => {
     const { id, value } = e.target;
    setFormInput({
      ...FormInput,
      [id]: value,
    });
  }

  const passwordBorderClass = () => {
    if (isPasswordLengthValid && !isPasswordValid) {
      return ERROR_BORDER_COLOR;
    } else if (isPasswordLengthValid && isPasswordValid) {
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

  const handleResetPassword = async () => {
    const formReset = {
      new_password: FormInput.password,
      confirm_new_password: FormInput.confirmPassword
    }
    try {
      const response = await postReset(formReset);
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
    } catch (error) {
      toast.error(error.response.data.error, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.log(error, "err reset")
    }
  }  

  return (
    <>
      <div className="parents w-full h-screen flex overflow-y-hidden">
        {/* Left Section */}
        <div className="left-section w-full h-screen flex flex-col justify-center items-center mx-[1rem] laptop:w-[50%] laptop:mx-0">
          <div className="left-container-section flex flex-col gap-[1.5rem] w-full laptop:w-[60%]">
            <span className="font-montserrat text-blue-700 text-[1.5rem] font-black leading-[2.25rem] flex justify-center laptop:justify-start">
              Reset Password
            </span>
            <div className="form-section flex flex-col font-poppins gap-[1rem]">
              <div className="input-password-section flex flex-col gap-[0.2rem] w-[100%] relative">
                <div className="header-password-section flex justify-between">
                  <span className="text-[0.9rem]">Masukkan Password Baru</span>
                </div>
                <div className="password-input-container relative">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Buat Password"
                    value={FormInput.password}
                    onChange={(e)=>{
                      handleInput(e)
                    }}
                    className={`border-2 border-[#D0D0D0] rounded-[1rem] py-[0.5rem] px-[1rem] w-full ${passwordBorderClass()}`}
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
                {isPasswordLengthValid && !isPasswordValid && (
                  <div className="text-red-600 text-xs mt-2">
                    Setidaknya satu huruf besar. <br />
                    Setidaknya satu huruf kecil. <br />
                    Setidaknya satu angka.
                    <br />
                    Panjang total antara 8 dan 24 karakter.
                  </div>
                )}

                {isPasswordLengthValid && isPasswordValid && (
                  <div className="text-green-600 text-sm mt-2 font-bold">
                    Password Sangat Kuat
                  </div>
                )}
              </div>

              <div className="input-password-section flex flex-col gap-[0.2rem] w-[100%] relative">
                <div className="header-password-section flex justify-between">
                  <span className="text-[0.9rem]">Masukkan Password Baru</span>
                </div>
                <div className="password-input-container relative">
                  <input
                    type={ConfirmPasswordVisible ? "text" : "password"}
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Ulangi Password"
                    // value={FormInput.confirmPassword}
                    onChange={(e)=>{
                      handleInput(e)
                    }}
                    className={`border-2 border-[#D0D0D0] rounded-[1rem] py-[0.5rem] px-[1rem] w-full ${ConfirmPasswordBorderClass()}`}
                    required
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
                    {isConfirmPasswordLengthValid && isConfirmPasswordValid && (
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        size="xl"
                        style={{ color: "#188E55" }}
                      />
                    )}
                  </div>
                  <FontAwesomeIcon
                    icon={ConfirmPasswordVisible ? faEyeSlash : faEye}
                    size="xl"
                    style={{ color: "#8A8A8A" }}
                    onClick={toggleConfirmPassword}
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
            </div>
            <button
              className="reset-btn font-poppins text-white bg-blue-700 rounded-[1rem] py-[0.75rem] px-[1.5rem] text-[1rem] disabled:bg-blue-300"
              disabled={
                !isPasswordLengthValid ||
                !isPasswordValid ||
                !isConfirmPasswordLengthValid ||
                !isConfirmPasswordValid
              }
              onClick={() => {
                handleResetPassword();
              }}
            >
              Simpan
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden laptop:bg-blue-700 laptop:w-[50%] laptop:h-screen laptop:flex laptop:justify-center laptop:items-center">
          <div className="brand-text-logo flex gap-2 items-center">
            <img src={logo} alt="RealSkills" className="w-40 h-40" />
            <span className="text-brand font-montserrat font-black text-white text-[3rem]">
              RealSkills
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPasswordPage;
