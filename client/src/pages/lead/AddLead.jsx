import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import API from "../../services/api";

const AddLead = () => {

    const navigate = useNavigate();

    const [customers, setCustomers] = useState([]);

    const [lead, setLead] = useState({
        title: "",
        customer: "",
        source: "Website",
        status: "New",
        notes: ""
    });

    useEffect(() => {
        loadCustomers();
    }, []);

    const loadCustomers = async () => {
        try {
            const res = await API.get("/customers");
            setCustomers(res.data.customers);
        } catch (err) {
            console.log(err);
        }
    };

    const handleChange = (e) => {
        setLead({
            ...lead,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await API.post("/leads", lead);

            alert("Lead Added Successfully");

            navigate("/leads");

        } catch (err) {

            alert(err.response?.data?.message);

        }

    };

    return (

        <Layout>

            <div className="card shadow p-4">

                <h3 className="mb-4">

                    Add Lead

                </h3>

                <form onSubmit={handleSubmit}>

                    <input
                        className="form-control mb-3"
                        placeholder="Lead Title"
                        name="title"
                        value={lead.title}
                        onChange={handleChange}
                        required
                    />

                    <select
                        className="form-select mb-3"
                        name="customer"
                        value={lead.customer}
                        onChange={handleChange}
                        required
                    >

                        <option value="">

                            Select Customer

                        </option>

                        {

                            customers.map((customer) => (

                                <option
                                    key={customer._id}
                                    value={customer._id}
                                >
                                    {customer.name}
                                </option>

                            ))

                        }

                    </select>

                    <select
                        className="form-select mb-3"
                        name="source"
                        value={lead.source}
                        onChange={handleChange}
                    >

                        <option>Website</option>
                        <option>Facebook</option>
                        <option>Instagram</option>
                        <option>WhatsApp</option>
                        <option>Referral</option>
                        <option>Phone</option>
                        <option>Other</option>

                    </select>

                    <textarea
                        className="form-control mb-3"
                        placeholder="Notes"
                        name="notes"
                        value={lead.notes}
                        onChange={handleChange}
                    />

                    <button className="btn btn-primary">

                        Save Lead

                    </button>

                </form>

            </div>

        </Layout>

    );

};

export default AddLead;