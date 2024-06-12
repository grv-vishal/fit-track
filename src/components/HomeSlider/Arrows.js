import React from "react";
import { FaCircleChevronLeft,FaCircleChevronRight } from "react-icons/fa6";

function Arrows({ prevSlide, nextSlide }) {
  return (
    <div className="w-full absolute top-[400px]">
      <button className="text-7xl text-redPink-1 hover:text-8xl transition-all duration-300 absolute left-[45px] p-2" onClick={prevSlide}>
      <FaCircleChevronLeft/>
      </button>
      <button className="text-7xl text-redPink-1 hover:text-8xl transition-all duration-300 absolute right-[47px] p-2" onClick={nextSlide}>
      <FaCircleChevronRight/>
      </button>
    </div>
  );
}

export default Arrows;