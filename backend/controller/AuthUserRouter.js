import { errorHandler } from "../middleware/ErrorHandlers.js";
import User from "../models/UserModel.js";
import bcrypt from 'bcrypt';
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
      res.status(200).json('User Created');
   }catch(error){
      next(errorHandler);
   }
}