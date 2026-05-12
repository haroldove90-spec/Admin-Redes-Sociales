import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'LUN', clicks: 4500, projected: 3800 },
  { name: 'MAR', clicks: 5200, projected: 4100 },
  { name: 'MIE', clicks: 4800, projected: 4400 },
  { name: 'JUE', clicks: 6100, projected: 5800 },
  { name: 'VIE', clicks: 5900, projected: 6200 },
  { name: 'SAB', clicks: 4200, projected: 4800 },
  { name: 'DOM', clicks: 3800, projected: 4200 },
];

export function PerformanceChart() {
  return (
    <div className="bg-white p-4 border border-[#141414] h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <span className="text-xs font-bold uppercase tracking-tight">Rendimiento Semanal (Clicks)</span>
        <div className="flex space-x-3">
          <div className="flex items-center text-[10px] font-mono"><span className="w-2 h-2 bg-[#141414] mr-1"></span> ACTUAL</div>
          <div className="flex items-center text-[10px] font-mono"><span className="w-2 h-2 bg-orange-500 mr-1"></span> PEAK</div>
        </div>
      </div>
      
      <div className="flex-1 w-full min-h-[160px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 0, right: 0, left: -25, bottom: 0 }}>
            <CartesianGrid strokeDasharray="0" vertical={false} stroke="#14141410" />
            <XAxis 
              dataKey="name" 
              axisLine={{ stroke: '#141414' }} 
              tickLine={false} 
              tick={{ fill: '#14141480', fontSize: 10, fontFamily: 'IBM Plex Mono' }} 
              dy={10}
            />
            <YAxis 
              axisLine={{ stroke: '#141414' }} 
              tickLine={false} 
              tick={{ fill: '#14141480', fontSize: 10, fontFamily: 'IBM Plex Mono' }} 
            />
            <Tooltip 
              cursor={{ fill: '#14141405' }}
              contentStyle={{ 
                borderRadius: '0px', 
                border: '1px solid #141414', 
                backgroundColor: '#141414',
                color: '#E4E3E0',
                fontSize: '11px',
                fontFamily: 'IBM Plex Mono',
                padding: '8px'
              }}
              itemStyle={{ color: '#E4E3E0' }}
            />
            <Bar 
              dataKey="clicks" 
              fill="#141414" 
              radius={0}
              barSize={24}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.clicks > 6000 ? '#F27D26' : '#141414'} 
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex justify-between mt-4 border-t border-[#141414]/10 pt-3">
        <div className="text-[10px] font-mono opacity-50 uppercase flex gap-4">
          <span>DATA_STREAM_OK</span>
          <span>LATENCY: 12ms</span>
        </div>
        <div className="text-[10px] font-mono font-bold text-orange-600 uppercase">
          Signal: Strong
        </div>
      </div>
    </div>
  );
}
