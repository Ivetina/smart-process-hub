
import React, { useState, useEffect } from 'react';
import { Lock, Server, Eye, Database, LogOut } from 'lucide-react';

const AdminInfrastructure = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('portainer');
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');

  // Check if user is already logged in
  useEffect(() => {
    const authStatus = sessionStorage.getItem('mybraindev_admin_auth');
    if (authStatus === 'authenticated') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');

    // Check credentials
    if (loginForm.username === 'admin' && loginForm.password === 'iSYwD6p0cXGR"s<9e;@.8F92s0Pg7e') {
      setIsAuthenticated(true);
      sessionStorage.setItem('mybraindev_admin_auth', 'authenticated');
    } else {
      setLoginError('Neispravno korisničko ime ili lozinka');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('mybraindev_admin_auth');
    setLoginForm({ username: '', password: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setLoginForm(prev => ({ ...prev, [field]: value }));
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

  // Login page
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl border border-white/20 p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">MyBrainDev Admin</h1>
            <p className="text-gray-300">Pristup administratorskim alatima</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Korisničko ime
              </label>
              <input
                type="text"
                value={loginForm.username}
                onChange={(e) => handleInputChange('username', e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Unesite korisničko ime"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Lozinka
              </label>
              <input
                type="password"
                value={loginForm.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Unesite lozinku"
                required
              />
            </div>

            {loginError && (
              <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 text-red-300 text-sm">
                {loginError}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
            >
              Prijavi se
            </button>
          </form>

          <div className="mt-6 text-center text-xs text-gray-400">
            MyBrainDev © 2025 - Sigurni pristup
          </div>
        </div>
      </div>
    );
  }

  // Main dashboard
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
