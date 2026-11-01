import dotenv from "dotenv";
dotenv.config();
import userModel from "../models/user.Model.js";
import jwt from "jsonwebtoken";

export const handleRegister = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // res.send({name,email,password})
    let user = await userModel.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "user already exists" });
    }

    user = new userModel({ name, email, password });
    await user.save();

    const payload = {user:{id:user._id,role:user.role}}

    jwt.sign(payload,process.env.JWT_SECRET, {expiresIn:"24h"}, (err,token)=>{
        if(err) throw err;

         res.status(201).json({
        message:"user register successfully",
         user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
    },
        token
    })
    })

    // const token = jwt.sign(
    //   {
    //     id: user._id,
    //   },
    //   process.env.JWT_SECRET,
    //   { expiresIn: "7d" },
    // );

    // res.cookie("token", token);

    // res.status(200).json({
    //   message: "success",
    //   success: true,
    //   user,
    //   token,
    // });

  } catch (error) {
    console.log(error);
    res.status(500).send("server error");
  }
}

// LOGIN 
export const handleLogin = async(req,res)=>{
    const {email,password} = req.body

    try{
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(400).json({message:"invalid credential"})
        }

        const isMatch = await user.comparePassword(password)
        if(!isMatch){
            return res.status(400).json({message:"invalid credentials"})
        }

         const payload = {user:{id:user._id,role:user.role}}

    jwt.sign(payload,process.env.JWT_SECRET, {expiresIn:"24h"}, (err,token)=>{
        if(err) throw err;

         res.status(200).json({
        success: true,
    message: "User login successfully",
    user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
    },
        token
    })
    })


    }catch(error){
        console.error(error);
        res.status(500).send("server error")
    }

}
