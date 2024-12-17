import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
function Navbar() {
  return (
    <nav className="bg-primary shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
      <a href="/" className="font-bold text-accent resizeable-text" onClick={(e) => {
            e.preventDefault(); 
            window.location.href = '/'; 
        }}>
            Vardaan Sathe
        </a>

        <ul className="flex space-x-6 text-white">
          <li><Link to="/" className="hover:text-accent">Home</Link></li>
          <li><Link to="/about" className="hover:text-accent">About</Link></li>
          <li><Link to="/projects" className="hover:text-accent">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
