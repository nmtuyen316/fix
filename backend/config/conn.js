const mongoose=require('mongoose');
require('dotenv').config();
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_CLUSTER_URL}?retryWrites=true&w=majority`;
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