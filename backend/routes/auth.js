const express = require('express');
const router = express.Router();
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const verifyToken = require('../middleware/auth');
require('dotenv').config();

const User = require('../models/UserModel')

// @route GET api/auth
// @desc Check if user is logged in
// @access Public
router.get('/profile/:username', verifyToken, async (req, res) => {
	try {
		const user = await User.findOne({ username: req.params.username });
		if (!user)
			return res.status(400).json({ success: false, message: 'User not found' })
	const data = {
		id: user._id,
        username: user.username,
		name: user.name,
        email: user.email,
		point: user.point
	}
		res.status(200).json({ ...data, success: true });
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}
})

// @route POST api/auth/register
// @desc Register user
// @access Public
router.post('/register', async (req, res) => {
	const { username, password,email,name,mobile } = req.body

	// Simple validation
	if (!username || !password || !email || !name || !mobile)
		return res
			.status(400)
			.json({ success: false, message: 'Chưa nhập đầy đủ các trường' })

	try {
		// Check for existing user
		const user = await User.findOne({username});
		if (user)
			return res
				.status(400)
				.json({ success: false, message: 'User name đã tồn tại' })

		// All good
		const hashedPassword = await argon2.hash(password)
		const newUser = new User({ username, password: hashedPassword,name: name,mobile: mobile,email: email })
		await newUser.save()

		// // Return token
		// const accessToken = jwt.sign(
		// 	{ accountID: newUser[0]?.accountID },
		// 	process.env.ACCESS_TOKEN_SECRET
		// )

		res.json({
			success: true,
			message: 'Tạo tài khoản thành công'
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Lỗi máy chủ' })
	}
})

// @route POST api/auth/login
// @desc Login user
// @access Public
router.post('/login', async (req, res) => {
	const { username, password } = req.body

	// Simple validation
	if (!username || !password)
		return res
			.status(400)
			.json({ success: false, message: 'Chưa nhập user hoặc password' })

	try {
		// Check for existing user
		const user = await User.findOne({username});
		if (!user)
			return res
				.status(400)
				.json({ success: false, message: 'Nhập sai user name hoặc password' })

		// Username found
		const passwordValid = await argon2.verify(user.password, password)
		if (!passwordValid)
			return res
				.status(400)
				.json({ success: false, message: 'Nhập sai user name hoặc password' })

		// All good
		// Return token
		const accessToken = jwt.sign(
			{ userID: user._id },
			process.env.ACCESS_TOKEN_SECRET,{
				expiresIn:"1h"
			}
		)
		const refreshtoken = jwt.sign({userID: user._id},
			process.env.REFRESH_TOKEN_SECRET,
			{expiresIn:"365d"}
		)
		user.refreshtoken = refreshtoken;
		await user.save();
		res.cookie('refresh_token',refreshtoken,{
			httpOnly:true,
			secure:false,
			path:"/",
			sameSite:"strict"
		})
		res.json({
			success: true,
			message: 'Đăng nhập thành công',
			accessToken
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Lỗi máy chủ' })
	}
})
router.post('/refresh',async (req,res)=>{
	const refreshtoken = req.cookies.refresh_token;

	const decoded = jwt.verify(refreshtoken,process.env.REFRESH_TOKEN_SECRET);

	const existsRefeshtoken = User.findOne({refreshtoken: decoded});

	if(!refreshtoken) 
		return res.status(401).json("Bạn chưa đăng nhập");
	if(!existsRefeshtoken[0]) 
		return res.status(403).json("Không tồn tại refreshtoken");
	jwt.verify(refreshtoken,process.env.REFRESH_TOKEN_SECRET,(err,user)=>{
		if(err){
			console.log(err);
		}
		const newAccessToken = jwt.sign(
			{ userID: user._id },
			process.env.ACCESS_TOKEN_SECRET,{
				expiresIn:"1h"
			}
		)
		const newRefreshToken = jwt.sign(
			{ userID: user._id },
			process.env.REFRESH_TOKEN_SECRET,{
				expiresIn:"365d"
			}
		)
		res.cookie('refresh_token',newRefreshToken,{
			httpOnly:true,
			secure:false,
			path:"/",
			sameSite:"strict"
		})
		res.status(200).json({accessToken: newAccessToken})
	});
})
router.post('/logout', verifyToken, async (req,res)=>{
	res.clearCookie('refresh_token');
	const user =await User.findById(req.userID);
	user.refreshtoken = null;
	await user.save();
	res.status(200).json("logged out!");
})

module.exports = router
