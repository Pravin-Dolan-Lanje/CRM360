import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import API from "../../services/api";

const Profile = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        profileImage: ""
    });

    const [image, setImage] = useState(null);

    useEffect(() => {
        loadProfile();
    }, []);

    const loadProfile = async () => {

        try {

            const res = await API.get("/profile");

            setUser(res.data.user);

        } catch (error) {

            console.log(error);

        }

    };

    const handleChange = (e) => {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await API.put("/profile", {
                name: user.name,
                phone: user.phone
            });

            alert("Profile Updated Successfully");

            loadProfile();

        } catch (error) {

            alert(error.response?.data?.message);

        }

    };

    const uploadImage = async () => {

        if (!image) {
            alert("Please select an image");
            return;
        }

        try {

            const formData = new FormData();

            formData.append("profileImage", image);

            await API.put(
                "/profile/photo",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }
            );

            alert("Profile Image Uploaded Successfully");

            loadProfile();

        } catch (error) {

            alert(error.response?.data?.message);

        }

    };

    return (

        <Layout>

            <div className="card shadow p-4">

                <h3 className="mb-4">

                    My Profile

                </h3>

                {user.profileImage && (

                    <div className="text-center mb-3">

                        <img
                            src={`http://localhost:5000/uploads/profiles/${user.profileImage}`}
                            alt="Profile"
                            width="140"
                            height="140"
                            className="rounded-circle border"
                            style={{ objectFit: "cover" }}
                        />

                    </div>

                )}

                <input
                    type="file"
                    className="form-control mb-3"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                />

                <button
                    type="button"
                    className="btn btn-success mb-4"
                    onClick={uploadImage}
                >
                    Upload Photo
                </button>

                <form onSubmit={handleSubmit}>

                    <label>Name</label>

                    <input
                        className="form-control mb-3"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                    />

                    <label>Email</label>

                    <input
                        className="form-control mb-3"
                        value={user.email}
                        disabled
                    />

                    <label>Phone</label>

                    <input
                        className="form-control mb-3"
                        name="phone"
                        value={user.phone}
                        onChange={handleChange}
                    />

                    <button className="btn btn-primary">

                        Update Profile

                    </button>

                </form>

            </div>

        </Layout>

    );

};

export default Profile;