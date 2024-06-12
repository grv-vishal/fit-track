import React,{useContext} from 'react'
import {Link} from 'react-router-dom';
import logo from '../assets/logoFit.png';
import { AppContext } from './firebase/AppContext';
import AppMenu from './AppMenu';
import { FaAlignLeft } from "react-icons/fa";


const NavBar = () => {
    const{loginState,setOpenDrawer,openDrawer}=useContext(AppContext);

  return (
    <div className=" flex justify-between px-6 items-center py-3 bg-redPink-1">

        <div className="flex flex-row justify-center items-center gap-x-5"> 
         {loginState &&
          <button className="flex flex-col gap-y-2" onClick={()=>{
             if(openDrawer)
                setOpenDrawer(false)
             else
                setOpenDrawer(true);
          }}>
            <FaAlignLeft className='text-white text-4xl' />
          </button>}  
          <Link to='/'>
            <div className="flex flex-row justify-center items-center gap-x-2">
            <img src={logo} alt="studyNotion" width={45} height={45} loading="lazy" 
             className="rounded-full"/>
             <div className="text-white text-3xl font-bold">
                 Fit-Track
             </div>
            </div>
            
          </Link>
        </div>

        

        <nav>
            <ul className="hidden sm:flex justify-center items-center gap-3 text-2xl font-semibold text-white">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>

        <div className="flex justify-center items-center gap-6 text-white text-xl font-semibold">
            {!loginState&&
            <Link to="/login">
              <button className="border-white border-2 py-1 px-2 rounded-md hover:bg-white transition-all duration-400
                hover:text-redPink-1">
                Log In
              </button>
            </Link>}

            {!loginState && 
            <Link to="/signup">
               <button className="border-white border-2 py-1 px-2 rounded-md hover:bg-white transition-all duration-400
               hover:text-redPink-1 ">
                  Sign Up
               </button>
            </Link>}

            {loginState && 
            <Link to="">
               <AppMenu/>
            </Link>}

            
        </div>
      
    </div>
  )
}

export default NavBar
