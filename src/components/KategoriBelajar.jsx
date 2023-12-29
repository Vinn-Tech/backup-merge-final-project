
import React, { useEffect, useState } from "react";
import { kategori } from "../services/general/kategori";
import { Link } from "react-router-dom";

export const KategoriBelajar = () => {
  const [dataKategori, setDataKategori] = useState([]);

  const fetchKategori = async () => {
    try {
      const response = await kategori();
      setDataKategori(response.data.data);     
    } catch (error) {
      console.error("Error fetching kategori:", error);
    }
  };

  useEffect(() => {
    fetchKategori();
  }, []); 

  return (
    <>
      <div className=" laptop:mx-[6rem] laptop:px-0">
        <h1 className="hidden laptop:flex laptop:font-semibold laptop:text-md laptop:text-xl laptop:pt-1">
          Kategori Belajar
        </h1>
        <div className="flex justify-between gap-4">          
        {dataKategori.map((value) => (
          <div key={value.id} >
             <Link to={`/kategori/${value.id}`}>
              <div className="rounded-3xl my-3 w-[14rem] h-[13rem] bg-[#3730a3] laptop:w-[10rem] laptop:h-[8rem] laptop:bg-[#EBF3FC] laptop:my-1">
                <img
                  className="flex rounded-3xl mb-1 w-[14rem] h-[11rem] laptop:w-[10rem] laptop:h-[6rem]"
                  src={value.image}
                  alt={value.name}
                />{" "}
                <h2 className=" text-center mb-1 text-white laptop:text-black" ><hr/>{value.name}</h2>
              </div>
              </Link>
          </div>
            ))}
        </div>
      </div>
    </>
  );
};
