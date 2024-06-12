import React from 'react'
import {Link} from 'react-router-dom';
import { MdCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <div className="my-8">
      <div className="py-10">
        <ul className="flex justify-center items-center gap-2 text-xl  text-gray-600">
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
      </div>
         
      <div className="flex justify-center items-center gap-1 text-gray-600 mb-6">
        <p>Copyright</p>
         <MdCopyright/>
         <p>2024, Fit-Track. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
