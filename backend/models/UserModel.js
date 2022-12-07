
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	address:{
		type: String,
		default:null
	},
	phone:{
		type: String,
		default:null
	},
    point: {
        type: Number,
		default:0
    },
    refreshtoken: {
        type: String,
		default: null
    },
	createdAt: {
		type: Date,
		default: Date.now
	}
})

module.exports = mongoose.model('users', UserSchema)