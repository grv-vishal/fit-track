import React,{useState,useEffect} from 'react'
import SliderImg from './SliderImg'
import SliderCard from './SliderCard';
import Arrows from './Arrows';


const len=SliderImg.length-1;
const Slider = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
      }, 4000);
      return () => clearInterval(interval);
    }, [activeIndex]);

    function leftHandler(){
      setActiveIndex(activeIndex < 1 ? len : activeIndex - 1);
    }
    function rightHandler(){
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }

  return (
    <div className="w-full relative flex">
        
        <SliderCard activeSlide={SliderImg[activeIndex]} activeIndex={activeIndex}/>
        <Arrows
        prevSlide={leftHandler}
        nextSlide={rightHandler}/>
      
    </div>
  )
}

export default Slider
