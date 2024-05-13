// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Route, Routes } from 'react-router-dom';
// import Dashboard from '../admin/Dashboard';
// import Properties from '../admin/Properties';
// import Customers from '../admin/Customers';
// import Transaction from '../admin/Transactions';
// import './Admin.css'; // Import your CSS file for styling
// import { Icon } from '@chakra-ui/react';
// import { RiDashboardFill, RiShoppingBagFill, RiCoupon2Fill } from 'react-icons/ri';
// import { IoIosPeople } from 'react-icons/io';
// import { AiFillFileText } from 'react-icons/ai';
// import { FaChartBar, FaChartLine, FaChartPie } from 'react-icons/fa';
// import { ChartBar } from './bar';
// import Piee from './piemain';
// import Coupon from './Coupon';
// import PieChart1 from './PieChart';
// import { LineChart, PieChart } from 'recharts';
// import Piee from './pie';
// import Coupon from './Cuopon';




// const Admin = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   return (
// <<<<<<< HEAD
//     <div style={{width:"100%", height:"1500px"}}>
// =======
//     <div style={{background: '#64B5F6' , width:"100%", height:"1500px"}}>
// >>>>>>> 55090b1026723095740636c73a42d0ff335992a2
//       {/* Toggle button */}
//       {!sidebarOpen && (
//         <button className="toggle-btn" onClick={toggleSidebar} style={{borderRadius:"20px"}}>
//           Admin
//         </button>
//       )}
//       {/* Sidebar */}
//       <div className={`sidebar ${sidebarOpen ? 'open' : ''}`} >
//         <button className="close-btn" onClick={toggleSidebar}>
//           &times;
//         </button>
// <<<<<<< HEAD
//         <h4 style={{marginBlock:"20px" , paddingLeft:"40px",color:"white"}}>Dashboard</h4>
// =======
//         <h4 style={{marginBlock:"20px" , paddingLeft:"40px", color:"white"}}>Dashboard</h4>
// >>>>>>> 55090b1026723095740636c73a42d0ff335992a2
//         {/* Icon alongside Dashboard link */}
//         <Link to="/" style={{marginBlock:"20px" , paddingLeft:"20px"}}>
//           <Icon as={RiDashboardFill} style={{marginRight:"10px"}}/>
//           Dashboard
        
//         </Link>
//         {/* Other sidebar links */}
//         <Link to="/properties" style={{marginBlock:"20px", paddingLeft:"20px"}}><Icon as={RiShoppingBagFill}  style={{marginRight:"10px"}}/>Properties</Link>
//         <Link to="/customers"style={{marginBlock:"20px",paddingLeft:"20px"}}><Icon as={IoIosPeople}  style={{marginRight:"10px"}}/>Customers</Link>
//         <Link to="/transaction"style={{marginBlock:"20px",paddingLeft:"20px"}}><Icon as={AiFillFileText}  style={{marginRight:"10px"}}/>Transactions</Link>
        
//         <h4 style={{marginBlock:"20px" , paddingLeft:"40px", marginTop:"20px",color:"white"}}>Charts</h4>
//         {/* Icon alongside Dashboard link */}
//         {/* Other sidebar links */}
//         <Link to="/bar" style={{marginBlock:"20px", paddingLeft:"20px"}}><Icon as={FaChartBar}  style={{marginRight:"10px"}}/>Bar</Link>
//         <Link to="/pie"style={{marginBlock:"20px",paddingLeft:"20px"}}><Icon as={FaChartPie}  style={{marginRight:"10px"}}/>Pie</Link>

