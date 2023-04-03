import React from "react";
import styles from "../style";
import { kitty } from "../assets";

const Hero = () => {
  return (
    <section id="" className={`flex md:flex-row flex-col  ${styles.paddingY}`}>
      <div
        className={`${styles.flexStart} flex-col xl:pr-20  sm:px-16 py-20 text-center`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins  ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-pink-500 ">Generation</span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins  ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full ">
          Of Gaming.
        </h1>
        <p className={`text-center ${styles.paragraph} max-w-[660px] mt-5`}>
          Experience the thrill of winning with our cutting-edge casino games,
          crafted by experts who know how to play to win.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter}  md:my-0 my-10 relative `}
      >
        <img
          src={kitty}
          alt="sorceress"
          className="w-full h-auto relative z-5 object-bottom rounded-lg "
        />
      </div>
    </section>
  );
};

export default Hero;
