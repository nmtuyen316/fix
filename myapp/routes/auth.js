const express = require('express');
const router = express.Router();
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const verifyToken = require('../middleware/auth');
require('dotenv').config();
const dbConfig =require('../db/dbConfig');
const connection = require('../db/connection');
const query = require('../db/query');

// const User = require('../models/User')

// @route GET api/auth
// @desc Check if user is logged in
// @access Public
router.get('/', verifyToken, async (req, res) => {
	try {
        const conn = await connection(dbConfig).catch(e => {})
		const user = await query(conn, 'SELECT * FROM ql.customer where accountID = ?',[req.accountID]).catch(console.log);
		if (!user[0])
			return res.status(400).json({ success: false, message: 'User not found' })
		res.json({ success: true, user })
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}
})

// @route POST api/auth/register
// @desc Register user
// @access Public
router.post('/register', async (req, res) => {
	const { username, password } = req.body

	// Simple validation
	if (!username || !password)
		return res
			.status(400)
			.json({ success: false, message: 'Missing username and/or password' })

	try {
		// Check for existing user
        const conn = await connection(dbConfig).catch(e => {}) 
        const results = await query(conn, 'SELECT username FROM ql.account having username = ?',[username]).catch(console.log);
		const user = results[0]?.username
		if (user)
			return res
				.status(400)
				.json({ success: false, message: 'Username already taken' })

		// All good
		const hashedPassword = await argon2.hash(password)
        await query(conn, 'INSERT INTO ql.ACCOUNT (USERNAME, PASSWORD) VALUES (?,?);',[username,hashedPassword]).catch(console.log);
		const newUser = await query(conn, 'SELECT accountID,username FROM ql.account where username = ?',[username]).catch(console.log);

		// // Return token
		// const accessToken = jwt.sign(
		// 	{ accountID: newUser[0]?.accountID },
		// 	process.env.ACCESS_TOKEN_SECRET
		// )

		res.json({
			success: true,
			message: 'User created successfully'
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
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
			.json({ success: false, message: 'Missing username and/or password' })

	try {
		// Check for existing user
		const conn = await connection(dbConfig).catch(e => {}) 
        const user = await query(conn, "SELECT accountID,username,password FROM ql.account having username = ?",[username]).catch(console.log);
		if (!user[0].username)
			return res
				.status(400)
				.json({ success: false, message: 'Incorrect username or password' })

		// Username found
		const passwordValid = await argon2.verify(user[0].password, password)
		if (!passwordValid)
			return res
				.status(400)
				.json({ success: false, message: 'Incorrect username or password' })

		// All good
		// Return token
		const accessToken = jwt.sign(
			{ accountID: user[0].accountID },
			process.env.ACCESS_TOKEN_SECRET,{
				expiresIn:"30s"
			}
		)
		const refreshtoken = jwt.sign({accountID: user[0].accountID},
			process.env.REFRESH_TOKEN_SECRET,
			{expiresIn:"365d"}
		)
		await query(conn,'update ql.account set refreshtoken = ? where accountID = ?',[refreshtoken,user[0].accountID]).catch(console.log);
		res.cookie('refresh_token',refreshtoken,{
			httpOnly:true,
			secure:false,
			path:"/",
			sameSite:"strict"
		})
		res.json({
			success: true,
			message: 'User logged in successfully',
			accessToken
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}
})
router.post('/refresh',async (req,res)=>{
	const refreshtoken = req.cookies.refresh_token;
	const conn = await connection(dbConfig).catch(e => {}) 
	const decoded = jwt.verify(refreshtoken,process.env.REFRESH_TOKEN_SECRET);
	const existsRefeshtoken = await query(conn,'select refreshtoken from ql.account where accountID = ? and refreshtoken = ?',[decoded.accountID,refreshtoken]).catch(console.log);
	if(!refreshtoken) return res.status(401).json("you are not authenticated");
	if(!existsRefeshtoken[0]) return res.status(403).json("refreshtoken is not valid");
	jwt.verify(refreshtoken,process.env.REFRESH_TOKEN_SECRET,(err,user)=>{
		if(err){
			console.log(err);
		}
		const newAccessToken = jwt.sign(
			{ accountID: user.accountID },
			process.env.ACCESS_TOKEN_SECRET,{
				expiresIn:"30s"
			}
		)
		const newRefreshToken = jwt.sign(
			{ accountID: user.accountID },
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
	const conn = await connection(dbConfig).catch(e => {})
	await query(conn,'update account set refreshtoken = NULL where accountID = ?',[req.accountID]).catch(console.log);
	res.status(200).json("logged out!");
})

module.exports = router

