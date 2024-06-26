import React,{useContext} from 'react'
import {Link} from 'react-router-dom';
import logo from '../assets/logoFit.png';
import { AppContext } from './firebase/AppContext';
import AppMenu from './AppMenu';
import { FaAlignLeft } from "react-icons/fa";
import Contact from '../Pages/Contact';


const NavBar = () => {
    const{loginState,setOpenDrawer,openDrawer,setOpenContact,scrollToSection,sectionRef}=useContext(AppContext);

  return (

    <div className='sticky top-0 z-50'>
      <div className= {`flex px-4 min-[600px]:px-6 items-center py-3 bg-redPink-1 shadow-lg ${loginState ? "justify-between" : "min-[900px]:justify-evenly justify-between"} `}>

        <div className="flex flex-row justify-center items-center gap-x-5"> 

         <button className={`${loginState ? "flex flex-col gap-y-2" : "flex flex-col gap-y-2 min-[900px]:hidden"}`} onClick={()=>{
          if(openDrawer)
            setOpenDrawer(false)
          else
            setOpenDrawer(true);
         }}>
         <FaAlignLeft className='text-white text-4xl' />
        </button>

        <Link to='/'>
         <div className="flex flex-row justify-center items-center gap-x-2">
          <img src={logo} alt="studyNotion" loading="lazy" 
           className="rounded-full w-[38px] h-[38px] min-[600px]:w-[45px] min-[600px]:h-[45px]"/>
          <div className="text-white text-[26px] min-[600px]:text-3xl font-bold">
           Fit-Track
           </div>
         </div>
       </Link>
       </div>



       <nav>
        <ul className="hidden min-[900px]:flex justify-center items-center gap-4 lg:gap-5 text-[22px] lg:text-2xl font-semibold text-white">
           <li>
            <Link to="/">Home</Link>
           </li>
           <li>
            <Link to="">Exercises</Link>
           </li>
           <li>
            <Link to="/">
            <button onClick={()=>scrollToSection(sectionRef)}>
              Blog
            </button>
            </Link>
           </li>
           <li>
            <button onClick={()=>setOpenContact(true)}>
                Contact
            </button>
           </li>
           
        </ul>
       </nav>

       {!loginState &&
       <div className="hidden min-[720px]:flex justify-center items-center gap-6 text-white text-xl font-semibold">
   
        <Link to="/login">
         <button className="border-white border-2 py-1 px-2 rounded-md hover:bg-white transition-all duration-400
         hover:text-redPink-1">
         Log In
         </button>
        </Link>

   
        <Link to="/signup">
          <button className="border-white border-2 py-1 px-2 rounded-md hover:bg-white transition-all duration-400
         hover:text-redPink-1 ">
           Sign Up
         </button>
        </Link>        
       </div>}

       {loginState && 
        <Link to="">
          <AppMenu/>
        </Link>}

      </div>

      <Contact/>

    </div>
    
  )
}

export default NavBar
