"use client";
import React, { useEffect, useState } from "react";

function LoaderPlane() {
  const [sec, setSec] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSec(true);
    }, 3000);
  }, []);

  return (
    <div
      id="preloader"
      style={sec ? { display: "none" } : { position: "fixed" }}
    >
      <div className="loader">
        <div className="plane">
          <img
            src="https://zupimages.net/up/19/34/4820.gif"
            className="plane-img"
            alt=""
          />
        </div>
        <div className="earth-wrapper">
          <div className="earth w-[160px] h-[160px] bg-[url('/earth.gif')] rounded-[100%]"></div>
        </div>
      </div>
    </div>
  );
}

export default LoaderPlane;
