import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

const TaskChart = ({ taskStats }) => {

    const data = {

        labels: [
            "Completed",
            "Pending",
            "In Progress"
        ],

        datasets: [

            {

                data: [
                    taskStats.completed,
                    taskStats.pending,
                    taskStats.progress
                ]

            }

        ]

    };

    return (

        <div className="card shadow p-3">

            <h5>Task Status</h5>

            <Doughnut data={data} />

        </div>

    );

};

export default TaskChart;