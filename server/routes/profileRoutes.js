const express = require("express");
const upload = require("../middleware/uploadMiddleware");


const router = express.Router();

const {
    getProfile,
    updateProfile,
    changePassword,
    uploadProfileImage
} = require("../controllers/profileController");

const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, getProfile);

router.put("/", protect, updateProfile);

router.put("/password", protect, changePassword);

router.put(
    "/photo",
    protect,
    upload.single("profileImage"),
    uploadProfileImage
);

module.exports = router;
