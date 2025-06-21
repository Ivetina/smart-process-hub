
import React from 'react';

const HawkeyePage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto p-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            🦅 Hawkeye Infrastructure Status
          </h1>
          <p className="text-gray-300">
            Real-time monitoring of MyBrainDev systems
          </p>
        </div>
        
        {/* Embed Status Page */}
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-2xl">
          <iframe
            src="http://162.55.36.239:3001/status/hawkeye"
            width="100%"
            height="800"
            frameBorder="0"
            className="w-full"
            title="Infrastructure Status"
          />
        </div>
        
        {/* Additional Info */}
        <div className="mt-8 text-gray-400 text-center">
          <p>Last updated: {new Date().toLocaleString()}</p>
          <p>Monitoring 9 critical infrastructure components</p>
        </div>
      </div>
    </div>
  );
};

export default HawkeyePage;
