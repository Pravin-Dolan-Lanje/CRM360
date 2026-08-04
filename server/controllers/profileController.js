const User = require("../models/User");
const bcrypt = require("bcryptjs");

// Get Profile
const getProfile = async (req, res) => {
    try {

        const user = await User.findById(req.user._id).select("-password");

        res.json({
            success: true,
            user
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// Update Profile
const updateProfile = async (req, res) => {
    try {

        const { name, phone } = req.body;

        const user = await User.findById(req.user._id);

        user.name = name || user.name;
        user.phone = phone || user.phone;

        await user.save();

        res.json({
            success: true,
            message: "Profile Updated Successfully",
            user
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// Change Password
const changePassword = async (req, res) => {

    try {

        const { currentPassword, newPassword } = req.body;

        const user = await User.findById(req.user._id);

        const match = await user.comparePassword(currentPassword);

        if (!match) {
            return res.status(400).json({
                success: false,
                message: "Current password is incorrect"
            });
        }

        user.password = newPassword;

        await user.save();

        res.json({
            success: true,
            message: "Password Changed Successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};
const uploadProfileImage = async (req, res) => {

    try {

        const user = await User.findById(req.user._id);

        user.profileImage = req.file.filename;

        await user.save();

        res.json({

            success: true,

            message: "Profile Image Uploaded",

            profileImage: req.file.filename

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};


module.exports = {

    getProfile,

    updateProfile,

    changePassword,

    uploadProfileImage

};