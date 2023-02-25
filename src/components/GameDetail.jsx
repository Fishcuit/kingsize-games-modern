import React from "react";
import { featuredGamesData } from "../constants";
import GameCard from "./GameCard";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "../style";
import { useParams } from "react-router-dom";

const GameDetail = () => {
  const { id } = useParams();
  const game = featuredGamesData.find((game) => game.id === +id);

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <div className="flex justify-center mt-8">
            <img
              src={game.imageSrc}
              alt={game.title}
              className="w-96 h-56 object-cover"
            />
          </div>
          <a
            href={game.link}
            className="flex justify-center mb-5 text-white font-bold bg-blue-500 rounded-md py-2 px-4 hover:bg-blue-700"
          >
            Play Now
          </a>
          <div className="flex flex-row">
            <div className="w-full">
              <div className="text-white text-lg overflow-hidden font-bold text-center">
                {game.description}
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center md:space-x-4 mt-8">
            <img
              src={game.imageSrc2}
              alt={game.title}
              className="w-96 h-100 object-cover"
            />
            <img
              src={game.imageSrc3}
              alt={game.title}
              className="w-96 h-100 object-cover"
            />
            <img
              src={game.imageSrc4}
              alt={game.title}
              className="w-96 h-100 object-cover"
            />
          </div>
          <div className=" text-3xl text-white font-bold md:text-center mt-8 ">
            Features
          </div>
          <div className="flex flex-col items-center md:flex-row md:justify-center md:space-x-4 mt-4">
            <ul className="list-disc pl-6 font-bold">
              {game.features.map((feature, index) => (
                <li key={index} className="text-white text-base">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default GameDetail;
