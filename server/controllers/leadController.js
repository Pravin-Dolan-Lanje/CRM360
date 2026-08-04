const Lead = require("../models/Lead");

// Add Lead
const addLead = async (req, res) => {
  try {
    const lead = await Lead.create(req.body);

    res.status(201).json({
      success: true,
      message: "Lead Added Successfully",
      lead,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Get Single Lead
const getLeadById = async (req, res) => {
    try {

        const lead = await Lead.findById(req.params.id);

        if (!lead) {
            return res.status(404).json({
                success: false,
                message: "Lead not found"
            });
        }

        res.json({
            success: true,
            lead
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// Update Lead
const updateLead = async (req, res) => {

    try {

        const lead = await Lead.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!lead) {
            return res.status(404).json({
                success: false,
                message: "Lead not found"
            });
        }

        res.json({
            success: true,
            message: "Lead Updated Successfully",
            lead
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Delete Lead
const deleteLead = async (req, res) => {

    try {

        const lead = await Lead.findByIdAndDelete(req.params.id);

        if (!lead) {

            return res.status(404).json({
                success: false,
                message: "Lead not found"
            });

        }

        res.json({
            success: true,
            message: "Lead Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Get All Leads
const getLeads = async (req, res) => {
  try {
    const leads = await Lead.find()
      .populate("customer", "name email")
      .populate("assignedTo", "name role")
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      leads,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
    addLead,
    getLeads,
    getLeadById,
    updateLead,
    deleteLead
};