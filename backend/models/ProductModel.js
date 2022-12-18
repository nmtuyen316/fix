const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
	name: {
		type: String,
        required: true
	},
	color: {
        type: String,
        required: true
	},
	colortype: {
		type: String,
		required: true
	},
	gender: {
		type: String,
		required: true,
	},
	category:{
		type: String,
		default:null
	},
	original_price:{
		type: String,
		required: true
	},	
    final_price:{
		type: String,
		required: true
	},
    "images": {
        type: [String],
        default: []
    },
    "sizes": {
        type: [String],
        default: []
    },
    reviews: {
        type: Number,
		default:0
    },
    rating: {
        type: Number,
		default:0
    }
},
{
	timestamps: true
})

module.exports = mongoose.model('products', ProductSchema)