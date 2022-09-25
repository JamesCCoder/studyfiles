import {mongoose, model} from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
       type:String,
       require:true,
       unique:true,
       trim:true,
       maxlength:36,
    },
    password:{
       type:String,
       require:true,
       trim:true,
    }
},{timestamps:true})

export default model("User", userSchema);