import React, { useState,useContext } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {Link} from 'react-router-dom';
import { AppContext } from '../firebase/AppContext';
import ForgetPassword from './ForgetPassword';


const LoginForm = () => {

  const contextValue=useContext(AppContext);

  const formData=contextValue.logInData;
  const setFormData=contextValue.setLogInData;
  
  const[showPassword,setShowPassword]=useState(false);

  function changeHandler(event){
    setFormData((prev)=>({
      ...prev,[event.target.name]:[event.target.value]
    }))
  }

  function submitHandler(event){
    event.preventDefault();
    const emailStr=String(formData.email);
    const passwordStr=String(formData.password);

    contextValue.logIn(emailStr,passwordStr);
    
  }

  //forgetPassword
  const[open,setOpen]=useState(false);

  return (
    <div className='relative'>

      <form onSubmit={submitHandler}  
       className='flex flex-col w-full mt-4 gap-y-5'
      >
        <label className='w-full'>
          <p className='text-black mb-2 leading-[1.375rem]'>Email Address<sup className='text-redPink-8'>*</sup></p>
       
         <input 
          required
          type="email" 
          id='email'
          name='email'
          value={formData.email}
          onChange={changeHandler}
          placeholder='Enter Your Email'
          className='bg-[#e7eef1] py-3 px-2 w-full rounded-md text-black'
        />
        </label>

        <label className='relative w-full'>
          <p className='text-black mb-2 leading-[1.375rem]'>Password<sup className='text-redPink-8'>*</sup></p>
         <input 
          required
          type= {showPassword ? ("text") : ("password")}
          name="password"
          value={formData.password}
          onChange={changeHandler} 
          placeholder='Enter Your Password'
          className='bg-[#e7eef1] py-3 px-2 w-full rounded-md text-black '
         />
         <span onClick={()=>setShowPassword((prev)=>!prev)}
          className='absolute right-3 top-[45px] text-gray-600 cursor-pointer'
         >
          {showPassword ? 
          (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):
          (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
         </span>
        </label> 

        <div className='flex flex-col gap-y-4 sm:flex-row sm:justify-between -mt-3 mx-1'>
          <Link to="">
            <p className='text-blueLight-azure text-[14px]' onClick={()=>setOpen(true)}>
             Forgot Password
            </p>
          </Link>

          <Link to="/signup">
            <p className='text-[#7ab4e3] text-[15px] text-center'>
             Don't have an account? Sign Up
            </p>
          </Link>
        </div>

        <button className='bg-redPink-8 mt-2 sm:mt-5 py-2 rounded-md font-medium'>
          Sign In
        </button>
      </form>
      
      <ForgetPassword open={open} setOpen={setOpen}/>
       
    </div>
    
  )
}

export default LoginForm
