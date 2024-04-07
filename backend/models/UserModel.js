import { mongoose, Schema } from "mongoose";

const user=new mongoose.Schema({
    username:{
        type:String,
        requird:true,
        unique:true
    },
    email:{
        type:String,
        requird:true,
        unique:true
    },
    password:{
        type:String,
        requird:true,
    },
},{timestamps:true});
const User=mongoose.model('User',user);
export default User;