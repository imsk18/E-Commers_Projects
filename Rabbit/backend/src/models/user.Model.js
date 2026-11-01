import mongoose from "mongoose";
import bcrypt, { hash } from "bcrypt"

const userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            trim:true
        },
         email:{
            type:String,
            required:true,
            unique:true,
            trim:true

         },
         password:{
            type:String,
            required:true,
            minLength:6
         },

         role:{
            type: String,
            enum:["customer", "admin"],
            default:"customer"

         }

    },
    {timestamps:true}
)


userSchema.pre("save", async function(){
    if(!this.isModified("password"))return;
    const hash = await bcrypt.hash(this.password,10)
    this.password = hash
})

userSchema.methods.comparePassword = async function(password){
   return await bcrypt.compare(password,this.password);
}

const userModel = mongoose.model("User",userSchema);

export default userModel