import {model,mongoose} from "mongoose";

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        require: true,
    },
    lastName:{
        type: String,
        require: true,
    },
    age:{
        type:Number,
        require: true,
    }
})

export default model("Users", userSchema);