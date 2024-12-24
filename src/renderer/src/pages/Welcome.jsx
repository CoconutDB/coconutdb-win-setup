import React from 'react'
import CoconutImg from '../assets/CoconutDB.png'
import { Link } from 'react-router-dom'

const Welcome = () => {

  return (
    <div className='bg-[#24292e] min-h-screen'>
        <div className="mx-32 text-white py-16">
            <h1 className="text-3xl text-center font-semibold">Coconut DB</h1>

            <center><img src={CoconutImg} alt="" className='mt-16'/></center>

            <div className="text-center mt-16">
                <h1 className="">Welcome to</h1>
                <p className="">South Asian First NoSQL Document Oriented Database Program</p>
            </div>

            <div className="my-14">
                <center>
                    <Link to={'dev'}>
                        <button className='bg-blue-600 rounded text-white py-2 px-4'>Quick Start</button>
                    </Link>
                </center>
            </div>

            <div className="text-center text-sm">
                v1.0.0-beta1 23 December 2024 | Developed and Maintained by <span className='text-blue-500'>JehanKandy</span>
            </div>

        </div>
    </div>
  )
}

export default Welcome