
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ApiGateway = () => {
  const [copiedText, setCopiedText] = useState('');

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(''), 2000);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 font-sans pt-16">
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-purple-800 text-white p-6 text-center">
            <h1 className="text-3xl font-bold mb-2">MyBrainDev API Gateway</h1>
            <p className="text-base opacity-90">Kompletni vodič za korištenje API endpoints-a</p>
          </div>
          
          <div className="p-8">
            {/* Auth Info */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <div className="font-semibold text-red-800 mb-2">🔐 Autentifikacija</div>
              <p className="text-red-700 mb-2">Svi zaštićeni endpoints zahtijevaju API ključ u header-u:</p>
              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                X-API-KEY: your-api-key
              </div>
            </div>
            
            {/* Overview */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
              <div className="font-semibold text-blue-800 mb-2">📋 Pregled Funkcionalnosti</div>
              <ul className="text-blue-700 list-disc ml-6">
                <li><strong>API Endpoints</strong> - Lista svih dostupnih API poziva</li>
                <li><strong>VPS Services</strong> - Servisi koji rade na vašem VPS serveru</li>
                <li><strong>Configuration</strong> - Postavke i konfiguracija API-ja</li>
                <li><strong>Documentation</strong> - Detaljna dokumentacija za developere</li>
              </ul>
            </div>

            {/* System Section */}
            <div className="border border-gray-200 rounded-lg mb-8 overflow-hidden">
              <div className="bg-gray-50 p-5 border-b border-gray-200 flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  SYS
                </div>
                <div>
                  <div className="text-lg font-semibold">System</div>
                  <div className="text-gray-600 text-sm">Osnovni system endpoints za monitoring i health check</div>
                </div>
              </div>
              
              <div className="divide-y divide-gray-200">
                <div className="p-5 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">GET</span>
                    <div className="bg-gray-900 text-gray-200 px-3 py-2 rounded text-sm font-mono">
                      /api/health
                    </div>
                  </div>
                  <h4 className="font-semibold mb-2">Health Check Endpoint</h4>
                  <p className="text-gray-600 mb-4">
                    Osnovni health check koji provjerava da li API radi. Ne zahtijeva autentifikaciju.
                  </p>
                  
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <div className="font-semibold text-gray-800 text-sm mb-2">🔧 Kako koristiti:</div>
                    <div className="bg-gray-900 text-green-400 p-3 rounded text-sm font-mono mb-3">
                      curl http://api.mybraindev.com/api/health
                    </div>
                    
                    <div className="font-semibold text-gray-800 text-sm mb-2">📊 Odgovor:</div>
                    <div className="bg-green-50 border border-green-200 rounded p-3 text-sm">
                      <pre>{`{
  "status": "ok",
  "timestamp": "2025-06-24T23:30:00.000Z",
  "uptime": 3600,
  "version": "1.0.0"
}`}</pre>
                    </div>
                  </div>
                </div>
                
                <div className="p-5 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">GET</span>
                    <div className="bg-gray-900 text-gray-200 px-3 py-2 rounded text-sm font-mono">
                      /api/system/status
                    </div>
                  </div>
                  <h4 className="font-semibold mb-2">System Status All Services</h4>
                  <p className="text-gray-600 mb-4">
                    Provjerava status svih servisa na VPS-u (N8N, Supabase, Portainer, Uptime Kuma).
                  </p>
                  
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <div className="font-semibold text-gray-800 text-sm mb-2">🔧 Kako koristiti:</div>
                    <div className="bg-gray-900 text-green-400 p-3 rounded text-sm font-mono mb-3">
                      curl -H "X-API-KEY: your-key" http://api.mybraindev.com/api/system/status
                    </div>
                    
                    <div className="font-semibold text-gray-800 text-sm mb-2">📊 Što ćete dobiti:</div>
                    <div className="bg-green-50 border border-green-200 rounded p-3 text-sm">
                      • Status svih servisa (true/false)<br/>
                      • Timestamp provjere<br/>
                      • Overall status (da li sve radi)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* N8N Section */}
            <div className="border border-gray-200 rounded-lg mb-8 overflow-hidden">
              <div className="bg-gray-50 p-5 border-b border-gray-200 flex items-center gap-3">
                <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                  N8N
                </div>
                <div>
                  <div className="text-lg font-semibold">N8N Automation</div>
                  <div className="text-gray-600 text-sm">Upravljanje N8N workflow-ovima i automatizacijom</div>
                </div>
              </div>
              
              <div className="divide-y divide-gray-200">
                <div className="p-5 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">GET</span>
                    <div className="bg-gray-900 text-gray-200 px-3 py-2 rounded text-sm font-mono">
                      /api/n8n/workflows
                    </div>
                  </div>
                  <h4 className="font-semibold mb-2">Lista N8N Workflow-ova</h4>
                  <p className="text-gray-600 mb-4">
                    Dohvaća sve N8N workflow-ove koje imate kreirane na vašem serveru.
                  </p>
                  
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <div className="font-semibold text-gray-800 text-sm mb-2">🔧 Copy/Paste skripta:</div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="bg-gray-900 text-green-400 p-3 rounded text-sm font-mono flex-1">
                        curl -H "X-API-KEY: your-key" http://api.mybraindev.com/api/n8n/workflows
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard('curl -H "X-API-KEY: your-key" http://api.mybraindev.com/api/n8n/workflows')}
                        className="bg-blue-500 text-white hover:bg-blue-600"
                      >
                        <Copy className="w-3 h-3 mr-1" />
                        {copiedText === 'curl -H "X-API-KEY: your-key" http://api.mybraindev.com/api/n8n/workflows' ? 'Copied!' : 'Copy'}
                      </Button>
                    </div>
                    
                    <div className="font-semibold text-gray-800 text-sm mb-2">📊 Rezultat:</div>
                    <div className="bg-green-50 border border-green-200 rounded p-3 text-sm">
                      • Lista svih workflow-ova<br/>
                      • ID-jevi za pokretanje<br/>
                      • Status (aktivan/neaktivan)<br/>
                      • Imena i opise workflow-ova
                    </div>
                  </div>
                </div>
                
                <div className="p-5 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-pink-500 text-white px-2 py-1 rounded text-xs font-semibold">POST</span>
                    <div className="bg-gray-900 text-gray-200 px-3 py-2 rounded text-sm font-mono">
                      /api/n8n/workflows/:id/execute
                    </div>
                  </div>
                  <h4 className="font-semibold mb-2">Pokreni Workflow</h4>
                  <p className="text-gray-600 mb-4">
                    Pokreće specifični N8N workflow po ID-u. Korisno za automatizaciju taskova.
                  </p>
                  
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <div className="font-semibold text-gray-800 text-sm mb-2">🔧 Copy/Paste skripta:</div>
                    <div className="flex items-start gap-2 mb-3">
                      <div className="bg-gray-900 text-green-400 p-3 rounded text-sm font-mono flex-1">
                        {`curl -X POST -H "X-API-KEY: your-key" -H "Content-Type: application/json" \\
-d '{}' http://api.mybraindev.com/api/n8n/workflows/123/execute`}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard('curl -X POST -H "X-API-KEY: your-key" -H "Content-Type: application/json" -d \'{}\' http://api.mybraindev.com/api/n8n/workflows/123/execute')}
                        className="bg-blue-500 text-white hover:bg-blue-600 mt-1"
                      >
                        <Copy className="w-3 h-3 mr-1" />
                        {copiedText === 'curl -X POST -H "X-API-KEY: your-key" -H "Content-Type: application/json" -d \'{}\' http://api.mybraindev.com/api/n8n/workflows/123/execute' ? 'Copied!' : 'Copy'}
                      </Button>
                    </div>
                    
                    <div className="font-semibold text-gray-800 text-sm mb-2">📊 Rezultat:</div>
                    <div className="bg-green-50 border border-green-200 rounded p-3 text-sm">
                      • Execution ID<br/>
                      • Status izvršavanja<br/>
                      • Početno vrijeme<br/>
                      • Link za praćenje rezultata
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Docker Section */}
            <div className="border border-gray-200 rounded-lg mb-8 overflow-hidden">
              <div className="bg-gray-50 p-5 border-b border-gray-200 flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  🐳
                </div>
                <div>
                  <div className="text-lg font-semibold">Docker Management</div>
                  <div className="text-gray-600 text-sm">Upravljanje Docker kontejnerima preko Portainer API-ja</div>
                </div>
              </div>
              
              <div className="divide-y divide-gray-200">
                <div className="p-5 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">GET</span>
                    <div className="bg-gray-900 text-gray-200 px-3 py-2 rounded text-sm font-mono">
                      /api/docker/containers
                    </div>
                  </div>
                  <h4 className="font-semibold mb-2">Lista Docker Kontejnera</h4>
                  <p className="text-gray-600 mb-4">
                    Dohvaća sve Docker kontejnere na vašem VPS-u (running i stopped).
                  </p>
                  
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <div className="font-semibold text-gray-800 text-sm mb-2">🔧 Copy/Paste skripta:</div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="bg-gray-900 text-green-400 p-3 rounded text-sm font-mono flex-1">
                        curl -H "X-API-KEY: your-key" http://api.mybraindev.com/api/docker/containers
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard('curl -H "X-API-KEY: your-key" http://api.mybraindev.com/api/docker/containers')}
                        className="bg-blue-500 text-white hover:bg-blue-600"
                      >
                        <Copy className="w-3 h-3 mr-1" />
                        {copiedText === 'curl -H "X-API-KEY: your-key" http://api.mybraindev.com/api/docker/containers' ? 'Copied!' : 'Copy'}
                      </Button>
                    </div>
                    
                    <div className="font-semibold text-gray-800 text-sm mb-2">📊 Rezultat:</div>
                    <div className="bg-green-50 border border-green-200 rounded p-3 text-sm">
                      • Lista svih kontejnera<br/>
                      • Status (Up/Exited)<br/>
                      • Port mappings<br/>
                      • Memory/CPU usage<br/>
                      • Uptime informacije
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Usage Tips */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="font-semibold text-blue-800 mb-2">💡 Korisni Savjeti</div>
              <ul className="text-blue-700 list-disc ml-6">
                <li><strong>Copy/Paste skripte</strong> - Kopirajte curl komande i modificirajte API ključ</li>
                <li><strong>Error handling</strong> - API vraća detaljne error poruke za debugging</li>
                <li><strong>Caching</strong> - Rezultati se cache-iraju za bolje performanse</li>
                <li><strong>Rate limiting</strong> - Ograničeno na 100 zahtjeva po minuti</li>
                <li><strong>Monitoring</strong> - Sve API pozive možete pratiti kroz logs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ApiGateway;
