import React from "react";
import "../components/gamecard.css";

const GameCard = ({ imageSrc, title, bg, desc, one }) => {
  return (
    <div class="w-[300px] h-[400px] bg-transparent cursor-pointer group perspective rounded-xl">
      <div class="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
        <div
          class={`rounded-xl overflow-hidden shadow-md absolute backface-hidden border-2 w-full h-full ${bg}`}
        >
          <img src={imageSrc} class="w-full h-full" />
        </div>
        <div class="rounded-xl overflow-hidden shadow-md absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-400 overflow-hidden">
          <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full object-cover opacity-50" style={{ zIndex: -1 }} >
            <img
              src={one}
              class="w-full h-full "
              style={{ zIndex: -1 }}
            />
            <button
                class="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 left-20 scale-0 group-hover:scale-125"
              >
                Learn More
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;

//const GameCard = ({ imageSrc, title, bg }) => {
//  return (
//    <div className={`rounded-xl overflow-hidden shadow-md ${bg} bg-no-repeat bg-center bg-cover`}>
//      <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
//    </div>
//  );
//}
//
//export default GameCard;
