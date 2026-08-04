import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import API from "../../services/api";

const EditLead = () => {

    const { id } = useParams();

    const navigate = useNavigate();

    const [lead, setLead] = useState({
        title: "",
        customer: "",
        source: "Website",
        status: "New",
        notes: ""
    });

    useEffect(() => {

        loadLead();

    }, []);

    const loadLead = async () => {

        const res = await API.get(`/leads/${id}`);

        setLead(res.data.lead);

    };

    const handleChange = (e) => {

        setLead({
            ...lead,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        await API.put(`/leads/${id}`, lead);

        alert("Lead Updated Successfully");

        navigate("/leads");

    };

    return (

        <Layout>

            <div className="card shadow p-4">

                <h3>Edit Lead</h3>

                <form onSubmit={handleSubmit}>

                    <input
                        className="form-control mb-3"
                        name="title"
                        value={lead.title}
                        onChange={handleChange}
                    />

                    <textarea
                        className="form-control mb-3"
                        name="notes"
                        value={lead.notes}
                        onChange={handleChange}
                    />

                    <select
                        className="form-select mb-3"
                        name="status"
                        value={lead.status}
                        onChange={handleChange}
                    >

                        <option>New</option>
                        <option>Contacted</option>
                        <option>Qualified</option>
                        <option>Won</option>
                        <option>Lost</option>

                    </select>

                    <button className="btn btn-success">

                        Update Lead

                    </button>

                </form>

            </div>

        </Layout>

    );

};

export default EditLead;