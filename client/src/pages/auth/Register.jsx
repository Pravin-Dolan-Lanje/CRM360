import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    role: "Sales Executive",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );

      alert("Registration Successful");

      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-md-5">

          <div className="card shadow">

            <div className="card-body">

              <h2 className="text-center mb-4">

                CRM360 Register

              </h2>

              <form onSubmit={handleSubmit}>

                <input
                  className="form-control mb-3"
                  placeholder="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <input
                  className="form-control mb-3"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <input
                  className="form-control mb-3"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />

                <input
                  className="form-control mb-3"
                  placeholder="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />

                <select
                  className="form-select mb-3"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                >
                  <option>Admin</option>
                  <option>Sales Manager</option>
                  <option>Sales Executive</option>
                </select>

                <button
                  className="btn btn-success w-100"
                  type="submit"
                >
                  Register
                </button>

              </form>

              <p className="text-center mt-3">

                Already have an account?

                <Link to="/">

                  Login

                </Link>

              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Register;