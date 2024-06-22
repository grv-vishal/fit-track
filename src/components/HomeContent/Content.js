import React,{useContext,useRef} from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import { AppContext } from '../firebase/AppContext'
import useVisible from './useVisible';

const Content = () => {
    const{loginState} =useContext(AppContext);
    
    const ref1 = useRef();
    const isVisible1 = useVisible(ref1);

    const ref2 = useRef();
    const isVisible2 = useVisible(ref2);

    const ref3 = useRef();
    const isVisible3 = useVisible(ref3);


  return (
    <div className='w-full mt-5'>
        <div className='flex flex-col justify-center items-center gap-y-3 sm:gap-y-5 py-6 '>
            <div className='flex flex-wrap justify-center items-center  gap-y-1 sm:gap-y-3 gap-x-2 mx-2 text-redPink-2 
            text-3xl min-[490px]:text-[42px] min-[990px]:text-5xl font-bold'>
                <p>Track Your Workouts,</p> 
                <p> Achieve Your Goals</p>
            </div>
            <p className=' text-gray-800 text-[12px] min-[370px]:text-sm min-[545px]:text-xl mt-4 mx-2 min-[655px]:text-2xl'>
            Log your daily exercises and see your progress over time.</p>

            {!loginState && 
            <Link to="/signup">
              <button className='mx-auto bg-redPink-2 text-white py-2 px-3 rounded-md text-xl font-semibold mt-4 hover:bg-redPink-1 
              transition-all duration-400 hover:drop-shadow-2xl hover:text-[22px]'>
               Get Started
              </button>
            </Link>}
        </div>

        <div className='flex flex-wrap justify-center items-center gap-y-8 gap-x-5 max-w-[1280px] mx-auto mt-6'>
            <Link to="/workout">
               <Card index={0} ref={ref1} className={`transition-transform ease-in-out duration-500 ${isVisible1 ? "translate-y-0 opacity-100 hover:scale-110" : "translate-y-44 opacity-0"}`}/>
            </Link>

            <Link to="/nutrition">
               <Card index={1} ref={ref2} className={`transition-transform ease-in-out duration-500 ${isVisible2 ? "translate-y-0 opacity-100 hover:scale-110" : "translate-y-44 opacity-0"}`}/>
            </Link>

            <Link to="/health">
               <Card index={2} ref={ref3}className={`transition-transform ease-in-out duration-500 ${isVisible3 ? "translate-y-0 opacity-100 hover:scale-110" : "translate-y-44 opacity-0"}`} />
            </Link>
            
        </div>

        


      
    </div>
  )
}

export default Content
