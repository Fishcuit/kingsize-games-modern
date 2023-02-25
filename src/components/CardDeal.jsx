import { WOS } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import { useEffect, useRef, useState } from "react";

const CardDeal = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;
      const scrollPosition = window.scrollY + window.innerHeight;

      if (scrollPosition > sectionTop && scrollPosition < sectionBottom) {
        setIsAnimated(true);
      } else {
        setIsAnimated(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="game-studio" className={layout.sectionReverse} ref={sectionRef}>
      <div className={`${layout.sectionImgReverse} ${isAnimated ? "animate-left" : ""}`}>
        <img src={WOS} alt="billing" className="w-full h-full" />
      </div>

      <div className={`${layout.sectionInfo} ${isAnimated ? "animate-right" : ""}`}>
        <h2 className={`${styles.heading2}`}>Our Studio</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Working with both Vendors and Operators, Kingsize Games uses its extensive institutional knowledge and gaming expertise to craft custom games ranging from traditional land-based Class II and III slots and ETG’s, Lottery and Charity Style Games to market-specific, targeted iGaming slot and table game products.
        </p>

        <Button styles={`mt-10`} />
      </div>
    </section>
  );
};

export default CardDeal;

