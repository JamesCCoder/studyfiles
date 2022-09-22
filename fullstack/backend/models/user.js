import { mongoose, model } from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
})

export default model("User", userSchema);