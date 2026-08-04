import { useEffect,useState } from "react";
import Layout from "../../components/layout/Layout";
import API from "../../services/api";

import StatCards from "../../components/dashboard/StatCards";
import SalesChart from "../../components/dashboard/SalesChart";
import RecentCustomers from "../../components/dashboard/RecentCustomers";
import UpcomingTasks from "../../components/dashboard/UpcomingTasks";
import TaskChart from "../../components/dashboard/TaskChart";
import LeadChart from "../../components/dashboard/LeadChart";

const Dashboard=()=>{

const[data,setData]=useState(null);

useEffect(()=>{

loadDashboard();

},[]);

const loadDashboard=async()=>{

const res=await API.get("/dashboard");

setData(res.data);

};

if(!data){

return<Layout><h3>Loading...</h3></Layout>;

}

return(

<Layout>

<StatCards stats={data.stats}/>

<div className="row mt-4">

<div className="col-md-8">

<SalesChart/>

</div>

<div className="col-md-4">

<UpcomingTasks tasks={data.upcomingTasks}/>

</div>
<div className="row mt-4">

    <div className="col-md-6">

        <TaskChart taskStats={data.taskStats} />

    </div>

    <div className="col-md-6">

        <LeadChart leadStats={data.leadStats} />

    </div>

</div>

</div>

<div className="mt-4">

<RecentCustomers customers={data.recentCustomers}/>

</div>


</Layout>


);

};

export default Dashboard;