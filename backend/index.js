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
app.listen(process.env.SERVER_PORT,()=>{
    console.log("running at "+process.env.SERVER_PORT);
})
app.use('api/user',userRouter);
app.use('/api/auth',authRouter);
