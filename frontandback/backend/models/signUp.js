import {mongoose, model} from "mongoose";

const signUpSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
})

export default model("SignUp", signUpSchema);