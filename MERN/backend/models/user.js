import {mongoose, model} from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true,
        maxlength:32,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        trim:true,
        unique:true,
    },
},{timestamps:true})

export default model("User", userSchema);