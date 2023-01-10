const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GiftSchema = new Schema({
	name: {
		type: String,
        required: true
	},
    amount: {
        type: Number,
        required:true
    }
},
{
	timestamps: true
})

module.exports = mongoose.model('gifts', GiftSchema)