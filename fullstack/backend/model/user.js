import {mongoose, model} from "mongoose";


const userSchema = new mongoose.Schema({
    username:{
       type:String,
       trim:true,
       unique:true,
       require:true,
    },
    password:{
       type:String,
       trim:true,
       require:true,
    },

})

export default model("User", userSchema);