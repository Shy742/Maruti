import React from 'react';
import { CellularIcon } from './icons/CellularIcon';
import { BatteryIcon } from './icons/BatteryIcon';

const StatusBar: React.FC = () => {
  return (
    <div className="px-4 py-1 text-white text-xs font-bold flex justify-between items-center bg-black">
      <div className="flex items-center space-x-1">
        <span>11:34 M</span>
      </div>
      <div className="flex items-center space-x-2">
        <CellularIcon className="w-4 h-4" />
        <BatteryIcon className="w-5 h-5" />
      </div>
    </div>
  );
};

export default StatusBar;