import {mongoose, model} from "mongoose";

const userSchema = mongoose.Schema({
    username:{
       type:String,
       require:true,
       unique:true,

    },
    password:{
       type:String,
       require:true,
       unique:true,
    }
})

export default model("User", userSchema);
