import { Routes, Route } from "react-router-dom";

// Authentication
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

// Dashboard
import Dashboard from "./pages/dashboard/Dashboard";

// Customers
import Customers from "./pages/customer/Customers";

// Leads
import Leads from "./pages/lead/Leads";

// Tasks
import Tasks from "./pages/task/Tasks";

// Reports
import Reports from "./pages/reports/Reports";

// Settings
import Settings from "./pages/settings/Settings";

// Protected Route
import ProtectedRoute from "./routes/ProtectedRoute";

import AddCustomer from "./pages/customer/AddCustomer";
import EditCustomer from "./pages/customer/EditCustomer";
import AddLead from "./pages/lead/AddLead";
import EditLead from "./pages/lead/EditLead";
import AddTask from "./pages/task/AddTask";
import EditTask from "./pages/task/EditTask";
import Profile from "./pages/profile/Profile";
import ChangePassword from "./pages/profile/ChangePassword";

function App() {
  return (
    <Routes>

      {/* Public Routes */}

      <Route path="/" element={<Login />} />

      <Route path="/register" element={<Register />} />

      {/* Protected Routes */}

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/customers"
        element={
          <ProtectedRoute>
            <Customers />
          </ProtectedRoute>
        }
      />

      <Route
        path="/leads"
        element={
          <ProtectedRoute>
            <Leads />
          </ProtectedRoute>
        }
      />

      <Route
        path="/tasks"
        element={
          <ProtectedRoute>
            <Tasks />
          </ProtectedRoute>
        }
      />

      <Route
        path="/reports"
        element={
          <ProtectedRoute>
            <Reports />
          </ProtectedRoute>
        }
      />

      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }
      />

      <Route
        path="/customers/edit/:id"
        element={
          <ProtectedRoute>
            <EditCustomer />
          </ProtectedRoute>
        }
      />

      <Route
        path="/customers/add"
        element={
          <ProtectedRoute>
            <AddCustomer />
          </ProtectedRoute>
        }
      />

      <Route
        path="/leads/add"
        element={
          <ProtectedRoute>
            <AddLead />
          </ProtectedRoute>
        }
      />

      <Route
        path="/leads/edit/:id"
        element={
          <ProtectedRoute>
            <EditLead />
          </ProtectedRoute>
        }
      />

      <Route
        path="/tasks/add"
        element={
          <ProtectedRoute>
            <AddTask />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      <Route
        path="/change-password"
        element={
          <ProtectedRoute>
            <ChangePassword />
          </ProtectedRoute>
        }
      />
      <Route
        path="/tasks/edit/:id"
        element={
          <ProtectedRoute>
            <EditTask />
          </ProtectedRoute>
        }
      />
    </Routes>


  );
}

export default App;