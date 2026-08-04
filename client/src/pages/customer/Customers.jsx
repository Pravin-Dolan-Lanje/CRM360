
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import API from "../../services/api";

const Customers = () => {
    const [customers, setCustomers] = useState([]);

    const loadCustomers = async () => {
        try {
            const res = await API.get("/customers");
            setCustomers(res.data.customers);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteCustomer = async (id) => {

  if (!window.confirm("Delete this customer?"))
    return;

  await API.delete(`/customers/${id}`);

  loadCustomers();

};

    useEffect(() => {
        loadCustomers();
    }, []);

    return (
        <Layout>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Customers</h2>

                <Link
                    to="/customers/add"
                    className="btn btn-primary"
                >
                    + Add Customer
                </Link>
            </div>

            <table className="table table-striped table-bordered">

                <thead className="table-dark">

                    <tr>

                        <th>Name</th>

                        <th>Email</th>

                        <th>Phone</th>

                        <th>Company</th>

                        <th>Status</th>

                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    {customers.map((customer) => (

                        <tr key={customer._id}>

                            <td>{customer.name}</td>

                            <td>{customer.email}</td>

                            <td>{customer.phone}</td>

                            <td>{customer.company}</td>

                            <td>
                                <span className="badge bg-success">
                                    {customer.status}
                                </span>
                            </td>

                            <td>

                                <Link
                                    to={`/customers/edit/${customer._id}`}
                                    className="btn btn-warning btn-sm me-2"
                                >
                                    Edit
                                </Link>

                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => deleteCustomer(customer._id)}
                                >
                                    Delete
                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </Layout>
    );
};

export default Customers;