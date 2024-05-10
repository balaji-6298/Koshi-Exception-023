import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import AdminPanel from './rental';

function App(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <div className='grid-container'>
        <Header />
        <Sidebar />
        <Home />
        <AdminPanel />
      </div>
    </>
  );
}

export default App;
