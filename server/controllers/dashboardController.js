const Customer = require("../models/Customer");
const Lead = require("../models/Lead");
const Task = require("../models/Task");
const User = require("../models/User");

const getDashboardStats = async (req, res) => {
    try {

        const totalCustomers = await Customer.countDocuments();
        const totalLeads = await Lead.countDocuments();
        const totalTasks = await Task.countDocuments();
        const totalUsers = await User.countDocuments();

        const completedTasks = await Task.countDocuments({
            status: "Completed"
        });

        const pendingTasks = await Task.countDocuments({
            status: "Pending"
        });

        const inProgressTasks = await Task.countDocuments({
            status: "In Progress"
        });

        const wonLeads = await Lead.countDocuments({
            status: "Won"
        });

        const lostLeads = await Lead.countDocuments({
            status: "Lost"
        });

        const newLeads = await Lead.countDocuments({
            status: "New"
        });

        const recentCustomers = await Customer.find()
            .sort({ createdAt: -1 })
            .limit(5);

        const upcomingTasks = await Task.find({
            status: { $ne: "Completed" }
        })
        .populate("assignedTo", "name")
        .sort({ dueDate: 1 })
        .limit(5);

        res.json({

            success: true,

            stats: {
                totalCustomers,
                totalLeads,
                totalTasks,
                totalUsers
            },

            taskStats: {
                completed: completedTasks,
                pending: pendingTasks,
                progress: inProgressTasks
            },

            leadStats: {
                won: wonLeads,
                lost: lostLeads,
                new: newLeads
            },

            recentCustomers,

            upcomingTasks

        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

module.exports = {
    getDashboardStats
};