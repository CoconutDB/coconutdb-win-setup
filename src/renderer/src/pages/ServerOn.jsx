import React from 'react'
import { IoIosHome } from "react-icons/io";
import { Link } from 'react-router-dom';
const ServerOn = () => {
  return (
    <div className='bg-[#24292e] min-h-screen'>
        <div className="mx-32 text-white py-20">
            <Link to={'/'}>
                <div className="flex">
                    <IoIosHome className='w-6 h-auto'/>
                    <p className="text-sm pt-1">Back to Welcome</p>
                </div>
            </Link>
            <h1 className="mt-4">Configure Backend</h1>
        </div>
    </div>
  )
}

export default ServerOn