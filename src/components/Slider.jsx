import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";

const Slider = () => {
  const sliders = [
    {
      url: "https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80de_medium-shot-people-work-meeting%20(1).jpg",
      title: "Speakers-1",
    },
    {
      url: "https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80dc_female-business-executive-giving-speech%20(1)%20(1).jpg",
      title: "Speakers-2",
    },
    {
      url: "https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80dd_male-business-executive-giving-speech%20(1).jpg",
      title: "Speakers-3",
    },
  ];

  return (
    <div className="w-full">
      <div className="relative mt-12 max-w-[960px] h-[680px] w-full mx-auto">
        <div
        
          className=" w-full h-full rounded overflow-hidden bg-center bg-cover"
        ></div>
      </div>

      <div className=" w-[73%] mx-auto mt-8">
        <h1 className="text-2xl">Previous conference</h1>
        <div className=" flex justify-end items-center gap-12 mt-4">
          <div className="liner w-[100%] h-0.5 bg-white "></div>
          <div className="flex justify-center items-center gap-4 text-2xl">
            <button onClick={() => setSlider(slider - 1)}>
              <GoArrowLeft />
            </button>
            <button onClick={() => setSlider(slider + 1)}>
              <GoArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
