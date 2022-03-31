import mongoose from 'mongoose';
import config from './../config/config';



async function dbConnect() {
  try{ 
    await mongoose.connect(`${config.DB_URL}${config.DB_NAME}`, {})
  }
  catch(err){
    if(err instanceof Error){
        console.log(err);
    }
  }  
}

export default dbConnect