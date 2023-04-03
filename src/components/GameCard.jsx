import React from "react";


const GameCard = ({ imageSrc, title, bg, desc, one }) => {
  return (
    <div className="w-[400px] h-[500px] bg-transparent cursor-pointer group perspective rounded-xl">
      <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
        <div
          className={`rounded-xl overflow-hidden shadow-md absolute backface-hidden border-2 w-full h-full ${bg}`}
        >
          <img src={imageSrc} className="w-full h-full" />
        </div>
        <div className="rounded-xl overflow-hidden shadow-md absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-400 overflow-hidden">
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full object-cover opacity-1" style={{ zIndex: -1 }} >
            <img
              src={one}
              className="w-full h-full "
              
            />

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
