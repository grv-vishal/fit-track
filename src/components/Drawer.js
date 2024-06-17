import React,{useContext} from 'react'
import { FaAngleDoubleLeft } from "react-icons/fa";
import RunCircleIcon from '@mui/icons-material/RunCircle';
import { SlCalender } from "react-icons/sl";
import { Link } from 'react-router-dom';
import { AppContext } from './firebase/AppContext';
import { LuLogOut,LuLogIn } from "react-icons/lu";
import { FaHome } from "react-icons/fa";
import { MdOutlineContactPhone } from "react-icons/md";
import { IoIosInformationCircle } from "react-icons/io";


const Drawer = () => {
    const {setOpenDrawer,logOut,loginState,openDrawer}=useContext(AppContext);
  return (
    <div className={`fixed left-0 top-17 z-50 h-screen w-64 bg-gray-100 flex flex-col gap-y-4 border-r-2 px-2
    transform transition-transform duration-300 ease-in-out ${
        openDrawer ? 'translate-x-0' : '-translate-x-full'}`}>
 
            <button className='flex justify-end items-center text-redPink-2 text-3xl pt-4 pr-5' onClick={()=>setOpenDrawer(false)}>
                  <FaAngleDoubleLeft />
            </button> 
        
            <div className='w-full h-[2px] bg-gray-400'></div>

           
            <Link to="/">
                <button className='flex  flex-row min-[720px]:hidden justify-start pl-5 text-redPink-2 text-[18px] sm:text-xl font-semibold items-center gap-x-4 w-full py-2 hover:shadow-md hover:bg-redPink-5 transition-all duration-200'
                onClick={()=>setOpenDrawer(false)}>
                    <FaHome />
                    <p>Home</p>
                </button>
            </Link>
           
            {loginState &&
            <Link to="/dashboard">
                <button className='flex justify-start pl-5 items-center text-redPink-2 text-[18px] sm:text-xl font-semibold gap-x-4 w-full py-2 hover:shadow-md hover:bg-redPink-5 transition-all duration-200 '
                onClick={()=>setOpenDrawer(false)}>
                <SlCalender />
                 <p>Daily Workouts</p> 
                </button>
            </Link>}

            
            <Link to="">
                <button className='flex justify-start pl-5 text-redPink-2 text-[18px] sm:text-xl font-semibold items-center gap-x-4 w-full py-2 hover:shadow-md hover:bg-redPink-5 transition-all duration-200'
                onClick={()=>setOpenDrawer(false)}>
                    <RunCircleIcon/>
                   <p>Exercises</p>
                </button>
            </Link>

            
            <div className='w-full h-[1px] bg-gray-400'></div>
            
            <Link to="/about">
                <button className='flex  flex-row min-[720px]:hidden justify-start pl-5 text-redPink-2 text-[18px] sm:text-xl font-semibold items-center gap-x-4 w-full py-2 hover:shadow-md hover:bg-redPink-5 transition-all duration-200'
                onClick={()=>setOpenDrawer(false)}>
                    <IoIosInformationCircle />
                    <p>About</p>
                </button>
            </Link>

            <Link to="/contact">
                <button className='flex  flex-row min-[720px]:hidden justify-start pl-5 text-redPink-2 text-[18px] sm:text-xl font-semibold items-center gap-x-4 w-full py-2 hover:shadow-md hover:bg-redPink-5 transition-all duration-200'
                onClick={()=>setOpenDrawer(false)}>
                   <MdOutlineContactPhone />
                    <p>Contact Us</p>
                </button>
            </Link>

            {!loginState &&
            <Link to="/login">
                <button className='flex justify-start pl-5 items-center text-redPink-2 text-[18px] sm:text-xl font-semibold gap-x-4 w-full py-2 hover:shadow-md hover:bg-redPink-5 transition-all duration-200 '
                onClick={()=>setOpenDrawer(false)}>
                <LuLogIn />
                 <p>Log In</p> 
                </button>
            </Link>}

            {loginState && 
            <Link to="/">
              <button className='flex justify-start pl-5 text-redPink-2 text-[18px] sm:text-xl font-semibold items-center gap-x-4 w-full py-2 hover:shadow-md hover:bg-redPink-5 transition-all duration-200' onClick={() => {logOut()}}>
               <LuLogOut />
               <p>Logout</p>
              </button>
            </Link>}

            
      
    </div>
  )
}

export default Drawer
