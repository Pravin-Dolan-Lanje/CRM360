import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

const LeadChart = ({ leadStats }) => {

    const data = {

        labels: [
            "Won",
            "Lost",
            "New"
        ],

        datasets: [

            {

                data: [
                    leadStats.won,
                    leadStats.lost,
                    leadStats.new
                ]

            }

        ]

    };

    return (

        <div className="card shadow p-3">

            <h5>Lead Status</h5>

            <Pie data={data} />

        </div>

    );

};

export default LeadChart;