const express = require("express");

const router = express.Router();

const {
    addCustomer,
    getCustomers,
    getCustomerById,
    updateCustomer,
    deleteCustomer
} = require("../controllers/customerController");

const { protect } = require("../middleware/authMiddleware");

// Add Customer
router.post("/", protect, addCustomer);

// Get All Customers
router.get("/", protect, getCustomers);

// Get Single Customer
router.get("/:id", protect, getCustomerById);

// Update Customer
router.put("/:id", protect, updateCustomer);

// Delete Customer
router.delete("/:id", protect, deleteCustomer);

module.exports = router;