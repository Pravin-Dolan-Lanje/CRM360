import { useState } from "react";
import Layout from "../../components/layout/Layout";
import API from "../../services/api";

const ChangePassword = () => {

    const [password, setPassword] = useState({
        currentPassword: "",
        newPassword: ""
    });

    const handleChange = (e) => {

        setPassword({
            ...password,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await API.put("/profile/password", password);

            alert("Password Changed Successfully");

            setPassword({
                currentPassword: "",
                newPassword: ""
            });

        } catch (error) {

            alert(error.response?.data?.message);

        }

    };

    return (

        <Layout>

            <div className="card shadow p-4">

                <h3 className="mb-4">

                    Change Password

                </h3>

                <form onSubmit={handleSubmit}>

                    <input
                        type="password"
                        className="form-control mb-3"
                        placeholder="Current Password"
                        name="currentPassword"
                        value={password.currentPassword}
                        onChange={handleChange}
                    />

                    <input
                        type="password"
                        className="form-control mb-3"
                        placeholder="New Password"
                        name="newPassword"
                        value={password.newPassword}
                        onChange={handleChange}
                    />

                    <button className="btn btn-success">

                        Change Password

                    </button>

                </form>

            </div>

        </Layout>

    );

};

export default ChangePassword;