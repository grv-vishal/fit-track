import React from 'react'
import {Link} from 'react-router-dom';
import { MdCopyright } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="pt-7 pb-12 ">
      <div className="py-10">
        <ul className="flex justify-center items-center gap-2 text-xl  text-gray-600">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
          </ul>
      </div>
         
      <div className="flex justify-center items-center text-sm sm:text-xl  gap-1 text-gray-600 mb-6">
        <p>Copyright</p>
         <MdCopyright/>
         <p>2024, Fit-Track. All rights reserved</p>
      </div>
      <div className='flex justify-center items-center gap-x-4 text-xl'>
        <button>
           <FaInstagram className='' />
        </button>

        <button>
            <FaXTwitter className='' />
        </button>
        
        <button>
           <FaLinkedinIn className='' />
        </button>
      
     
      </div>
    </div>
  )
}

export default Footer
