import { WOS } from "../assets";
import styles, { layout } from "../style";
import { useEffect, useRef, useState } from "react";

const CardDeal = () => {
  return (
    <section className={layout.sectionReverse}>
      <div className="custom-shape-divider-top-1677614977">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className={`${layout.sectionImgReverse} `}>
        <img src={WOS} alt="about" className="w-full h-full fade-in-image \" />
      </div>

      <div className={`${layout.sectionInfo} fade-in-text`}>
        <h2 className={`${styles.heading2} mt-20`}>Our Studio</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Kingsize Games is a leading game development company, serving both
          Vendors and Operators with exceptional creativity and unmatched gaming
          expertise. With our institutional knowledge and dedication to the
          craft, we take pride in creating bespoke games that cater to the
          diverse needs of our clients.
        </p>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our game portfolio spans across a range of traditional land-based
          Class II and III slots and ETG's, Lottery and Charity Style Games, and
          market-specific, targeted iGaming slot and table game products. We
          know what it takes to craft engaging and thrilling games that keep
          players hooked, and we're committed to delivering innovative and
          exciting gaming experiences that capture the hearts and minds of
          players around the world.
        </p>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          At Kingsize Games, we don't just develop games, we create thrilling
          adventures that take players on a journey through worlds of
          excitement, entertainment, and endless possibilities. Join us today
          and let's build the future of gaming together!
        </p>
      </div>
      
    </section>
  );
};

export default CardDeal;
