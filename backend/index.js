import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv";
import  userRouter from "./routes/UserRoute.js";
import  authRouter from "./routes/AuthUserRoute.js";
dotenv.config();


mongoose.connect(process.env.DB_URL).then(()=>{
    console.log("connected");
}).catch((e)=>{
    console.log(e);
})
const app=express();
app.use(express.json())
app.listen(3000,()=>{
    console.log("running");
})
app.use('api/user',userRouter);
app.use('/api/auth',authRouter);
