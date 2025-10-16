import React from 'react';
import Header from './components/Header';
import CarDisplay from './components/CarDisplay';
import MainDashboard from './components/MainDashboard';

const App: React.FC = () => {
  return (
    <div className="bg-zinc-900 min-h-screen flex justify-center font-sans">
      <div className="w-full max-w-sm bg-black shadow-2xl overflow-hidden relative">
        <div className="bg-gradient-to-b from-zinc-800 via-zinc-900 to-black pb-4">
          {/* Spacer to replace the status bar for a cleaner prototype look */}
          <div className="h-6 bg-black" />
          <Header />
          <CarDisplay />
        </div>
        <MainDashboard />
      </div>
    </div>
  );
};

export default App;