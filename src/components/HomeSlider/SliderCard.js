import React from 'react'

const SliderCard = ({activeSlide,activeIndex}) => {
  return (
    <div className="w-[100%] relative flex flex-col justify-center items-center">
          <div className="w-[100%] opacity-80 rounded-md border">
            <img src={activeSlide.url} loading='lazy'/>
          </div>
          <div className="absolute text-white flex flex-col gap-3 items-center top-[177px] left-[130px]">
          <p className="font-bold text-6xl text-white uppercase">{activeSlide.title1}</p>
          <p className="font-bold text-6xl text-redPink-1 uppercase">{activeSlide.title2}</p>
          <p className="text-2xl text-white mt-10 font-serif">{activeSlide.description}</p>
          </div>
          
    </div>
  )
}

export default SliderCard
