const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrderSchema = new Schema({
	customerID:{
        type: String,
        required:true
    },
    name:{
        type:String,
    },
    address:{
        type:String,
    },
    mobile:{
        type:String,
    },
    email:{
        type:String,
    },
    status: [String],
    items:[
        {
            _id:String,
            size:String,
            color:String,
            qty:Number,
        }
    ],
    total:Number,
},
{
	timestamps: true
})

module.exports = mongoose.model('orders', OrderSchema)