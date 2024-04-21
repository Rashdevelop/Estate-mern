import User from "../models/UserModel.js";
import bcrypt from 'bcrypt';
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken';
export const signUp=async(req,res,next)=>{
   const{username,email,password}=req.body;
   const hashedPassword=bcrypt.hashSync(password,10);
   const newUser= new User({
    username,
    email,
    password:hashedPassword,
   });
   try{
      await newUser.save();
      res.status(200).json({
         success:true,
         message:"User Created Successfully.",
        
      });
   }catch(error){
     res.status(404).json({
      success:false,
      message:error.message,
     })
   }
}
export const signIn=async(req,res,next)=>{
      const{email,password}=req.body;
      try{
      const isemail=await User.findOne({email});
      
      if(!isemail){
         res.status(404).json({
            success:false,
            message:"User Not Found",
         });
      }
      
         const matched= bcryptjs.compareSync(password,isemail.password);
         if(!matched){
            res.status(500).json({
               success:false,
               message:"Wrong Credentials",
            });
         }
         const token=jwt.sign({id:isemail._id},process.env.JWT_SECRET_KEY);
         res.cookie('token',token,{
            httpOnly:true,
            expires: new Date(Date.now()+24*60*60*1000)
         }).status(200).send({
            success:true,
            isemail,
         });
      }catch(err){
          res.status(500).send({
            message:"Internal Server Error",
          });
      }
      
}