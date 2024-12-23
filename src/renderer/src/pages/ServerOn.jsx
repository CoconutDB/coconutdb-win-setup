import React from 'react'
import { IoIosHome } from "react-icons/io";
import { Link } from 'react-router-dom';
const ServerOn = () => {
  return (
    <div className='bg-[#24292e] min-h-screen'>
        <div className="mx-32 text-white py-14">
            <Link to={'/'}>
                <div className="flex">
                    <IoIosHome className='w-6 h-auto'/>
                    <p className="text-sm pt-1">Back to Welcome</p>
                </div>
            </Link>
            <h1 className="mt-4 pb-2">Configure Backend</h1>
            <hr className='w-1/2 '/>

            <form method="post">
                <p className="mt-4">Enter Backend Running Port (Server Port)</p>
                <input type="number" name="" placeholder='Server Port' className='pl-2 bg-transparent border border-white text-white w-full h-12 rounded mt-2' id="" />

                <button type='submit' className='mt-4 bg-green-600 text-white py-2 px-8 rounded'>Run</button>
            </form>

            <hr className='border-t border-white my-4'/>


            <div className="">
                <h1 className="">Server : <span className='text-green-500 text-white font-semibold'>Online</span></h1>
                <h1 className="">Server Run on Port : <span>5000</span></h1>
            </div>
        </div>
    </div>
  )
}

export default ServerOn