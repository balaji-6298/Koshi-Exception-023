import React, { useState, useEffect } from 'react';
import './user.css';

interface User {
  id: number;
  username: string;
  email: string;
}

function User() {
  const [userData, setUserData] = useState<User[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://koshi-exception-023-2.onrender.com/users');
      const userData: User[] = await response.json();
      setUserData(userData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="user-container">
      <h1 className="user-heading">User Data</h1>
      <ul className="user-list">
        {userData.map(user => (
          <li key={user.id} className="user-item">
            <img src="https://cdn-icons-png.freepik.com/256/1077/1077114.png?semt=ais_hybrid" alt="Person Logo" className="user-avatar" />
            <span className="user-details">{user.username} - {user.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default User;
