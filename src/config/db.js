
import mongoose from "mongoose";

const mongoDBConaction = async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_STRING);
        console.log(`mongo DB conaction successful HOST : ${mongoose.connection.host}`.bgCyan.black);
    }catch(error){
        console.log(`${error}`.bgRed);
    }
}

export default mongoDBConaction