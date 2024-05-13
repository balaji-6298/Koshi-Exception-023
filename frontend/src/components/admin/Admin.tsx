import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../admin/Dashboard';
import Properties from '../admin/Properties';
import Customers from '../admin/Customers';
import Transaction from '../admin/Transactions';
import './Admin.css'; // Import your CSS file for styling
import { Icon } from '@chakra-ui/react';
import { RiDashboardFill, RiShoppingBagFill, RiCoupon2Fill } from 'react-icons/ri';
import { IoIosPeople } from 'react-icons/io';
import { AiFillFileText } from 'react-icons/ai';
import { FaChartBar, FaChartLine, FaChartPie } from 'react-icons/fa';
import { ChartBar } from './bar';
import Piee from './piemain';
import Coupon from './Coupon';




const Admin = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div style={{width:"100%", height:"1500px"}}>
      {/* Toggle button */}
      {!sidebarOpen && (
        <button className="toggle-btn" onClick={toggleSidebar}>
          Admin
        </button>
      )}
      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`} >
        <button className="close-btn" onClick={toggleSidebar}>
          &times;
        </button>
        <h4 style={{marginBlock:"20px" , paddingLeft:"40px",color:"white"}}>Dashboard</h4>
        {/* Icon alongside Dashboard link */}
        <Link to="/" style={{marginBlock:"20px" , paddingLeft:"20px"}}>
          <Icon as={RiDashboardFill} style={{marginRight:"10px"}}/>
          Dashboard
        
        </Link>
        {/* Other sidebar links */}
        <Link to="/properties" style={{marginBlock:"20px", paddingLeft:"20px"}}><Icon as={RiShoppingBagFill}  style={{marginRight:"10px"}}/>Properties</Link>
        <Link to="/customers"style={{marginBlock:"20px",paddingLeft:"20px"}}><Icon as={IoIosPeople}  style={{marginRight:"10px"}}/>Customers</Link>
        <Link to="/transaction"style={{marginBlock:"20px",paddingLeft:"20px"}}><Icon as={AiFillFileText}  style={{marginRight:"10px"}}/>Transactions</Link>
        
        <h4 style={{marginBlock:"20px" , paddingLeft:"40px", marginTop:"20px",color:"white"}}>Charts</h4>
        {/* Icon alongside Dashboard link */}
        {/* Other sidebar links */}
        <Link to="/bar" style={{marginBlock:"20px", paddingLeft:"20px"}}><Icon as={FaChartBar}  style={{marginRight:"10px"}}/>Bar</Link>
        <Link to="/pie"style={{marginBlock:"20px",paddingLeft:"20px"}}><Icon as={FaChartPie}  style={{marginRight:"10px"}}/>Pie</Link>

        <h4 style={{marginBlock:"20px" , paddingLeft:"40px",color:"white"}}>Coupon</h4>
        {/* Icon alongside Dashboard link */}
        <Link to="/coupon" style={{marginBlock:"20px" , paddingLeft:"20px"}}>
          <Icon as={RiCoupon2Fill} style={{marginRight:"10px"}}/>
            Coupon
        </Link>
      </div>
      {/* Content */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/bar" element={<ChartBar />} />
          <Route path="/pie" element={<Piee />} />
          <Route path="/coupon" element={<Coupon />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
