
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
	name: {
		type: String,
        required: true
	},
	email: {
        type: String,
        required: true
	},
	password: {
		type: String,
		required: true
	},
	username: {
		type: String,
		required: true,
		unique: true
	},
	address:{
		type: String,
		default:null
	},
	mobile:{
		type: String,
		required: true
	},
    point: {
        type: Number,
		default:0
    },
    refreshtoken: {
        type: String,
		default: null
    }
},
{
	timestamps: true
})

module.exports = mongoose.model('users', UserSchema)