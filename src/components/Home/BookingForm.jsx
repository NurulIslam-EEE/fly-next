"use client";
import { RadioBtn } from "./RadioBtn";
import { useState } from "react";

function BookingForm() {
  const [from, setFrom] = useState("Dhaka");
  const [to, setTo] = useState("Coxs bazar");

  const swapValues = () => {
    const aTemp = from;
    const bTemp = to;
    setFrom(bTemp); // swap a
    setTo(aTemp); // swap b
  };

  return (
    <div className="container mx-auto py-8">
      <div id="searchbar" className=" w-[100%]">
        <div className="flight">
          <div className="flight-type-wrapper">
            <RadioBtn />
          </div>

          <div className="flex flex-wrap flight-search bar">
            {/* 1 */}
            <div className="box location from">
              <span className="label">From</span>{" "}
              <div className="value">{from}</div>{" "}
              <span className="sub-value">
                DAC, Hazrat Shahjalal International Airport
              </span>{" "}
            </div>
            {/* 2 */}
            <div className="box location from">
              <span class="swapper" onClick={() => swapValues()}></span>
              <span className="label">To</span>{" "}
              <div className="value">{to}</div>{" "}
              <span className="sub-value">CXB bazar Airport</span>{" "}
            </div>

            {/* 3 */}
            <div className="box date depart">
              <span className="label">Journey Date</span>{" "}
              <div className="value">
                01 <span>Nov 24</span>
              </div>{" "}
              <span className="sub-value">Friday</span>
            </div>

            {/* 4 */}
            <div className="box date return">
              <span className="label">Return Date</span>{" "}
              <div className="value">
                22 <span>Nov 24</span>
              </div>{" "}
              <span className="sub-value">Friday</span>{" "}
              <span className="remove-return-date"></span>
            </div>
            {/* 5 */}
            <div className="box traveler">
              <span className="label">Traveler, Class</span>{" "}
              <div className="value">4 Travelers</div>{" "}
              <span className="sub-value">Economy</span>{" "}
            </div>
          </div>

          <div class="search-btn-container">
            <button type="button" class="search-btn">
              Search
            </button>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default BookingForm;
