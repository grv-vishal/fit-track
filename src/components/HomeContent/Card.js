import React,{forwardRef} from 'react'
import CardInfo from './CardInfo'

const Card = forwardRef(({index,className},ref) => {
  
    const infoData=CardInfo[index];

  return (
    <div ref={ref} className={`w-[300px] h-[320px] p-4 flex flex-col justify-center items-center gap-y-1 shadow-xl rounded-lg ${className}`}>

        <div className='relative'>
            <img src={infoData.img} alt="" loading='lazy' width="260px" height="70px" className='rounded-sm' />
            <h1 className='absolute left-0 bottom-0 bg-redPink-1 px-2 py-1 text-white rounded-sm text-[16px] font-bold'>{infoData.title}</h1>
        </div>
        <p className='text-[18px] font-semibold px-2 hover:text-redPink-2 transition-all duration-400'>{infoData.subtitle}</p>
        <p className='text-[16px] leading-snug'>{infoData.desc}</p>
      
    </div>
  )
});

export default Card
