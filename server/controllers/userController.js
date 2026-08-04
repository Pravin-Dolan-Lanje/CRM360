const User = require("../models/User");

// Get All Users
const getUsers = async (req, res) => {
    try {

        const users = await User.find({}, "name email role");

        res.json({
            success: true,
            users
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

module.exports = {
    getUsers
};