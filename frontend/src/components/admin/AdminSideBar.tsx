import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const AdminSideBar = () => {
  const location = useLocation();
  const [dataCount, setDataCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    fetchData();
    fetchUserCount();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://koshi-exception-023-2.onrender.com/Properties');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      const categories = Object.keys(data[0]);
      let total = 0;
      categories.forEach(category => {
        total += data[0][category].length;
      });
      setTotalCount(total);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchUserCount = async () => {
    try {
      const response = await fetch('https://koshi-exception-023-1.onrender.com/users');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setUserCount(data.length);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <aside className="asidebar">
       <div className="count-box" style={{display:"flex", gap: "200px", fontWeight:"bold", fontSize:"larger",padding:"50px"}}>
          <div className="count-item" style={{height:"200px", width:"300px", border:"1px solid black", padding:"20px"}}>
            <h1>Total Destinations</h1>
            <h1 style={{marginTop:"50px"}}>{totalCount}</h1>
            <div className="custom-progressbar">
              <CircularProgressbar 
                value={75}
                text={`${75}%`}
                styles={buildStyles({
                  textColor: '#3498db',
                  pathColor: '#3498db',
                  trailColor: '#d6d6d6',
                })}
              />
            </div>
          </div>
          <div className="count-item" style={{height:"200px", width:"300px", border:"1px solid black", padding:"20px"}}>
            <h1 >Total Users</h1>
            <h1 style={{marginTop:"50px"}}>{userCount}</h1>
            <div className="custom-progressbar">
              <CircularProgressbar 
                value={75}
                text={`${75}%`}
                styles={buildStyles({
                  textColor: '#3498db',
                  pathColor: '#3498db',
                  trailColor: '#d6d6d6',
                })}
              />
            </div>
          </div>
        </div>
      
    </aside>
  );
};

export default AdminSideBar;
