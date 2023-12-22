import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllClass } from "../../services/class/get-allClasses";
// import { getAllClass } from "../../services/class/get-allClasses";
const KelasDummy = () => {
  const [Kelas, setKelas] = useState([]);
  // const [CourseChapter, setCourseChapter] = useState([])

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await getAllClass();
        setKelas(response.data.data.classes);
        console.log(response);
        // console.log('halo')
      } catch (error) {
        console.error("Error mengambil data Kelas:", error);
      }
    };

    fetchClasses();
  }, []);

  return (
    <div>
      {Kelas.map((value) => (
        <div className='bg-red-600 w-full h-screen'>
            <div className='flex justify-center items-center gap-[1.5rem] w-full h-full'>
            {/* <span className='font-montserrat font-black text-[1rem] text-black'>Test Dummy</span> */}
            <Link to={`/detailKelas/${value.id}`}>
                <div className="flex flex-col items-center justify-center gap-[1rem] rounded-lg bg-blue-300 hover:bg-dark-blue my-[1rem] px-[2rem] py-[1rem]">
                    <span key={value.id} className="font-montserrat font-black text-white text-[1rem] leading-[1.5rem]">
                        {value.name}
                    </span>
                </div>
            </Link>
            </div>
        </div> 
      ))}
    </div>
  );
};

export default KelasDummy;
