import React, { useState, useEffect } from 'react';

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
    <div>
      <h1>User Data</h1>
      <ul>
        {userData.map(user => (
          <li key={user.id}>
            {user.username} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default User;
