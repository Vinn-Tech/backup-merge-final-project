import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Vector from "../../assets/img/icon/Vector.png";
import circle_green from "../../assets/img/icon/circle_green.png";
import { getUserById } from "../../services/notifikasi_akun/get_user";
import { useNavigate, useParams } from "react-router-dom";
import { NavbarLogin } from "../../components/NavbarLogin";


export const Notifikasi = () => {
  const navigate = useNavigate();
  const { AuthToken } = useParams();
  const [notif, setNotif] = useState([]);

  const dateFormatter = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZone: "UTC",
  });

  useEffect(() => {
    const fetchDetailUser = async () => {
      try {
        const data = await getUserById(AuthToken);
        setNotif(data.data.user.notifications);
        console.log(data.data.user.notifications, "data notif");
      } catch (error) {
        console.log("data error", error);
      }
    };

    fetchDetailUser();
  }, [AuthToken]);

  return (
    <div className="parents">
      <div className="navbar-component hidden laptop:flex">
        <NavbarLogin />
      </div>

      <div className="hero-section flex flex-col gap-2 h-screen laptop:h-[11rem] laptop:bg-[#EBF3FC] w-full">
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
            className="font-black font-montserrat text-[1rem] text-[#6148FF] "
            href="/"
          >
            Kembali ke Beranda
          </a>
        </div>
        <div className="flex mx-[0.9rem] mt-[1rem] laptop:justify-center laptop:items-center mobile:justify-items-start ">
          <div className="modal flex flex-col laptop:border laptop:border-[#6148FF] laptop:h-auto laptop:w-[75%] rounded-[1rem] mb-[5rem] mobile:w-full ">
            <div className="title w-full h-[4.8rem] laptop:bg-[#6148FF] rounded-t-[1rem]">
              <span className=" flex laptop:justify-center mobile:justify-start items-center laptop:text-white font-bold text-[1.8rem] py-3 mobile:text-black">
                Notifikasi
              </span>
            </div>

            <div className="isi-notifikasi flex flex-col gap-[2.5rem] py-[1rem] laptop:my-[1rem] laptop:mx-[3.5rem] font-montserrat">
              {notif.map((notifications, index) => (
                <div key={index}>
                  <div className="first-notification">
                    <div className="promosi flex justify-between ">
                      <span className="flex flex-row gap-4">
                        <img
                          src={Vector}
                          alt=""
                          className="h-[1.7rem] w-[1.7rem] mt-[0.2rem]"
                        />
                        <label className="font-bold text-[#6148FF] text-xl">
                          {notifications.title}
                        </label>
                      </span>

                      <span className="flex justify-end items-end gap-3">
                        <label className="text-sm text-[#8A8A8A] items-center ">
                          {dateFormatter.format(
                            new Date(notifications.created_at)
                          )}
                        </label>
                        <img
                          src={circle_green}
                          alt=""
                          className="w-[0.7rem] h-[0.7rem]"
                        />
                      </span>
                    </div>
                    <span className="flex flex-col font-poppins mx-[2.8rem] gap-2 mt-[.5] ">
                      <p className="font-semibold text-black text-sm ">
                        {notifications.body}
                      </p>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
