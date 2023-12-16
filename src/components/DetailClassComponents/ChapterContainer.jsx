import React from "react";
// import progress_check from "../../assets/img/icon/progress-check.svg"
import done_play_button from "../../assets/img/icon/green-play.svg";
import undone_play_button from "../../assets/img/icon/dark-blue-play.svg";
// import locked from "../../assets/img/icon/bxs_lock.svg";
// import close_modal from "../../assets/img/icon/close-modal.svg";
// import arrow_buy from "../../assets/img/icon/carbon_next-filled.svg";
// import star from "../../assets/img/icon/ic_round-star.svg";

const ChapterContainer = (props) => {

  return (
    <div className="parents my-[1.5rem]">
      <div className="title-chapter-section flex justify-between items-center">
        <span className="font-montserrat text-dark-blue text-[0.9rem] font-black leading-[2.25rem]">
          {props.allChapter.title}
        </span>
        <span className="font-montserrat text-[#489CFF] font-black leading-[2.25rem] text-[0.9rem]">
          60 Menit
        </span>
      </div>
      {props.allChapter.videos.map((value, index) => {
        return (
          <div className="course-chapters-container my-2 border-b border-[#EBF3FC] py-[0.5rem]">
            <div className="chapter-card-section flex items-center justify-between w-[95%]">
              <div className="card-number-title-section flex items-center gap-[0.75rem]">
                <span className="rounded-[100%] bg-[#EBF3FC] px-[1rem] py-[.5rem] hover:bg-dark-blue hover:text-white cursor-pointer">
                  {index + 1}
                </span>
                <span className="font-montserrat font-semibold text-[0.9rem] text-[rgba(0,0,0,0.80)] leading-[1.25rem]">
                  {value.title}
                </span>
              </div>
              <img src={value.iswatched ? done_play_button : undone_play_button} alt="done-play" width="20" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChapterContainer;
