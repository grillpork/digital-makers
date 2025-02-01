import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri";
import { FaPlay } from "react-icons/fa";
import Slider from "./Slider";

const Heading = () => {
  return (
    <div className="font-sans font-medium">
      <header className=".header flex flex-col justify-center items-center w-full h-[80vh]">
        <img
          src="https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80db_hero%20ribbon.png"
          className="relative w-full h-full object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-8">
          <div className="flex justify-center items-center gap-8 text-xl uppercase">
            <h1>november 8-9 </h1>
            <h1>live and virtual</h1>
          </div>
          <h1 className="text-[8rem] font-bold ">Digital Makers</h1>
        </div>
      </header>

      <section className="w-full flex flex-col justify-center items-center gap-6">
        <h1 className="text-xl uppercase">arts center, san francisco</h1>
        <h2 className="w-[500px] text-center text-xl text-neutral-400 font-bold">
          Join us at Digital Makers, where digital creators unite to innovate,
          collaborate, and inspire new possibilities.
        </h2>
        <a
          href="#booking"
          className=" px-8 py-2 bg-blue-700 rounded uppercase "
        >
          book your spot now
        </a>
      </section>

      <Slider />

      <section
        id="about"
        className="grid grid-cols-2 gap-8 max-w-[1400px] mx-auto mt-24"
      >
        <h1 className="text-xl uppercase">about the conference</h1>
        <div className="flex flex-col justify-start items-starttext-start font-medium ">
          <h1 className="text-[64px] flex flex-col font-bold text-base/18 mb-10 ">
            Where Digital Creater Unite and Shape
            <span className="text-[64px] text-neutral-500">
              Tomorow's Innovation
            </span>
          </h1>

          <a
            href="#booking"
            className=" px-8 py-2 bg-blue-700 rounded uppercase w-fit "
          >
            book your spot now
          </a>
        </div>
      </section>

      <section>
        <div>
          <h1>Conferrence 2022</h1>
          <h1>
            In 2022, Makers brought together 500 creators, sparking
            collaborations that led to groundbreaking digital projects.
          </h1>
          <a>
            <img src="https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80dd_male-business-executive-giving-speech%20(1).jpg" />
            <img src="https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80e4_conf%2022.png" />
          </a>
        </div>

        <div>
          <h1>Conferrence 2022</h1>
          <h1>
            In 2022, Makers brought together 500 creators, sparking
            collaborations that led to groundbreaking digital projects.
          </h1>
          <a>
            <img src="https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80e1_video%20thumb%202.png" />
            <img src="https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80e4_conf%2022.png" />
          </a>
        </div>
      </section>

      <section>
        <h1>Schedule</h1>
        <button onClick={() => console.log("clicked")}>
          <h1>Schedule</h1>
        </button>
      </section>

      <section>
        <h1>All Speakers</h1>
        <p>
          Renowned speakers from top tech companies and innovative startups will
          share insights into digital creation trends.
        </p>

        <section>
          <img src="" />
          <div>
            <h1>
              Alex pioneered AI integration in design tools, revolutionizing how
              creators approach digital content creation.
            </h1>
            <div className="social-icons">
              <FaFacebookF />
              <BiLogoInstagramAlt />
              <RiTwitterXFill />
            </div>
          </div>
        </section>

        <section>
          <img src="" />
          <div>
            <h1>
              Sophia shapes global digital trends, driving innovative strategies
              in multimedia content and user engagement.
            </h1>
            <div className="social-icons">
              <FaFacebookF />
              <BiLogoInstagramAlt />
              <RiTwitterXFill />
            </div>
          </div>
        </section>

        <section>
          <img src="" />
          <div>
            <h1>
              Michael leads Creatify Labs, empowering creators with cutting-edge
              tools for immersive digital experiences.
            </h1>
            <div className="social-icons">
              <FaFacebookF />
              <BiLogoInstagramAlt />
              <RiTwitterXFill />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Heading;
