import React, { useState } from "react";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

export const NavbarKelas = () => {
  const [kelasClick, setKelasClick] = useState(false);
  const [notificationClick, setNotificationClick] = useState(false);
  const [profileClick, setProfileClick] = useState(false);

  const handleKelas = () => {
    setKelasClick(true);
    setNotificationClick(false);
    setProfileClick(false);
  };

  const handleNotif = () => {
    setKelasClick(false);
    setNotificationClick(true);
    setProfileClick(false);
  };

  const handleProfile = () => {
    setKelasClick(false);
    setNotificationClick(false);
    setProfileClick(true);
  };
  return (
    
      <div className="hidden laptop:flex flex-row bg-[#6148FF] p-3 justify-between w-full">
        <div className="flex  items-center text-white ml-[5rem]">
          <img src={logo} alt=" " className="w-12 h-12" />
          <h1 className=" text-lg mr-20">RealSkills</h1>
          <div className="flex relative">
            <input
              className="p-3 w-[25rem] flex justify-between rounded-lg"
              placeholder="Cari Kursus terbaik...."
            />
            <button className=" bg-[#6148FF] absolute right-3 mt-3 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="p-1"
              >
                <path
                  d="M10 18C11.775 17.9996 13.4988 17.4054 14.897 16.312L19.293 20.708L20.707 19.294L16.311 14.898C17.405 13.4997 17.9996 11.7754 18 10C18 5.589 14.411 2 10 2C5.589 2 2 5.589 2 10C2 14.411 5.589 18 10 18ZM10 4C13.309 4 16 6.691 16 10C16 13.309 13.309 16 10 16C6.691 16 4 13.309 4 10C4 6.691 6.691 4 10 4Z"
                  fill="#EBF3FC"
                />
                <path
                  d="M11.4118 8.58609C11.7908 8.96609 11.9998 9.46809 11.9998 10.0001H13.9998C14.0007 9.47451 13.8974 8.95398 13.6959 8.46857C13.4944 7.98316 13.1987 7.54251 12.8258 7.17209C11.3118 5.66009 8.68683 5.66009 7.17383 7.17209L8.58583 8.58809C9.34583 7.83009 10.6558 7.83209 11.4118 8.58609Z"
                  fill="#EBF3FC"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex items-center text-white mr-[10rem] gap-4 text-md font-bold">   
        <Link to="/kelas"> 
        <button
          className={`flex px-5 py-1 rounded gap-2 ${
            kelasClick ? 'bg-[#489CFF]' : ''
          }`}
          onClick={handleKelas}
        >
          {/* className="flex bg-[#489CFF] px-5 py-1 rounded gap-2" */}
          {kelasClick ? (
            <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M8 18H21"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3 18H3.01"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 12H21"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3 12H3.01"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 6H21"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3 6H3.01"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Kelas</p>
            </>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M8 18H21"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3 18H3.01"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 12H21"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3 12H3.01"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 6H21"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3 6H3.01"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>           
            )}
        </button>
        </Link>
          
        <Link to="/notifikasi">
          
          <button
          className={`flex px-5 py-1 rounded gap-2 ${
            notificationClick ? 'bg-[#489CFF]' : ''
          }`}
          onClick={handleNotif}
        >
          
          {notificationClick ? (
            <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 28 26"
              fill="none"
            >
              <g filter="url(#filter0_d_2_4452)">
                <path
                  d="M20 8C20 6.4087 19.3679 4.88258 18.2426 3.75736C17.1174 2.63214 15.5913 2 14 2C12.4087 2 10.8826 2.63214 9.75736 3.75736C8.63214 4.88258 8 6.4087 8 8C8 15 5 17 5 17H23C23 17 20 15 20 8Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.73 21C15.5542 21.3031 15.3019 21.5547 14.9982 21.7295C14.6946 21.9044 14.3504 21.9965 14 21.9965C13.6496 21.9965 13.3054 21.9044 13.0018 21.7295C12.6982 21.5547 12.4458 21.3031 12.27 21"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_2_4452"
                  x="-2"
                  y="0"
                  width="32"
                  height="32"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_2_4452"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_2_4452"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <p>Notifikasi</p>
            </>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 28 26"
              fill="none"
            >
              <g filter="url(#filter0_d_2_4452)">
                <path
                  d="M20 8C20 6.4087 19.3679 4.88258 18.2426 3.75736C17.1174 2.63214 15.5913 2 14 2C12.4087 2 10.8826 2.63214 9.75736 3.75736C8.63214 4.88258 8 6.4087 8 8C8 15 5 17 5 17H23C23 17 20 15 20 8Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.73 21C15.5542 21.3031 15.3019 21.5547 14.9982 21.7295C14.6946 21.9044 14.3504 21.9965 14 21.9965C13.6496 21.9965 13.3054 21.9044 13.0018 21.7295C12.6982 21.5547 12.4458 21.3031 12.27 21"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_2_4452"
                  x="-2"
                  y="0"
                  width="32"
                  height="32"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_2_4452"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_2_4452"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
             )}
          </button>
          </Link>

          <Link to="/profile">
          
          <button
          className={`flex px-5 py-1 rounded gap-2 ${
            profileClick ? 'bg-[#489CFF]' : ''
          }`}
          onClick={handleProfile}
        >
          
          {profileClick ? (
            <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Profile</p>
            </>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          )}
          </button>
          </Link>

        </div>
      </div>
    
  );
};
