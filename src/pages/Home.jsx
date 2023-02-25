import React from "react";
import styles from "../style";
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  FeaturedGames,
  Testimonials,
  Hero,
} from "../components";

const Home = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className={`bg-gradient-to-r from-red-900 via-white-700 to-blue-500 ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <Hero />
        </div>
      </div>

      <div className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
        
        <FeaturedGames />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter} slanted-container`}>
        <div className={`${styles.boxWidth}`}>
        <CardDeal />
          
        </div>
      </div>
      
      <div className={`bg-gradient-to-r from-red-900 via-white-700 to-blue-500 ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
