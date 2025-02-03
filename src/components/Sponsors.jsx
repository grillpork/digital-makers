import React, { useState } from "react";

const SponsorsImg = [
  {
    name: "SPONSORS",
    img: "https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80f4_KOBE-black.svg",
  },
  {
    name: "PARTNERS",
    img: "https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80f1_Manila-black.svg",
  },
  {
    name: "SPONSORS",
    img: "https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80f2_Swiss-black.svg",
  },
  {
    name: "PARTNERS",
    img: "https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80f5_Montreal-black.svg",
  },
  {
    name: "SPONSORS",
    img: "https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80f3_theo-black.svg",
  },
  {
    name: "PARTNERS",
    img: "https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80f4_KOBE-black.svg",
  },
  {
    name: "SPONSORS",
    img: "https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80f5_Montreal-black.svg",
  },
  {
    name: "PARTNERS",
    img: "https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80f2_Swiss-black.svg",
  },
];

const Sponsors = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div id="sponsors">
      <div className="flex flex-col justify-center items-center gap-4 text-center w-[50vw] mx-auto">
        <h1 className="text-5xl">Powering the world's best companies</h1>
        <p className="text-neutral-500 text-2xl">
          Our event is proudly supported by leading tech companies committed to
          supporting the digital creative community.
        </p>
      </div>

      <div className="flex justify-center items-center">
        <button
          onClick={() => handleClick("SPONSORS")}
          className="px-6 py-4"
          style={
            activeButton === "SPONSORS"
              ? { borderBottom: "1px solid white" }
              : {}
          }
        >
          SPONSORS
        </button>
        <button
          onClick={() => handleClick("PARTNERS")}
          className="px-6 py-4"
          style={
            activeButton === "PARTNERS"
              ? { borderBottom: "1px solid white" }
              : {}
          }
        >
          PARTNERS
        </button>
      </div>

      <div className="w-full max-w-[1280px] h-[35vh] mx-auto mt-4 ">
        <ul className="grid grid-cols-4 gap-0.5 w-full h-full">
          {SponsorsImg.map((sponsor, index) => (
            <li
              key={index}
              className="bg-neutral-700 p-8 w-full h-full flex justify-center items-center rounded"
            >
              <img src={sponsor.img} alt={sponsor.name} className="" />
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full flex justify-center items-center mt-16">
        <a
              href="#booking"
              className=" px-8 py-2 bg-blue-700 rounded uppercase w-fit"
            >
              book your spot now
            </a>
     </div>
      <div className="testimonial grid grid-cols-3 content-center gap-8 w-full max-w-[1280px] mx-auto mt-24">
        <div className="flex flex-col gap-16 justify-center items-center text-center">
          <div className="flex flex-col gap-6 justify-center items-center text-center">
            <img src="https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80f6_%E2%80%9C.svg" />
            <p className="text-xl p-6">
              "Attending the Makers Conference was a turning point in my career.
              The sessions were not only insightful but also practical,
              providing tools I could immediately apply."
            </p>
          </div>

          <div className="flex flex-col gap-2 justify-center items-center text-center">
            <img src="https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80f8_testimonial%20portrait%201.png"  className="rounded w-12 h-12"/>
            <p>Emily Davis</p>
            <p className="text-neutral-500">Freelance Digital Artist</p>
          </div>
        </div>
        <div className="flex flex-col gap-16 justify-center items-center text-center">
          <div className="flex flex-col gap-6 justify-center items-center text-center">
            <img src="https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80f6_%E2%80%9C.svg" />
            <p className="text-xl p-6">
              "Attending the Makers Conference was a turning point in my career.
              The sessions were not only insightful but also practical,
              providing tools I could immediately apply."
            </p>
          </div>

          <div className="flex flex-col gap-2 justify-center items-center text-center">
            <img src="https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80f8_testimonial%20portrait%201.png"  className="rounded w-12 h-12"/>
            <p>Emily Davis</p>
            <p className="text-neutral-500">Freelance Digital Artist</p>
          </div>
        </div>
        <div className="flex flex-col gap-16 justify-center items-center text-center">
          <div className="flex flex-col gap-6 justify-center items-center text-center">
            <img src="https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80f6_%E2%80%9C.svg" />
            <p className="text-xl p-6">
              "Attending the Makers Conference was a turning point in my career.
              The sessions were not only insightful but also practical,
              providing tools I could immediately apply."
            </p>
          </div>

          <div className="flex flex-col gap-2 justify-center items-center text-center">
            <img src="https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80f8_testimonial%20portrait%201.png"  className="rounded w-12 h-12"/>
            <p>Emily Davis</p>
            <p className="text-neutral-500">Freelance Digital Artist</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
