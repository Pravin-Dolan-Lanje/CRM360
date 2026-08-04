import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import API from "../../services/api";

const AddTask = () => {

    const navigate = useNavigate();

    const [users, setUsers] = useState([]);

    const [task, setTask] = useState({
        title: "",
        description: "",
        assignedTo: "",
        priority: "Medium",
        dueDate: ""
    });

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        try {
            const res = await API.get("/users");
            setUsers(res.data.users);
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            await API.post("/tasks", task);

            alert("Task Added Successfully");

            navigate("/tasks");

        } catch (error) {

            alert(error.response?.data?.message || "Something went wrong");

        }
    };

    return (
        <Layout>

            <div className="card shadow p-4">

                <h3 className="mb-4">Add Task</h3>

                <form onSubmit={handleSubmit}>

                    <input
                        className="form-control mb-3"
                        placeholder="Task Title"
                        name="title"
                        value={task.title}
                        onChange={handleChange}
                        required
                    />

                    <textarea
                        className="form-control mb-3"
                        placeholder="Description"
                        name="description"
                        value={task.description}
                        onChange={handleChange}
                    />

                    <select
                        className="form-select mb-3"
                        name="assignedTo"
                        value={task.assignedTo}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select User</option>

                        {users.map((user) => (
                            <option
                                key={user._id}
                                value={user._id}
                            >
                                {user.name} ({user.role})
                            </option>
                        ))}

                    </select>

                    <select
                        className="form-select mb-3"
                        name="priority"
                        value={task.priority}
                        onChange={handleChange}
                    >
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>

                    <input
                        type="date"
                        className="form-control mb-3"
                        name="dueDate"
                        value={task.dueDate}
                        onChange={handleChange}
                        required
                    />

                    <button
                        className="btn btn-primary"
                        type="submit"
                    >
                        Save Task
                    </button>

                </form>

            </div>

        </Layout>
    );
};

export default AddTask;