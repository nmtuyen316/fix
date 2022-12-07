const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/auth')

// const Store = require('../models/Store')

// @route GET api/Stores
// @desc Get Stores
// @access Private
router.get('/', verifyToken, async (req, res) => {
	try {
		// const conn = await connection(dbconfig).catch(e => {}) 
		// const Stores = await query(conn, `select c.name, c.point, c.img,b.soluong,b.price from orderGift a, orderGiftDetail b, gift c where a.ordergID = b.ordergID and b.giftID = c.giftID and a.status=1 and a.accountID = ${req.accountID}`).catch(console.log); 
		res.json({ success: true, Stores })
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}
})

// @route Store api/Stores
// @desc Create Store
// @access Private
router.post('/', verifyToken, async (req, res) => {
	const { title, description, url, status } = req.body

	// Simple validation
	if (!title)
		return res
			.status(400)
			.json({ success: false, message: 'Title is required' })

	try {
		const newStore = new Store({
			title,
			description,
			url: url.startsWith('https://') ? url : `https://${url}`,
			status: status || 'TO LEARN',
			user: req.userId
		})

		await newStore.save()

		res.json({ success: true, message: 'Happy learning!', Store: newStore })
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}
})

// @route PUT api/Stores
// @desc Update Store
// @access Private
router.put('/:id', verifyToken, async (req, res) => {
	const { title, description, url, status } = req.body

	// Simple validation
	if (!title)
		return res
			.status(400)
			.json({ success: false, message: 'Title is required' })

	try {
		let updatedStore = {
			title,
			description: description || '',
			url: (url.startsWith('https://') ? url : `https://${url}`) || '',
			status: status || 'TO LEARN'
		}

		const StoreUpdateCondition = { _id: req.params.id, user: req.userId }

		updatedStore = await Store.findOneAndUpdate(
			StoreUpdateCondition,
			updatedStore,
			{ new: true }
		)

		// User not authorised to update Store or Store not found
		if (!updatedStore)
			return res.status(401).json({
				success: false,
				message: 'Store not found or user not authorised'
			})

		res.json({
			success: true,
			message: 'Excellent progress!',
			Store: updatedStore
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}
})

// @route DELETE api/Stores
// @desc Delete Store
// @access Private
router.delete('/:id', verifyToken, async (req, res) => {
	try {
		const StoreDeleteCondition = { _id: req.params.id, user: req.userId }
		const deletedStore = await Store.findOneAndDelete(StoreDeleteCondition)

		// User not authorised or Store not found
		if (!deletedStore)
			return res.status(401).json({
				success: false,
				message: 'Store not found or user not authorised'
			})

		res.json({ success: true, Store: deletedStore })
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}
})

module.exports = router