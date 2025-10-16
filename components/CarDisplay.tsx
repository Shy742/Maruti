import React from 'react';
import { RemoteActionIcon } from './icons/RemoteActionIcon';
import { SettingsIcon } from './icons/SettingsIcon';
import { MusicIcon } from './icons/MusicIcon';

const CarDisplay: React.FC = () => {
  return (
    <div className="relative">
      <div className="px-4">
        <img
          src="https://cargraze.com/assets/admin/img/car/1725377205.jpg"
          alt="Red Maruti Swift with black roof"
          className="w-full h-auto object-contain"
        />
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col space-y-3">
        <button 
          className="bg-red-600 p-3 rounded-full shadow-lg text-white hover:bg-red-700 transition"
          onClick={() => alert('Remote Action Triggered!')}
          aria-label="Remote Actions"
        >
          <RemoteActionIcon className="w-6 h-6" />
        </button>
        <button 
          className="bg-red-600 p-3 rounded-full shadow-lg text-white hover:bg-red-700 transition"
          onClick={() => alert('Settings Opened!')}
          aria-label="Settings"
        >
          <SettingsIcon className="w-6 h-6" />
        </button>
      </div>
      <div className="px-4 pt-4 flex items-center space-x-4 text-white text-sm">
        <button className="p-2 border border-red-500 rounded-md">
          <MusicIcon className="w-6 h-6 text-red-500" />
        </button>
        <span className="text-gray-400">Personalise:</span>
        <div className="flex items-center space-x-1">
          <span className="w-2 h-2 rounded-full bg-white"></span>
          <span className="text-white">Drivewaylive</span>
        </div>
        <span className="text-gray-400">Ingyorde Osoderiess</span>
      </div>
    </div>
  );
};

export default CarDisplay;