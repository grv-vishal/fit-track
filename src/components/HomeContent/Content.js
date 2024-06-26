import React,{useContext,useRef} from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import { AppContext } from '../firebase/AppContext'
import useVisible from '../useVisible';
import loginphone from './loginMockup.png';
import dashboard from './workoutMockup.png';

const Content = () => {
    const{loginState,sectionRef} =useContext(AppContext);
    
    const ref1 = useRef();
    const isVisible1 = useVisible(ref1);

    const ref2 = useRef();
    const isVisible2 = useVisible(ref2);

    const ref3 = useRef();
    const isVisible3 = useVisible(ref3);

    const ref4=useRef();
    const isVisible4=useVisible(ref4);

    const ref5=useRef();
    const isVisible5=useVisible(ref5);


  return (
    <div className='w-full'>
        <div className='flex flex-col justify-center items-center gap-y-3 sm:gap-y-5 py-6 bg-white'>
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
              transition-all duration-400 hover:drop-shadow-2xl'>
               Get Started
              </button>
            </Link>}
        </div>
        
        <div ref={ref5} className={`mx-auto max-w-[1080px] mt-14 transition-transform ease-in-out duration-500
           ${isVisible5 ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"}`}>
          <div className='font-semibold py-8 px-2 text-5xl sm:text-6xl text-center text-redPink-1 font-serif drop-shadow-md decoration-slate-800'>
            Features
          </div>
          <div className='bg-white flex flex-col justify-center items-center gap-y-8 px-10 py-16 mt-4 drop-shadow-md mx-4'>
            <div className='flex flex-col min-[880px]:flex-row justify-evenly items-center gap-x-2 gap-y-4'>
             <div>
              <img src={loginphone} alt="" className='w-[200px] min-[400px]:w-[250px] min-[550px]:w-[300px] min-[1280px]:w-[400px] h-[250px] min-[400px]:h-[300px] min-[550px]:h-[400px] min-[1280px]:h-[500px] hover:scale-105 transition-all duration-300'/>
             </div>
             <div className='max-w-[450px] text-black flex flex-col justify-center items-start'>
              <h4 className='font-semibold text-[16px] min-[400px]:text-[18px] uppercase text-gray-700'>User Authentication</h4>
              <h2 className='font-bold uppercase text-xl min-[400px]:text-[22px] min-[550pxpx]:text-2xl pb-3'>Secure Sign-up and Login</h2>
              <p className='text-[15px] min-[400px]:text-[16px] min-[550px]:text-[18px]'>Provides a secure and personalized experience through robust user authentication features 
                that allows users to safely create and manage their accounts. It also provides a password recovery option 
                in case users forget their password.
              </p>
             </div>
            </div>

            <div className='flex flex-col-reverse min-[880px]:flex-row justify-evenly items-center gap-x-2 gap-y-4'>
             <div className='max-w-[450px] text-black flex flex-col justify-center items-start'>
              <h4 className='font-semibold text-[16px] min-[400px]:text-[18px] uppercase text-gray-700'>Real-Time Updates</h4>
              <h2 className='font-bold uppercase text-xl min-[400px]:text-[22px] min-[550px]:text-2xl pb-3'>Comprehensive Workout Logging</h2>
              <p className='text-[15px] min-[400px]:text-[16px] min-[550px]:text-[18px]'>Allows users to log daily workouts with detailed exercises, sets, reps, and weights and
                view summaries of their recent workouts and fitness goals,
                ensuring that their personal data and workout informations are securely encrypted and stored.
              </p>
             </div>

             <div>
              <img src={dashboard} alt="" className='w-[200px] min-[400px]:w-[250px] min-[550px]:w-[300px] min-[1280px]:w-[400px] h-[250px] min-[400px]:h-[300px] min-[550px]:h-[400px] min-[1280px]:h-[500px] hover:scale-105 transition-all duration-300'/>
             </div>

            </div>
          </div>
        </div>

        

        <div ref={sectionRef} className=' max-w-[1280px] mx-auto mt-6'>
          <div ref={ref4} className={`py-8 px-2 text-5xl sm:text-6xl text-center text-redPink-1 drop-shadow-md decoration-slate-800 font-serif font-semibold transition-transform ease-in-out duration-700
            ${isVisible4 ? "opacity-100" : "opacity-0"}` }>
             Latest Fitness Article
          </div>
          <div className='flex flex-wrap justify-center items-center gap-y-8 gap-x-5 '>
            <Link to="/workout">
               <Card index={0} ref={ref1} className={`transition-transform ease-in-out duration-700 ${isVisible1 ? "translate-y-0 opacity-100 hover:scale-110" : "translate-y-24 opacity-0"}`}/>
            </Link>

            <Link to="/nutrition">
               <Card index={1} ref={ref2} className={`transition-transform ease-in-out duration-700 ${isVisible2 ? "translate-y-0 opacity-100 hover:scale-110" : "translate-y-24 opacity-0"}`}/>
            </Link>

            <Link to="/health">
               <Card index={2} ref={ref3}className={`transition-transform ease-in-out duration-700 ${isVisible3 ? "translate-y-0 opacity-100 hover:scale-110" : "translate-y-24 opacity-0"}`} />
            </Link>
            
          </div>
        </div>

        


      
    </div>
  )
}

export default Content
