import React from "react";
import CustomButton from "./common/CustomButton";

function Banner() {
  return (
    <div className="container ">
      <div className="relative">
        <div className="">
          <svg
            className="-z-10 absolute bottom-0 right-[153px] w-[80%]"
            xmlns="http://www.w3.org/2000/svg"
            width="1414"
            height="319"
            viewBox="0 0 1414 319"
            fill="none"
          >
            <path
              class="path"
              d="M-0.5 215C62.4302 220.095 287 228 373 143.5C444.974 72.7818 368.5 -3.73136 320.5 1.99997C269.5 8.08952 231.721 43.5 253.5 119C275.279 194.5 367 248.212 541.5 207.325C675.76 175.867 795.5 82.7122 913 76.7122C967.429 73.9328 1072.05 88.6813 1085 207.325C1100 344.712 882 340.212 922.5 207.325C964.415 69.7967 1354 151.5 1479 183.5"
              stroke="#ECECF2"
              stroke-width="6"
              stroke-linecap="round"
              stroke-dasharray="round"
            ></path>

            <path
              class="dashed"
              d="M-0.5 215C62.4302 220.095 287 228 373 143.5C444.974 72.7818 368.5 -3.73136 320.5 1.99997C269.5 8.08952 231.721 43.5 253.5 119C275.279 194.5 367 248.212 541.5 207.325C675.76 175.867 795.5 82.7122 913 76.7122C967.429 73.9328 1072.05 88.6813 1085 207.325C1100 344.712 882 340.212 922.5 207.325C964.415 69.7967 1354 151.5 1479 183.5"
              stroke="#212627"
              stroke-width="6"
              stroke-linecap="round"
              stroke-dasharray="22 22"
            ></path>
          </svg>
          {/* <div class="location-image">
                            <img src="assets/media/icons/location-blue.png" alt=""/>
                        </div> */}
        </div>
        <div className="flex items-center justify-center my-10">
          <div className="w-[30%]">
            <h3 className="text-6xl">
              {" "}
              <span className="text-[#4D73FC]">Book</span> Your Dream{" "}
              <span className="text-[#4D73FC]">Flights</span> Now!
            </h3>

            <p>
              Lorem ipsum dolor sit amet consectetur. Felis tristique pretium
              leo nisi at risus ac enim.
            </p>
            <CustomButton title="Book Now" className="my-4" />
          </div>
          <div className="w-[65%]">
            <img src="/plane.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
