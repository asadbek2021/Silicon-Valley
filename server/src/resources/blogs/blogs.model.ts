import {Schema, model} from 'mongoose';


const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
    content: {
      info: {
        type: String,
        required: true,
      },
      image: {
        type: String,
      },
      video: {
        type: String,
      },
      audio: {
        type: String,
      }
    }
}, { timestamps: true });

export default model('Blog', blogSchema);