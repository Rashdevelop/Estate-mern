import React from 'react'
import {Link} from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
const Header = () => {
  return (
    <div className='flex justify-between  bg-slate-400 p-4 '>
      <Link to="/" className='font-bold text-slate-800 text-lg'><h1>Estate-Property</h1></Link>
      <form className='flex -my-1'>
        <input type="text" placeholder='Search...' className='border-2 rounded-lg w-auto px-4 py-[3px] absolute'/>
        <FaSearch className='relative ml-[200px] mt-2 text-slate-800'></FaSearch>
      </form>
      <div className='flex justify-between w-3/12 text-slate-800 '>
      <Link to="/"  className='hover:underline'>Home</Link>
      <Link to="/about" className='hover:underline'>About</Link>
      <Link to="/signIn" className='hover:underline' >Sign In </Link>
      </div>
      
    </div>
  )
}

export default Header
