
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, Eye, MousePointerClick, FileText, ChevronUp } from "lucide-react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const AdminDashboard = () => {
  // Demo podaci - u pravoj aplikaciji, ovi bi podaci došli s backenda
  const analyticsData = [
    { name: "Sij", value: 420 },
    { name: "Velj", value: 580 },
    { name: "Ožu", value: 690 },
    { name: "Tra", value: 1100 },
    { name: "Svi", value: 1200 },
    { name: "Lip", value: 1380 },
  ];

  const stats = [
    { title: "Ukupno članaka", value: "24", icon: FileText, change: "+4", changeType: "positive" },
    { title: "Ukupno pregleda", value: "12,456", icon: Eye, change: "+18%", changeType: "positive" },
    { title: "Ukupno klikova", value: "2,456", icon: MousePointerClick, change: "+12%", changeType: "positive" },
    { title: "Zadnja objava", value: "Prije 2 dana", icon: CalendarDays, change: "", changeType: "neutral" },
  ];

  return (
    <div className="space-y-6">
      {/* Statistike */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between space-y-0 pb-2">
                <p className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </p>
                <stat.icon className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="flex items-baseline justify-between">
                <h3 className="text-2xl font-bold tracking-tight">
                  {stat.value}
                </h3>
                {stat.change && (
                  <p className={`text-sm ${
                    stat.changeType === "positive" 
                      ? "text-green-600" 
                      : stat.changeType === "negative" 
                        ? "text-red-600" 
                        : "text-muted-foreground"
                  }`}>
                    {stat.changeType === "positive" && <ChevronUp className="inline h-4 w-4" />} 
                    {stat.change}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Graf pregleda */}
      <Card>
        <CardHeader>
          <CardTitle>Pregledi stranice</CardTitle>
          <CardDescription>
            Broj pregleda stranice u posljednjih 6 mjeseci
          </CardDescription>
        </CardHeader>
        <CardContent className="px-2">
          <ChartContainer 
            config={{
              views: {
                theme: {
                  light: 'rgba(59, 130, 246, 0.8)',
                  dark: 'rgba(59, 130, 246, 0.8)',
                }
              }
            }}
          >
            <BarChart data={analyticsData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Bar dataKey="value" name="Pregledi" fill="var(--color-views)" />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    labelFormatter={(label) => `${label}`}
                  />
                }
              />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Nadolazeće funkcionalnosti */}
      <Card>
        <CardHeader>
          <CardTitle>Nadolazeće funkcionalnosti</CardTitle>
          <CardDescription>
            Funkcionalnosti koje će biti dodane u sljedećim verzijama
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>Detaljnije analitike i statistike</li>
            <li>Upravljanje korisnicima i razinama pristupa</li>
            <li>Integracija s društvenim mrežama</li>
            <li>Napredni editor sadržaja</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
