import React from "react";
import logo from "../assets/img/logo.png";
// import { useParams } from "react-router-dom";
// import { API_ENDPOINT } from "../utils/api-endpoint";
// import http from "../utils/http";

export const KategoriBelajar = () => {
//   const [kategoriBelajar, setKategoriBelajar] = useState([])
//   const ktg = useParams()

//   const handleKategori = async () => {
//     try{
//     const response = await http.get(
//       API_ENDPOINT.KATEGORI(ktg.id)
//     )
//     setKategoriBelajar(response.data.data)
//     console.log(response.data.data)
//   } catch (error){
//     console.error("Error fetching kategori:", error);
//   }
// }
   

//     useEffect(() => {
//       handleKategori()
//     },[ktg.id])

  return (
    <div className="bg-[#EBF3FC] ">
      <div className="px-4 laptop:mx-[6rem] ">
        <h1 className="hidden laptop:flex laptop:font-semibold laptop:text-md laptop:text-xl laptop:py-1">Kategori Belajar</h1>
        <h1 className="font-semibold text-md text-xl py-1 laptop:hidden">Kategori</h1>
        <div className="flex flex-col w-[10rem] flex-wrap mb-1">
          {/* {kategoriBelajar.map((item) => (
             <div key={item.id}> */}
          {/* <div className="rounded-3xl mb-1  w-full h-[6rem]">{item.image}</div> */}
          <img className="rounded-3xl mb-1  w-full h-[6rem]" src={logo} alt=''/>
          <h2 className=" text-center">RealSkills</h2>
          </div>
          {/* ))} */}
          </div>
      </div>
    // </div>
  );
};
