import React,{useContext} from 'react'
import { FaAngleDoubleLeft } from "react-icons/fa";
import RunCircleIcon from '@mui/icons-material/RunCircle';
import { SlCalender } from "react-icons/sl";
import { Link } from 'react-router-dom';
import { AppContext } from './firebase/AppContext';
import { LuLogOut } from "react-icons/lu";
import { FaHome } from "react-icons/fa";
import { MdOutlineContactPhone } from "react-icons/md";
import { IoIosInformationCircle } from "react-icons/io";


const Drawer = () => {
    const {setOpenDrawer,logOut}=useContext(AppContext);
  return (
    <div className='sticky left-0 h-[100vh] w-[250px] bg-gray-100 flex flex-col gap-y-4 border-r-2 px-2'>
 
            <button className='flex justify-end items-center text-redPink-2 text-3xl pt-4 pr-5' onClick={()=>setOpenDrawer(false)}>
                  <FaAngleDoubleLeft />
            </button>
        
            <div className='w-full h-[2px] bg-gray-400'></div>

           
            <Link to="/">
                <button className='flex  flex-row sm:hidden justify-start pl-5 text-redPink-2 text-[18px] sm:text-xl font-semibold items-center gap-x-4 w-full py-2 hover:shadow-md hover:bg-redPink-5 transition-all duration-200'>
                    <FaHome />
                    <p>Home</p>
                </button>
            </Link>
           
            <Link to="/dashboard">
                <button className='flex justify-start pl-5 items-center text-redPink-2 text-[18px] sm:text-xl font-semibold gap-x-4 w-full py-2 hover:shadow-md hover:bg-redPink-5 transition-all duration-200 '>
                <SlCalender />
                 <p>Workouts</p> 
                </button>
            </Link>
            <Link to="">
                <button className='flex justify-start pl-5 text-redPink-2 text-[18px] sm:text-xl font-semibold items-center gap-x-4 w-full py-2 hover:shadow-md hover:bg-redPink-5 transition-all duration-200'>
                    <RunCircleIcon/>
                   <p>Practice Exercises</p>
                </button>
            </Link>

            
            <div className='w-full h-[1px] bg-gray-400'></div> 

            <Link to="/about">
                <button className='flex  flex-row sm:hidden justify-start pl-5 text-redPink-2 text-[18px] sm:text-xl font-semibold items-center gap-x-4 w-full py-2 hover:shadow-md hover:bg-redPink-5 transition-all duration-200'>
                    <IoIosInformationCircle />
                    <p>About</p>
                </button>
            </Link>

            <Link to="/contact">
                <button className='flex  flex-row sm:hidden justify-start pl-5 text-redPink-2 text-[18px] sm:text-xl font-semibold items-center gap-x-4 w-full py-2 hover:shadow-md hover:bg-redPink-5 transition-all duration-200'>
                   <MdOutlineContactPhone />
                    <p>Contact Us</p>
                </button>
            </Link>

            <Link to="/">
              <button className='flex justify-start pl-5 text-redPink-1 text-[18px] sm:text-xl font-semibold items-center gap-x-4 w-full py-2 hover:shadow-md hover:bg-redPink-5 transition-all duration-200' onClick={() => {logOut()}}>
               <LuLogOut />
               <p>Logout</p>
              </button>

            </Link>

            
      
    </div>
  )
}

export default Drawer
