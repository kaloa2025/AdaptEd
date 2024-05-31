const express=require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app=express();
const authRouter=require('./routes/authRoute')
const userRouter = require('./routes/userRoute');
//Middleware

app.use(express.json());
app.use(cors());

//Route
app.use('/api/auth',authRouter);
app.use('/api/users',userRouter);
//MongoBD Connection
mongoose.connect('mongodb+srv://aalok:21004@adapted.x6irkuo.mongodb.net/AdaptEd?retryWrites=true&w=majority&appName=AdaptEd').then(()=>console.log( 'Connected to MongoDB!')).catch((error)=>console.error('Failed to connect to mongoDB: ', error));
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