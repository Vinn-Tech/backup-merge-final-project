import React, { useState } from "react";
import { CardBeranda } from "./CardBeranda";

export const KursusPopuler = () => {
  const [filterCategory, setFilterCategory] = useState("All");
  const [filterParams, setFilterParams] = useState({
    category: "",
    level: "",
    type: "",
  });

  return (
    <div className="px-4 py-1 laptop:mx-[6rem] laptop:px-0 bg-[#EBF3FC] laptop:bg-white">
      <h1 className="font-semibold text-xl text-md">Kursus Populer</h1>
      <div className=" flex item-center">
        <div className="flex p-2 justify-between item-center font-bold  gap-5 w-full text-sm overflow-x-auto">
          <button
            onClick={() => {
              setFilterCategory("All");
              setFilterParams({
                category: "",
                level: "",
                type: "",
              });
            }}
            className=" py-1 px-3 rounded-2xl bg-[#E8F1FF] hover:bg-[#6148FF] hover:text-white active:bg-[#6148FF] active:text-white focus:text-white focus:outline-none focus:ring focus:ring-violet-300 focus:bg-[#6148FF] laptop:py-1 laptop:px-3 laptop:rounded-2xl"
          >
            All
          </button>
          <button
            onClick={() => {
              setFilterCategory("UI/UX Design");
              setFilterParams({
                category: "1",
                level: "",
                type: "",
              });
            }}
            className="py-1 px-3 rounded-2xl bg-[#E8F1FF] hover:bg-[#6148FF] hover:text-white active:bg-[#6148FF] active:text-white focus:text-white focus:outline-none focus:ring focus:ring-violet-300 focus:bg-[#6148FF]"
          >
            UI/UX Design
          </button>
          <button
            onClick={() => {
              setFilterCategory("Product Management");
              setFilterParams({
                category: "2",
                level: "",
                type: "",
              });
            }}
            className="py-1 px-3 rounded-2xl bg-[#E8F1FF] hover:bg-[#6148FF] hover:text-white active:bg-[#6148FF] active:text-white focus:text-white focus:outline-none focus:ring focus:ring-violet-300 focus:bg-[#6148FF]"
          >
            Product Management
          </button>
          <button
            onClick={() => {
              setFilterCategory("Web Development");
              setFilterParams({
                category: "3",
                level: "",
                type: "",
              });
            }}
            className="py-1 px-3 rounded-2xl bg-[#E8F1FF] hover:bg-[#6148FF] hover:text-white active:bg-[#6148FF] active:text-white focus:text-white focus:outline-none focus:ring focus:ring-violet-300 focus:bg-[#6148FF]"
          >
            Web Development
          </button>
          <button
            onClick={() => {
              setFilterCategory("Android Development");
              setFilterParams({
                category: "4",
                level: "",
                type: "",
              });
            }}
            className="py-1 px-3 rounded-2xl bg-[#E8F1FF] hover:bg-[#6148FF] hover:text-white active:bg-[#6148FF] active:text-white focus:text-white focus:outline-none focus:ring focus:ring-violet-300 focus:bg-[#6148FF]"
          >
            Android Development
          </button>
          <button
            onClick={() => {
              setFilterCategory("IOS Development");
              setFilterParams({
                category: "5",
                level: "",
                type: "",
              });
            }}
            className="py-1 px-3 rounded-2xl bg-[#E8F1FF] hover:bg-[#6148FF] hover:text-white active:bg-[#6148FF] active:text-white focus:text-white focus:outline-none focus:ring focus:ring-violet-300 focus:bg-[#6148FF]"
          >
            IOS Development
          </button>
          <button
            onClick={() => {
              setFilterCategory("Data Science");
              setFilterParams({
                category: "",
                level: "",
                type: "",
              });
            }}
            className="py-1 px-3 rounded-2xl bg-[#E8F1FF] hover:bg-[#6148FF] hover:text-white active:bg-[#6148FF] active:text-white focus:text-white focus:outline-none focus:ring focus:ring-violet-300 focus:bg-[#6148FF]"
          >
            Data Science
          </button>
        </div>
      </div>
      <div className="flex gap-5 overflow-x-auto">
        <CardBeranda
          isCourse={true}
          filterCategory={filterCategory}
          classesFilter={filterParams}
        />
      </div>
    </div>
  );
};
