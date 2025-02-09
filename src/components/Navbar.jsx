import React from "react";
import { motion } from "framer-motion";

/*************  ✨ Codeium Command ⭐  *************/
/**
 * A sticky navigation bar that appears at the top of the page and contains
 * links to different sections of the website.
 *
 * @returns {React.ReactElement} The JSX element for the navbar.
 */
/******  42c1f10f-7c0b-4f1d-b7c8-a568c16c0269  *******/
const Navbar = () => {
  return (
    <motion.div initial={{ y: -100 }} animate={{ y: 0 }}  
    className=" grid grid-cols-3 content-center py-6 px-8 w-full fixed top-0 z-50 bg-gradient-to-b from-[#000000] to-transparent text-white">
      <ul className="flex gap-4 text-sm font-medium">
        <a href="#about" onScroll={true} className="p-[10px]">
          ABOUT
        </a>
        <a href="#schedule" onScroll={true} className="p-[10px]">
          SCHEDULE
        </a>
        <a href="#speakers" onScroll={true} className="p-[10px]">
          SPEAKERS
        </a>
        <a href="#sponsors" onScroll={true} className="p-[10px]">
          SPONSORS
        </a>
        <a href="#faq" onScroll={true} className="p-[10px]">
          FAQ
        </a>
      </ul>
      <a href="#logo" className="flex justify-center items-center">
        <img src="https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80da_logo.png" className="w-[194px]"/>
      </a>
      <div className="flex justify-end items-center gap-8 ">
        <a href="#pricing" onScroll={true}>
          PRICING
        </a>
        <a href="#sign-in" onScroll={true} className="px-8 py-2 bg-white text-black rounded ">
          SIGN IN
        </a>
      </div>
    </motion.div>
  );
};

export default Navbar;
