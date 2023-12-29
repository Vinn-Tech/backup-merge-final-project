import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import pencil from "../../assets/img/icon/pencil.png";
import settings from "../../assets/img/icon/settings.png";
import pay from "../../assets/img/icon/pay.png";
import out from "../../assets/img/icon/out.png";
import { Link, useNavigate } from "react-router-dom";
import { getUserById } from "../../services/notifikasi_akun/get_user";
import { putUpdateProfile } from "../../services/notifikasi_akun/update_profile";
import { toast } from "react-toastify";
import { NavbarLogin } from "../../components/NavbarLogin";
export const AkunProfil = () => {
  const navigate = useNavigate();
  const [updatedProfilePicture, setUpdatedProfilePicture] = useState("");

  const [userData, setUserData] = useState({
    profile_picture: null,
    name: "",
    email: "",
    profile: {
      phone_number: "",
      country: "",
      city: "",
    },
  });

  useEffect(() => {
    const fetchDetailUser = async () => {
      try {
        const data = await getUserById();
        setUserData(data.data.user);
        console.log(data.data.user, "data user");
      } catch (error) {
        console.log("data error", error);
      }
    };

    fetchDetailUser();
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setUpdatedProfilePicture(file);

    setUserData((prevUserData) => ({
      ...prevUserData,
      profile: {
        ...prevUserData.profile,
        profile_picture: URL.createObjectURL(file),
      },
    }));
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    setUserData((prevUserData) => ({
      ...prevUserData,
      profile: {
        ...prevUserData.profile,
        [id]: value,
      },
      [id]: value,
    }));
  };
  console.log(userData, "userdata");
  const handleSaveProfile = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("profile_picture", updatedProfilePicture);
    formData.append("name", userData.name);
    formData.append("email", userData.email);
    formData.append("phone_number", userData.profile.phone_number);
    formData.append("country", userData.profile.country);
    formData.append("city", userData.profile.city);
    try {
      const response = await putUpdateProfile(formData);
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
      console.log("User profile updated successfully");
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
      console.error("Error updating user profile", error);
    }
  };

  return (
    <div className="parents">
      <div className="navbar-component hidden laptop:flex">
        <NavbarLogin />
      </div>

      <div className="hero-section flex flex-col gap-2  w-full  laptop:h-[11rem] bg-[#EBF3FC]  ">
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
        <div className="flex mx-[0.9rem] mt-[1rem] justify-center items-center  ">
          <div className="modal flex flex-col laptop:border laptop:border-[#6148FF] min-h-screen laptop:h-auto w-full laptop:w-[75%] rounded-[1rem] mb-[4rem]">
            <div className="title hidden laptop:flex w-full h-[4.8rem] justify-center items-center laptop:bg-[#6148FF] rounded-t-2xl ">
              <span className=" flex laptop:justify-center laptop:items-center text-white font-bold text-[1.8rem] py-5">
                Akun
              </span>
            </div>
            <div className="flex flex-row w-full flex-grow rounded-b-2xl mb-[2rem]">
              {/* Left Section */}
              <div className="left-section hidden laptop:flex w-1/2 m-[2rem]">
                <div className="flex flex-col gap-5 font-poppins ">
                  <div className="flex flex-row gap-4">
                    <img
                      src={pencil}
                      alt=""
                      className="w-[1.6rem] h-[1.6rem] "
                    />
                    <span className="text-[#6148FF] text-[1.1rem] font-bold ">
                      Profil Saya
                    </span>
                  </div>
                  <hr />
                  <div className=" flex flex-row gap-4">
                    <img
                      src={settings}
                      alt=""
                      className="w-[1.5rem] h-[1.5rem]"
                    />
                    <a
                      className="text-semibold text-[0.9rem] font-bold hover:text-[#6148FF]"
                      href="/ubahPassword"
                    >
                      Ubah Password
                    </a>
                  </div>
                  <hr />
                  <div className=" flex flex-row gap-4">
                    <img src={pay} alt="" className="w-[1.5rem] h-[1.5rem] " />
                    <a
                      className="text-black text-[0.9rem] font-bold hover:text-[#6148FF]"
                      href="/riwayatPembayaran"
                    >
                      Riwayat Pembayaran
                    </a>
                  </div>
                  <hr />
                  <div className=" flex flex-row gap-4">
                    <img src={out} alt="" className="w-[1.5rem] h-[1.5rem] " />
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

              {/* Right Section */}
              <div className="right-section w-full laptop:w-1/2 laptop:mx-[4rem] ">
                <div className="back-section flex items-center gap-3 laptop:hidden ">
                  <Link
                    to="/settings"
                    className="text-black text-[1rem] font-bold font-montserrat"
                  >
                    <FontAwesomeIcon
                      icon={faArrowLeft}
                      size="xl"
                      style={{ color: "black" }}
                    />
                  </Link>
                </div>
                <div className="picture-section flex justify-evenly items-center mt-[2rem] mr-[0.75rem]">
                  <label htmlFor="profile_picture" className="cursor-pointer">
                    <div className="flex justify-center items-center w-[9rem] h-[9rem]  border-4 border-[#6148FF] rounded-full overflow-hidden">
                      {/* {console.log(updatedProfilePicture, "profil")} */}
                      {updatedProfilePicture ? (
                        <img
                          src={URL.createObjectURL(updatedProfilePicture)}
                          log
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
                      ) : userData.profile?.profile_picture ? (
                        <img
                          src={userData.profile?.profile_picture}
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-[1.5rem]">+</span>
                      )}
                    </div>
                    <input
                      id="profile_picture"
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                    />
                  </label>
                </div>

                <div className="flex flex-col gap-2 font-poppins mt-[1rem] ">
                  <span className="text-[1rem] ">Nama</span>
                  <input
                    id="name"
                    type="text"
                    className="border-2 border-[#D0D0D0] text-black rounded-2xl py-[0.7rem] px-[1rem] "
                    placeholder="Nama"
                    value={userData.name}
                    onChange={(e) => handleInputChange(e)}
                  />

                  <span className="text-[1rem]">Email</span>
                  <input
                    id="email"
                    type="email"
                    className="border-2 border-[#D0D0D0] text-black rounded-2xl py-[0.7rem] px-[1rem] "
                    placeholder="Email"
                    value={userData.email}
                    onChange={(e) => handleInputChange(e)}
                  />

                  <span className="text-[1rem]">Nomor Telepon</span>
                  <input
                    id="phone_number"
                    type="number"
                    className="border-2 border-[#D0D0D0] text-black rounded-2xl py-[0.7rem] px-[1rem] "
                    placeholder="Nomor Telepon"
                    value={userData.profile?.phone_number}
                    onChange={(e) => handleInputChange(e)}
                  />

                  <span className="text-[1rem]">Negara</span>
                  <input
                    id="country"
                    type="text"
                    className="border-2 border-[#D0D0D0] text-black rounded-2xl py-[0.7rem] px-[1rem] "
                    placeholder="Negara"
                    value={userData.profile?.country}
                    onChange={(e) => handleInputChange(e)}
                  />

                  <span className="text-[1rem]">Kota</span>
                  <input
                    id="city"
                    type="text"
                    className="border-2 border-[#D0D0D0] text-black rounded-2xl py-[0.7rem] px-[1rem] "
                    placeholder="Kota"
                    value={userData.profile?.city}
                    onChange={(e) => handleInputChange(e)}
                  />

                  <button
                    className="bg-blue-300 text-white text-[1.1rem] py-[0.8rem] px-[1rem] mt-[1rem] rounded-2xl hover:bg-[#6148FF] "
                    type="submit"
                    onClick={handleSaveProfile}
                  >
                    Simpan Profil Saya
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
