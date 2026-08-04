const UpcomingTasks = ({ tasks }) => {

return(

<div className="card shadow p-3">

<h4>Upcoming Tasks</h4>

<table className="table">

<thead>

<tr>

<th>Title</th>

<th>User</th>

<th>Due</th>

</tr>

</thead>

<tbody>

{

tasks.map(task=>(

<tr key={task._id}>

<td>{task.title}</td>

<td>{task.assignedTo?.name}</td>

<td>{new Date(task.dueDate).toLocaleDateString()}</td>

</tr>

))

}

</tbody>

</table>

</div>

);

};

export default UpcomingTasks;