import { faArrowLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import badge from "../../assets/img/icon/badge-svg.svg";
import modul from "../../assets/img/icon/clarity_book-line.svg";
import time from "../../assets/img/icon/ri_time-fill.svg";
import message from "../../assets/img/icon/gridicons_chat.svg";
// import play_video from "../../assets/img/icon/play video.svg";
import progress_check from "../../assets/img/icon/progress-check.svg";
import done_play_button from "../../assets/img/icon/green-play.svg";
import undone_play_button from "../../assets/img/icon/dark-blue-play.svg";
import locked from "../../assets/img/icon/bxs_lock.svg";
import close_modal from "../../assets/img/icon/close-modal.svg";
import arrow_buy from "../../assets/img/icon/carbon_next-filled.svg";
import star from "../../assets/img/icon/ic_round-star.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getClasses } from "../../services/class/get-classByID";
import ReactPlayer from "react-player";
import { NavbarKelas } from "../../components/NavbarKelas";

const DetailKelasPage = () => {
  const [MateriBelajar, setMateriBelajar] = useState(false);
  const [TentangKelas, setTentangKelas] = useState(true);
  const [PaymentModal, setPaymentModal] = useState(false);
  const [Detail, setDetail] = useState([]);
  const [CourseChapter, setCourseChapter] = useState([]);
  const [SelectedVideo, setSelectedVideo] = useState("");
  const [FirstVideoPlay, setFirstVideoPlay] = useState("");
  const [isVideoClicked, setisVideoClicked] = useState(false);
  // const background_uiux = require("../../assets/img/image/uiux-person.jpg");
  const navigate = useNavigate();
  const { classId } = useParams();
  let totalVideosDesktop = 0;
  let totalVideosMobile = 0;

  const rupiahFormat = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  useEffect(() => {
    const fetchDetailClasses = async () => {
      try {
        const response = await getClasses(classId);
        setDetail(response.data.data);
        console.log(response.data.data, "classees");
      } catch (error) {
        console.error("Error mengambil data Kelas:", error);
      }
    };

    const fetchClassesChapters = async () => {
      try {
        const response = await getClasses(classId);
        setCourseChapter(response.data.data.chapters);
        setFirstVideoPlay(response.data.data.chapters[0].videos[0].link);
        // console.log(response.data.data.chapters, "chapters");
        // console.log(response.data.data.chapters[0].videos[0].link, 'link');
      } catch (error) {
        console.log(error, "error chapters");
      }
    };

    fetchDetailClasses();
    fetchClassesChapters();
    // console.log(SelectedVideo);
  }, [classId, SelectedVideo]);

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
        <NavbarKelas />
      </div>

      {/* Desktop */}
      {/* Hero Section */}
      <div className="hero-section hidden mobile:hidden laptop:flex laptop:flex-col gap-2 px-[5.5rem] py-[1rem] bg-[#EBF3FC] w-full">
        <div className="top-text-section flex items-center mt-[1.5rem] gap-[1.25rem] cursor-pointer">
          <FontAwesomeIcon
            icon={faArrowLeft}
            size="xl"
            onClick={() => {
              navigate("/dummy");
            }}
          />
          <span
            className="font-montserrat text-[1rem] font-bold leading-[1.5rem]"
            onClick={() => {
              navigate("/tesFilter");
            }}
          >
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
                {Detail.rating}
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
                {Detail.modules} Modul
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
          </div>
        </div>
      </div>

      {/* Class Detail Section */}
      <div className="class-detail-section hidden mobile:hidden laptop:flex w-full py-[2rem]">
        <div className="left-class-section w-[60%] flex flex-col gap-[1.5rem] mx-[6.5rem]">
          <div className="video-play-container w-full h-[25rem] rounded-[1.525rem]">
            {/* <img src={play_video} alt="play-video" /> */}
            <div className="player-wrapper h-full">
              {!isVideoClicked ? (
                <ReactPlayer
                  className="react-player"
                  url={FirstVideoPlay}
                  width="100%"
                  height="100%"
                  controls={true}
                />
              ) : (
                <ReactPlayer
                  className="react-player"
                  url={SelectedVideo}
                  width="100%"
                  height="100%"
                  controls={true}
                />
              )}
            </div>
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
            <div className="flex flex-col gap-[1rem]">
              {Detail.goals && Detail.goals.length > 0 ? (
                Detail.goals.map((goal, index) => (
                  <span
                    key={index}
                    className="font-montserrat text-[1rem] leading-[0.9rem]"
                  >
                    {goal}
                  </span>
                ))
              ) : (
                <span className="font-montserrat text-[1rem] leading-[0.9rem]">
                  No goals available.
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="right-class-section w-[40%] flex justify-center pr-[3rem] h-full">
          <div className="materi-container w-[100%] rounded-[1rem] px-[1.25rem] py-[1.25rem] flex flex-col -mt-[15rem] bg-[#FFFF] shadow-xl h-full">
            <div className="top-text flex items-center gap-[1.5rem] w-full justify-between">
              <div className="text-materi w-[50%]">
                <span className="font-montserrat font-black text-[1.25rem] leading-[0.75rem]">
                  Materi Belajar
                </span>
              </div>
              <div className="progress-bar-section flex gap-2 w-[50%]">
                <img src={progress_check} alt="progress-check" width="20" />
                <div className="w-full bg-[#D9D9D9] rounded-full">
                  <div
                    className="bg-dark-blue text-xs text-blue-100 text-center p-0.5 rounded-full font-montserrat leading-[0.9rem] font-semibold"
                    style={{ width: "50%" }}
                  >
                    {" "}
                    50% complete
                  </div>
                </div>
              </div>
            </div>
            {/* {renderChapters()} */}
            {/* <Link to={`/pembayaran/${classId}`}>
              <button className="bg-dark-blue my-[2rem] rounded-md flex items-center justify-center font-montserrat font-bold px-[2rem] py-[1rem] hover:text-white">
                Payment
              </button>
            </Link> */}

            {CourseChapter.map((value, chapterIndex) => {
              const isPremiumClass = Detail.type_id === 2;
              const isChapterUnlocked = chapterIndex === 0 || !isPremiumClass;

              return (
                <div className="chapter-parents my-[.5rem]" key={chapterIndex}>
                  <div className="title-chapter-section flex justify-between items-center">
                    <span className="font-montserrat font-black text-[0.9rem] text-dark-blue leading-[2.25rem]">
                      Chapter {value.no_chapter} - {value.title}
                    </span>
                    <span className="font-montserrat text-[#489CFF] font-black leading-[2.25rem] text-[0.9rem]">
                      60 Menit
                    </span>
                  </div>
                  {value.videos.map((vids, videoIndex) => {
                    totalVideosDesktop++;
                    const adjustedVideoIndex = totalVideosDesktop;

                    return (
                      <div
                        className="course-chapters-container border-b border-[#EBF3FC] py-[0.5rem]"
                        key={videoIndex}
                      >
                        <div className="chapter-card-section flex items-center justify-between w-[95%]">
                          <div className="card-number-title-section flex items-center gap-[0.75rem]">
                            <span
                              className={`rounded-[100%] px-[1rem] py-[.5rem] hover:bg-dark-blue hover:text-white cursor-pointer bg-[#EBF3FC]`}
                            >
                              {adjustedVideoIndex}
                            </span>
                            <span
                              className={`font-montserrat font-semibold text-[0.9rem] text-[rgba(0,0,0,0.80)] leading-[1.25rem]`}
                            >
                              {vids.title}
                            </span>
                          </div>
                          {!isChapterUnlocked && isPremiumClass ? (
                            <img
                              src={locked}
                              alt="locked-button"
                              width="20"
                              onClick={tooglePayment}
                              className="cursor-pointer"
                            />
                          ) : (
                            <img
                              src={
                                isChapterUnlocked
                                  ? vids.is_watched
                                    ? done_play_button
                                    : undone_play_button
                                  : locked
                              }
                              alt={
                                isChapterUnlocked
                                  ? "play-button"
                                  : "locked-button"
                              }
                              width="20"
                              className="cursor-pointer"
                              onClick={() => {
                                setSelectedVideo(vids.link);
                                setisVideoClicked(true);
                              }}
                            />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}

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
                            backgroundImage: `url(${Detail.image_url})`,
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
                                {Detail.rating}
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
                                5 Moduls
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
                        <Link to={`/pembayaran/${classId}`}>
                          <button className="modal-buy-button w-[28%] rounded-[1rem] bg-[#489CFF] hover:bg-dark-blue flex justify-center items-center gap-4 px-[5rem] py-[.5rem] text-white mx-[1rem] my-[0.5rem] font-montserrat text-[0.75rem] leading-[0.9rem] font-black">
                            <span>Beli</span>
                            <span>{rupiahFormat.format(Detail.price)}</span>
                          </button>
                        </Link>
                      </div>

                      <Link to={`/pembayaran/${classId}`}>
                        <div className="buy-now-btn flex items-center justify-center mx-[5rem] rounded-[1.5rem] px-[.75rem] py-[1rem] bg-dark-blue gap-2 my-[1rem]">
                          <span className="font-montserrat font-black text-white text-[1rem] leading-[1.5rem]">
                            Beli Sekarang
                          </span>
                          <img src={arrow_buy} alt="arrow-buy" width="20" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {/* End Desktop */}

      {/* Mobile */}
      <div className="mobile-section w-full h-screen bg-slate-600 block laptop:hidden">
        <div className="play-video-mobile-container bg-[rgba(0,0,0,0.85)] w-full h-[30%] flex justify-center items-center">
          {/* <img src={play_video} alt="play-video-course" /> */}
          <div className="player-wrapper h-[90%] w-full">
            {!isVideoClicked ? (
              <ReactPlayer
                className="react-player"
                url={FirstVideoPlay}
                width="100%"
                height="100%"
                controls={true}
              />
            ) : (
              <ReactPlayer
                className="react-player"
                url={SelectedVideo}
                width="100%"
                height="100%"
                controls={true}
              />
            )}
          </div>
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
                {Detail.rating}
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
                {Detail.modules} Modul
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
                  <span className="font-montserrat text-[2vh] font-black leading-[5vh] text-[#FFFF]">
                    Tentang
                  </span>
                </div>
                <div
                  className="materi-section flex justify-center items-center bg-[#EBF3FC] w-[50%] py-[.5rem]"
                  onClick={() => {
                    toogleMateriBelajar();
                  }}
                >
                  <span className="font-montserrat text-[2vh] font-black leading-[5vh] text-[#489CFF]">
                    Materi Kelas
                  </span>
                </div>
              </div>
              <div className="about-class-container flex flex-col gap-[1.25rem] mt-[1vh] ml-[1.35rem] mr-[1.5rem]">
                <div className="flex flex-col gap-[1.5vh]">
                  <span className="font-montserrat font-black text-[2.25vh] leading-[1.75vh]">
                    Tentang Kelas
                  </span>
                  <span className="text-[1.7vh] leading-[2.5vh] font-montserrat text-[rgba(0,0,0,0.80)] text-justify">
                    {Detail.about}
                  </span>
                </div>
                <div className="scope-class-container flex flex-col gap-[1.5vh]">
                  <span className="font-montserrat font-black text-[2.25vh] leading-[1.75vh]">
                    Kelas Ini Ditujukan Untuk
                  </span>
                  <div className="flex flex-col gap-[1vh]">
                    {Detail.goals && Detail.goals.length > 0 ? (
                      Detail.goals.map((goal, index) => (
                        <span
                          key={index}
                          className="font-montserrat text-[1.8vh] leading-[2vh] text-[rgba(0,0,0,0.80)]"
                        >
                          {goal}
                        </span>
                      ))
                    ) : (
                      <span className="font-montserrat text-[1rem] leading-[0.9rem]">
                        No goals available.
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="select-about-materi-section flex items-center w-full mt-2 cursor-pointer">
                <div
                  className="about-section flex justify-center items-center bg-[#EBF3FC] w-[50%] py-[.5rem]"
                  onClick={() => {
                    toogleTentangKelas();
                  }}
                >
                  <span className="font-montserrat text-[2vh] font-black leading-[5vh] text-[#489CFF]">
                    Tentang
                  </span>
                </div>
                <div
                  className="materi-section flex justify-center items-center bg-dark-blue w-[50%] py-[.5rem]"
                  onClick={() => {
                    toogleMateriBelajar();
                  }}
                >
                  <span className="font-montserrat text-[2vh] font-black leading-[5vh] text-[#FFFF]">
                    Materi Kelas
                  </span>
                </div>
              </div>

              <div className="chapter-section flex flex-col gap-2 ml-[1.35rem] mr-[1.5rem] mt-[1vh]">
                <span className="font-montserrat font-black text-[2.25vh] leading-[2vh]">
                  Materi Belajar
                </span>

                {CourseChapter.map((value, chapterIndex) => {
                  const isPremiumClass = Detail.type_id === 2;
                  const isChapterUnlocked =
                    chapterIndex === 0 || !isPremiumClass;
                  return (
                    <div
                      className="mobile-chapter-parents mt-[1vh]"
                      key={chapterIndex}
                    >
                      <div className="chapter-title-section flex items-center justify-between">
                        <span className="font-montserrat font-extrabold text-dark-blue text-[1.7vh] leading-[1.25vh]">
                          {value.title}
                        </span>
                        <span className="font-montserrat text-[#489CFF] text-[1.7vh] font-extrabold leading-[1.25vh]">
                          60 Menit
                        </span>
                      </div>

                      {value.videos.map((vids, videoIndex) => {
                        totalVideosMobile++;
                        const adjustedVideoIndex = totalVideosMobile;
                        return (
                          <div
                            className="course-chapters-container border-b-[0.25vh] border-[#EBF3FC] py-[.75vh] mt-[1vh]"
                            key={videoIndex}
                          >
                            <div className="chapter-card-section flex items-center justify-between w-[95%]">
                              <div className="card-number-title-section flex items-center gap-[0.75rem]">
                                <span className="rounded-[100%] text-[2vh] px-[2.1vh] py-[1.25vh] hover:bg-dark-blue hover:text-white cursor-pointer bg-[#EBF3FC]">
                                  {adjustedVideoIndex}
                                </span>
                                <span className="course-title-section text-[rgba(0,0,0,0.80)] text-[1.75vh] font-semibold leading-[1.25rem] font-montserrat">
                                  {vids.title}
                                </span>
                              </div>
                              {!isChapterUnlocked && isPremiumClass ? (
                                <img
                                  src={locked}
                                  alt="locked-button"
                                  onClick={tooglePayment}
                                  style={{ width: "2.5vh" }}
                                  className="cursor-pointer"
                                />
                              ) : (
                                <img
                                  src={
                                    isChapterUnlocked
                                      ? vids.is_watched
                                        ? done_play_button
                                        : undone_play_button
                                      : locked
                                  }
                                  alt={
                                    isChapterUnlocked
                                      ? "play-button"
                                      : "locked-button"
                                  }
                                  style={{ width: "2.5vh" }}
                                  className="cursor-pointer"
                                  onClick={() => {
                                    setSelectedVideo(vids.link);
                                    setisVideoClicked(true);
                                  }}
                                />
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
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
                            backgroundImage: `url(${Detail.image_url})`,
                            backgroundSize: "cover",
                          }}
                        ></div>
                        <div className="modal-category-rate-section flex flex-col gap-[.75vh]">
                          <div className="mobile-course-category flex justify-between items-center mx-[1rem] mt-[.75vh]">
                            <span className="font-montserrat text-dark-blue text-[2.2vh] font-black leading-[0.9rem]">
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
                                size="md"
                                style={{ color: "#F9CC00" }}
                              />
                              <span className="font-montserrat text-[#202244] font-bold leading-[0.9rem] text-[1.8vh]">
                                {Detail.rating}
                              </span>
                            </div>
                          </div>

                          <div className="mobile-title-course-section flex flex-col mx-[1rem] gap-[.5vh]">
                            <span className="course-title font-black font-montserrat text-[2.2vh] leading-[2vh] text-[#202244]">
                              {Detail.name}
                            </span>
                            <span className="author-section font-bold text-[1.8vh] leading-[2vh] text-[#000] font-montserrat">
                              {Detail.author}
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
                              <img
                                src={modul}
                                alt="modul-course"
                                style={{ width: "2.5vh" }}
                              />
                              <span className="font-montserrat text-[1.5vh] leading-[2vh] font-bold hover:text-[#6148FF] cursor-pointer">
                                {Detail.modules} Modul
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
                        <Link to={`/pembayaran/${classId}`}>
                          <button className="modal-buy-button w-[20vh] rounded-[1rem] bg-[#489CFF] hover:bg-dark-blue flex justify-center items-center gap-4 px-[2vh] py-[1.25vh] mb-[1.5vh] text-white mx-[1rem] mt-[1vh] font-montserrat text-[1.5vh] leading-[0.9rem] font-black">
                            <span>Beli</span>
                            <span>{rupiahFormat.format(Detail.price)}</span>
                          </button>
                        </Link>
                      </div>

                      <Link to={`/pembayaran/${classId}`}>
                        <button className="mobile-buy-now-btn flex items-center justify-center rounded-[1.5rem] py-[1rem] w-full bg-dark-blue gap-2">
                          <span className="font-montserrat font-black text-white text-[2vh] leading-[2.5vh]">
                            Beli Sekarang
                          </span>
                          <img src={arrow_buy} alt="arrow-buy" width="20" />
                        </button>
                      </Link>
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
