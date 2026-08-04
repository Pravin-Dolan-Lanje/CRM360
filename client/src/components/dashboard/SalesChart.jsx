import {
Chart as ChartJS,
CategoryScale,
LinearScale,
PointElement,
LineElement,
Title,
Tooltip,
Legend
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
CategoryScale,
LinearScale,
PointElement,
LineElement,
Title,
Tooltip,
Legend
);

const SalesChart = () => {

const data = {

labels:["Jan","Feb","Mar","Apr","May","Jun"],

datasets:[

{

label:"Customers",

data:[2,5,8,10,15,20],

borderColor:"blue",

fill:false

},

{

label:"Leads",

data:[1,3,6,8,12,18],

borderColor:"green",

fill:false

}

]

};

return(

<div className="card shadow p-3">

<h4>Growth Report</h4>

<Line data={data}/>

</div>

);

};

export default SalesChart;