import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import shopping_list from "../../assets/img/icon/shopping list_.svg";
import { NavbarLogin } from "../../components/NavbarLogin";

const PembayaranSukses = () => {
  const navigate = useNavigate();
  const { classId } = useParams();
  return (
    <div className="parents">
      <div>
        <NavbarLogin />
      </div>

      <div className="header-section flex flex-col justify-center w-full bg-[#FFFF] shadow-lg items-center py-[1.5rem] overflow-hidden">
        <div className="deadline-button-container flex items-center justify-center bg-[#73CA5C] rounded-[0.75rem] w-[80vw] laptop:w-[60%] py-[0.8rem]">
          <span className="font-montserrat text-white text-[1rem] leading-[1.5rem] font-black">
            Terimakasih atas pembayaran transaksi
          </span>
        </div>
      </div>

      <div className="body-section flex flex-col justify-center items-center gap-[2.5rem] py-[2.5rem] overflow-hidden">
        <span className="font-montserrat text-[2.5rem] text-dark-blue leading-[0.9rem] font-black">
          Selamat!
        </span>
        <img src={shopping_list} alt="shopping-list" />
        <span className="font-black font-montserrat text-[0.9rem] text-center leading-[1.5rem]">
          Transaksi pembayaran kelas premium berhasil! <br />
          <span className="font-normal">
            E-receipt telah dikirimkan ke email
          </span>
        </span>
        <div className="button-container flex flex-col gap-[.75rem] justify-center items-center w-full">
          <Link to={`/detailKelas/${classId}`}>
            <button className="font-black text-white text-[1rem] bg-dark-blue rounded-[1.5rem] leading-[1.5rem] px-[1rem] py-[.75rem] w-full font-montserrat">
              Mulai Belajar
            </button>
          </Link>
          <span
            className="text-[#489CFF] font-black font-montserrat text-[1rem] leading-[1.5rem] cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            Kembali Ke Beranda
          </span>
        </div>
      </div>
    </div>
  );
};

export default PembayaranSukses;
