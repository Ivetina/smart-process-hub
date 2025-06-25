
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import AdminBlogPosts from "@/components/admin/AdminBlogPosts";
import AdminDashboard from "@/components/admin/AdminDashboard";
import HawkeyeComponent from "@/components/admin/HawkeyeComponent";
import ApiGatewayComponent from "@/components/admin/ApiGatewayComponent";

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('admin-auth') === 'true';
  });
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Demo credentials - in a real app, these would be verified against a backend
  const DEMO_USERNAME = 'admin';
  const DEMO_PASSWORD = '66Rockandroll';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call with timeout
    setTimeout(() => {
      if (username === DEMO_USERNAME && password === DEMO_PASSWORD) {
        localStorage.setItem('admin-auth', 'true');
        setIsLoggedIn(true);
        toast({
          title: "Uspješna prijava",
          description: "Dobrodošli u administratorsko sučelje",
        });
      } else {
        toast({
          title: "Neuspješna prijava",
          description: "Pogrešno korisničko ime ili lozinka",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleLogout = () => {
    localStorage.removeItem('admin-auth');
    setIsLoggedIn(false);
    toast({
      title: "Odjavljeni ste",
      description: "Uspješno ste se odjavili iz sustava",
    });
  };

  if (!isLoggedIn) {
    return (
      <Layout>
        <div className="pt-32 pb-16 min-h-screen">
          <div className="container mx-auto px-4 max-w-md">
            <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold">Prijava</CardTitle>
                <CardDescription>
                  Unesite svoje korisničke podatke za pristup administraciji
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Input 
                      id="username" 
                      placeholder="Korisničko ime" 
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Input 
                      id="password" 
                      type="password" 
                      placeholder="Lozinka"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Učitavanje...
                      </>
                    ) : (
                      "Prijava"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="pt-32 pb-16 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Administratorsko sučelje</h1>
            <Button variant="outline" onClick={handleLogout}>Odjava</Button>
          </div>
          
          <Tabs defaultValue="dashboard">
            <TabsList className="mb-6">
              <TabsTrigger value="dashboard">Nadzorna ploča</TabsTrigger>
              <TabsTrigger value="blog-posts">Blog članci</TabsTrigger>
              <TabsTrigger value="portainer">Portainer</TabsTrigger>
              <TabsTrigger value="hawkeye">Hawkeye</TabsTrigger>
              <TabsTrigger value="api-gateway">API Gateway</TabsTrigger>
              <TabsTrigger value="statistics">Statistika</TabsTrigger>
            </TabsList>
            
            <TabsContent value="dashboard">
              <AdminDashboard />
            </TabsContent>
            
            <TabsContent value="blog-posts">
              <AdminBlogPosts />
            </TabsContent>
            
            <TabsContent value="portainer">
              <Card>
                <CardHeader>
                  <CardTitle>🐳 Portainer - Docker Container Management</CardTitle>
                  <CardDescription>
                    Upravljanje Docker kontejnerima i uslugama
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-800 rounded-lg p-8 text-center">
                    <h2 className="text-2xl text-white mb-4">
                      🔗 Pristup Portainer Dashboard-u
                    </h2>
                    <p className="text-gray-300 mb-6">
                      Kliknite ispod za pristup Docker container management sustavu
                    </p>
                    <a 
                      href="http://162.55.36.239:9000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
                    >
                      🚀 Otvori Portainer
                    </a>
                    
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-green-600 p-4 rounded">
                        <div className="text-2xl font-bold text-white">Docker</div>
                        <div className="text-sm text-gray-200">Container Management</div>
                      </div>
                      <div className="bg-blue-600 p-4 rounded">
                        <div className="text-2xl font-bold text-white">Images</div>
                        <div className="text-sm text-gray-200">Docker Images</div>
                      </div>
                      <div className="bg-purple-600 p-4 rounded">
                        <div className="text-2xl font-bold text-white">Networks</div>
                        <div className="text-sm text-gray-200">Docker Networks</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="hawkeye">
              <HawkeyeComponent />
            </TabsContent>
            
            <TabsContent value="api-gateway">
              <ApiGatewayComponent />
            </TabsContent>
            
            <TabsContent value="statistics">
              <Card>
                <CardHeader>
                  <CardTitle>Statistika</CardTitle>
                  <CardDescription>
                    Pregled statistike posjećenosti i interakcija na web stranici.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Funkcionalnost statistike bit će implementirana u sljedećoj verziji.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Admin;
