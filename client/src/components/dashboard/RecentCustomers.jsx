const RecentCustomers = ({ customers }) => {

return(

<div className="card shadow p-3">

<h4>Recent Customers</h4>

<table className="table">

<thead>

<tr>

<th>Name</th>

<th>Email</th>

</tr>

</thead>

<tbody>

{

customers.map(customer=>(

<tr key={customer._id}>

<td>{customer.name}</td>

<td>{customer.email}</td>

</tr>

))

}

</tbody>

</table>

</div>

);

};

export default RecentCustomers;