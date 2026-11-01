import mongoose  from "mongoose";

const connectToDb = async()=>{
    try{
         await mongoose.connect(process.env.MONGO_URI)
    
        console.log("db connected");
    }catch(err){
        console.error("mongodb connection failed",err)
    }
  
   
}

export default connectToDb