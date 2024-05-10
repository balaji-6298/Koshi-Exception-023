import React, { useState, useEffect } from 'react';

interface Rental {
  id: number;
  name: string;
}

const AdminPanel: React.FC = () => {
  const [dataCount, setDataCount] = useState<number>(0);
  const [userCount, setUserCount] = useState<number>(0);
  const [rentals, setRentals] = useState<Rental[]>([]);
  const [newRentalName, setNewRentalName] = useState<string>('');

  useEffect(() => {
    fetchDataCount();
    fetchUserCount();
  }, []);

  const fetchDataCount = async () => {
    try {
      const response = await fetch('https://koshi-exception-023-1.onrender.com/rentals');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data: Rental[] = await response.json();
      setDataCount(data.length);
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
      const data: any[] = await response.json();
      setUserCount(data.length);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleAddRental = async () => {
    try {
      const response = await fetch('https://koshi-exception-023-1.onrender.com/rentals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: newRentalName }),
      });
      if (!response.ok) {
        throw new Error('Failed to add rental');
      }
      const newRental: Rental = await response.json();
      setRentals([...rentals, newRental]);
      setDataCount(dataCount + 1);
      setNewRentalName('');
    } catch (error) {
      console.error('Error adding rental:', error);
    }
  };

  const handleDeleteRental = async (id: number) => {
    try {
      const response = await fetch(`https://koshi-exception-023-1.onrender.com/rentals/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete rental');
      }
      setRentals(rentals.filter(rental => rental.id !== id));
      setDataCount(dataCount - 1);
    } catch (error) {
      console.error('Error deleting rental:', error);
    }
  };

  return (
    <>
      <div className='main-grid'>
        <div>
          <input
            type="text"
            value={newRentalName}
            onChange={e => setNewRentalName(e.target.value)}
            placeholder="Enter rental name"
          />
          <button onClick={handleAddRental}>Add Rental</button>
        </div>
        <ul>
          {rentals.map(rental => (
            <li key={rental.id}>
              {rental.name}{' '}
              <button onClick={() => handleDeleteRental(rental.id)}>Delete</button>
            </li>
          ))}
        </ul>
        <div>
          <h2>Data Count: {dataCount}</h2>
        </div>
        <div>
          <h2>User Count: {userCount}</h2>
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
