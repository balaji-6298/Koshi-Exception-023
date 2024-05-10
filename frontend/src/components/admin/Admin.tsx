import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../admin/Dashboard';
import Properties from '../admin/Properties';
import Customers from '../admin/Customers';
import Transaction from '../admin/Transactions';
import './Admin.css'; // Import your CSS file for styling

const Admin = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      {/* Toggle button */}
      {!sidebarOpen && (
        <button className="toggle-btn" onClick={toggleSidebar}>
          Admin
        </button>
      )}
      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          &times;
        </button>
        <Link to="/">Dashboard</Link>
        <Link to="/properties">Properties</Link>
        <Link to="/customers">Customers</Link>
        <Link to="/transaction">Transactions</Link>
      </div>
      {/* Content */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/transaction" element={<Transaction />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
