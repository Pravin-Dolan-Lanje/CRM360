const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },

    source: {
      type: String,
      enum: [
        "Website",
        "Facebook",
        "Instagram",
        "WhatsApp",
        "Referral",
        "Phone",
        "Other",
      ],
      default: "Website",
    },

    status: {
      type: String,
      enum: [
        "New",
        "Contacted",
        "Qualified",
        "Won",
        "Lost",
      ],
      default: "New",
    },

    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    followUpDate: Date,

    notes: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Lead", leadSchema);