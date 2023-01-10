const express = require("express");
const router = express.Router();
const verify = require("../middleware/auth");
const Orders = require("../models/OrderModel");
const Users = require("../models/UserModel");

router.post("/", verify, async (req, res) => {
  const { customerID, name, address, mobile, email, status, items, total } =
    req.body;
  if (!name || !address || !mobile || !email) {
    return res
      .status(400)
      .json({ success: false, message: "Chưa nhập đủ các trường" });
  } 
  if (!items) {
    return res
      .status(400)
      .json({ success: false, message: "Chưa có sản phẩm trong giỏ quà" });
    }
    try {
      const user = await Users.findById(customerID);
    if (user.point < total) {
      return res.status(403).json({success:false,message:'Bạn chưa đủ điểm'});
    }
    const newOrder = new Orders({
      customerID,
      name,
      address,
      mobile,
      email,
      status,
      items,
      total,
    });
    user.point -= total;
    await user.save();
    await newOrder.save();
    res.status(200).json({ success: true, message: "đặt thành công" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Lỗi máy chủ" });
  }
});
module.exports = router;
