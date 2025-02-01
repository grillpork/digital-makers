import React from "react";

const Navbar = () => {
  return (
    <div className=" flex justify-between items-center py-[24px] px-[32px]">
      <ul className="flex gap-4">
        <a href="#about" onScroll={true} className="p-[10px]">
          About
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
      <a href="#logo" className="">
        <img src="https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80da_logo.png" className="w-[194px]"/>
      </a>
      <div className=" space-x-4">
        <a href="#pricing" onScroll={true}>
          PRICING
        </a>
        <a href="#sign-in" onScroll={true} className="px-8 py-3 bg-white text-black rounded ">
          SIGN IN
        </a>
      </div>
    </div>
  );
};

export default Navbar;
