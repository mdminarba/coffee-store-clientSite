import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
        
        <h1 className=" text-9xl text-red-500 font-extrabold text-center mt-[200px]">NOT FOUNT 404</h1>
        <div className="text-center">
        <Link  to="/">
        <button className="border-2  w-20  rounded-lg px-2  btn bg-pink-500  border-zinc-600 w-full my-5 py-3">Home</button></Link>
        </div>
        
        
    </div>
  )
}

export default Error