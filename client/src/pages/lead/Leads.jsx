import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import API from "../../services/api";

const Leads = () => {

    const [leads, setLeads] = useState([]);

    const loadLeads = async () => {

        try {

            const res = await API.get("/leads");

            setLeads(res.data.leads);

        } catch (err) {

            console.log(err);

        }

    };

    const deleteLead = async (id) => {

        if (!window.confirm("Delete this lead?"))
            return;

        await API.delete(`/leads/${id}`);

        loadLeads();

    };

    useEffect(() => {

        loadLeads();

    }, []);

    return (

        <Layout>

            <div className="d-flex justify-content-between mb-4">

                <h2>Lead Management</h2>

                <Link
                    to="/leads/add"
                    className="btn btn-primary"
                >
                    + Add Lead
                </Link>

            </div>

            <table className="table table-bordered table-hover">

                <thead className="table-dark">

                    <tr>

                        <th>Title</th>

                        <th>Customer</th>

                        <th>Source</th>

                        <th>Status</th>

                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        leads.map((lead) => (

                            <tr key={lead._id}>

                                <td>{lead.title}</td>

                                <td>{lead.customer?.name}</td>

                                <td>{lead.source}</td>

                                <td>{lead.status}</td>

                                <td>

                                    <Link
                                        className="btn btn-warning btn-sm me-2"
                                        to={`/leads/edit/${lead._id}`}
                                    >
                                        Edit
                                    </Link>

                                    <td>

                                      
                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => deleteLead(lead._id)}
                                        >
                                            Delete
                                        </button>

                                    </td>

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </Layout>

    );

};

export default Leads;