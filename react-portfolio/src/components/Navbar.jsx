import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <a href="/" className="text-2xl font-bold text-cyan-400 hover:text-cyan-300">
          Vardaan Sathe
        </a>
        <ul className="flex space-x-6">
        <li>
              <Link
                to={`/`}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              >

                Home
              </Link>
              
            </li>
          {[ 'About', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase()}`}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              >

                {item}
              </Link>
              
            </li>
          ))}
                     
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
