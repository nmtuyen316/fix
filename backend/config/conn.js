const mongoose=require('mongoose');
require('dotenv').config();
const uri = process.env.DATABASE_URL;
async function connect(){
    try{
        await mongoose.connect(uri);
        console.log('connected');
    }catch(error){
        console.error(error);
    }
}
mongoose.set('strictQuery', false);
module.exports = connect;