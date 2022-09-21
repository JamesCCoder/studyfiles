import {mongoose, model} from "mongoose";

const userSchema = mongoose.Schema({
    username:{
        type:String,
        trim:true,
        required:true,
        unique:true,
        maxlength:32,
    },
    password:{
        type:String,
        trim:true,
        required:true,
    }
},{timestamps: true})

export default model("User", userSchema);