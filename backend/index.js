const express=require('express');
const mongoose = require('mongoose');
const dotenv=require('dotenv');
const cors = require('cors');
const app=express();
const authRouter=require('./routes/authRoute')
const userRouter = require('./routes/userRoute');
const courseRouter=require('./routes/courses');
const predictionRouter =require('./routes/predict');
//Middleware

dotenv.config();
app.use(express.json());
app.use(cors(
    {
        origin: ["https://adapt-ed-frontend.vercel.app"],
        methods:["POST","GET"],
        credentials:true
    }
));

//Route
app.use('/api/auth',authRouter);
app.use('/api/users',userRouter);
app.use('/api/courses',courseRouter);
app.use('/api/predict',predictionRouter);

//MongoBD Connection
mongoose.connect(process.env.MONGODB_URI).then(()=>console.log( 'Connected to MongoDB!')).catch((error)=>console.error('Failed to connect to mongoDB: ', error));

//Error Handling
app.use((err,req,res,next)=>{
    err.statuCode=err.statuCode||500;
    err.status=err.status||'error';
    res.status(err.statuCode).json({
        status:err.status,
        message:err.message,
    });
});
//Server
const PORT =3000;
app.listen(PORT,()=>{
    console.log(`App running on ${PORT}`);
});