import React from "react";
export const CardAdmin = ({ logoUser, totalUsers, tittleCards, bgColor }) => {
  return (
    <div>
      <div
        className={`w-[18rem] h-[6.75rem] mobile:w-[18rem] laptop:h-36 laptop:w-[19.5rem] rounded-2xl ${bgColor} `}
      >
        <div className="flex justify-stretch px-8 laptop:flex-row laptop:px-6 items-center h-full ">
          <img
            src={logoUser}
            alt="logo card"
            className="bg-white p-[1.2rem] rounded-3xl"
          />
          <div className="flex flex-row gap-3 px-2 items-center laptop:items-start laptop:gap-x-4 laptop:flex-col laptop:px-4 text-white">
            <h1>{totalUsers}</h1>
            <h1>{tittleCards}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
