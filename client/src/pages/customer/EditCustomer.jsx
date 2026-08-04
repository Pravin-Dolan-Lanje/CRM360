import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import API from "../../services/api";

const EditCustomer = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    address: "",
    status: "Active",
  });

  useEffect(() => {

    loadCustomer();

  }, []);

  const loadCustomer = async () => {

    const res = await API.get(`/customers/${id}`);

    setCustomer(res.data.customer);

  };

  const handleChange = (e) => {

    setCustomer({
      ...customer,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    await API.put(`/customers/${id}`, customer);

    alert("Customer Updated Successfully");

    navigate("/customers");

  };

  return (

    <Layout>

      <div className="card shadow p-4">

        <h3>Edit Customer</h3>

        <form onSubmit={handleSubmit}>

          <input
            className="form-control mb-3"
            name="name"
            value={customer.name}
            onChange={handleChange}
          />

          <input
            className="form-control mb-3"
            name="email"
            value={customer.email}
            onChange={handleChange}
          />

          <input
            className="form-control mb-3"
            name="phone"
            value={customer.phone}
            onChange={handleChange}
          />

          <input
            className="form-control mb-3"
            name="company"
            value={customer.company}
            onChange={handleChange}
          />

          <textarea
            className="form-control mb-3"
            name="address"
            value={customer.address}
            onChange={handleChange}
          />

          <select
            className="form-select mb-3"
            name="status"
            value={customer.status}
            onChange={handleChange}
          >
            <option>Active</option>
            <option>Inactive</option>
          </select>

          <button className="btn btn-success">

            Update Customer

          </button>

        </form>

      </div>

    </Layout>

  );

};

export default EditCustomer;