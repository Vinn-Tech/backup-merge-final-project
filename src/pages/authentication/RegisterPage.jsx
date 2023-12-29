import React, { useState } from "react";
import { postRegister } from "../../services/auth/register-user";
import FormInput from "../../components/form/FormInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/img/logo.png";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,24}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const NOTELP_REGEX = /^(62|08)\d{10,11}$/;
export const RegisterPage = () => {
  const navigate = useNavigate();
  const [formDataInput, setFormDataInput] = useState({
    nama: "",
    email: "",
    noTelp: "",
    password: "",
    confirmPassword: "",
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  // Password
  const isPasswordValid = PASSWORD_REGEX.test(formDataInput.password);
  const isPasswordLengthValid = formDataInput.password.length > 0;
  // Confirm Password
  const isConfirmPasswordLengthValid = formDataInput.confirmPassword.length > 0;
  // Email
  const isEmailValid = EMAIL_REGEX.test(formDataInput.email);
  const isEmailLengthValid = formDataInput.email.length > 0;
  // No Telp
  const isNoTelpValid = NOTELP_REGEX.test(formDataInput.noTelp);
  const isNoTelpLengthValid = formDataInput.noTelp.length > 0;

  const emailBorderClass = () => {
    if (isEmailLengthValid > 0 && !isEmailValid) {
      return false;
    } else if (isEmailLengthValid > 0 && isEmailValid) {
      return true;
    }
  };
  const phoneBorderClass = () => {
    if (isNoTelpLengthValid > 0 && !isNoTelpValid) {
      return false;
    } else if (isNoTelpLengthValid > 0 && isNoTelpValid) {
      return true;
    }
  };
  const passwordBorderClass = () => {
    if (isPasswordLengthValid > 0 && !isPasswordValid) {
      return false;
    } else if (isPasswordLengthValid > 0 && isPasswordValid) {
      return true;
    }
  };

  const ConfirmMatchPassword = () => {
    if (formDataInput.confirmPassword !== formDataInput.password) {
      return false;
    } else if (
      isPasswordLengthValid > 0 &&
      formDataInput.confirmPassword === formDataInput.password
    ) {
      return true;
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormDataInput({
      ...formDataInput,
      [id]: value,
    });
  };

  const handleRegister = async () => {
    const formData = {
      name: formDataInput.nama,
      email: formDataInput.email,
      phone_number: formDataInput.noTelp,
      password: formDataInput.password,
      confirm_password: formDataInput.confirmPassword,
    };

    try {
      const response = await postRegister(formData);
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
      navigate("/login");
    } catch (error) {
      toast.error(error.response.data.error.detail, {
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

  return (
    <div className="flex laptop:flex-row laptop:justify-between font-poppins">
      <div className="flex flex-col h-screen w-screen px-6 justify-center mobile:w-screen laptop:w-7/12">
        <div className="laptop:w-[90%] laptop:mx-auto ">
          <h1 className="text-[#6148FF] font-bold text-[1.5rem] font-montserrat text-center laptop:text-left">
            Daftar
          </h1>
          <FormInput
            name="Nama"
            label="nama"
            type="text"
            placeholder="Nama Lengkap"
            value={formDataInput.name}
            onChange={(e) => handleInputChange(e)}
          />
          <FormInput
            name="Email"
            label="email"
            type="email"
            placeholder="contoh : johndoe@gmail.com"
            value={formDataInput.email}
            onChange={(e) => handleInputChange(e)}
            isValid={emailBorderClass()}
            isIconValid={emailBorderClass()}
          />
          {isEmailLengthValid && !isEmailValid && (
            <div className="text-red-600 text-xs mt-2">
              Masukkan Format Email yang Valid
              <br />
              "Contoh : budiganteng@gmail.com"
            </div>
          )}
          {isEmailLengthValid && isEmailValid && (
            <div className="text-green-600 text-sm mt-2 font-bold">
              Email Valid
            </div>
          )}
          <FormInput
            name="Nomor Telepon"
            label="noTelp"
            type="tel"
            placeholder="62.89987623623"
            value={formDataInput.noTelp}
            onChange={(e) => handleInputChange(e)}
            isValid={phoneBorderClass()}
            isIconValid={phoneBorderClass()}
          />
          {isNoTelpLengthValid && !isNoTelpValid && (
            <div className="text-red-600 text-xs mt-2">
              Masukkan format nomor telepon yang valid
              <br />
              Minimal 10 karakter dan maksimal 13 karakter
              <br />
              "Contoh : 089777123123 / 628977123123"
            </div>
          )}
          {isNoTelpLengthValid && isNoTelpValid && (
            <div className="text-green-600 text-sm mt-2 font-bold">
              Nomor Telepon Valid
            </div>
          )}
          <div className="relative ">
            <FormInput
              name="Password"
              label="password"
              type={isPasswordVisible ? "text" : "password"}
              placeholder="Buat Password"
              value={formDataInput.password}
              onChange={(e) => handleInputChange(e)}
              isValid={passwordBorderClass()}
              isIconValid={passwordBorderClass()}
            />
            <div onClick={togglePassword} className="hover:cursor-pointer">
              {isPasswordVisible ? (
                <FontAwesomeIcon
                  icon={faEyeSlash}
                  style={{ color: "#8A8A8A" }}
                  size="xl"
                  className="absolute inset-y-8 py-3 end-12"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faEye}
                  style={{ color: "#8A8A8A" }}
                  size="xl"
                  className="absolute inset-y-8 py-3 end-12"
                />
              )}
            </div>
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
          <div className="relative ">
            <FormInput
              name="Konfirmasi Password"
              label="confirmPassword"
              type={isPasswordVisible ? "text" : "password"}
              placeholder="Konfirmasi Password"
              value={formDataInput.confirmPassword}
              onChange={(e) => handleInputChange(e)}
              isValid={ConfirmMatchPassword()}
              isIconValid={ConfirmMatchPassword()}
            />
            <div onClick={togglePassword} className="hover:cursor-pointer">
              {isPasswordVisible ? (
                <FontAwesomeIcon
                  icon={faEyeSlash}
                  style={{ color: "#8A8A8A" }}
                  size="xl"
                  className="absolute inset-y-8 py-3 end-12"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faEye}
                  style={{ color: "#8A8A8A" }}
                  size="xl"
                  className="absolute inset-y-8 py-3 end-12"
                />
              )}
            </div>
          </div>
          {isConfirmPasswordLengthValid && !ConfirmMatchPassword() && (
            <div className="text-red-600 text-xs mt-2">
              Password dan Konfirmasi Password harus sama !
            </div>
          )}

          {ConfirmMatchPassword() && (
            <div className="text-green-600 text-sm mt-2 font-bold">
              Password Sama
            </div>
          )}

          <button
            className="w-[100%] mx-auto bg-blue-500 rounded-xl py-2 my-4 text-sm text-white font-medium disabled:cursor-not-allowed disabled:bg-blue-300"
            disabled={
              !isEmailValid ||
              !isNoTelpValid ||
              !isPasswordValid ||
              !isPasswordLengthValid ||
              !isEmailLengthValid ||
              !isNoTelpLengthValid ||
              !isConfirmPasswordLengthValid
            }
            type="submit"
            onClick={() => {
              handleRegister();
            }}
          >
            Daftar
          </button>
        </div>
      </div>
      {/* SIDE IMAGE */}
      <div className="hidden laptop:flex laptop:h-screen laptop:w-5/12">
        <div className="flex flex-row bg-[#6148FF] w-full justify-center items-center">
          <div className="flex flex-row items-center gap-x-4">
            <img src={logo} alt="test" className="w-40 h-40" />
            <h1 className="font-bold text-4xl text-white">RealSkills</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
