import React,{useContext} from 'react'
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import {FcGoogle} from "react-icons/fc";
import { AppContext } from '../firebase/AppContext';

const Template = ({title,desc,img,formType}) => {

  const contextValue=useContext(AppContext);
  return (
    <div className='flex h-[100%] justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0'>
      <div className='w-11/12 max-w-[450px]'>
        <p className='text-redPink-1 text-4xl font-bold leading-[2.375rem]'>{title}</p>
        <p className='text-gray-400 text-xl leading[1.625rem] mt-4'>{desc}</p>
        
        {formType==="login"?
        (<LoginForm/>):
        (<SignupForm/>)}

        <div className=' flex items-center gap-x-2  my-6 w-full'>
            <div className='w-full h-[1px] bg-gray-700'></div>
            <div className='text-gray-700 font-medium leading[1.375rem]'>OR</div>
            <div className='w-full h-[1px] bg-gray-700'></div>
        </div>

        <button className='flex justify-center gap-x-2 items-center w-full border py-2 rounded-md border-gray-700'>
            <FcGoogle/>
            <p className='text-gray-400 font-semibold' onClick={()=>(contextValue.googleSignIn())}>Sign Up With Google</p>
        </button>
      </div>
        
      <div className="relative w-11/12 max-w-[450px] ">
            <img src={img} 
                alt="Students"
                width={558}
                height={490}
                loading="lazy"
                className='absolute -top-4 right-4'
                 />
      </div>

    </div>
  )
}

export default Template
