import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri";
import { FaPlay } from "react-icons/fa";

const Heading = () => {
  return (
    <div>
      <header className=".header flex flex-col justify-center items-center w-full h-[80vh]">
        <img src="https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80db_hero%20ribbon.png" alt="" />
        <h1>november 8-9 live and virtual</h1>
        <h1>digital makers</h1>
      </header>
      <section>
        <h1>arts center, san francisco</h1>
        <h2>
          Join us at Digital Makers, where digital creators unite to innovate,
          collaborate, and inspire new possibilities.
        </h2>
        <a href="#booking">book your spot now</a>
      </section>

      <section>
        <h1>about the conference</h1>
        <div>
          <h1>Where Digital Creater</h1>
          <h1>Unite and Shape</h1>
          <h1>Tomorow's Innovation</h1>
          <a href="#booking">book your spot now</a>
        </div>
      </section>

      <section>
        <ul>
          <img src="https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80de_medium-shot-people-work-meeting%20(1).jpg" />
          <img src="https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80dc_female-business-executive-giving-speech%20(1)%20(1).jpg" />
          <img src="https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80dd_male-business-executive-giving-speech%20(1).jpg" />
        </ul>
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
