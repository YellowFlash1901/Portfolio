import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 text-center py-4">
      <p>&copy; {new Date().getFullYear()} Vardaan Sathe. All rights reserved.</p>
      <div className="mt-2 flex justify-center space-x-4">
        <a
          href="https://github.com/YellowFlash1901"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/vardaan-sathe-282599219/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;
