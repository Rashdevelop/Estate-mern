import React, { useState} from 'react'
import {useNavigate } from 'react-router-dom';
import { signInFail, signInStart, signInSuccess } from '../../Redux/userSlice';
import {useDispatch} from 'react-redux';
const SignIn = () => {
  const dispatch=useDispatch();
  const[userNotification,setUserNotification]=useState("");
    const [formData,setFormData]=useState({});
    const navigate=useNavigate();
    const handleChange=(e)=>{
       setFormData({
        ...formData,
        [e.target.id]:e.target.value,
        
       })
       
    }
    const submitSignIn=async(e)=>{
     e.preventDefault();
          try{
            dispatch(signInStart());
           const res=await fetch('/api/auth/signin',{
              method:'POST',
              headers:{
                'content-type':'application/json'
              },
              body:JSON.stringify(formData),
            });
            const data=await res.json();
            if(data.success === true){
             dispatch(signInSuccess(data));
              navigate('/');
            }
          }catch(err){
            console.log("catch"+err);
          }
  }
  return (
    <div className=' bg-orange-100 h-[100vh] w-[100%]'>
    <h1 className='text-green-600 font-bold ml-[50%]'>{userNotification}</h1>
   <form onSubmit={submitSignIn} className='flex flex-col w-[50%] ml-[20rem]'>
    <h1 className='font-bold text-[35px] mx-[12rem] p-4' >Sign In</h1>
    <input type="email" onChange={handleChange} placeholder='Email' id='email' className='border-2 m-1 p-2' />
    <input type="password" onChange={handleChange} placeholder='Password' id='password' className='border-2 m-1 p-2' />
    <span className='text-red-600 ml-1 mb-1'></span>
    <button className='bg-black text-white m-1  mt-6 p-2 hover:opacity-95'>SIGN IN</button>
    <button className='bg-red-600 m-1 p-2 text-white'>CONTINUE WITH GOOGLE</button>
    
  </form>
  </div>
  )
}

export default SignIn
