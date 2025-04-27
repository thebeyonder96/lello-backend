import express from "express";
import { LOGIN } from "./routes/login.js";

const APP = express()
APP.use(express.json())

APP.use('/auth',LOGIN)

APP.get('/',(req,res)=>{
    res.json('Server is OK!')
})

APP.listen(5002,()=>{
    console.log('Server is running!!!')
})