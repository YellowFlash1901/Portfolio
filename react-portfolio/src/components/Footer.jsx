import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 text-center py-4">
      <p>&copy; {new Date().getFullYear()} Vardaan Sathe. All rights reserved.</p>
      <div className="mt-2 flex justify-center space-x-4">
      </div>
    </footer>
  );
}

export default Footer;
