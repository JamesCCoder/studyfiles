import { mongoose, model } from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
       type:String,
       require:true,
       trim:true,
       unique:true,
    },
    password:{
       type:String,
       require:true,
       trim:true,
    }
})

export default model("User", userSchema);