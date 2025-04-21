import {Request , Response } from 'express';
import User from '../models/user.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

dotenv.config();

const registerUser = async ( req : Request , res : Response)=>{
    
    try {
        const {username , password , role } = req.body;

        const userExists = await User.findOne({username});
        if(userExists){
            return res.status(400).json({message : 'User already exists'});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password , salt);
        const newUser = new User({
            username, 
            password : hashedPassword,
            role
        })
        await newUser.save();
        res.status(201).json({message : 'User created successfully' , userId : newUser._id})
    }catch(error:unknown){
        if(error instanceof Error)
        res.status(500).json({message : 'Server error', error:error.message});
        else{
            res.status(500).json({message:'Server error',error : 'Unknown error occured'});
        }
    }
}

const loginUser = async(req : Request , res:Response)=>{
    const {username,password} = req.body;
    try{
        const user = await User.findOne({username});
        if(!user){
            return res.status(400).json({message : 'Invalid credentials'});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({message : 'Invalid credentials'});
        }
        const token = jwt.sign(
            {userId : user._id , role : user.role},
            process.env.JWT_KEY as string,
            {expiresIn : '1h'}
        );
        res.status(200).json({token})
    }
    catch(error:unknown){
        if(error instanceof Error)
        res.status(500).json({message : 'Server error', error:error.message});
        else{
            res.status(500).json({message:'Server error',error : 'Unknown error occured'});
        }
    }
}



export default {registerUser,loginUser}