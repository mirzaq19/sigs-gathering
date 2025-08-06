import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-600 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center md:flex-row md:justify-between items-center text-center">
          <div className="text-sm">
            &copy;Gathering 2025. All rights reserved.
          </div>
          <div className="text-sm">
            Made with ❤️ by the{' '}
            <span className="font-semibold">IT SIGS Team</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
