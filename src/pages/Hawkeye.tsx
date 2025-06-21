
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
        
        {/* Direct link instead of iframe */}
        <div className="bg-gray-800 rounded-lg p-8 text-center">
          <h2 className="text-2xl text-white mb-4">
            🔗 Access Full Status Dashboard
          </h2>
          <p className="text-gray-300 mb-6">
            Click below to view real-time infrastructure monitoring
          </p>
          <a 
            href="http://162.55.36.239:3001/status/hawkeye"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
          >
            🚀 Open Hawkeye Dashboard
          </a>
          
          {/* Status summary */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-600 p-4 rounded">
              <div className="text-2xl font-bold">9</div>
              <div className="text-sm">Active Monitors</div>
            </div>
            <div className="bg-green-600 p-4 rounded">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm">Core Infrastructure</div>
            </div>
            <div className="bg-yellow-600 p-4 rounded">
              <div className="text-2xl font-bold">85%</div>
              <div className="text-sm">Avg. Database Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HawkeyePage;
