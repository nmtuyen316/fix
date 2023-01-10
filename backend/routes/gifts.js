const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/auth')
const Gift = require('../models/GiftModel')

router.get('/',verifyToken,async (req,res)=>{
    try{
        const gifts = await Gift.find({amount:{$gt:0}})
        let gift = gifts[Math.floor(Math.random()*Object.keys(gifts).length)]
        const name = gift?.name || 'Hết quà' 
        res.status(200).json({success:true,name})
        gift.amount-=1;
        await gift.save();
    }catch(e){
        console.log(e);
        res.status(500).json({success:false, message:'lỗi máy chủ'})
    }
})
router.post('/add',async(req,res)=>{
    try{
        const {name,amount} = req.body
        const newGift = new Gift({name,amount})
        await newGift.save();
        res.status(200).json({
            success:true,
            message:'đã thêm'
        })
    }catch(e){
        console.log(e);
        res.status(500).json({success:false,message:'lỗi máy chủ'});
    }

})
router.post('/reset',async(req,res)=>{
    await Gift.updateMany({},{$set:{amount:1}})
    res.status(200).json({success:true,message:'updated'})
})
module.exports = router