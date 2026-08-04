import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import API from "../../services/api";

const EditTask = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [users, setUsers] = useState([]);

    const [task, setTask] = useState({
        title: "",
        description: "",
        assignedTo: "",
        priority: "Medium",
        status: "Pending",
        dueDate: ""
    });

    useEffect(() => {
        loadTask();
        loadUsers();
    }, []);

    const loadTask = async () => {

        try {

            const res = await API.get(`/tasks/${id}`);

            const taskData = res.data.task;

            setTask({
                ...taskData,
                assignedTo: taskData.assignedTo?._id || "",
                dueDate: taskData.dueDate
                    ? taskData.dueDate.substring(0, 10)
                    : ""
            });

        } catch (error) {

            console.log(error);

        }

    };

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

            await API.put(`/tasks/${id}`, task);

            alert("Task Updated Successfully");

            navigate("/tasks");

        } catch (error) {

            alert(error.response?.data?.message);

        }

    };

    return (

        <Layout>

            <div className="card shadow p-4">

                <h3 className="mb-4">Edit Task</h3>

                <form onSubmit={handleSubmit}>

                    <input
                        className="form-control mb-3"
                        name="title"
                        value={task.title}
                        onChange={handleChange}
                        required
                    />

                    <textarea
                        className="form-control mb-3"
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
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                    </select>

                    <select
                        className="form-select mb-3"
                        name="status"
                        value={task.status}
                        onChange={handleChange}
                    >
                        <option>Pending</option>
                        <option>In Progress</option>
                        <option>Completed</option>
                    </select>

                    <input
                        type="date"
                        className="form-control mb-3"
                        name="dueDate"
                        value={task.dueDate}
                        onChange={handleChange}
                    />

                    <button className="btn btn-success">

                        Update Task

                    </button>

                </form>

            </div>

        </Layout>

    );

};

export default EditTask;