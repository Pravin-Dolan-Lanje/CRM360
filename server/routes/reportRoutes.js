const express = require("express");

const router = express.Router();

const { protect } = require("../middleware/authMiddleware");

const {
    exportCustomersPDF
} = require("../controllers/reportController");

router.get(
    "/customers/pdf",
    protect,
    exportCustomersPDF
);

module.exports = router;