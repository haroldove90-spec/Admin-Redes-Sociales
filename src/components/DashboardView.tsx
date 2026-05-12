import React from 'react';
import { motion } from 'motion/react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';
import { ShoppingCart, Users, TrendingUp, DollarSign, ArrowUpRight, ArrowDownRight, Globe, Calendar, ChevronDown } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const data = [
  { name: 'Jan', value: 300 },
  { name: 'Feb', value: 200 },
  { name: 'Mar', value: 100 },
  { name: 'Apr', value: 320 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 250 },
  { name: 'Jul', value: 100 },
  { name: 'Aug', value: 420 },
  { name: 'Sep', value: 350 },
  { name: 'Oct', value: 120 },
  { name: 'Nov', value: 250 },
  { name: 'Dec', value: 150 },
];

const miniChartData = [
  { value: 40 }, { value: 65 }, { value: 45 }, { value: 70 }, { value: 60 }, { value: 85 }, { value: 75 }
];

export function DashboardView() {
  return (
    <div className="p-8 pt-0 space-y-8 overflow-y-auto h-full scrollbar-hide">
      {/* Top Row: Performance Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Stock Gauge Card */}
        <div className="card-modern p-6 flex flex-col items-center">
           <div className="w-full flex justify-between items-center mb-4">
             <h3 className="text-sm font-bold text-gray-800">Stock Products</h3>
             <span className="text-[10px] text-gray-400 font-bold">See all</span>
           </div>
           
           <div className="relative w-48 h-24 mb-4 overflow-hidden">
             {/* Simple Semi-circle Gauge SVG */}
             <svg viewBox="0 0 100 50" className="w-full h-full">
               <path d="M10,50 A40,40 0 0,1 90,50" fill="none" stroke="#e2e8f0" strokeWidth="8" strokeLinecap="round" />
               <path d="M10,50 A40,40 0 0,1 70,15" fill="none" stroke="url(#gauge-gradient)" strokeWidth="10" strokeLinecap="round" strokeDasharray="125" strokeDashoffset="25" />
               <defs>
                 <linearGradient id="gauge-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                   <stop offset="0%" stopColor="#3b82f6" />
                   <stop offset="100%" stopColor="#f59e0b" />
                 </linearGradient>
               </defs>
               <line x1="50" y1="50" x2="65" y2="20" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" />
               <circle cx="50" cy="50" r="3" fill="#1f2937" />
             </svg>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 mt-2 text-center w-full">
               <p className="text-xl font-bold text-gray-800 tracking-tight">670 Stock</p>
               <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Total</p>
             </div>
           </div>

           <div className="w-full flex justify-center gap-6 mt-2">
             <div className="flex items-center gap-2">
               <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
               <span className="text-[10px] font-bold text-gray-600">Lorem ipsum</span>
             </div>
             <div className="flex items-center gap-2">
               <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
               <span className="text-[10px] font-bold text-gray-600">Dolor sit amet</span>
             </div>
           </div>
        </div>

        {/* Lorem Ipsum Wave Card */}
        <div className="card-modern p-6">
           <div className="flex justify-between items-center mb-2">
             <h3 className="text-sm font-bold text-gray-800">Lorem Ipsum</h3>
             <span className="text-[10px] text-gray-400 font-bold">See all</span>
           </div>
           
           <div className="h-32 w-full">
             <ResponsiveContainer width="100%" height="100%">
               <AreaChart data={miniChartData}>
                 <defs>
                   <linearGradient id="colorWave" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="5%" stopColor="#22c55e" stopOpacity={0.1}/>
                     <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                   </linearGradient>
                 </defs>
                 <Area type="monotone" dataKey="value" stroke="#22c55e" strokeWidth={2} fillOpacity={1} fill="url(#colorWave)" />
               </AreaChart>
             </ResponsiveContainer>
           </div>
           
           <div className="mt-4 flex items-center justify-between">
              <div>
                <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Unique Viewers</h4>
                <p className="text-lg font-bold text-gray-800 tracking-tight">6,503 <span className="text-[10px] text-gray-400 font-medium">/This weeks</span></p>
              </div>
              <div className="flex flex-col items-center">
                 <div className="w-10 h-10 rounded-full border-4 border-green-500 border-t-transparent flex items-center justify-center text-[10px] font-bold text-green-600">45%</div>
                 <div className="mt-1 px-2 py-0.5 bg-green-100 text-green-600 rounded-full text-[8px] font-bold flex items-center gap-1">
                   <ArrowUpRight className="w-2 h-2" /> 85%
                 </div>
              </div>
           </div>
        </div>

        {/* Dolor Sit Amet Bars Card */}
        <div className="card-modern p-6">
           <div className="flex justify-between items-center mb-6">
             <h3 className="text-sm font-bold text-gray-800">Dolor sit amet</h3>
             <div className="flex items-center gap-1">
               <TrendingUp className="w-4 h-4 text-green-500" />
               <span className="text-lg font-bold text-gray-800">$450.00</span>
             </div>
           </div>

           <div className="flex justify-between items-end h-24 gap-2">
             {[60, 40, 80, 50, 45, 60, 80].map((h, i) => (
               <div key={i} className="flex-1 flex flex-col items-center gap-2">
                 <div className="w-full bg-orange-100 rounded-t-lg relative group transition-all" style={{ height: `${h}%` }}>
                   <div className="absolute inset-0 bg-red-500 rounded-t-lg scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300"></div>
                 </div>
                 <span className="text-[10px] font-bold text-white bg-red-500 w-full text-center py-0.5 rounded-sm">
                   {['S', 'M', 'T', 'W', 'T', 'F', 'S'][i]}
                 </span>
               </div>
             ))}
           </div>

           <div className="mt-6 flex justify-between items-center border-t border-gray-50 pt-4">
              <div>
                <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Total Profit</h4>
                <p className="text-lg font-bold text-gray-800 tracking-tight">$780.84 <span className="text-[10px] text-gray-400 font-medium">/This weeks</span></p>
              </div>
              <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
                <DollarSign className="w-5 h-5" />
              </div>
           </div>
        </div>
      </div>

      {/* Middle Row: Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'New Customers', value: '335', color: 'red', icon: Users, trend: '+ 85%' },
          { label: 'Total Orders', value: '650', color: 'red', icon: ShoppingCart, trend: '+ 25%' },
          { label: 'Total Sales', value: '3,402', color: 'red', icon: TrendingUp, trend: '+ 25%' },
          { label: 'Revenue', value: '$6,200', color: 'red', icon: DollarSign, trend: '- 45%', down: true },
        ].map((item, i) => (
          <div key={i} className="card-modern p-4 flex items-center justify-between group overflow-hidden relative">
            <div className={`w-14 h-14 sidebar-gradient absolute left-0 top-0 rounded-br-3xl flex items-center justify-center text-white z-10`}>
               <item.icon className="w-6 h-6" />
            </div>
            
            <div className="pl-16 flex-1">
               <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap">{item.label}</h4>
               <p className="text-xl font-bold text-gray-800 tracking-tight">{item.value}</p>
            </div>

            <div className="flex flex-col items-end">
               <div className={cn(
                 "text-[9px] font-bold flex items-center gap-0.5",
                 item.down ? "text-red-500" : "text-green-500"
               )}>
                 {item.trend}
                 {item.down ? <ArrowDownRight className="w-3 h-3" /> : <ArrowUpRight className="w-3 h-3" />}
               </div>
               <div className="h-6 w-12 mt-1">
                 <ResponsiveContainer width="100%" height="100%">
                   <AreaChart data={miniChartData.slice(0, 5)}>
                     <Area type="monotone" dataKey="value" stroke={item.down ? "#ef4444" : "#22c55e"} fill={item.down ? "#fee2e2" : "#dcfce7"} />
                   </AreaChart>
                 </ResponsiveContainer>
               </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Row: Large Chart & Expenses */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 card-modern p-8">
           <div className="flex justify-between items-center mb-8">
             <h3 className="text-lg font-bold text-gray-800">Data Activity</h3>
             <div className="flex items-center gap-3">
                <div className="px-4 py-1.5 bg-gray-800 text-white rounded-xl text-[10px] font-bold">Wednesday, 2 July 2025</div>
                <div className="px-4 py-1.5 bg-red-500 text-white rounded-xl text-[10px] font-bold flex items-center gap-2">
                  <Calendar className="w-3 h-3" /> Lifetime <ChevronDown className="w-3 h-3" />
                </div>
             </div>
           </div>

           <div className="h-[300px] w-full">
             <ResponsiveContainer width="100%" height="100%">
               <AreaChart data={data}>
                 <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8', fontWeight: 'bold' }} stroke="#f1f5f9" />
                 <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8', fontWeight: 'bold' }} />
                 <Tooltip 
                   contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
                 />
                 <Area type="monotone" dataKey="value" stroke="#f59e0b" strokeWidth={3} fill="url(#colorActivity)" />
                 <defs>
                   <linearGradient id="colorActivity" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="5%" stopColor="#fef3c7" stopOpacity={0.8}/>
                     <stop offset="95%" stopColor="#fff" stopOpacity={0}/>
                   </linearGradient>
                 </defs>
               </AreaChart>
             </ResponsiveContainer>
           </div>
        </div>

        <div className="card-modern p-8 flex flex-col h-[400px]">
           <h3 className="text-lg font-bold text-gray-800 mb-8">Company Expenses</h3>
           
           <div className="flex-1 relative flex flex-col items-center justify-center">
              <svg viewBox="0 0 100 50" className="w-full max-w-[200px] transform -translate-y-4">
                <path d="M10,50 A40,40 0 0,1 50,10" fill="none" stroke="#8b5cf6" strokeWidth="15" />
                <path d="M50,10 A40,40 0 0,1 75,18.5" fill="none" stroke="#22c55e" strokeWidth="15" />
                <path d="M75,18.5 A40,40 0 0,1 90,50" fill="none" stroke="#f59e0b" strokeWidth="15" />
              </svg>
              
              {/* Labels on SVG */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <span className="text-[10px] font-bold text-white -translate-x-10 translate-y-2">85%</span>
                 <span className="text-[10px] font-bold text-white translate-x-2 -translate-y-4">25%</span>
                 <span className="text-[10px] font-bold text-white translate-x-8 translate-y-4">10%</span>
              </div>
           </div>

           <div className="space-y-4 pt-4">
              {[
                { label: 'Product A', value: '$230,00', color: 'bg-purple-500', trend: 'up' },
                { label: 'Product B', value: '$30,00', color: 'bg-green-500', trend: 'down' },
                { label: 'Product C', value: '$10,00', color: 'bg-yellow-500', trend: 'down' },
              ].map((exp, i) => (
                <div key={i} className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${exp.color}`}></div>
                    <span className="text-xs font-bold text-gray-600">{exp.label}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-bold text-gray-800">{exp.value}</span>
                    <div className={`p-1 rounded-md ${exp.trend === 'up' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-500'}`}>
                      {exp.trend === 'up' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                    </div>
                  </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}
