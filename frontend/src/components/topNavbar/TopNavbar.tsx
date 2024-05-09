// Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

export const TopNavbar: React.FC = () => {
    return (
        <div>
            <h2>My App</h2>
            <Link to="/">Stays</Link>
            <Link to="/experiences" >Experiences</Link>
            <Link to="/online-experiences">Online Experiences</Link>
        </div>
    );
};
