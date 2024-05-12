import React, { useState, useEffect } from 'react';
import './Property.css';
import AdminSideBar from './AdminSideBar'; // Import the AdminSideBar component

function Property() {
  const [data, setData] = useState([]);
  const [updateId, setUpdateId] = useState(null); // State to track the item to update

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Fetch data from API or local JSON file
      const response = await fetch('https://koshi-exception-023-2.onrender.com/Properties');
      const jsonData = await response.json();
      setData(jsonData); // Assuming your data is an array
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDelete = (id) => {
    // Implement delete functionality
    setData(data.filter(item => item.id !== id));
  };

  const handleUpdate = (id) => {
    // Set the ID of the item to update
    setUpdateId(id);
  };

  const handleEditChange = (e, id) => {
    // Find the item to update
    const updatedItem = data.find(item => item.id === id);
    // Update the item's data based on the input change
    const newData = { ...updatedItem, [e.target.name]: e.target.value };
    // Update the data state with the modified item
    setData(data.map(item => (item.id === id ? newData : item)));
  };

  const handleEditSubmit = (e, id) => {
    e.preventDefault();
    // Exit update mode
    setUpdateId(null);
  };

  const handleAdd = (formData) => {
    // Implement add functionality
    const newData = { ...formData, id: data.length + 1 }; // Generate unique ID
    setData([...data, newData]);

    // Call updateDataCount to update the data count
    updateDataCount(data.length + 1);
  };

  return (
    <div>
      {/* Add form */}
      <AddForm onAdd={handleAdd} />

      {/* Display table of fetched data */}
      <table>
        <thead>
          <tr>
            <th>Location</th>
            <th>Price</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.location}</td>
              <td>{item.price}</td>
              <td><img src={item.image_url} alt={item.location} /></td>
              <td>
                {/* Render update form conditionally based on updateId */}
                {updateId === item.id ? (
                  <form onSubmit={(e) => handleEditSubmit(e, item.id)}>
                    <input
                      type="text"
                      name="location"
                      value={item.location}
                      onChange={(e) => handleEditChange(e, item.id)}
                    />
                    <input
                      type="text"
                      name="price"
                      value={item.price}
                      onChange={(e) => handleEditChange(e, item.id)}
                    />
                    <input
                      type="text"
                      name="image_url"
                      value={item.image_url}
                      onChange={(e) => handleEditChange(e, item.id)}
                    />
                    <button type="submit"style={{backgroundColor:"green", padding:"10px", marginRight:"20px"}}>Save</button>
                  </form>
                ) : (
                  <>
                    <button onClick={() => handleUpdate(item.id)} style={{backgroundColor:"yellowgreen", padding:"10px", marginRight:"20px"}}>Update</button>
                    <button onClick={() => handleDelete(item.id)} style={{backgroundColor:"red", padding:"10px", marginRight:"20px"}}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function AddForm({ onAdd }) {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    setFormData({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="location" style={{marginRight:"10px"}}>Location:</label>
      <input type="text" id="location" name="location" placeholder="Location" onChange={handleChange} />

      <label htmlFor="price" style={{marginRight:"10px"}}>Price:</label>
      <input type="text" id="price" name="price" placeholder="Price" onChange={handleChange} />

      <label htmlFor="image_url" >Image URL:</label>
      <input type="text" id="image_url" name="image_url" placeholder="Image URL" onChange={handleChange} />

      <button type="submit"style={{backgroundColor:"skyblue", padding:"10px", marginRight:"20px"}}>Add</button>
    </form>
  );
}

export default Property;
