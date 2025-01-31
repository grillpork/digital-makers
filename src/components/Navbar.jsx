import React from "react";

const Navbar = () => {
  return (
    <div>
      <ul>
        <a href="#about" onScroll={true}>
          About
        </a>
        <a href="#schedule" onScroll={true}>
          SCHEDULE
        </a>
        <a href="#speakers" onScroll={true}>
          SPEAKERS
        </a>
        <a href="#sponsors" onScroll={true}>
          SPONSORS
        </a>
        <a href="#faq" onScroll={true}>
          FAQ
        </a>
      </ul>
      <a href="#logo">
        <img src="" />
      </a>
      <div>
        <a href="#pricing" onScroll={true}>
          PRICING
        </a>
        <a href="#sign-in" onScroll={true}>
          SIGN In
        </a>
      </div>
    </div>
  );
};

export default Navbar;
