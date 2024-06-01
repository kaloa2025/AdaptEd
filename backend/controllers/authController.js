const User=require('../models/userModel');
const createError=require('../utils/appError')
const bcrypt=require('bcryptjs'); 
const jwt= require('jsonwebtoken');

//Register
exports.signup = async(req,res,next)=>{
    try{
        const user = await User.findOne({email:req.body.email});
        if(user)
            {
                return next(new createError('User already Exists! ',400));
            }
            const hashedPassword =await bcrypt.hash(req.body.password,12);
            const newUser =await User.create({
                ...req.body,
                password:hashedPassword,
            });
            const token=jwt.sign({_id:newUser._id},'secretkey123',{
                expiresIn:'900',
            });
            res.status(201).json({
                status:'sucess',
                token,
                message:'User Registered sucessfully',
                user:{
                    _id:newUser._id,
                    email:newUser.email
                }
            })
    }catch(error)
    {
        next(error);
    }
};
//Login
exports.login=async(req,res,next)=>{
    try{
        const{email,password}=req.body;
        const user=await User.findOne({email});
        if(!user) return next(new createError('User not found',404));
        const isPasswordValid =await bcrypt.compare(password,user.password);
        if(!isPasswordValid){
            return next(new createError('Incorrect email or password',404));
        }
        const token=jwt.sign({_id:User._id},'secretkey123',{
            expiresIn:'900',
        });
        res.status(200).json({
            status:'sucess',
            token,
            message:'Logged in sucessfully',
            user:{
                _id:user._id,
                email:user.email
            }
        })
    }catch(error){
        next(error);
    }
};