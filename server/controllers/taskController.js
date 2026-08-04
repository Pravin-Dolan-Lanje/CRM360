const Task=require("../models/Task");

// Add Task

const addTask=async(req,res)=>{

try{

const task=await Task.create(req.body);

res.status(201).json({
success:true,
message:"Task Added Successfully",
task
});

}catch(error){

res.status(500).json({
success:false,
message:error.message
});

}

};

// Get Tasks

const getTasks=async(req,res)=>{

try{

const tasks=await Task.find()
.populate("assignedTo","name role")
.sort({createdAt:-1});

res.json({
success:true,
tasks
});

}catch(error){

res.status(500).json({
success:false,
message:error.message
});

}

};

// Get Single Task
const getTaskById = async (req, res) => {

    try {

        const task = await Task.findById(req.params.id)
            .populate("assignedTo", "name role");

        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found"
            });
        }

        res.json({
            success: true,
            task
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Update Task
const updateTask = async (req, res) => {

    try {

        const task = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found"
            });
        }

        res.json({
            success: true,
            message: "Task Updated Successfully",
            task
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Delete Task
const deleteTask = async (req, res) => {

    try {

        const task = await Task.findByIdAndDelete(req.params.id);

        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found"
            });
        }

        res.json({
            success: true,
            message: "Task Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
    addTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask
};