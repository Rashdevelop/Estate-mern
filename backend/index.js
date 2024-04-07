import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.DB_URL).then(()=>{
    console.log("connected");
}).catch((e)=>{
    console.log(e);
})
const app=express();

app.listen(3000,()=>{
    console.log("running");
})