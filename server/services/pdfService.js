const PDFDocument = require("pdfkit");

const generateCustomerPDF = (customers, res) => {

    const doc = new PDFDocument();

    res.setHeader(
        "Content-Type",
        "application/pdf"
    );

    res.setHeader(
        "Content-Disposition",
        "attachment; filename=customers.pdf"
    );

    doc.pipe(res);

    doc.fontSize(22).text("CRM360 Customer Report", {
        align: "center"
    });

    doc.moveDown();

    customers.forEach((customer, index) => {

        doc.fontSize(12).text(
            `${index + 1}. ${customer.name}`
        );

        doc.text(`Email : ${customer.email}`);

        doc.text(`Phone : ${customer.phone}`);

        doc.text(`Company : ${customer.company}`);

        doc.moveDown();

    });

    doc.end();

};

module.exports = {
    generateCustomerPDF
};