import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import API from "../../services/api";

const AddCustomer = () => {

  const navigate = useNavigate();

  const [customer, setCustomer] = useState({

    name: "",
    email: "",
    phone: "",
    company: "",
    address: ""

  });

  const handleChange = (e) => {

    setCustomer({

      ...customer,

      [e.target.name]: e.target.value

    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post("/customers", customer);

      alert("Customer Added Successfully");

      navigate("/customers");

    } catch (error) {

      alert(error.response?.data?.message);

    }

  };

  return (

    <Layout>

      <div className="card shadow p-4">

        <h3 className="mb-4">

          Add Customer

        </h3>

        <form onSubmit={handleSubmit}>

          <input
            className="form-control mb-3"
            placeholder="Customer Name"
            name="name"
            onChange={handleChange}
            required
          />

          <input
            className="form-control mb-3"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            required
          />

          <input
            className="form-control mb-3"
            placeholder="Phone"
            name="phone"
            onChange={handleChange}
            required
          />

          <input
            className="form-control mb-3"
            placeholder="Company"
            name="company"
            onChange={handleChange}
          />

          <textarea
            className="form-control mb-3"
            placeholder="Address"
            name="address"
            onChange={handleChange}
          />

          <button className="btn btn-primary">

            Save Customer

          </button>

        </form>

      </div>

    </Layout>

  );

};

export default AddCustomer;