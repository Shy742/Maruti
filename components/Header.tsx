
import React from 'react';
import { MarutiLogo } from './icons/MarutiLogo';

const Header: React.FC = () => {
  return (
    <header className="px-4 py-3 flex justify-between items-start">
      <div className="flex items-center">
        <MarutiLogo className="w-24 h-auto" />
      </div>
      <div className="text-right text-white text-xs">
        <p className="font-light">ODOMETER <span className="font-bold">1589.32</span></p>
        <p className="font-light">DIST. TO EMPTY <span className="font-bold">5.30 KM</span></p>
      </div>
    </header>
  );
};

export default Header;
