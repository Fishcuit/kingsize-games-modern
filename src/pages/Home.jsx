import React from "react";
import styles from "../style";
import {
  CardDeal,
  Clients,
  Footer,
  Navbar,
  FeaturedGames,
  Hero,
  Contact,
} from "../components";

const Home = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className={`flex flex-col ]`}>
        <div className={`${styles.boxWidth} `}>
          <Navbar />
        </div>
        <div
          className={`bg-gradient-to-r from-red-900 via-white-700 to-blue-500 ${styles.flexCenter} relative z-20  text-2xl text-white rounded-xl`}
        >
          <Hero />
        </div>
        {/* <video
          src={under}
          autoPlay
          muted
          loop
          className="absolute z-10 w-auto min-w-full min-h-full max-w-full object-cover "
        /> */}
      </div>

      <div
        className={`${styles.paddingX} ${styles.flexCenter} z-30`}
        style={{ backgroundImage: `url('/src/assets/stars.png')` }}
      >
        <div section id="products" className={`${styles.boxWidth} z-30`}>
          <FeaturedGames />
        </div>
      </div>

      <div
        id="game-studio"
        className={`bg-primary ${styles.paddingX} ${styles.flexCenter} slanted-container`}
      >
        <div className={`${styles.boxWidth}`}>
          <CardDeal />
        </div>
      </div>

      <div
        className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}
        style={{ backgroundImage: `url('/src/assets/stars.png')` }}
      >
        <div className={`${styles.boxWidth}`}>
          <Clients />
        </div>
      </div>

      <div
        id="contact"
        className={` bg-gradient-to-r from-red-900 via-white-700 to-blue-500 ${styles.paddingX} ${styles.flexCenter}`}
      >
        <div className={`${styles.boxWidth}`}>
          <Contact />
        </div>
      </div>

      <div
        className={`bg-gradient-to-r from-red-900 via-white-700 to-blue-500 ${styles.paddingX} ${styles.flexCenter}`}
      >
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
