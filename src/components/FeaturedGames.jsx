import React, { useEffect, useRef } from "react";
import { featuredGamesData } from "../constants";
import GameCard from "./GameCard";
import { Link } from "react-router-dom";
import styles from "../style";

const FeaturedGames = () => {
  return (
    <section className={`${styles.flexCenter}  flex flex-col z-30`}>
      <div className=" py-40">
        <h1 className="font-poppins text-7xl text-primary  mb-7 text-center">
          Featured Games
        </h1>
        <hr className="w-1/4 mb-7 mx-auto border-primary border-2" />
        <div className="flex flex-wrap justify-center md:grid-cols-3 gap-5">
          {featuredGamesData.map((game) => (
            <Link to={`${game.link}`} key={game.id}>
              <GameCard
                imageSrc={game.imageSrc}
                bg={game.bg}
                title={game.title}
                desc={game.description}
                one={game.imageSrc2}
              />
            </Link>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default FeaturedGames;
