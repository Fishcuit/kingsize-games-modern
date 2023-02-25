import React from "react";
import styles from "../style";
import { discount, aaa } from "../assets";
import GetStarted from "./GetStarted";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col  ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>{" "}
          </h1>

        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Of Gaming.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Experience the thrill of winning with our cutting-edge casino games,
          crafted by experts who know how to play to win.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={aaa}
          alt="billing"
          className="w-[130%] h-[110%] relative z-[5] object-bottom absolute inset-0 rounded-lg"
        />

      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <Link to="/products">
          <GetStarted />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
