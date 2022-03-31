import {Schema, model} from "mongoose";


const userSchema = new Schema({
    firstname: {
      type:String,
      required:true,
      minlength:3,
      maxlength:50
    },
    lastname: {
      type:String,
      required:true,
      minlength:3,
      maxlength:50
    },
    password: {
      type:String,
      required:true,
    },
    email: {
      type:String,
      required:true,
    }
}, { timestamps:true });

export default model('User', userSchema);