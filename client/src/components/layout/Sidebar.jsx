import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaUserTie,
  FaTasks,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
  FaUserCircle,
  FaKey
} from "react-icons/fa";

const Sidebar = () => {

  const logout = () => {

    localStorage.removeItem("token");

    window.location.href = "/";

  };

  return (

    <div className="sidebar">

      <h2 className="logo">

        CRM360

      </h2>

      <NavLink to="/dashboard">
        <FaHome /> Dashboard
      </NavLink>

      <NavLink to="/customers">
        <FaUsers /> Customers
      </NavLink>

      <NavLink to="/leads">
        <FaUserTie /> Leads
      </NavLink>

      <NavLink to="/tasks">
        <FaTasks /> Tasks
      </NavLink>

      <NavLink to="/reports">
        <FaChartBar /> Reports
      </NavLink>

      <NavLink to="/settings">
        <FaCog /> Settings
      </NavLink>

      <NavLink to="/profile">
  <FaUserCircle /> Profile
</NavLink>

<NavLink to="/change-password">
  <FaKey /> Change Password
</NavLink>

      <button
        className="logout-btn"
        onClick={logout}
      >
        <FaSignOutAlt /> Logout
      </button>

    </div>

  );

};

export default Sidebar;