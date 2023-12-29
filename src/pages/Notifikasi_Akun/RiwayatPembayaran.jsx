import React, { useEffect, useState } from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pencil from "../../assets/img/icon/pencil.png";
import settings from "../../assets/img/icon/settings.png";
import pay from "../../assets/img/icon/pay.png";
import out from "../../assets/img/icon/out.png";
import bedge from "../../assets/img/icon/bedge.png";
import modul from "../../assets/img/icon/modul.png";
import time from "../../assets/img/icon/time.png";
import notif_pay from "../../assets/img/icon/notif_pay.png";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getUserById } from "../../services/notifikasi_akun/get_user";
import { NavbarLogin } from "../../components/NavbarLogin";

export const RiwayatPembayaran = () => {
  const navigate = useNavigate();
  const { AuthToken } = useParams();
  const [payment, setPayment] = useState([]);

  const getLevelText = (levelId) => {
    switch (levelId) {
      case 1:
        return "Beginner";
      case 2:
        return "Intermediate";
      case 3:
        return "Advanced";
      default:
        return "Unknown Level";
    }
  };

  const categories = (categoryId) => {
    switch (categoryId) {
      case 1:
        return "UI/UX Design";
      case 2:
        return "Product Management";
      case 3:
        return "Web Development";
      case 4:
        return "Android Development";
      case 5:
        return "IOS Development";
      case 6:
        return "Data Science";
      default:
        return "Unknown Category";
    }
  };

  const calculateTotalDuration = (classItem) => {
    let totalDuration = 0;

    classItem.chapters.forEach((chapter) => {
      chapter.videos.forEach((video) => {
        totalDuration += video.time || 0;
      });
    });

    const totalHours = Math.floor(totalDuration / 60);
    const totalMinutes = totalDuration % 60;

    return `${totalHours} jam ${totalMinutes} menit`;
  };

  useEffect(() => {
    const fetchDetailUser = async () => {
      try {
        const data = await getUserById(AuthToken);
        setPayment(data.data.user.payments);
        console.log(data.data.user.payments, "data payment");
      } catch (error) {
        console.log("data payment error", error);
      }
    };

    fetchDetailUser();
  }, [AuthToken]);

  return (
    <div className="parent">
      <div className="navbar-component hidden laptop:flex">
        <NavbarLogin />
      </div>

      <div className="hero-section flex flex-col gap-2  w-full laptop:h-[11rem] bg-[#EBF3FC] ">
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
            className="font-bold font-montserrat text-[1rem] text-[#6148FF]"
            href="/"
          >
            Kembali ke Beranda
          </a>
        </div>

        <div className="flex mx-[0.9rem] mt-[1rem] justify-center items-center">
          <div className="modal flex flex-col laptop:border laptop:border-[#6148FF] min-h-screen laptop:h-auto w-full laptop:w-[75%] rounded-[1rem] mb-[5rem]">
            <div className="title hidden laptop:flex w-full h-[4.8rem]  justify-center items-center  laptop:bg-[#6148FF] rounded-t-2xl">
              <span className=" flex laptop:justify-center laptop:items-center text-white font-bold text-[1.8rem] py-3">
                Akun
              </span>
            </div>

            <div className="flex flex-row w-full flex-grow rounded-b-2xl">
              {/* Left Section */}
              <div class="left-section hidden laptop:flex w-1/2 m-[2rem]">
                <div className="flex flex-col gap-5 font-poppins">
                  <div className="flex flex-row gap-4">
                    <img
                      src={pencil}
                      alt=""
                      className="w-[1.5rem] h-[1.5rem] "
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
                    <a
                      className="text-black text-[0.9rem] font-bold hover:text-[#6148FF]"
                      href="/ubahPassword"
                    >
                      Ubah Password
                    </a>
                  </div>
                  <hr />
                  <div className=" flex flex-row gap-4">
                    <img src={pay} alt="" className="w-[1.5rem] h-[1.5rem]" />
                    <span className="text-[#6148FF] text-[1.1rem] font-bold">
                      Riwayat Pembayaran
                    </span>
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

              {/* Right Section */}
              <div className="right-section w-full laptop:w-1/2 laptop:my-[2rem] ">
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
                  <h1 className="text-[1.8rem] font-bold text-black mt-[0.5rem] ">
                    Riwayat Pembayaran
                  </h1>
                </div>

                {/* Riwayat Pembayaran*/}
                <div className="flex flex-col ">
                  {payment.map((payments, index) => (
                    <div key={index}>
                      <div className="first-payment bg-white rounded-[1rem] mx-[1rem] mt-[1.5rem] h-[50%] border-2 flex flex-col">
                        <img
                          src={payments.class?.image_url}
                          alt=""
                          className=" object-cover w-full h-[6.5rem] rounded-t-[1rem]"
                        />
                        <div className="modal-category-rate-section flex flex-col gap-1">
                          <div className="mobile-course-category flex justify-between items-center mx-[1rem] mt-[0.15rem]">
                            <span className="title font-montserrat text-dark-blue text-[1rem] font-bold mt-[.3rem] ">
                              {categories(payments.class?.category_id)}
                            </span>
                            <div className="rating-star-section flex gap-1 items-center">
                              <FontAwesomeIcon
                                icon={faStar}
                                size="sm"
                                style={{ color: "#F9CC00" }}
                              />
                              <span className="rating font-montserrat text-[#202244] font-bold leading-[0.9rem] text-[0.9rem]">
                                {payments.class?.rating}
                              </span>
                            </div>
                          </div>
                          <div className="mobile-title-course-section flex flex-col gap-1 mx-[1rem] font-montserrat">
                            <span className="course-title font-bold font-montserrat text-[0.8rem] text-[#202244]">
                              {payments.class?.name}
                            </span>
                            <span className="author-section text-[0.7rem] ml-[0.1rem] text-[#000] font-montserrat font-bold">
                              by {payments.class?.author}
                            </span>
                          </div>
                          <div className="mobile-deets-section flex items-center gap-[1.5rem] mx-[1rem] mt-[0.5]">
                            <div className="badge-level-section flex items-center gap-1">
                              <img src={bedge} alt="badge-level" />
                              <span className="difficult font-montserrat text-[0.7rem] leading-[0.9rem] font-bold hover:text-[#6148FF] cursor-pointer">
                                {getLevelText(payments.class?.level_id)}
                              </span>
                            </div>
                            <div className="badge-level-section flex items-center gap-1">
                              <img src={modul} alt="modul-course" />
                              <span className="font-montserrat text-[0.7rem] leading-[0.9rem] font-bold hover:text-[#6148FF] cursor-pointer">
                                {payments.class?.modules} Modul
                              </span>
                            </div>
                            <div className="badge-level-section flex items-center gap-1">
                              <img src={time} alt="course-time" />
                              <span className="font-montserrat text-[0.7rem] leading-[0.9rem] font-bold hover:text-[#6148FF] cursor-pointer">
                                {calculateTotalDuration(payments.class)}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div
                          className={`flex w-fit items-center text-xs text-white py-[0.2rem] px-3 rounded-xl gap-[0.4rem] ml-3 my-2 ${
                            payments.is_paid ? "bg-green-500" : "bg-red-500"
                          }`}
                        >
                          <img
                            src={notif_pay}
                            alt=""
                            className="w-[0.9rem] h-[0.9rem]"
                          />
                          {payments.is_paid ? "Paid" : "Waiting for Payment"}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
