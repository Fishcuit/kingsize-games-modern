import React, { useEffect, useRef } from "react";
import { featuredGamesData } from "../constants";
import GameCard from "./GameCard";
import { Link } from "react-router-dom";

const FeaturedGames = () => {
  return (
    <section id="products">
      <div className=" p-10">
        <h2 className="text-5xl text-gradient1 font-bold mb-7 text-center">Featured Games</h2>
        <div className="flex flex-wrap justify-center md:grid-cols-3 gap-5">
          {featuredGamesData.map((game) => (
            <Link to={`/games/${game.id}`} key={game.id}>
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
