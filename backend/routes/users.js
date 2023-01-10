const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/auth')
const User = require('../models/UserModel')

// const Store = require('../models/Store')

// @route GET api/Stores
// @desc Get Stores
// @access Private
router.post('/admin',async(req,res)=>{
    await User.updateMany({},{admin:false})
    res.status(200).json({success:true,message:'updated'})
})

module.exports = router