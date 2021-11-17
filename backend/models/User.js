const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            min: 3,
            max: 20,
            unique: true
        },
        password: {
            type: String,
            required: true,
            min: 6
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        profilePicture: {
            type: String,
            default: ""
        },
        email: {
            type: String,
            required: true,
            max: 50,
            unique: true
        },
        address: {
            type: String,
            max: 50
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);