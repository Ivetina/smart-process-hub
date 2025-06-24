
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Copy, Server, Database, Container, Activity, Shield, Code, Globe } from 'lucide-react';

const ApiGateway = () => {
  const [copiedEndpoint, setCopiedEndpoint] = useState('');

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEndpoint(text);
    setTimeout(() => setCopiedEndpoint(''), 2000);
  };

  const endpoints = [
    {
      category: 'System',
      icon: <Server className="w-4 h-4" />,
      endpoints: [
        {
          method: 'GET',
          path: '/api/health',
          description: 'Health check endpoint',
          protected: false,
          example: 'curl http://api.mybraindev.com/api/health'
        },
        {
          method: 'GET',
          path: '/api/system/status',
          description: 'System status for all services',
          protected: true,
          example: 'curl -H "X-API-KEY: your-key" http://api.mybraindev.com/api/system/status'
        }
      ]
    },
    {
      category: 'N8N Automation',
      icon: <Activity className="w-4 h-4" />,
      endpoints: [
        {
          method: 'GET',
          path: '/api/n8n/workflows',
          description: 'List all N8N workflows',
          protected: true,
          example: 'curl -H "X-API-KEY: your-key" http://api.mybraindev.com/api/n8n/workflows'
        },
        {
          method: 'POST',
          path: '/api/n8n/workflows/:id/execute',
          description: 'Execute specific workflow',
          protected: true,
          example: 'curl -X POST -H "X-API-KEY: your-key" http://api.mybraindev.com/api/n8n/workflows/123/execute'
        },
        {
          method: 'GET',
          path: '/api/n8n/executions',
          description: 'Get workflow executions',
          protected: true,
          example: 'curl -H "X-API-KEY: your-key" http://api.mybraindev.com/api/n8n/executions?limit=10'
        }
      ]
    },
    {
      category: 'Docker Management',
      icon: <Container className="w-4 h-4" />,
      endpoints: [
        {
          method: 'GET',
          path: '/api/docker/containers',
          description: 'List all Docker containers',
          protected: true,
          example: 'curl -H "X-API-KEY: your-key" http://api.mybraindev.com/api/docker/containers'
        },
        {
          method: 'POST',
          path: '/api/docker/containers/:name/restart',
          description: 'Restart specific container',
          protected: true,
          example: 'curl -X POST -H "X-API-KEY: your-key" http://api.mybraindev.com/api/docker/containers/myapp/restart'
        }
      ]
    },
    {
      category: 'Supabase',
      icon: <Database className="w-4 h-4" />,
      endpoints: [
        {
          method: 'GET',
          path: '/api/supabase/health',
          description: 'Supabase health check',
          protected: true,
          example: 'curl -H "X-API-KEY: your-key" http://api.mybraindev.com/api/supabase/health'
        },
        {
          method: 'GET',
          path: '/api/supabase/rest/*',
          description: 'Supabase REST API proxy',
          protected: true,
          example: 'curl -H "X-API-KEY: your-key" http://api.mybraindev.com/api/supabase/rest/table'
        }
      ]
    },
    {
      category: 'Monitoring',
      icon: <Activity className="w-4 h-4" />,
      endpoints: [
        {
          method: 'GET',
          path: '/api/monitoring/status',
          description: 'Get monitoring status from Uptime Kuma',
          protected: true,
          example: 'curl -H "X-API-KEY: your-key" http://api.mybraindev.com/api/monitoring/status'
        }
      ]
    }
  ];

  const vpsServices = [
    { name: 'N8N Automation', port: '5678', status: 'running', url: 'http://162.55.36.239:5678' },
    { name: 'Supabase', port: '8000', status: 'running', url: 'http://162.55.36.239:8000' },
    { name: 'Portainer', port: '9000', status: 'running', url: 'http://162.55.36.239:9000' },
    { name: 'Uptime Kuma', port: '3001', status: 'running', url: 'http://162.55.36.239:3001' },
    { name: 'API Gateway', port: '3000', status: 'running', url: 'http://162.55.36.239:3000' }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              MyBrainDev API Gateway
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Centralizirani API proxy za sve MCP servise. Sigurno i efikasno upravljanje infrastrukturom.
            </p>
          </div>

          <Tabs defaultValue="endpoints" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="endpoints">API Endpoints</TabsTrigger>
              <TabsTrigger value="services">VPS Services</TabsTrigger>
              <TabsTrigger value="config">Configuration</TabsTrigger>
              <TabsTrigger value="docs">Documentation</TabsTrigger>
            </TabsList>

            {/* API Endpoints Tab */}
            <TabsContent value="endpoints" className="mt-8">
              <div className="grid gap-6">
                {endpoints.map((category, idx) => (
                  <Card key={idx}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        {category.icon}
                        {category.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {category.endpoints.map((endpoint, endpointIdx) => (
                          <div key={endpointIdx} className="border rounded-lg p-4 bg-gray-50">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <Badge variant={endpoint.method === 'GET' ? 'default' : 'destructive'}>
                                  {endpoint.method}
                                </Badge>
                                <code className="text-sm font-mono bg-white px-2 py-1 rounded">
                                  {endpoint.path}
                                </code>
                                {endpoint.protected && (
                                  <Badge variant="outline" className="text-orange-600">
                                    <Shield className="w-3 h-3 mr-1" />
                                    Protected
                                  </Badge>
                                )}
                              </div>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => copyToClipboard(endpoint.example)}
                                className="text-xs"
                              >
                                <Copy className="w-3 h-3 mr-1" />
                                {copiedEndpoint === endpoint.example ? 'Copied!' : 'Copy'}
                              </Button>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{endpoint.description}</p>
                            <code className="text-xs bg-black text-green-400 p-2 rounded block font-mono overflow-x-auto">
                              {endpoint.example}
                            </code>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* VPS Services Tab */}
            <TabsContent value="services" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {vpsServices.map((service, idx) => (
                  <Card key={idx}>
                    <CardHeader>
                      <CardTitle className="text-lg">{service.name}</CardTitle>
                      <CardDescription>Port: {service.port}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant={service.status === 'running' ? 'default' : 'destructive'}>
                          {service.status}
                        </Badge>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(service.url, '_blank')}
                        >
                          Open
                        </Button>
                      </div>
                      <code className="text-xs bg-gray-100 p-2 rounded block">
                        {service.url}
                      </code>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Configuration Tab */}
            <TabsContent value="config" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Environment Configuration</CardTitle>
                  <CardDescription>
                    Required environment variables for API Gateway
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                    <pre>{`# VPS Configuration
VPS_HOST=162.55.36.239

# API Security
API_KEY=your-super-secure-api-key-here

# N8N Configuration
N8N_API_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Supabase Configuration
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Portainer Configuration (optional)
PORTAINER_API_KEY=your-portainer-api-key

# Server Configuration
PORT=3000
NODE_ENV=production`}</pre>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Rate Limiting & Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Rate Limit:</strong> 100 requests per minute per IP</li>
                    <li>• <strong>Authentication:</strong> X-API-KEY header required for protected endpoints</li>
                    <li>• <strong>Caching:</strong> 5 minute default TTL for frequently accessed data</li>
                    <li>• <strong>Timeout:</strong> 10 second timeout for all upstream API calls</li>
                    <li>• <strong>CORS:</strong> Enabled for cross-origin requests</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Documentation Tab */}
            <TabsContent value="docs" className="mt-8">
              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code className="w-5 h-5" />
                      Quick Start
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">1. Get API Key</h4>
                        <p className="text-sm text-gray-600">Contact administrator for your API key</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">2. Test Connection</h4>
                        <code className="text-xs bg-gray-100 p-2 rounded block">
                          curl http://api.mybraindev.com/api/health
                        </code>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">3. Make Authenticated Request</h4>
                        <code className="text-xs bg-gray-100 p-2 rounded block">
                          curl -H "X-API-KEY: your-key" http://api.mybraindev.com/api/system/status
                        </code>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Response Format</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm">
                      <pre>{`{
  "success": true,
  "data": { ... },
  "fromCache": false,
  "warning": null
}`}</pre>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Error Handling</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>401:</strong> Invalid or missing API key</li>
                      <li>• <strong>429:</strong> Rate limit exceeded</li>
                      <li>• <strong>404:</strong> Endpoint not found</li>
                      <li>• <strong>500:</strong> Internal server error</li>
                      <li>• <strong>503:</strong> Service temporarily unavailable</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default ApiGateway;
