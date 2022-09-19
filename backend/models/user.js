import {mongoose, model} from "mongoose";

const userSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
})

export default model("User", userSchema);