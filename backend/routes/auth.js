const router = require("express").Router()
const User = require("../models/User")
const bcrypt = require("bcrypt")

// register
router.post("/register", async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            password: hashedPassword,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            profilePicture: req.body.profilePicture,
            email: req.body.email,
            address: req.body.address
        });

        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

// login
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        !user && res.status(404).json("Tài khoản không tồn tại");

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        // const validPassword = await User.findOne({ password: req.body.password });
        !validPassword && res.status(400).json("Mật khảu không đúng");

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;