// <<<<<<< HEAD
//         <h4 style={{marginBlock:"20px" , paddingLeft:"40px",color:"white"}}>Coupon</h4>
// =======
//         <h4 style={{marginBlock:"20px" , paddingLeft:"40px", color:"white"}}>Coupon</h4>
// >>>>>>> 55090b1026723095740636c73a42d0ff335992a2
//         {/* Icon alongside Dashboard link */}
//         <Link to="/coupon" style={{marginBlock:"20px" , paddingLeft:"20px"}}>
//           <Icon as={RiCoupon2Fill} style={{marginRight:"10px"}}/>
//             Coupon
//         </Link>
//       </div>
//       {/* Content */}
//       <div className="content">
//         <Routes>
//           <Route path="/" element={<Dashboard />} />
//           <Route path="/properties" element={<Properties />} />
//           <Route path="/customers" element={<Customers />} />
//           <Route path="/transaction" element={<Transaction />} />
//           <Route path="/bar" element={<ChartBar />} />
//           <Route path="/pie" element={<Piee />} />
//           <Route path="/coupon" element={<Coupon />} />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default Admin;



import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
// import Dashboard from '../admin/Dashboard';
// import Properties from '../admin/Properties';
// import Customers from '../admin/Customers';
// import Transaction from '../admin/Transactions';
import { Icon } from '@chakra-ui/react';
import { RiDashboardFill, RiShoppingBagFill, RiCoupon2Fill } from 'react-icons/ri';
import { IoIosPeople } from 'react-icons/io';
import { AiFillFileText } from 'react-icons/ai';
import { FaChartBar, FaChartPie } from 'react-icons/fa';
// import ChartBar from './ChartBar';
// import Piee from './Piee';
import Coupon from './Coupon';
import { ChartBar } from './bar';
import Piee from './piemain';
import Dashboard from './Dashboard';
import Properties from './Properties';
import Customers from './Customers';
import Transactions from './Transactions';
import { Test } from './test';

const Admin = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('admin');
    navigate('/');
  };

  return (
    <div style={{ background: '#64B5F6', width: '100%', height: '1500px' }}>
       {!sidebarOpen && (
        <button className="toggle-btn" onClick={toggleSidebar} style={{borderRadius:"20px"}}>
          Admin
        </button>
      )}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          &times;
        </button>
        <h4 style={{ marginBlock: '20px', paddingLeft: '40px', color: 'white' }}>Dashboard</h4>
        <Link to="/" style={{ marginBlock: '20px', paddingLeft: '20px' }}>
          <Icon as={RiDashboardFill} style={{ marginRight: '10px' }} />
          Dashboard
        </Link>
        <Link to="/properties" style={{ marginBlock: '20px', paddingLeft: '20px' }}>
          <Icon as={RiShoppingBagFill} style={{ marginRight: '10px' }} />
          Properties
        </Link>
        <Link to="/customers" style={{ marginBlock: '20px', paddingLeft: '20px' }}>
          <Icon as={IoIosPeople} style={{ marginRight: '10px' }} />
          Customers
        </Link>
        <Link to="/transaction" style={{ marginBlock: '20px', paddingLeft: '20px' }}>
          <Icon as={AiFillFileText} style={{ marginRight: '10px' }} />
          Transactions
        </Link>
        <h4 style={{ marginBlock: '20px', paddingLeft: '40px', marginTop: '20px', color: 'white' }}>Charts</h4>
        <Link to="/bar" style={{ marginBlock: '20px', paddingLeft: '20px' }}>
          <Icon as={FaChartBar} style={{ marginRight: '10px' }} />
          Bar
        </Link>
        <Link to="/pie" style={{ marginBlock: '20px', paddingLeft: '20px' }}>
          <Icon as={FaChartPie} style={{ marginRight: '10px' }} />
          Pie
        </Link>
        <h4 style={{ marginBlock: '20px', paddingLeft: '40px', color: 'white' }}>Coupon</h4>
        <Link to="/coupon" style={{ marginBlock: '20px', paddingLeft: '20px' }}>
          <Icon as={RiCoupon2Fill} style={{ marginRight: '10px' }} />
          Coupon
        </Link>
        <Link to='/test'>Test</Link>
        <button onClick={handleLogout} style={{ marginBlock: '20px', paddingLeft: '20px' }}>
          Logout
        </button>
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/transaction" element={<Transactions />} />
          <Route path="/bar" element={<ChartBar />} />
          <Route path="/pie" element={<Piee />} />
          <Route path="/coupon" element={<Coupon />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
