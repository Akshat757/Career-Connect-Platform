import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "MERN_STACK_JOB_SEEKING"
    })
    .then(()=> {
        console.log('Connected to database! ');
    })
    .catch(()=>{
        console.log(`Some error occured while connecting to databse: ${err}`);
    });
};