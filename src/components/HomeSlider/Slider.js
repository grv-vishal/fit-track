import React,{useState,useEffect} from 'react'
import CardInfo from './CardInfo'
import SliderCard from './SliderCard';
import { FaCircleChevronLeft,FaCircleChevronRight } from "react-icons/fa6";

const len=CardInfo.length-1;
const Slider = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
      }, 3000);
      return () => clearInterval(interval);
    }, [activeIndex]);


    function leftHandler(){
      setActiveIndex(activeIndex < 1 ? len : activeIndex - 1);
    }
    function rightHandler(){
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }

  return (
    <div className="w-full relative flex overflow-hidden">

      <div
        className={`flex transition ease-in-out duration-400`}
        style={{
          transform: `translateX(-${activeIndex * 100}%)`,
        }}
      >
        {CardInfo.map((s,i) => {
          return <SliderCard key={i} activeSlide={s}/>;
        })}
      </div>


      <div className=" opacity-0 sm:opacity-100 absolute top-0 h-full w-full justify-between items-center flex text-white sm:px-10 text-3xl">
        <button onClick={leftHandler} className="text-[42px] min-[930px]:text-6xl min-[1100px]:text-7xl text-gray-400 opacity-50 hover:text-6xl hover:sm:text-7xl hover:lg:text-8xl ease-in-out
        transition-all duration-300">
        <FaCircleChevronLeft/>
        </button>
        <button onClick={rightHandler} className="text-[42px] min-[930px]:text-6xl min-[1100px]:text-7xl text-gray-400 opacity-50 hover:text-6xl hover:sm:text-7xl hover:lg:text-8xl 
        transition-all ease-in-out duration-300 ">
        <FaCircleChevronRight/>
        </button>
      </div>
        

      <div className="absolute bottom-0 py-2 sm:py-4 flex justify-center gap-2 sm:gap-3 w-full">
         {CardInfo.map((s, i) => {
          return (
            <div
              onClick={() => {
                setActiveIndex(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-3 h-3 sm:w-5 sm:h-5 cursor-pointer  ${
                i === activeIndex ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
      
    </div>
  )
}

export default Slider
