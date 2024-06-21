import React from 'react'

const SliderCard = ({activeSlide,animationClass}) => {
  return (
    <div className={`w-full relative flex flex-col justify-center items-center ${animationClass}`}>
          <div className="w-full opacity-80 rounded-md border">
            <img src={activeSlide.url} loading='lazy' alt="slide" className="w-full h-auto"/>
          </div>
          <div className="absolute flex flex-col gap-1 md:gap-4 top-0 left-0 pl-14 md:pt-5 lg:pt-20">
            <p className="font-semibold md:font-bold text-xl sm:text-4xl lg:text-6xl text-white uppercase text-center pt-8 ">{activeSlide.title1}</p>
            <p className="font-semibold md:font-bold text-xl sm:text-4xl lg:text-6xl text-redPink-1 uppercase text-center">{activeSlide.title2}</p>
            <p className="text-[12px] sm:text-xl md:text-2xl xl:text-3xl text-white mt-2 md:mt-4 lg:mt-6 font-serif text-center">{activeSlide.description}</p>
          </div>         
    </div>
  )
}

export default SliderCard
