import React, { useState} from 'react';

import {useNavigate} from 'react-router-dom';
const SignUp = () => {
  const[userNotification,setUserNotification]=useState("");
    const[formData,setFormData]=useState({});
    const navigate=useNavigate();
    const handleChange=(e)=>{
         setFormData({
            ...formData,
            [e.target.id]:e.target.value,
         });
     
    }
   
    const formSubmit=async(e)=>{
      e.preventDefault();
      try{
        const res=await fetch('api/auth/signup',{
          method:'POST',
          headers:{
           'Content-Type':'application/json'
          },
          body:JSON.stringify(formData),
        });
        const data=res.json();
        if(data.success===true){
          navigate('/signin');
        }
      }catch(err){
           setUserNotification(err.message);
      }
    }
  return (
     
    <div className=' bg-orange-100 h-[100vh] w-[100%]'>
      <h1 className='text-green-600 font-bold ml-[50%]'>{userNotification}</h1>
    <form  onSubmit={formSubmit} className='flex flex-col w-[50%] ml-[20rem]'>
      <h1 className='font-bold text-[35px] mx-[12rem] p-4' >Sign Up</h1>
      <input type="text" onChange={handleChange} placeholder='Username' id='username' className='border-2 m-1 p-2'/>
      <input type="email" onChange={handleChange} placeholder='Email' id='email' className='border-2 m-1 p-2' />
      <input type="password" onChange={handleChange} placeholder='Password' id='password' className='border-2 m-1 p-2' />
      <span className='text-red-600 ml-1 mb-1'></span>
      <button className='bg-black text-white m-1  mt-6 p-2 hover:opacity-95' >SIGN UP</button>
      <button className='bg-red-600 m-1 p-2 text-white'>CONTINUE WITH GOOGLE</button>
      
      <h5 className='mt-2'>Have an account? <span className='text-blue-700 hover:cursor-pointer'>Sign In</span></h5>
    </form>
    </div>
  )
}

export default SignUp
