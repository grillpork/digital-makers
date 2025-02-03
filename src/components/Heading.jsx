import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri";
import Slider from "./Slider";
import Sponsors from "./Sponsors";
import Pricing from "./Pricing";

const Heading = () => {
  return (
    <div className="font-sans font-medium">
      <header className=".header flex flex-col justify-center items-center w-full h-[80vh]">
        <img
          src="https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80db_hero%20ribbon.png"
          className="relative w-full h-full object-cover"
        />
        <div className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <div className="flex justify-center items-center gap-8 w-full text-xl uppercase">
            <h1>november 8-9 </h1>
            <h1>live and virtual</h1>
          </div>
          <h1 className="text-[8rem] font-bold w-full text-center ">
            Digital Makers
          </h1>
        </div>
      </header>

      <section className="w-full flex flex-col justify-center items-center gap-6">
        <h1 className="text-xl uppercase">arts center, san francisco</h1>
        <h2 className="w-[500px] text-center text-xl text-neutral-400 font-bold">
          Join us at Digital Makers, where digital creators unite to innovate,
          collaborate, and inspire new possibilities.
        </h2>
        <a href="#booking" className=" px-8 py-2 bg-blue-700 rounded uppercase">
          book your spot now
        </a>
      </section>

      <Slider />

      <section
        className="grid grid-cols-2 gap-8 max-w-[1280px] mx-auto mt-24 "
      >
        <h1 className="text-xl uppercase">about the conference</h1>
        <div className="flex flex-col justify-start items-starttext-start font-medium ">
          <h1 className="text-[48px] flex flex-col font-bold text-base/18 mb-10 ">
            Where Digital Creater Unite and Shape
            <span className="text-[48px] text-neutral-500">
              Tomorow's Innovation
            </span>
          </h1>

          <a
            href="#booking"
            className=" px-8 py-2 bg-blue-700 rounded uppercase w-fit"
          >
            book your spot now
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className=" grid grid-cols-2 gap-4 max-w-[1280px] mx-auto mt-32 overflow-hidden h-[650px] rounded-2xl">
        <div id="about" className="text-xl font-medium">
          <h1 className="mb-4">Conference 2022</h1>
          <h1 className="mb-8 w-full text-neutral-400">
            In 2022, Makers brought together 500 creators, sparking
            collaborations that led to groundbreaking digital projects.
          </h1>
          <a className="relative overflow-hidden cursor-pointer">
            <img
              src="https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80e2_video%20thumb%201%20(1).png"
              className="w-full  object-cover  rounded-2xl"
            />
            <img
              src="https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80e4_conf%2022.png"
              className="absolute bottom-12 left-8 w-[215px]"
            />
            <div
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-neutral-300   bg-[rgb(255,255,255,0.3)] backdrop-blur rounded-full
            flex justify-center items-center
            "
            >
              <img src="https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80e3_Polygon%201.svg" />
            </div>
          </a>
        </div>

        <div className="text-xl font-medium">
          <h1 className="mb-4">Conference 2023</h1>
          <h1 className="mb-8 w-full text-neutral-400">
            In 2023, Makers brought together 500 creators, sparking
            collaborations that led to groundbreaking digital projects.
          </h1>
          <a className="relative overflow-hidden cursor-pointer">
            <img
              src="https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80e1_video%20thumb%202.png"
              className="w-full  object-cover rounded-2xl"
            />
            <img
              src="https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80e4_conf%2022.png"
              className="absolute bottom-12 left-8 w-[215px]"
            />
            <div
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-neutral-300   bg-[rgb(255,255,255,0.3)] backdrop-blur rounded-full
            flex justify-center items-center
            "
            >
              <img src="https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80e3_Polygon%201.svg" />
            </div>
          </a>
        </div>
      </section>

      <section>
        <h1>Schedule</h1>
        <button>
          <h1>Schedule</h1>
        </button>
      </section>

      <section id="speakers" className=" w-full h-[100vh] max-w-[1280px] mx-auto mt-24">
        <div className="flex flex-col w-1/2 gap-4 mb-12">
          <h1 className="text-5xl ">All Speakers</h1>
          <p className="text-xl text-neutral-400">
            Renowned speakers from top tech companies and innovative startups
            will share insights into digital creation trends.
          </p>
        </div>

        <div className=" grid grid-cols-3 gap-8 ">
          <section className="content-speaker cursor-pointer">
            <div className="relative w-full h-full rounded-2xl overflow-hidden ">
              <img
                src="https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80e9_speaker%203.png"
                className="rounded-2xl h-full w-full object-cover"
              />
              <div className="info-speaker  flex flex-col justify-between w-full h-full items-satrt absolute inset-0 p-8 bg-[rgba(0,0,0,0.5)] backdrop-blur text-white">
                <h1 className="text-2xl">
                  Michael leads Creatify Labs, empowering creators with
                  cutting-edge tools for immersive digital experiences.
                </h1>
                <div className="flex gap-2 ">
                  <FaFacebookF className="w-8 h-8 bg-neutral-300/40 rounded-full p-2" />
                  <BiLogoInstagramAlt className="w-8 h-8 bg-neutral-300/40 rounded-full p-2" />
                  <RiTwitterXFill className="w-8 h-8 bg-neutral-300/40 rounded-full p-2" />
                </div>
              </div>
            </div>

            <div>
              <h1>Michael Chen</h1>
              <p>Founder, Creatify Labs</p>
            </div>
          </section>
          <section className="content-speaker cursor-pointer">
            <div className="relative w-full h-full rounded-2xl overflow-hidden ">
              <img
                src="https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80e9_speaker%203.png"
                className="rounded-2xl h-full w-full object-cover"
              />
              <div className="info-speaker  flex flex-col justify-between w-full h-full items-satrt absolute inset-0 p-8 bg-[rgba(0,0,0,0.5)] backdrop-blur text-white">
                <h1 className="text-2xl">
                  Michael leads Creatify Labs, empowering creators with
                  cutting-edge tools for immersive digital experiences.
                </h1>
                <div className="flex gap-2 ">
                  <FaFacebookF className="w-8 h-8 bg-neutral-300/40 rounded-full p-2" />
                  <BiLogoInstagramAlt className="w-8 h-8 bg-neutral-300/40 rounded-full p-2" />
                  <RiTwitterXFill className="w-8 h-8 bg-neutral-300/40 rounded-full p-2" />
                </div>
              </div>
            </div>

            <div>
              <h1>Michael Chen</h1>
              <p>Founder, Creatify Labs</p>
            </div>
          </section>
          <section className="content-speaker cursor-pointer">
            <div className="relative w-full h-full rounded-2xl overflow-hidden ">
              <img
                src="https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80e9_speaker%203.png"
                className="rounded-2xl h-full w-full object-cover"
              />
              <div className="info-speaker  flex flex-col justify-between w-full h-full items-satrt absolute inset-0 p-8 bg-[rgba(0,0,0,0.5)] backdrop-blur text-white">
                <h1 className="text-2xl">
                  Michael leads Creatify Labs, empowering creators with
                  cutting-edge tools for immersive digital experiences.
                </h1>
                <div className="flex gap-2 ">
                  <FaFacebookF className="w-8 h-8 bg-neutral-300/40 rounded-full p-2" />
                  <BiLogoInstagramAlt className="w-8 h-8 bg-neutral-300/40 rounded-full p-2" />
                  <RiTwitterXFill className="w-8 h-8 bg-neutral-300/40 rounded-full p-2" />
                </div>
              </div>
            </div>

            <div>
              <h1>Michael Chen</h1>
              <p>Founder, Creatify Labs</p>
            </div>
          </section>
        </div>
      </section>

      <Sponsors />
      <Pricing />

     
    </div>
  );
};

export default Heading;
