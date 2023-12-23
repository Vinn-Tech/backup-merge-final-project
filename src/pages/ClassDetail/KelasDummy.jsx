import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import FilterSide from "../../components/FilterSide";
import { getFilterClasses } from "../../services/class/get-allClasses";

const KelasDummy = (props) => {
  const [Kelas, setKelas] = useState([]);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await getFilterClasses(props.classesFilter);
        setKelas(response.data.data.classes);
        console.log(response);
      } catch (error) {
        console.error("Error mengambil data Kelas:", error);
        alert(error.response.data.error)
      }
    };

    fetchClasses();
  }, [props.classesFilter]);

  return (
    <div className="flex flex-col justify-center w-full h-screen gap-[1.2rem] ">
    {/* <FilterSide/> */}
      {Kelas.map((value) => {
        return (
          <Link to={`/detailKelas/${value.id}`}>
            <div className="w-full h-full flex flex-col justify-center items-center ">
              <div className="w-[50%] flex justify-center items-center flex-col gap-2 my-2 bg-blue-300 hover:bg-dark-blue text-white py-[1rem] rounded-[1.5rem]">
              <span className="course-name-text text-white font-montserrat font-black leading-[0.9rem] text-[1.25rem]">
              {value.category_id === 1
                ? "UI/UX Design"
                : value.category_id === 2
                ? "Product Management"
                : value.category_id === 3
                ? "Web Development"
                : value.category_id === 4
                ? "Android Development"
                : value.category_id === 5
                ? "IOS Development"
                : value.category_id === 6
                ? "Data Science"
                : ""}
            </span>
            <span className='text-white font-montserrat text-[0.8rem] font-semibold leading-[0.9rem]'>
              {value.type_id}
            </span>
                <span className="font-black font-montserrat text-[1rem]">
                  {value.name}
                </span>
                <span>By : {value.author}</span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default KelasDummy;
