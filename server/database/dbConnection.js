import mongoose from 'mongoose';
// import dotenv from "dotenv";
// dotenv.config();
// console.log(process.env.MONGO_URI);
export const dbConnection=()=>{
    mongoose.connect( process.env.MONGO_URI,{
        dbName:"MERN_STACK_WORK_WAGON",
    })
    .then(()=>{
        console.log("Connected to database!");
    })
    .catch((err)=>{
        console.log(`Error connecting to database:"${err}`);
    });
};