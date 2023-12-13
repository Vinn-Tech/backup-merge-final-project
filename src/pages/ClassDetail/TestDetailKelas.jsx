import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getClasses } from "../../services/class/get-classByID";

const TestDetailKelas = () => {
  const [Detail, setDetail] = useState([]);
  const { classId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getClasses(classId);
        setDetail(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error("Error mengambil data Kelas:", error);
      }
    };

    fetchData();
  }, [classId]);

  return (
    <div className="px-[1rem]">
      <h1>id = {classId}</h1>
      <h1 className="font-montserrat text-dark-blue font-black leading-[1.5rem]">
        {Detail.name}{" "}
      </h1>
      <p className="font-montserrat font-semibold text-[.85rem] leading-[0.9rem]">
        by {Detail.author}
      </p>
      <p>
        {Detail.level_id === 1
          ? "Beginner Level"
          : Detail.level_id === 2
          ? "Intermediate Level"
          : Detail.level_id === 3
          ? "Advanced Level"
          : ""}
      </p>
    </div>
  );
};

export default TestDetailKelas;
