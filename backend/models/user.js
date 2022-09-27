import { mongoose, model} from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
       type:String,
       trim:true,
       unique:true,
       maxlength:32,
       require:true,
    },
    password:{
       type:String,
       trim:true,
       require:true,
    }
},{timestamps:true})

export default model("User", userSchema);