import React,{useState,useEffect} from 'react'
import SliderImg from './SliderImg'
import SliderCard from './SliderCard';
import Arrows from './Arrows';

const len=SliderImg.length-1;
const Slider = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [animationClass, setAnimationClass] = useState('animate-slideInL');

    useEffect(() => {
      const interval = setInterval(() => {
        changeSlide(activeIndex === len ? 0 : activeIndex + 1,'R');
      }, 4000);
      return () => clearInterval(interval);
    }, [activeIndex]);

    const changeSlide = (newIndex,direction) => {
      setAnimationClass(direction === 'R' ? 'animate-slideOutL' : 'animate-slideOutR');
      setTimeout(() => {
        setActiveIndex(newIndex);
        setAnimationClass(direction === 'L' ? 'animate-slideInL' : 'animate-slideInL');
      }, 500);
    };

    function leftHandler(){
      changeSlide(activeIndex < 1 ? len : activeIndex - 1,'L');
    }
    function rightHandler(){
      changeSlide(activeIndex === len ? 0 : activeIndex + 1,'R');
    }

  return (
    <div className="w-full relative flex">
        
        <SliderCard activeSlide={SliderImg[activeIndex]} animationClass={animationClass} />
        <Arrows
        prevSlide={leftHandler}
        nextSlide={rightHandler}/>
      
    </div>
  )
}

export default Slider
