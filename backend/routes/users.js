const router = require("express").Router()
const User = require("../models/User")
const bcrypt = require("bcrypt")

// update user
router.put("/user/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch (err) {
                return res.status(500).json(err);
            }
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            })
            res.status(200).json("Tài khoản đã được cập nhật")
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("Lỗi cập nhật");
    }
});

// delete user
router.delete("/user/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Xóa tài khoản thành công");
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("Xóa tài khoản thất bại")
    }
});

// get a user
router.get("/user", async (req, res) => {
    const userId = req.query.userId;
    const username = req.query.username;
    try {
        const user = userId
            ? await User.findById(userId)
            : await User.findOne({ username: username });
        const { password, updatedAt, ...other } = user._doc;
        res.status(200).json(other);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;