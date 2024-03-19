const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true, // Ensure username is unique
    },
    password: {
        type: String,
        required: true,
    },
});

// Hash the password before saving to the database
UserSchema.pre("save", async function (next) {
    const user = this;
    if (user.isModified("password")) {
        user.password = await bcrypt.hash(user.password, 10);
    }
    next();
});

// Method to compare password for login
UserSchema.methods.comparePassword = async function (password) {
    const user = this;
    return await bcrypt.compare(password, user.password);
};

// Method to generate JWT token
UserSchema.methods.generateToken = async function () {
    const user = this;
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY);
    return token;
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
