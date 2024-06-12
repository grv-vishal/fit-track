import React, { useState,useContext } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {toast} from "react-hot-toast"
import { Link } from 'react-router-dom';
import { AppContext } from '../firebase/AppContext';

const SignupForm = () => {

  const contextValue=useContext(AppContext);

  const formData=contextValue.signUpData;
  const setFormData=contextValue.setSignUpData;
  const initialUser={
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:"",
  }


  const[showPassword,setShowPassword]=useState(false);
  const[cnfShowPassword,setCnfShowPassword]=useState(false);

  function changeHandler(event){
    setFormData((prev)=>(
      {
        ...prev,[event.target.name]:[event.target.value]
      }
    ));
  }

  function submitHandler(event) {
    event.preventDefault();
    const emailStr=String(formData.email);
    const passwordStr=String(formData.password);

    if(passwordStr !== String(formData.confirmPassword)) {
      toast.error("Passwords do not match");
      setFormData((prev)=>(
        {
          ...prev,password:"",confirmPassword:""
        }
      ));
      return ;
    }
    contextValue.signUp(emailStr,passwordStr);
    
  }

  return (
      <form onSubmit={submitHandler}
      className='flex flex-col w-full mt-4 gap-y-5'
      > 

        <div className='flex gap-x-4 w-full'> 
          <label className='w-full'>
            <p className='text-black mb-2 leading-[1.375rem]'>First Name<sup className='text-redPink-8'>*</sup></p>
            <input 
              required
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={changeHandler}
              placeholder='Enter First Name'
              className='bg-[#e7eef1] py-3 px-2 w-full rounded-md text-black'
            />
          </label>

          <label className='w-full'>
            <p className='text-black mb-2 leading-[1.375rem]'> Last Name<sup className='text-redPink-8'>*</sup></p>

            <input 
               required
               type="text" 
               name="lastName"
               value={formData.lastName}
               onChange={changeHandler}
               placeholder='Enter Last Name'
               className='bg-[#e7eef1] py-3 px-2 w-full rounded-md text-black'
            />
          </label>
        </div>

        <label>
          <p className='text-black mb-2 leading-[1.375rem]'>Email Address<sup className='text-redPink-8'>*</sup></p>

          <input
             required 
             type="email" 
             name='email'
             value={formData.email}
             onChange={changeHandler}
             placeholder='Enter Email Address'
             className='bg-[#e7eef1] py-3 px-2 w-full rounded-md text-black'
          />
        </label>


        <div className='flex gap-x-4 w-full'>

          <label className='relative w-full'>
            <p className='text-black mb-2 leading-[1.375rem]'>Create Password<sup className='text-redPink-8'>*</sup></p>
            <input 
              required
              type={showPassword ? ("text") : ("password")}
              name="password"
              value={formData.password}
              onChange={changeHandler}
              placeholder="Enter Password" 
              className='bg-[#e7eef1] py-3 px-2 w-full rounded-md text-black'
            />

            <span onClick={()=>setShowPassword((prev)=>!prev)}
            className='absolute right-3 top-[45px] text-gray-600 cursor-pointer'
            >
              {showPassword ? 
               (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):
               (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
            </span>
          </label>

          <label className='relative w-full'>
            <p className='text-black mb-2 leading-[1.375rem]'>Confirm Password<sup className='text-redPink-8'>*</sup></p>
            <input 
              required
              type={cnfShowPassword ? ("text") : ("password")}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={changeHandler}
              placeholder="Confirm Password" 
              className='bg-[#e7eef1] py-3 px-2 w-full rounded-md text-black'
            />

            <span onClick={()=>setCnfShowPassword((prev)=>!prev)}
            className='absolute right-3 top-[45px] text-gray-600 cursor-pointer'>
              {cnfShowPassword ? 
               (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):
               (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
            </span>
          </label>
        </div>
        <Link to="/login">
            <p className='text-[#7ab4e3] text-[15px] -m-2 px-3'>
              Already have an account? Sign In
            </p>
        </Link>

        <button className='bg-redPink-8 text-white mt-6 py-2 rounded-md font-medium'>
          Create Account
        </button>
      </form>
    
  )
}

export default SignupForm
