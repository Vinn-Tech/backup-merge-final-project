import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavbarComponents from "../../assets/components/NavbarComponents";
import arrow_down from "../../assets/img/icon/arrow-down.svg";
import arrow_up from "../../assets/img/icon/arrow-up.svg";
import mastercard from "../../assets/img/icon/mastercard logo.svg";
import visa from "../../assets/img/icon/visa logo.svg";
import amex from "../../assets/img/icon/amex logo.svg";
import paypal from "../../assets/img/icon/paypal logo.svg";
import arrow_buy from "../../assets/img/icon/carbon_next-filled.svg";

const DetailKelasPembayaran = () => {
  const [BankAccordionOpen, setBankAccordionOpen] = useState(false);
  const [CreditAccordionOpen, setCreditAccordionOpen] = useState(false);
  const navigate = useNavigate();
  const background_uiux = require("../../assets/img/image/uiux-person.jpg");

  const toogleBankAccordion = () => {
    setBankAccordionOpen((BankAccordionOpen) => !BankAccordionOpen);
  };

  const toogleCreditAccordion = () => {
    setCreditAccordionOpen((CreditAccordionOpen) => !CreditAccordionOpen);
  };

  return (
    <div className="parents">
      {/* Desktop */}
      <div className="hidden laptop:block">
        <NavbarComponents />
      </div>

      <div className="header-section hidden laptop:flex laptop:flex-col gap-[1.25rem] justify-center w-full bg-[#FFFF] shadow-lg items-center px-[5rem] py-[1.5rem]">
        <div className="back-arrow-section flex items-center gap-4 w-[100%] ml-[1rem]">
          <FontAwesomeIcon
            className="cursor-pointer"
            icon={faArrowLeft}
            size="md"
            style={{ color: "black" }}
            onClick={() => {
              navigate("/detailKelas");
            }}
          />
          <span
            className="font-montserrat font-black text-[1rem] leading-[1.5rem] cursor-pointer"
            onClick={() => {
              navigate("/detailKelas");
            }}
          >
            Kembali
          </span>
        </div>
        <div className="deadline-button-container flex items-center justify-center bg-[#FF0000] rounded-[0.75rem] w-[60%] py-[0.8rem]">
          <span className="font-montserrat text-white text-[1rem] leading-[1.5rem] font-black">
            Selesaikan Pembayaran sampai 10 Maret 2023 12:00
          </span>
        </div>
      </div>

      <div className="payment-section hidden laptop:flex items-center justify-center gap-[2.25rem] py-[3rem]">
        <div className="left-payment-section flex flex-col gap-2 w-[40%] h-[25rem]">
          <div
            className="bank-transfer-container flex items-center justify-between bg-[#3C3C3C] rounded-[0.5rem] px-[1rem] py-[.75rem]"
            onClick={toogleBankAccordion}
          >
            <span className="font-montserrat font-semibold text-white text-[0.8rem] leading-[1.25rem]">
              Bank Transfer
            </span>
            <img
              src={BankAccordionOpen ? arrow_down : arrow_up}
              alt="arrow-accordion"
              width=""
            />
          </div>

          {BankAccordionOpen && <div>Hello Bank</div>}

          <div
            className="credit-card-container flex items-center justify-between bg-dark-blue rounded-[0.5rem] px-[1rem] py-[.75rem]"
            onClick={toogleCreditAccordion}
          >
            <span className="font-montserrat font-semibold text-white text-[0.8rem] leading-[1.25rem]">
              Credit Card
            </span>
            <img
              src={CreditAccordionOpen ? arrow_down : arrow_up}
              alt="arrow-accordion"
              width=""
            />
          </div>
          {CreditAccordionOpen && (
            <div className="modal-credit-container flex flex-col justify-center items-center gap-[1rem] w-full py-[1.5rem] bg-[#FFFF] shadow-lg rounded-[1rem] -mt-2">
              <div className="credit-card-img-container flex items-center justify-center gap-[0.75rem]">
                <img src={mastercard} alt="mastercard icon" width="35" />
                <img src={visa} alt="visa icon" width="35" />
                <img src={amex} alt="amex icon" width="35" />
                <img src={paypal} alt="paypal icon" width="35" />
              </div>

              <div className="form-input-credit flex flex-col items-center gap-[1.5rem] w-[60%]">
                <div className="card-number-container flex flex-col gap-2 w-[100%]">
                  <span className="font-poppins font-semibold text-[0.9] leading-[1.25rem]">
                    Card Number
                  </span>
                  <div className="card-number-input w-[100%] border-b-2 border-[#D0D0D0] pb-[.2rem] px-1">
                    <input
                      placeholder="4480 0000 0000 0000"
                      className="outline-none font-poppins text-[0.9rem] leading-[1.25rem]"
                      type="number"
                      required
                    />
                  </div>
                </div>

                <div className="card-holder-name-container flex flex-col gap-2 w-[100%]">
                  <span className="font-poppins font-semibold text-[0.9] leading-[1.25rem]">
                    Card Holder Name
                  </span>
                  <div className="card-holder-name-input w-[100%] border-b-2 border-[#D0D0D0] pb-[.2rem] px-1">
                    <input
                      placeholder="John Doe"
                      className="outline-none font-poppins text-[0.9rem] leading-[1.25rem]"
                      type="name"
                      required
                    />
                  </div>
                </div>

                <div className="card-cvv-expiry_data-container flex w-[100%] gap-2">
                  <div className="card-cvv-container flex flex-col gap-2 w-[50%]">
                    <span className="font-poppins font-semibold text-[0.9] leading-[1.25rem]">
                      CVV
                    </span>
                    <div className="card-holder-name-input w-[95%] border-b-2 border-[#D0D0D0] pb-[.2rem] px-1">
                      <input
                        placeholder="000"
                        className="outline-none font-poppins text-[0.9rem] leading-[1.25rem]"
                        type="number"
                        required
                      />
                    </div>
                  </div>

                  <div className="card-expiry_date-container flex flex-col gap-2 w-[50%]">
                    <span className="font-poppins font-semibold text-[0.9] leading-[1.25rem]">
                      Expiry Date
                    </span>
                    <div className="card-holder-name-input w-[95%] border-b-2 border-[#D0D0D0] pb-[.2rem] px-1">
                      <input
                        placeholder="07/24"
                        className="outline-none font-poppins text-[0.9rem] leading-[1.25rem]"
                        type="number"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="right-payment-section flex flex-col gap-[.75rem] border-2 h-[25rem] w-[30%] rounded-[1.5rem] border-dark-blue px-[1.5rem] py-[1.25rem]">
          <span className="font-montserrat text-[1.25rem] font-black leading-[0.9rem]">
            Pembayaran Kelas
          </span>
          <div className="course-container flex flex-col gap-2 rounded-[1rem] h-[60%] shadow-lg">
            <div
              className="img-course-container rounded-t-[1rem] bg-cover bg-center w-full h-[50%]"
              style={{ backgroundImage: `url(${background_uiux})` }}
            ></div>
            <span className="font-montserrat text-[0.9rem] font-black leading-[0.9rem] text-dark-blue mx-[1rem]">
              UI/UX Design
            </span>

            <div className="title-course-section flex flex-col gap-1 mx-[1rem]">
              <span className="course-title font-black font-montserrat text-[0.9rem] leading-[0.9rem] text-[#202244]">
                Intro to Basic of User Introduction Design
              </span>
              <span className="author-section font-semibold text-[0.7rem] leading-[0.9rem] text-[#000] font-montserrat">
                by Simon Doe
              </span>
            </div>
          </div>

          <div className="price-section flex justify-between items-center mt-[.5rem]">
            <div className="start-price-container flex flex-col gap-2">
              <span className="font-montserrat text-[0.9rem] leading-[1.5rem] font-black text-[#151515]">
                Harga
              </span>
              <span className="font-montserrat text-[0.9rem] leading-[1.5rem] font-black text-[#151515]">
                Rp 349.000
              </span>
            </div>

            <div className="start-price-container flex flex-col gap-2">
              <span className="font-montserrat text-[0.9rem] leading-[1.5rem] font-black text-[#151515]">
                PPN 11%
              </span>
              <span className="font-montserrat text-[0.9rem] leading-[1.5rem] font-black text-[#151515]">
                Rp 38.390
              </span>
            </div>

            <div className="start-price-container flex flex-col gap-2">
              <span className="font-montserrat text-[0.9rem] leading-[1.5rem] font-black text-[#151515]">
                Total Bayar
              </span>
              <span className="font-montserrat text-[0.9rem] leading-[1.5rem] font-black text-dark-blue">
                Rp 387.390
              </span>
            </div>
          </div>

          <button
            className="buy-now-btn flex items-center justify-center rounded-[1.5rem] px-[1rem] py-[.75rem] bg-[#F00] gap-2 mt-[1.5rem] mb-[0.75rem]"
            onClick={() => {
              navigate("/pembayaranSukses");
            }}
          >
            <span className="font-montserrat font-black text-white text-[1rem] leading-[1.5rem]">
              Bayar dan Ikuti Kelas Selamanya
            </span>
            <img src={arrow_buy} alt="arrow-buy" width="20" />
          </button>
        </div>
      </div>
      {/* End Desktop */}

      {/* Mobile */}
      <div className="mobile-container w-full h-full bg-[#EBF3FC] flex flex-col gap-[1vh] px-[3vh] py-[1.75vh]">
        <div className="back-arrow ml-[2vh]">
          <FontAwesomeIcon
            className="cursor-pointer"
            icon={faArrowLeft}
            size="xl"
            style={{ color: "black" }}
            onClick={() => {
              navigate("/detailKelas");
            }}
          />
        </div>

        <div className="course-container flex flex-col px-[2vh] py-[1.5vh] gap-2 rounded-[0.6rem] h-[35vh] mt-[1.5vh] bg-[#FFFF] shadow-lg">
          <div className="course-box-container bg-[#FFFF] shadow-lg rounded-[1rem] flex flex-col gap-[1vh] h-[23vh]">
            <div
              className="img-course-container rounded-t-[1rem] bg-cover bg-center w-full h-[12vh]"
              style={{ backgroundImage: `url(${background_uiux})` }}
            ></div>
            <span className="font-montserrat text-[2vh] font-black leading-[1.5vh] text-dark-blue mx-[1rem]">
              UI/UX Design
            </span>

            <div className="title-course-section flex flex-col gap-[1vh] mx-[1rem] mb-[1.5vh]">
              <span className="course-title font-black font-montserrat text-[2vh] leading-[1.5vh] text-[#202244]">
                Intro to Basic of User Introduction Design
              </span>
              <span className="author-section font-semibold text-[1.5vh] leading-[1.5vh] text-[#000] font-montserrat">
                by Simon Doe
              </span>
            </div>
          </div>

          <div className="mobile-all-price-container bg-[#FFFF] rounded-[.5rem] flex justify-between py-[1vh]">
            <div className="price-section flex flex-col gap-[2vh] mx-[1rem]">
              <span className="font-montserrat text-[2vh] font-black leading-[2vh]">
                Harga
              </span>
              <span className="font-montserrat text-[2vh] leading-[2vh]">
                Rp 349.000
              </span>
            </div>

            <div className="tax-section flex flex-col gap-[2vh] mx-[1rem]">
              <span className="font-montserrat text-[2vh] font-black leading-[2vh]">
                PPN 11%
              </span>
              <span className="font-montserrat text-[2vh] leading-[2vh]">
                Rp 38.390
              </span>
            </div>

            <div className="total-price-section flex flex-col gap-[2vh] mx-[1rem]">
              <span className="font-montserrat text-[2vh] font-black leading-[2vh]">
                Total Bayar
              </span>
              <span className="font-montserrat text-[2vh] leading-[2vh]">
                Rp 387.390
              </span>
            </div>
          </div>
        </div>

        <div className="payment-method-container h-[52vh] flex flex-col gap-[1vh] mt-[1vh]">
          <div
            className="bank-transfer-section flex justify-between items-center w-full rounded-[0.5rem] bg-[#3C3C3C] px-[2.5vh] py-[1.75vh]"
            onClick={toogleBankAccordion}
          >
            <span className="text-white font-montserrat text-[2vh] leading-[1.5vh] font-semibold">
              Bank Transfer
            </span>
            <img
              src={BankAccordionOpen ? arrow_down : arrow_up}
              alt="arrow-down"
              style={{ width: "2.5vh" }}
            />
          </div>

          {BankAccordionOpen && (
            <div className="font-montserrat font-black text-[2vh] leading-[1.5vh] flex justify-center items-center">
              Hello Bank
            </div>
          )}

          <div
            className="bank-transfer-section flex justify-between items-center w-full rounded-[0.5rem] bg-dark-blue px-[2.5vh] py-[1.75vh]"
            onClick={toogleCreditAccordion}
          >
            <span className="text-white font-montserrat text-[2vh] leading-[1.5vh] font-semibold">
              Credit Card
            </span>
            <img
              src={CreditAccordionOpen ? arrow_down : arrow_up}
              alt="arrow-down"
              style={{ width: "2.5vh" }}
            />
          </div>

          {CreditAccordionOpen && (
            <div className="modal-credit-payment-container bg-[#FFFF] shadow-lg rounded-[1rem] flex flex-col gap-[2vh] px-[3vh] py-[2.75vh]">
              <div className="card-number-form-section flex flex-col gap-[1.5vh]">
                <span className="card-number-label font-montserrat text-[2vh] leading-[1.5vh] font-semibold text-[#151515]">
                  Card Number
                </span>
                <div className="card-number-input gap-[1vh] border-b-2 border-[#D0D0D0] px-[1vh] py-[1vh]">
                  <input
                    placeholder="3350 0000 0000 0000"
                    type="number"
                    required
                    className="font-montserrat font-semibold text-[2vh] leading-[1.5vh]"
                  />
                </div>
              </div>

              <div className="card-holder-form-section flex flex-col gap-[1vh]">
                <span className="card-holder-label font-montserrat text-[2vh] leading-[1.5vh] font-semibold text-[#151515]">
                  Card Holder Name
                </span>
                <div className="card-holder-input gap-[1vh] border-b-2 border-[#D0D0D0] px-[1vh] py-[1vh]">
                  <input
                    placeholder="Jeff Bezos"
                    type="text"
                    required
                    className="font-montserrat font-semibold text-[2vh] leading-[1.5vh]"
                  />
                </div>
              </div>

              <div className="cvv-expiry_date-form-container flex items-center gap-[1.5vh]">
                <div className="card-holder-form-section flex flex-col gap-[1vh] w-[40vh]">
                  <span className="card-holder-label font-montserrat text-[2vh] leading-[1.5vh] font-semibold text-[#151515]">
                    CVV
                  </span>
                  <div className="card-holder-input gap-[1vh] border-b-2 border-[#D0D0D0] px-[1vh] py-[1vh] w-[100%]">
                    <input
                      placeholder="***"
                      type="password"
                      required
                      className="font-montserrat font-semibold text-[2vh] leading-[1.5vh] w-[100%]"
                    />
                  </div>
                </div>

                <div className="card-holder-form-section flex flex-col gap-[1vh] w-[40vh]">
                  <span className="card-holder-label font-montserrat text-[2vh] leading-[1.5vh] font-semibold text-[#151515] w-[100%]">
                    Expiry Date
                  </span>
                  <div className="card-holder-input gap-[1vh] border-b-2 border-[#D0D0D0] px-[1vh] py-[1vh] w-[100%]">
                    <input
                      placeholder="08/24"
                      type="number"
                      required
                      className="font-montserrat font-semibold text-[2vh] leading-[1.5vh] w-[100%]"
                    />
                  </div>
                </div>
              </div>

              <div className="credit-card-logo-container flex gap-[1.5vh] justify-center items-center">
                <img
                  src={mastercard}
                  alt="mastercard-credit"
                  style={{ width: "4vh" }}
                />
                <img src={visa} alt="visa-credit" style={{ width: "4vh" }} />
                <img src={amex} alt="amex-credit" style={{ width: "4vh" }} />
                <img
                  src={paypal}
                  alt="paypal-credit"
                  style={{ width: "4vh" }}
                />
              </div>
            </div>
          )}
        </div>

        <button className="buy-now-button-container flex justify-center items-center py-[1.5vh] bg-[#FF0000] rounded-[1.5rem] mt-[2.25vw]">
          <span className="font-montserrat font-black text-white text-[2vh] leading-[1.5vh]">
            Bayar dan Ikuti Kelas Selamanya
          </span>
          <img src={arrow_buy} alt="arrow-buy" style={{ width: "2.5vh" }} />
        </button>
      </div>

      {/* End Mobile */}
    </div>
  );
};

export default DetailKelasPembayaran;
