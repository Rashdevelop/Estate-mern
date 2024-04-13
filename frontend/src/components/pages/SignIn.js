import React from 'react'

const SignIn = () => {
  return (
    <div className=' bg-orange-100 h-[100vh] w-[100%]'>
    <div className='flex flex-col w-[50%] ml-[20rem]'>
      <h1 className='font-bold text-[35px] mx-[12rem] p-4' >Sign Up</h1>
      <input type="text" placeholder='Username' className='border-2 m-1 p-2'/>
      <input type="email" placeholder='Email' className='border-2 m-1 p-2' />
      <input type="password" placeholder='Password' className='border-2 m-1 p-2' />
      <button className='bg-black text-white m-1 p-2 hover:opacity-95' >SIGN UP</button>
      <button className='bg-red-600 m-1 p-2 text-white'>CONTINUE WITH GOOGLE</button>
      <h5 className='mt-2'>Have an account? <span className='text-blue-700' onClick={console.log("clicked")}>Sign In</span></h5>
    </div>
    </div>
  )
}

export default SignIn
