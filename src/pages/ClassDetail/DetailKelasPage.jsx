// import { faIdBadge } from "@fortawesome/free-regular-svg-icons";
import { faArrowLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import NavbarComponents from "../../assets/components/NavbarComponents";
import badge from "../../assets/img/icon/badge-svg.svg";
import modul from "../../assets/img/icon/clarity_book-line.svg";
import time from "../../assets/img/icon/ri_time-fill.svg";
import message from "../../assets/img/icon/gridicons_chat.svg";
import play_video from "../../assets/img/icon/play video.svg";
import progress_check from "../../assets/img/icon/progress-check.svg";
import done_play_button from "../../assets/img/icon/green-play.svg";
import undone_play_button from "../../assets/img/icon/dark-blue-play.svg";
import locked from "../../assets/img/icon/bxs_lock.svg";
import close_modal from "../../assets/img/icon/close-modal.svg";
import arrow_buy from "../../assets/img/icon/carbon_next-filled.svg";
import star from "../../assets/img/icon/ic_round-star.svg";
import { useNavigate, useParams } from "react-router-dom";
import { getClasses } from "../../services/class/get-classByID";

const DetailKelasPage = () => {
  const [MateriBelajar, setMateriBelajar] = useState(false);
  const [TentangKelas, setTentangKelas] = useState(true);
  const [PaymentModal, setPaymentModal] = useState(false);
  const background_uiux = require("../../assets/img/image/uiux-person.jpg");
  const navigate = useNavigate();
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

  const toogleTentangKelas = () => {
    setTentangKelas(true);
    setMateriBelajar(false);
  };

  const toogleMateriBelajar = () => {
    setMateriBelajar(true);
    setTentangKelas(false);
  };

  const tooglePayment = () => {
    setPaymentModal((PaymentModal) => !PaymentModal);
  };

  return (
    <div className="parents">
      <div className="nav-component-section hidden laptop:flex">
        <NavbarComponents />
      </div>

      {/* Desktop */}
      {/* Hero Section */}
      <div className="hero-section hidden mobile:hidden laptop:flex laptop:flex-col gap-2 px-[5.5rem] py-[1rem] bg-[#EBF3FC] w-full">
        <div className="top-text-section flex items-center mt-[1.5rem] gap-[1.25rem]">
          <FontAwesomeIcon icon={faArrowLeft} size="xl" />
          <span className="font-montserrat text-[1rem] font-bold leading-[1.5rem]">
            Kelas Lainnya
          </span>
        </div>

        {/* Title, Course Name, & Author Section */}
        <div className="course-section flex flex-col gap-2 px-[1.5rem] py-[1rem]">
          <div className="name-rate-section w-[60%] h-[1rem] flex justify-between items-center">
            <span className="course-name-text text-[#6148FF] font-montserrat font-black leading-[0.9rem] text-[1.25rem]">
              {Detail.category_id === 1
                ? "UI/UX Design"
                : Detail.category_id === 2
                ? "Product Management"
                : Detail.category_id === 3
                ? "Web Development"
                : Detail.category_id === 4
                ? "Android Development"
                : Detail.category_id === 5
                ? "IOS Development"
                : Detail.category_id === 6
                ? "Data Science"
                : ""}
            </span>
            <div className="rating-star-section flex gap-1 items-center">
              <FontAwesomeIcon
                icon={faStar}
                size="sm"
                style={{ color: "#F9CC00" }}
              />
              <span className="font-montserrat text-[#202244] font-bold leading-[0.9rem] text-[0.9rem]">
                5.0
              </span>
            </div>
          </div>
          <span className="title-text-section font-black font-montserrat text-[#202244] text-[1.25rem] leading-[1.5rem]">
            {Detail.name}
          </span>
          <span className="author-text-section font-[600] font-montserrat text-[0.9rem] leading-[1.2rem] ">
            by {Detail.author}
          </span>

          {/* Deets Section */}
          <div className="deets-section flex gap-[4.25rem]">
            <div className="badge-level-section flex items-center gap-1">
              <img src={badge} alt="badge-level" />
              <span className="font-montserrat text-[0.75rem] leading-[0.9rem] font-bold hover:text-[#6148FF] cursor-pointer">
                <p>
                  {Detail.level_id === 1
                    ? "Beginner Level"
                    : Detail.level_id === 2
                    ? "Intermediate Level"
                    : Detail.level_id === 3
                    ? "Advanced Level"
                    : ""}
                </p>
              </span>
            </div>
            <div className="badge-level-section flex items-center gap-1">
              <img src={modul} alt="modul-course" />
              <span className="font-montserrat text-[0.75rem] leading-[0.9rem] font-bold hover:text-[#6148FF] cursor-pointer">
                5 Modul
              </span>
            </div>
            <div className="badge-level-section flex items-center gap-1">
              <img src={time} alt="course-time" />
              <span className="font-montserrat text-[0.75rem] leading-[0.9rem] font-bold hover:text-[#6148FF] cursor-pointer">
                45 Menit
              </span>
            </div>
          </div>

          {/* Button Telegram Section */}
          <div className="telegram-btn-section relative w-[25%]">
            <button className="bg-[#73CA5C] w-full text-white rounded-[1.6rem] px-[1rem] py-[0.5rem] font-montserrat text-[1rem] leading-[1.5rem] font-black shadow-lg flex items-center gap-2 justify-center">
              <span>Join Grup Telegram</span>
              <img src={message} alt="message-icon" width="30" />
            </button>
            {/* <div className="message-icon-section absolute transform -translate-y-1/2 right-[1em] top-1/2 cursor-pointer">
              <img src={message} alt="message-icon" width="30" />
            </div> */}
          </div>
        </div>
      </div>

      {/* Class Detail Section */}
      <div className="class-detail-section hidden mobile:hidden laptop:flex w-full py-[2rem]">
        <div className="left-class-section w-[60%] flex flex-col gap-[1.5rem] mx-[6.5rem]">
          <div className="video-play-container bg-[rgba(0,0,0,0.85)] w-full h-[25rem] rounded-[1.525rem] flex justify-center items-center">
            <img src={play_video} alt="play-video" />
          </div>
          <div className="about-class-container flex flex-col gap-[1rem]">
            <span className="font-montserrat font-black text-[1.5rem] leading-[0.9rem]">
              Tentang Kelas
            </span>
            <span className="font-normal text-[.8rem] leading-[1.5rem] font-montserrat text-[rgba(0,0,0,0.80)]">
              {Detail.about}
            </span>
          </div>

          <div className="scope-class-container flex flex-col gap-[1rem]">
            <span className="font-montserrat font-black text-[1.5rem] leading-[0.9rem]">
              Kelas Ini Ditujukan Untuk
            </span>
            <ol className="list-item-section list-decimal ml-[1.2rem]">
              <li className="font-normal text-[.8rem] leading-[1.5rem] font-montserrat text-[rgba(0,0,0,0.80)]">
                Anda yang ingin memahami poin penting design system
              </li>
              <li className="font-normal text-[.8rem] leading-[1.5rem] font-montserrat text-[rgba(0,0,0,0.80)]">
                Anda yang ingin membantu perusahaan lebih optimal dalam membuat
                design produk
              </li>
              <li className="font-normal text-[.8rem] leading-[1.5rem] font-montserrat text-[rgba(0,0,0,0.80)]">
                Anda yang ingin latihan membangun design system
              </li>
              <li className="font-normal text-[.8rem] leading-[1.5rem] font-montserrat text-[rgba(0,0,0,0.80)]">
                Anda yang ingin latihan membangun design system
              </li>
            </ol>
          </div>
        </div>

        <div className="right-class-section w-[40%] flex justify-center pr-[3rem]">
          <div className="materi-container w-[100%] rounded-[1rem] px-[1.25rem] py-[1.25rem] flex flex-col -mt-[15rem] bg-[#FFFF] shadow-xl">
            <div className="top-text flex items-center gap-[1.5rem] w-full justify-between">
              <div className="text-materi w-[50%]">
                <span className="font-montserrat font-black text-[1.25rem] leading-[0.75rem]">
                  Materi Belajar
                </span>
              </div>
              <div className="progress-bar-section flex gap-2 w-[50%]">
                <img src={progress_check} alt="progress-check" width="20" />
                <span className="rounded-[1rem] bg-[#6148FF] w-[10rem] text-[0.9rem] font-montserrat text-white px-[1rem]">
                  100% complete
                </span>
              </div>
            </div>
            <div className="chapter-section flex justify-between items-center w-[95%] mt-2">
              <span className="chapter-title font-montserrat text-[#6148FF] font-black text-[1rem] leading-[2.25rem]">
                Chapter 1 - Pendahuluan
              </span>
              <span className="chapter-time font-black font-montserrat leading-[2.25rem] text-[0.9rem] text-[#489CFF]">
                60 menit
              </span>
            </div>
            <div className="chapter-materi-section flex flex-col gap-2">
              <div className="card-materi-section flex items-center justify-between w-[95%] border-b-2 border-[#EBF3FC] py-[0.25rem]">
                <div className="card-number-title-section flex items-center gap-[0.75rem]">
                  <span className="rounded-[100%] bg-[#EBF3FC] px-[1rem] py-[.5rem] hover:bg-dark-blue hover:text-white cursor-pointer">
                    1
                  </span>
                  <span className="font-montserrat font-semibold text-[0.9rem] text-[rgba(0,0,0,0.80)] leading-[1.25rem]">
                    Tujuan Mengikuti Kelas Design System
                  </span>
                </div>
                <img src={done_play_button} alt="done-play" width="20" />
              </div>

              <div className="card-materi-section flex items-center justify-between w-[95%] border-b-2 border-[#EBF3FC] py-[0.25rem]">
                <div className="card-number-title-section flex items-center gap-[0.75rem]">
                  <span className="rounded-[100%] bg-[#EBF3FC] px-[1rem] py-[.5rem] hover:bg-dark-blue hover:text-white cursor-pointer">
                    2
                  </span>
                  <span className="font-montserrat font-semibold text-[0.9rem] text-[rgba(0,0,0,0.80)] leading-[1.25rem]">
                    Pengenalan Design System
                  </span>
                </div>
                <img src={done_play_button} alt="done-play" width="20" />
              </div>

              <div className="card-materi-section flex items-center justify-between w-[95%] border-b-2 border-[#EBF3FC] py-[0.25rem]">
                <div className="card-number-title-section flex items-center gap-[0.75rem]">
                  <span className="rounded-[100%] bg-[#EBF3FC] px-[1rem] py-[.5rem] hover:bg-dark-blue hover:text-white cursor-pointer">
                    3
                  </span>
                  <span className="font-montserrat font-semibold text-[0.9rem] text-[rgba(0,0,0,0.80)] leading-[1.25rem]">
                    Contoh Dalam Membangun Design System
                  </span>
                </div>
                <img src={undone_play_button} alt="done-play" width="20" />
              </div>

              <div className="chapter-section flex justify-between items-center w-[95%] mt-2">
                <span className="chapter-title font-montserrat text-[#6148FF] font-black text-[1rem] leading-[2.25rem]">
                  Chapter 2 - Memulai Desain
                </span>
                <span className="chapter-time font-black font-montserrat leading-[2.25rem] text-[0.9rem] text-[#489CFF]">
                  120 menit
                </span>
              </div>

              <div className="card-materi-section flex items-center justify-between w-[95%] border-b-2 border-[#EBF3FC] py-[0.25rem]">
                <div className="card-number-title-section flex items-center gap-[0.75rem]">
                  <span className="rounded-[100%] bg-[#EBF3FC] px-[1rem] py-[.5rem]">
                    4
                  </span>
                  <span className="font-montserrat font-semibold text-[0.9rem] text-[rgba(0,0,0,0.80)] leading-[1.25rem]">
                    Color Pallete
                  </span>
                </div>
                <img
                  src={locked}
                  alt="done-play"
                  width="20"
                  onClick={() => {
                    tooglePayment();
                    console.log(PaymentModal);
                  }}
                />
              </div>

              {PaymentModal && (
                <>
                  <div className="modal-payment-popup fixed bg-black bg-opacity-70 inset-0 font-montserrat cursor-pointer">
                    <div className="flex justify-center items-center font-montserrat h-full w-full">
                      <div className="bg-[#FFFF] flex flex-col h-[60%] w-[40%] rounded-[1rem] px-[1rem] py-[1rem]">
                        <span
                          onClick={tooglePayment}
                          className="flex justify-end"
                        >
                          <img src={close_modal} alt="close-modal" width="20" />
                        </span>
                        <div className="flex justify-center items-center">
                          <span className="font-montserrat font-black text-[1.5rem] text-center leading-[2rem]">
                            Selangkah lagi menuju
                            <br />
                            <span className="text-dark-blue font-black">
                              Kelas Premium
                            </span>
                          </span>
                        </div>

                        <div className="course-container rounded-[1rem] mx-[1.25rem] mt-[1.25rem] mb-[1.2rem] h-[60%] border-2 border-dark-blue flex flex-col">
                          <div
                            className="rounded-t-[1rem] bg-cover bg-no-repeat bg-center w-full h-[40%]"
                            style={{
                              backgroundImage: `url(${background_uiux})`,
                            }}
                          ></div>
                          <div className="modal-category-rate-section flex flex-col gap-1">
                            <div className="mobile-course-category flex justify-between items-center mx-[1rem] mt-[0.8rem]">
                              <span className="font-montserrat text-dark-blue text-[1.25rem] font-black leading-[0.9rem]">
                                {Detail.category_id === 1
                                  ? "UI/UX Design"
                                  : Detail.category_id === 2
                                  ? "Product Management"
                                  : Detail.category_id === 3
                                  ? "Web Development"
                                  : Detail.category_id === 4
                                  ? "Android Development"
                                  : Detail.category_id === 5
                                  ? "IOS Development"
                                  : Detail.category_id === 6
                                  ? "Data Science"
                                  : ""}
                              </span>
                              <div className="rating-star-section flex gap-1 items-center">
                                <FontAwesomeIcon
                                  icon={faStar}
                                  size="sm"
                                  style={{ color: "#F9CC00" }}
                                />
                                <span className="font-montserrat text-[#202244] font-bold leading-[0.9rem] text-[0.9rem]">
                                  5.0
                                </span>
                              </div>
                            </div>

                            <div className="mobile-title-course-section flex flex-col gap-1 mx-[1rem]">
                              <span className="course-title font-black font-montserrat text-[1rem] leading-[1.5rem] text-[#202244]">
                                {Detail.name}
                              </span>
                              <span className="author-section font-bold text-[0.85rem] leading-[1.1rem] text-[#000] font-montserrat">
                                by {Detail.author}
                              </span>
                            </div>

                            <div className="mobile-deets-section flex items-center gap-[1.5rem] mx-[1rem] mt-1">
                              <div className="badge-level-section flex items-center gap-1">
                                <img src={badge} alt="badge-level" />
                                <span className="font-montserrat text-[0.75rem] leading-[0.9rem] font-bold hover:text-[#6148FF] cursor-pointer">
                                  {Detail.level_id === 1
                                    ? "Beginner Level"
                                    : Detail.level_id === 2
                                    ? "Intermediate Level"
                                    : Detail.level_id === 3
                                    ? "Advanced Level"
                                    : ""}
                                </span>
                              </div>
                              <div className="badge-level-section flex items-center gap-1">
                                <img src={modul} alt="modul-course" />
                                <span className="font-montserrat text-[0.75rem] leading-[0.9rem] font-bold hover:text-[#6148FF] cursor-pointer">
                                  5 Modul
                                </span>
                              </div>
                              <div className="badge-level-section flex items-center gap-1">
                                <img src={time} alt="course-time" />
                                <span className="font-montserrat text-[0.75rem] leading-[0.9rem] font-bold hover:text-[#6148FF] cursor-pointer">
                                  45 Menit
                                </span>
                              </div>
                            </div>
                          </div>
                          <button className="modal-buy-button w-[28%] rounded-[1rem] bg-[#489CFF] hover:bg-dark-blue flex justify-center items-center gap-4 px-[1rem] py-[.5rem] text-white mx-[1rem] my-[0.5rem] font-montserrat text-[0.75rem] leading-[0.9rem] font-black">
                            <span>Beli</span>
                            <span>Rp 349.000</span>
                          </button>
                        </div>

                        <button
                          className="buy-now-btn flex items-center justify-center mx-[5rem] rounded-[1.5rem] px-[.75rem] py-[1rem] bg-dark-blue gap-2 my-[1rem]"
                          onClick={() => {
                            navigate("/pembayaran");
                          }}
                        >
                          <span className="font-montserrat font-black text-white text-[1rem] leading-[1.5rem]">
                            Beli Sekarang
                          </span>
                          <img src={arrow_buy} alt="arrow-buy" width="20" />
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* End Desktop */}

      {/* Mobile */}
      <div className="mobile-section w-full h-screen bg-slate-600 block laptop:hidden">
        <div className="play-video-mobile-container bg-[rgba(0,0,0,0.85)] w-full h-[30%] flex justify-center items-center">
          <img src={play_video} alt="play-video-course" />
        </div>

        <div className="mobile-materi-section flex flex-col gap-[.9rem] rounded-[1.5rem] -mt-[2rem] h-full bg-[#FFFF] py-[2rem]">
          <div className="mobile-course-category flex justify-between items-center ml-[1.35rem] mr-[1.5rem]">
            <span className="font-montserrat text-dark-blue text-[3vh] font-black leading-[1vh]">
              {Detail.category_id === 1
                ? "UI/UX Design"
                : Detail.category_id === 2
                ? "Product Management"
                : Detail.category_id === 3
                ? "Web Development"
                : Detail.category_id === 4
                ? "Android Development"
                : Detail.category_id === 5
                ? "IOS Development"
                : Detail.category_id === 6
                ? "Data Science"
                : ""}
            </span>
            <div className="rating-star-section flex items-center">
              <img src={star} alt="rate-star" style={{ width: "2vh" }} />
              <span className="font-montserrat text-[#202244] font-bold leading-[1vh] text-[1.75vh]">
                5.0
              </span>
            </div>
          </div>

          <div className="mobile-title-course-section flex flex-col gap-[1vh] ml-[1.35rem] mr-[1.5rem]">
            <span className="course-title font-black font-montserrat text-[2.5vh] leading-[2.5vh] text-[#202244]">
              {Detail.name}
            </span>
            <span className="author-section font-bold text-[1.7vh] leading-[1.5vh] text-[#000] font-montserrat">
              by {Detail.author}
            </span>
          </div>

          <div className="mobile-deets-section flex items-center gap-[6vh] mx-[1rem] mt-1">
            <div className="badge-level-section flex items-center gap-1">
              <img src={badge} alt="badge-level" style={{ width: "2.5vh" }} />
              <span className="font-montserrat text-[1.5vh] leading-[2vh] font-bold hover:text-[#6148FF] cursor-pointer">
                <p>
                  {Detail.level_id === 1
                    ? "Beginner Level"
                    : Detail.level_id === 2
                    ? "Intermediate Level"
                    : Detail.level_id === 3
                    ? "Advanced Level"
                    : ""}
                </p>
              </span>
            </div>
            <div className="badge-level-section flex items-center gap-1">
              <img src={modul} alt="modul-course" style={{ width: "2.5vh" }} />
              <span className="font-montserrat text-[1.5vh] leading-[2vh] font-bold hover:text-[#6148FF] cursor-pointer">
                5 Modul
              </span>
            </div>
            <div className="badge-level-section flex items-center gap-1">
              <img src={time} alt="course-time" style={{ width: "2.5vh" }} />
              <span className="font-montserrat text-[1.5vh] leading-[2vh] font-bold hover:text-[#6148FF] cursor-pointer">
                45 Menit
              </span>
            </div>
          </div>

          {TentangKelas && !MateriBelajar ? (
            <>
              <div className="select-about-materi-section flex items-center w-full mt-2 cursor-pointer">
                <div
                  className="about-section flex justify-center items-center bg-dark-blue w-[50%] py-[.5rem]"
                  onClick={() => {
                    toogleTentangKelas();
                  }}
                >
                  <span className="font-montserrat text-[0.9rem] font-black leading-[2.25rem] text-[#FFFF]">
                    Tentang
                  </span>
                </div>
                <div
                  className="materi-section flex justify-center items-center bg-sky-100 w-[50%] py-[.5rem]"
                  onClick={() => {
                    toogleMateriBelajar();
                  }}
                >
                  <span className="font-montserrat text-[0.9rem] font-black leading-[2.25rem] text-[#489CFF]">
                    Materi Kelas
                  </span>
                </div>
              </div>
              <div className="about-class-container flex flex-col gap-[1rem]  ml-[1.35rem] mr-[1.5rem]">
                <span className="font-montserrat font-black text-[1.5rem] leading-[0.9rem]">
                  Tentang Kelas
                </span>
                <span className="font-normal text-[.8rem] leading-[1.5rem] font-montserrat text-[rgba(0,0,0,0.80)]">
                  {Detail.about}
                </span>
              </div>
            </>
          ) : (
            <>
              <div className="select-about-materi-section flex items-center w-full mt-2 cursor-pointer">
                <div
                  className="about-section flex justify-center items-center bg-sky-100 w-[50%] py-[.5rem]"
                  onClick={() => {
                    toogleTentangKelas();
                  }}
                >
                  <span className="font-montserrat text-[0.9rem] font-black leading-[2.25rem] text-[#489CFF]">
                    Tentang
                  </span>
                </div>
                <div
                  className="materi-section flex justify-center items-center bg-dark-blue w-[50%] py-[.5rem]"
                  onClick={() => {
                    toogleMateriBelajar();
                  }}
                >
                  <span className="font-montserrat text-[0.9rem] font-black leading-[2.25rem] text-[#FFFF]">
                    Materi Kelas
                  </span>
                </div>
              </div>
              <div className="chapter-section flex flex-col gap-2 ml-[1.35rem] mr-[1.5rem] mt-[1vh]">
                <span className="font-montserrat font-black text-[2.25vh] leading-[2vh]">
                  Materi Belajar
                </span>
                <div className="chapter-title-section flex items-center justify-between mt-[1vh]">
                  <span className="font-montserrat font-extrabold text-dark-blue text-[1.4vh] leading-[1.25vh]">
                    Chapter 1 - Pendahuluan
                  </span>
                  <span className="font-montserrat text-[#489CFF] text-[1.4vh] font-extrabold leading-[1.25vh]">
                    60 Menit
                  </span>
                </div>
              </div>

              <div className="chapter-card-section flex flex-col items-center gap-1 ml-[1.35rem] mr-[1.5rem]">
                <div className="card-index-section flex justify-between w-full items-center border-b-2 border-[#EBF3FC] py-[0.25rem]">
                  <div className="number-title-section flex items-center gap-[1.25vh]">
                    <span className="index-number-section bg-[#EBF3FC] rounded-[100%] px-[1rem] py-[0.65rem] flex items-center font-montserrat text-[#202244] text-[1.5vh] font-bold leading-[1.25vh] hover:bg-dark-blue hover:text-white">
                      1
                    </span>
                    <span className="course-title-section text-[rgba(0,0,0,0.80)] text-[1.5vh] font-semibold leading-[1.25rem] font-montserrat">
                      Tujuan Mengikuti Kelas Design System
                    </span>
                  </div>
                  <img
                    className="play-btn"
                    src={done_play_button}
                    alt="success-play-button"
                    style={{ width: "2.25vh" }}
                  />
                </div>

                <div className="card-index-section flex justify-between w-full items-center border-b-2 border-[#EBF3FC] py-[0.25rem]">
                  <div className="number-title-section flex items-center gap-[1.25vh]">
                    <span className="index-number-section bg-[#EBF3FC] rounded-[100%] px-[1rem] py-[0.65rem] flex items-center font-montserrat text-[#202244] text-[1.5vh] font-bold leading-[1.25vh] hover:bg-dark-blue hover:text-white">
                      2
                    </span>
                    <span className="course-title-section text-[rgba(0,0,0,0.80)] text-[1.5vh] font-semibold leading-[1.25rem] font-montserrat">
                      Pengenalan Design System
                    </span>
                  </div>
                  <img
                    className="play-btn"
                    src={done_play_button}
                    alt="success-play-button"
                    style={{ width: "2.25vh" }}
                  />
                </div>

                <div className="card-index-section flex justify-between w-full items-center border-b-2 border-[#EBF3FC] py-[0.25rem]">
                  <div className="number-title-section flex items-center gap-[1.25vh]">
                    <span className="index-number-section bg-[#EBF3FC] rounded-[100%] px-[1rem] py-[0.65rem] flex items-center font-montserrat text-[#202244] text-[1.5vh] font-bold leading-[1.25vh] hover:bg-dark-blue hover:text-white">
                      3
                    </span>
                    <span className="course-title-section text-[rgba(0,0,0,0.80)] text-[1.5vh] font-semibold leading-[1.25rem] font-montserrat">
                      Contoh Dalam Membangun Design System
                    </span>
                  </div>
                  <img
                    className="play-btn"
                    src={undone_play_button}
                    alt="success-play-button"
                    style={{ width: "2.25vh" }}
                  />
                </div>
              </div>

              <div className="chapter-section flex flex-col gap-2 ml-[1.35rem] mr-[1.5rem] mt-[1vh]">
                <div className="chapter-title-section flex items-center justify-between">
                  <span className="font-montserrat font-extrabold text-dark-blue text-[1.4vh] leading-[1.25vh]">
                    Chapter 2 - Memulai Desain
                  </span>
                  <span className="font-montserrat text-[#489CFF] text-[1.4vh] font-extrabold leading-[1.25vh]">
                    120 Menit
                  </span>
                </div>
              </div>

              <div className="chapter-card-section flex flex-col items-center gap-1 ml-[1.35rem] mr-[1.5rem]">
                <div className="card-index-section flex justify-between w-full items-center border-b-2 border-[#EBF3FC] py-[0.25rem]">
                  <div className="number-title-section flex items-center gap-[1.25vh]">
                    <span className="index-number-section bg-[#EBF3FC] rounded-[100%] px-[1rem] py-[0.65rem] flex items-center font-montserrat text-[#202244] text-[1.5vh] font-bold leading-[1.25vh] hover:bg-dark-blue hover:text-white">
                      4
                    </span>
                    <span className="course-title-section text-[rgba(0,0,0,0.80)] text-[1.5vh] font-semibold leading-[1.25rem] font-montserrat">
                      Color Pallete
                    </span>
                  </div>
                  <img
                    className="play-btn"
                    src={locked}
                    alt="class-locked-button"
                    style={{ width: "2.25vh" }}
                    onClick={tooglePayment}
                  />
                </div>
              </div>

              {PaymentModal && (
                <div className="modal-payment-popup fixed h-screen bg-black bg-opacity-70 inset-0 font-montserrat cursor-pointer overflow-hidden">
                  <div className="flex justify-center items-end h-full w-full">
                    <div className="flex flex-col gap-4 bg-[#FFFF] rounded-t-[1rem] px-[1.5rem] pt-[1.5vh] pb-[2vh] w-full h-[65vh]">
                      <span className="flex justify-end">
                        <img
                          src={close_modal}
                          alt="close-modal"
                          style={{ width: "3.5vh" }}
                          onClick={tooglePayment}
                        />
                      </span>
                      <div className="flex justify-center items-center">
                        <span className="font-montserrat font-black text-[3vh] text-center leading-[3.5vh]">
                          Selangkah lagi menuju
                          <br />
                          <span className="text-dark-blue font-black">
                            Kelas Premium
                          </span>
                        </span>
                      </div>

                      <div className="course-container rounded-[1rem] mt-[1rem] mb-[1.2rem] h-[30vh] border-2 border-dark-blue flex flex-col">
                        <div
                          className="rounded-t-[1rem] bg-cover bg-no-repeat bg-center w-full h-[25vh]"
                          style={{
                            backgroundImage: `url(${background_uiux})`,
                            backgroundSize: "cover",
                          }}
                        ></div>
                        <div className="modal-category-rate-section flex flex-col gap-[1vh]">
                          <div className="mobile-course-category flex justify-between items-center mx-[1rem] mt-[0.8rem]">
                            <span className="font-montserrat text-dark-blue text-[2vh] font-black leading-[0.9rem]">
                              UI/UX Design
                            </span>
                            <div className="rating-star-section flex gap-1 items-center">
                              <FontAwesomeIcon
                                icon={faStar}
                                size="md"
                                style={{ color: "#F9CC00" }}
                              />
                              <span className="font-montserrat text-[#202244] font-bold leading-[0.9rem] text-[1.8vh]">
                                5.0
                              </span>
                            </div>
                          </div>

                          <div className="mobile-title-course-section flex flex-col mx-[1rem]">
                            <span className="course-title font-black font-montserrat text-[1.75vh] leading-[2vh] text-[#202244]">
                              Intro to Basic of User Introduction Design
                            </span>
                            <span className="author-section font-bold text-[1.5vh] leading-[2vh] text-[#000] font-montserrat">
                              by Simon Doe
                            </span>
                          </div>

                          <div className="mobile-deets-section flex items-center gap-[1.5rem] mx-[1rem] mt-1">
                            <div className="badge-level-section flex items-center gap-1">
                              <img
                                src={badge}
                                alt="badge-level"
                                style={{ width: "2.5vh" }}
                              />
                              <span className="font-montserrat text-[1.5vh] leading-[2vh] font-bold hover:text-[#6148FF] cursor-pointer">
                                Beginner Level
                              </span>
                            </div>
                            <div className="badge-level-section flex items-center gap-1">
                              <img
                                src={modul}
                                alt="modul-course"
                                style={{ width: "2.5vh" }}
                              />
                              <span className="font-montserrat text-[1.5vh] leading-[2vh] font-bold hover:text-[#6148FF] cursor-pointer">
                                5 Modul
                              </span>
                            </div>
                            <div className="badge-level-section flex items-center gap-1">
                              <img
                                src={time}
                                alt="course-time"
                                style={{ width: "2.5vh" }}
                              />
                              <span className="font-montserrat text-[1.5vh] leading-[2vh] font-bold hover:text-[#6148FF] cursor-pointer">
                                45 Menit
                              </span>
                            </div>
                          </div>
                        </div>
                        <button className="modal-buy-button w-[20vh] rounded-[1rem] bg-[#489CFF] hover:bg-dark-blue flex justify-center items-center gap-4 px-[2vh] py-[1.25vh] mb-[1.5vh] text-white mx-[1rem] mt-[1vh] font-montserrat text-[1.5vh] leading-[0.9rem] font-black">
                          <span>Beli</span>
                          <span>Rp 349.000</span>
                        </button>
                      </div>

                      <button
                        className="mobile-buy-now-btn flex items-center justify-center rounded-[1.5rem] py-[1rem] bg-dark-blue gap-2"
                        onClick={() => {
                          navigate("/pembayaran");
                        }}
                      >
                        <span className="font-montserrat font-black text-white text-[2vh] leading-[2.5vh]">
                          Beli Sekarang
                        </span>
                        <img src={arrow_buy} alt="arrow-buy" width="20" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      {/* End Mobile */}
    </div>
  );
};

export default DetailKelasPage;
