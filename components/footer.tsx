import { GENERAL_INFO } from '@/data/general.const';
import React from 'react';
import { Caveat } from 'next/font/google';

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400'],
});

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-600 pt-4 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center md:flex-row md:justify-between items-center text-center">
          <div
            className={`text-2xl font-bold text-[#6A00FF] ${caveat.className} mb-3`}
          >
            {GENERAL_INFO.theme}
          </div>
          <div className="text-sm">&copy;Gathering 2025</div>
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
