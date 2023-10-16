import React from 'react'
import { NavLink } from 'react-router-dom'

const Haeder = () => {
  return (
    <div className='flex gap-4 py-3 justify-center text-lg font-bold text-white bg-pink-600'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/users">User</NavLink>
        <NavLink to="/signUp">Sign Up</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/addCoffee">AddCoffee</NavLink>
    </div>
  )
}

export default Haeder