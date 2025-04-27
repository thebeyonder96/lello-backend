import {Router} from "express";

const ROUTER = Router();

ROUTER.post('/login',(req,res)=>{
    res.json('Login route')
})

export const LOGIN = ROUTER