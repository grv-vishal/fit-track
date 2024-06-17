import React from "react";
import { FaCircleChevronLeft,FaCircleChevronRight } from "react-icons/fa6";

function Arrows({ prevSlide, nextSlide }) {
  return (
    <div className="w-full absolute top-2/3 md:top-1/2 transform -translate-y-2/3 md:-translate-y-1/2 flex justify-between px-4">
      <button className="text-[42px] sm:text-6xl lg:text-7xl text-redPink-1 hover:text-6xl hover:sm:text-7xl hover:lg:text-8xl 
      transition-all duration-300" onClick={prevSlide}>
      <FaCircleChevronLeft/>
      </button>
      <button className="text-[42px] sm:text-6xl lg:text-7xl text-redPink-1 hover:text-6xl hover:sm:text-7xl hover:lg:text-8xl 
      transition-all duration-300 " onClick={nextSlide}>
      <FaCircleChevronRight/>
      </button>
    </div>
  );
}

export default Arrows;