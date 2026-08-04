import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import API from "../../services/api";

const Tasks = () => {

    const [tasks, setTasks] = useState([]);

    const loadTasks = async () => {

        try {

            const res = await API.get("/tasks");

            setTasks(res.data.tasks);

        } catch (err) {

            console.log(err);

        }

    };

    const deleteTask = async (id) => {

        if (!window.confirm("Delete this task?"))
            return;

        await API.delete(`/tasks/${id}`);

        loadTasks();

    };

    useEffect(() => {

        loadTasks();

    }, []);

    return (

        <Layout>

            <div className="d-flex justify-content-between mb-4">

                <h2>Task Management</h2>

                <Link
                    className="btn btn-primary"
                    to="/tasks/add"
                >
                    + Add Task
                </Link>

            </div>

            <table className="table table-bordered table-hover">

                <thead className="table-dark">

                    <tr>

                        <th>Title</th>

                        <th>Assigned To</th>

                        <th>Priority</th>

                        <th>Status</th>

                        <th>Due Date</th>

                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        tasks.map((task) => (

                            <tr key={task._id}>

                                <td>{task.title}</td>

                                <td>{task.assignedTo?.name}</td>

                                <td>{task.priority}</td>

                                <td>{task.status}</td>

                                <td>

                                    {new Date(task.dueDate).toLocaleDateString()}

                                </td>

                                <td>

                                    <Link
                                        to={`/tasks/edit/${task._id}`}
                                        className="btn btn-warning btn-sm me-2"
                                    >
                                        Edit
                                    </Link>

                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => deleteTask(task._id)}
                                    >
                                        Delete
                                    </button>

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </Layout>

    );

};

export default Tasks;