const Customer = require("../models/Customer");
const { generateCustomerPDF } = require("../services/pdfService");

const exportCustomersPDF = async (req, res) => {

    try {

        const customers = await Customer.find();

        generateCustomerPDF(customers, res);

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
    exportCustomersPDF
};