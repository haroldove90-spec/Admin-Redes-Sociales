import React from 'react';
import { Users, UserPlus, MapPin, Target, BarChart3, PieChart, MoreVertical } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { PieChart as RechartsPie, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const segmentData = [
  { name: 'Millennials (25-34)', value: 4500, color: '#141414' },
  { name: 'Gen Z (18-24)', value: 3800, color: '#F27D26' },
  { name: 'Gen X (35-44)', value: 2100, color: '#6366f1' },
  { name: 'Boomers (45+)', value: 1200, color: '#94a3b8' },
];

const topAudiences = [
  { name: 'Entusiastas de Tecnología', size: '2.1M', affinity: 'Alta', source: 'Pixel Meta' },
  { name: 'Adoptadores Tempranos', size: '850k', affinity: 'Muy Alta', source: 'LTV Data' },
  { name: 'Nómadas Digitales', size: '1.2M', affinity: 'Media', source: 'Lookalike 5%' },
  { name: 'Ingenieros de Software', size: '420k', affinity: 'Muy Alta', source: 'LinkedIn Sync' },
];

export function AudiencesView() {
  return (
    <div className="space-y-6 pb-10">
      {/* Header Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold font-mono tracking-tighter uppercase">Gestión de Audiencias</h2>
          <p className="text-[10px] font-mono opacity-50 uppercase">Base de Datos: 4.5M Perfiles Únicos</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#141414] text-xs font-mono font-bold uppercase transition-all hover:bg-slate-50">
            <UserPlus className="w-4 h-4" />
            Nueva Audiencia
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Demographics Card */}
        <div className="lg:col-span-1 brutalist-card bg-white p-6 flex flex-col">
          <div className="flex items-center gap-2 mb-6">
            <PieChart className="w-4 h-4 text-orange-600" />
            <span className="text-xs font-bold uppercase font-mono tracking-widest">Demográficos Clave</span>
          </div>
          
          <div className="h-[250px] w-full mb-6">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsPie>
                <Pie
                  data={segmentData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {segmentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="#14141410" />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    borderRadius: '0px', border: '1px solid #141414', backgroundColor: '#141414',
                    color: '#E4E3E0', fontSize: '11px', fontFamily: 'IBM Plex Mono', padding: '8px'
                  }}
                />
              </RechartsPie>
            </ResponsiveContainer>
          </div>

          <div className="space-y-2">
            {segmentData.map((seg, i) => (
              <div key={i} className="flex items-center justify-between text-[11px] font-mono">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2" style={{ backgroundColor: seg.color }}></div>
                  <span>{seg.name}</span>
                </div>
                <span className="font-bold">{((seg.value / 11600) * 100).toFixed(1)}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Audiences Table */}
        <div className="lg:col-span-2 brutalist-card bg-white overflow-hidden flex flex-col">
          <div className="p-4 border-b border-[#141414] bg-[#f9f9f8] flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-orange-600" />
              <span className="text-xs font-bold uppercase font-mono tracking-widest">Segmentos de Alto Valor</span>
            </div>
          </div>
          
          <div className="flex-1 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="font-serif italic text-[11px] opacity-60 border-b border-[#141414]">
                  <th className="px-6 py-4 border-r border-[#141414]">Segmento</th>
                  <th className="px-6 py-4 border-r border-[#141414]">Tamaño Est.</th>
                  <th className="px-6 py-4 border-r border-[#141414]">Afinidad IA</th>
                  <th className="px-6 py-4">Origen Data</th>
                </tr>
              </thead>
              <tbody className="font-mono text-xs">
                {topAudiences.map((aud, i) => (
                  <tr key={i} className="border-b border-[#141414]/10 hover:bg-[#141414] hover:text-white transition-all cursor-pointer group">
                    <td className="px-6 py-4 border-r border-[#141414]/10 bg-white group-hover:bg-transparent font-bold uppercase tracking-tighter">
                      {aud.name}
                    </td>
                    <td className="px-6 py-4 border-r border-[#141414]/10">{aud.size}</td>
                    <td className="px-6 py-4 border-r border-[#141414]/10">
                      <span className={cn(
                        "px-1.5 py-0.5 border border-[#141414] text-[9px] font-bold group-hover:border-white",
                        aud.affinity.includes('Very') ? 'bg-emerald-50 text-emerald-800' : 'bg-slate-50 text-slate-800'
                      )}>
                        {aud.affinity}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-[10px] opacity-50 italic">{aud.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-4 bg-slate-50 border-t border-[#141414] flex justify-center">
            <button className="text-[10px] font-mono font-bold uppercase hover:underline">Explorar Audiencias Similares (LAL)</button>
          </div>
        </div>
      </div>

      {/* Interest Clouds / Tags */}
      <div className="brutalist-card p-6 bg-[#141414] text-white">
        <div className="flex items-center gap-2 mb-6">
          <BarChart3 className="w-4 h-4 text-orange-400" />
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-orange-400">Intereses en Tendencia</span>
        </div>
        <div className="flex flex-wrap gap-3">
          {['IA Generativa', 'Remote Work', 'SaaS', 'Digital Marketing', 'Python', 'UX/UI', 'Venture Capital', 'E-commerce', 'Crypto', 'Web3'].map((tag, i) => (
            <div key={i} className="px-3 py-1 border border-white/20 text-[10px] font-mono hover:bg-white hover:text-black transition-all cursor-crosshair">
              {tag} <span className="opacity-40 ml-1">+{Math.floor(Math.random() * 40)}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
