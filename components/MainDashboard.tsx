import React, { useState } from 'react';
import { HamburgerIcon } from './icons/HamburgerIcon';
import { FuelIcon } from './icons/FuelIcon';
import { EngineStatusIcon } from './icons/EngineStatusIcon';
import { EngineHealthIcon } from './icons/EngineHealthIcon';
import { ServiceDueIcon } from './icons/ServiceDueIcon';
import { RewardsIcon } from './icons/RewardsIcon';

const InfoCard: React.FC<{ icon: React.ReactNode; title: string, children?: React.ReactNode, onClick?: () => void }> = ({ icon, title, children, onClick }) => (
    <button 
      onClick={onClick} 
      className="bg-gray-100 rounded-xl p-3 flex flex-col items-center justify-center text-center shadow-sm w-full h-full hover:bg-gray-200 active:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
      aria-live="polite"
    >
        {icon}
        <span className="text-xs font-semibold text-gray-700 mt-2">{title}</span>
        {children}
    </button>
);


const MainDashboard: React.FC = () => {
  const [fuelStatus, setFuelStatus] = useState<'OK' | 'Critical'>('OK');
  const [engineLock, setEngineLock] = useState<'Locked' | 'Unlocked'>('Locked');
  const [engineHealth, setEngineHealth] = useState<'Good' | 'Check'>('Good');

  const toggleFuel = () => setFuelStatus(s => s === 'OK' ? 'Critical' : 'OK');
  const toggleEngineLock = () => setEngineLock(s => s === 'Locked' ? 'Unlocked' : 'Locked');
  const toggleEngineHealth = () => setEngineHealth(s => s === 'Good' ? 'Check' : 'Good');

  return (
    <div className="bg-white rounded-t-3xl p-4 absolute bottom-0 left-0 right-0 h-[60%] flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <HamburgerIcon className="w-6 h-6 text-gray-600" />
        <h2 className="text-lg font-bold text-gray-800">Find My Car</h2>
        <div className="w-6"></div>
      </div>
      
      <div className="grid grid-cols-3 gap-3 mb-4">
        <InfoCard 
            icon={<FuelIcon className={`w-8 h-8 transition-colors ${fuelStatus === 'Critical' ? 'text-red-600' : 'text-blue-600'}`}/>} 
            title="Fuel Level"
            onClick={toggleFuel}
        >
          <span className={`text-xs font-bold mt-1 ${fuelStatus === 'Critical' ? 'text-red-600' : 'text-green-600'}`}>{fuelStatus}</span>
        </InfoCard>
        
        <InfoCard 
            icon={<EngineStatusIcon className={`w-12 h-12 transition-colors ${engineLock === 'Unlocked' ? 'text-green-600' : 'text-blue-600'}`}/>} 
            title="Engine Lock"
            onClick={toggleEngineLock}
        >
            <span className={`text-xs font-bold mt-1 ${engineLock === 'Unlocked' ? 'text-green-600' : 'text-gray-500'}`}>{engineLock}</span>
        </InfoCard>
        
        <InfoCard 
            icon={<EngineHealthIcon className={`w-8 h-8 transition-colors ${engineHealth === 'Check' ? 'text-yellow-500' : 'text-blue-600'}`}/>} 
            title="Engine Health"
            onClick={toggleEngineHealth}
        >
             <span className={`text-xs font-bold mt-1 ${engineHealth === 'Check' ? 'text-yellow-500' : 'text-green-600'}`}>{engineHealth}</span>
        </InfoCard>
      </div>

      <h3 className="text-sm font-bold text-gray-800 mb-3">Critical Vehicle Status Checks</h3>
      
      <div className="flex justify-between items-center mb-4">
        <div>
          <h4 className="font-semibold text-gray-700">Flul My Car</h4>
          <p className="text-xs text-gray-400">Colttinas Healuts +</p>
          <p className="text-xs text-gray-400">Sterions</p>
        </div>
        <div className="text-right">
          <h4 className="text-sm font-semibold text-gray-500">Next Service Due</h4>
          <div className="flex items-center justify-end text-red-500">
            <ServiceDueIcon className="w-8 h-8 mr-1" />
            <span className="text-4xl font-bold">2009</span>
          </div>
        </div>
      </div>

      <button className="w-full bg-red-600 text-white font-bold py-3 rounded-full shadow-lg hover:bg-red-700 transition-colors mb-4">
        Remote Rewards Bantrol
      </button>

      <div className="flex-grow flex justify-between items-end">
         <div>
             <h4 className="font-semibold text-gray-700">Vosopood</h4>
             <p className="text-xs text-gray-400">Demon Rewards</p>
             <p className="text-xs text-gray-400">lalaces</p>
             <h4 className="font-semibold text-gray-700 mt-2">Suoin Server</h4>
         </div>
         <div className="bg-zinc-800 text-white p-3 rounded-xl flex items-center space-x-3 w-1/2">
            <div className="border border-red-500 p-1 rounded-md">
                <RewardsIcon className="w-8 h-8" />
            </div>
            <div>
                <p className="text-xs font-light">Vso Service Sude</p>
                <p className="text-sm font-bold">Maruti Rewards</p>
                <p className="text-xs font-light">Balance</p>
            </div>
         </div>
      </div>
      
    </div>
  );
};

export default MainDashboard;