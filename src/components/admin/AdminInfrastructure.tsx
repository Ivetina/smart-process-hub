
import React, { useState } from 'react';
import { Server, Eye, Database, LogOut } from 'lucide-react';

const AdminInfrastructure = () => {
  const [activeTab, setActiveTab] = useState('portainer');

  const handleLogout = () => {
    localStorage.removeItem('admin-auth');
    window.location.reload();
  };

  const tabs = [
    {
      id: 'portainer',
      name: 'Portainer',
      icon: <Server className="w-4 h-4" />,
      url: 'http://162.55.36.239:9000',
      description: 'Docker Container Management'
    },
    {
      id: 'hawkeye',
      name: 'Hawkeye',
      icon: <Eye className="w-4 h-4" />,
      url: 'http://162.55.36.239:8080',
      description: 'Infrastructure Monitoring'
    },
    {
      id: 'apigateway',
      name: 'API Gateway',
      icon: <Database className="w-4 h-4" />,
      url: 'http://162.55.36.239:8000',
      description: 'Supabase API Gateway'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Server className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-white">MyBrainDev Admin</h1>
            </div>
            
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-300 rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Odjava</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white/5 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1 py-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {tab.icon}
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Service Info Bar */}
      <div className="bg-white/5 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          {tabs.map((tab) => (
            activeTab === tab.id && (
              <div key={tab.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">{tab.description}</span>
                  <span className="text-sm text-gray-400">→ {tab.url}</span>
                </div>
                <div className="text-xs text-green-400 font-medium">ONLINE</div>
              </div>
            )
          ))}
        </div>
      </div>

      {/* Main Content - Iframe */}
      <div className="h-[calc(100vh-180px)]">
        {tabs.map((tab) => (
          activeTab === tab.id && (
            <iframe
              key={tab.id}
              src={tab.url}
              className="w-full h-full border-0"
              title={tab.name}
              style={{
                background: 'white'
              }}
            />
          )
        ))}
      </div>

      {/* Status indicator */}
      <div className="fixed bottom-4 right-4">
        <div className="bg-white/10 backdrop-blur-lg rounded-lg px-4 py-2 text-white text-sm border border-white/20">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Učitava {tabs.find(tab => tab.id === activeTab)?.name}...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminInfrastructure;
