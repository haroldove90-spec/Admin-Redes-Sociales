import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Sparkles, TrendingUp, Zap, FileText, Play, Download, AlertCircle, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

const trendData = [
  { name: 'S1', conversions: 320, spend: 2800 },
  { name: 'S2', conversions: 480, spend: 3200 },
  { name: 'S3', conversions: 410, spend: 3100 },
  { name: 'S4', conversions: 610, spend: 3800 },
  { name: 'S5', conversions: 890, spend: 4200 },
  { name: 'S6', conversions: 1050, spend: 4500 },
  { name: 'S7', conversions: 1230, spend: 4800 },
];

const creatives = [
  { 
    id: 1, 
    type: 'Video', 
    name: 'UGC Demo Zapatillas', 
    ctr: '12.4%', 
    conv: 450, 
    rating: 9.8, 
    status: 'High',
    color: 'emerald'
  },
  { 
    id: 2, 
    type: 'Imagen', 
    name: 'Lifestyle Outdoor', 
    ctr: '5.2%', 
    conv: 120, 
    rating: 6.5, 
    status: 'Average',
    color: 'yellow'
  },
  { 
    id: 3, 
    type: 'Carrusel', 
    name: 'Catálogo Verano', 
    ctr: '2.1%', 
    conv: 45, 
    rating: 3.2, 
    status: 'Low',
    color: 'rose'
  },
];

export function PredictiveAnalytics() {
  return (
    <div className="space-y-6">
      {/* Top Banner Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold font-mono tracking-tighter uppercase">Predictive Analysis Node</h2>
          <p className="text-[10px] font-mono opacity-50 uppercase">Session: 2026_Q2_HYPER_OPTIMIZATION</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#141414] text-xs font-mono font-bold uppercase transition-all hover:bg-slate-50 active:translate-y-0.5">
            <Download className="w-4 h-4" />
            Exportar PDF
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-black border border-[#141414] text-xs font-mono font-bold uppercase transition-all hover:bg-orange-400 active:translate-y-1 shadow-[3px_3px_0px_#141414]">
            <Zap className="w-4 h-4" />
            Auto-Optimizar
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Trend Chart */}
        <div className="lg:col-span-2 brutalist-card p-6 flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <div>
              <span className="text-[10px] font-mono font-bold opacity-60 uppercase tracking-widest block mb-1">Crecimiento vs Inversión</span>
              <h3 className="text-base font-bold font-sans">Evolución de Conversiones</h3>
            </div>
            <div className="flex gap-4 text-[10px] font-mono uppercase font-bold">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500"></div> Conversiones
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500"></div> Gasto ($)
              </div>
            </div>
          </div>
          
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorConv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f97316" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorSpend" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="0" vertical={false} stroke="#14141410" />
                <XAxis dataKey="name" axisLine={{ stroke: '#141414' }} tick={{ fill: '#14141480', fontSize: 10, fontFamily: 'IBM Plex Mono' }} dy={10} />
                <YAxis axisLine={{ stroke: '#141414' }} tick={{ fill: '#14141480', fontSize: 10, fontFamily: 'IBM Plex Mono' }} />
                <Tooltip 
                  contentStyle={{ 
                    borderRadius: '0px', border: '1px solid #141414', backgroundColor: '#141414',
                    color: '#E4E3E0', fontSize: '11px', fontFamily: 'IBM Plex Mono', padding: '8px'
                  }}
                />
                <Area type="monotone" dataKey="conversions" stroke="#f97316" strokeWidth={2} fillOpacity={1} fill="url(#colorConv)" />
                <Area type="monotone" dataKey="spend" stroke="#10b981" strokeWidth={1} strokeDasharray="5 5" fillOpacity={1} fill="url(#colorSpend)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* AI Insight Widget */}
        <div className="lg:col-span-1 bg-[#141414] text-[#E4E3E0] p-6 brutalist-border relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 blur-xl group-hover:opacity-20 transition-opacity">
            <Sparkles className="w-24 h-24 text-orange-400" />
          </div>
          
          <div className="relative z-10 space-y-6">
            <div className="flex items-center gap-2 p-2 border border-orange-500/50 bg-orange-500/10 inline-flex shadow-[0_0_15px_-3px_rgba(249,115,22,0.4)]">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-orange-400">Recomendación de Gemini</span>
            </div>

            <p className="text-sm font-serif italic leading-relaxed opacity-90">
              "Detectamos que la campaña <span className="text-orange-400 font-bold">'Promo Verano'</span> tiene un costo por clic un <span className="bg-emerald-500/20 text-emerald-400 px-1">20% menor en Instagram</span> que en Facebook. Sugerimos reasignar $2,000 MXN del presupuesto para maximizar el ROI."
            </p>

            <div className="pt-4 border-t border-white/10 space-y-3">
              <div className="flex justify-between items-center text-[10px] font-mono uppercase">
                <span className="opacity-50">Impacto Estimado</span>
                <span className="text-emerald-400 font-bold">+18% ROAS</span>
              </div>
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-orange-500 w-[75%]"></div>
              </div>
            </div>

            <button className="w-full py-3 bg-white text-[#141414] text-[10px] font-mono font-bold uppercase tracking-widest hover:bg-orange-400 transition-colors">
              Aplicar Cambios Ahora
            </button>
          </div>
        </div>
      </div>

      {/* Creatives Table */}
      <div className="brutalist-card overflow-hidden">
        <div className="p-4 border-b border-[#141414] bg-[#f9f9f8] flex justify-between items-center">
          <h3 className="text-xs font-bold font-mono uppercase tracking-widest">Análisis de Desempeño de Creativos</h3>
          <div className="flex gap-2">
             <div className="flex items-center gap-1 text-[9px] font-mono opacity-50"><div className="w-2 h-2 bg-emerald-500"></div> Optimo</div>
             <div className="flex items-center gap-1 text-[9px] font-mono opacity-50"><div className="w-2 h-2 bg-yellow-500"></div> Alerta</div>
             <div className="flex items-center gap-1 text-[9px] font-mono opacity-50"><div className="w-2 h-2 bg-rose-500"></div> Crítico</div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="font-serif italic text-[11px] opacity-60 border-b border-[#141414]">
                <th className="px-6 py-4 border-r border-[#141414]">Miniatura / Tipo</th>
                <th className="px-6 py-4 border-r border-[#141414]">CTR</th>
                <th className="px-6 py-4 border-r border-[#141414]">Conversiones</th>
                <th className="px-6 py-4">Calificación IA</th>
              </tr>
            </thead>
            <tbody className="font-mono text-xs">
              {creatives.map((creative) => (
                <tr key={creative.id} className="border-b border-[#141414]/10 hover:bg-[#141414]/5 transition-colors group">
                  <td className="px-6 py-4 border-r border-[#141414]/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 border border-[#141414] bg-slate-100 flex items-center justify-center relative overflow-hidden">
                        <Play className="w-4 h-4 opacity-30" />
                      </div>
                      <div>
                        <div className="font-bold uppercase tracking-tighter text-sm">{creative.name}</div>
                        <div className="text-[9px] opacity-50">{creative.type}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 border-r border-[#141414]/10 font-bold">
                    <span className={cn(
                      creative.color === 'emerald' ? 'text-emerald-600' : 
                      creative.color === 'yellow' ? 'text-yellow-600' : 'text-rose-600'
                    )}>
                      {creative.ctr}
                    </span>
                  </td>
                  <td className="px-6 py-4 border-r border-[#141414]/10 font-bold italic">{creative.conv}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="flex-1 max-w-[100px] h-1.5 bg-slate-100 border border-[#141414]/10">
                        <div 
                          className={cn(
                            "h-full transition-all",
                            creative.color === 'emerald' ? 'bg-emerald-500' : 
                            creative.color === 'yellow' ? 'bg-yellow-500' : 'bg-rose-500'
                          )}
                          style={{ width: `${(creative.rating / 10) * 100}%` }}
                        />
                      </div>
                      <span className={cn(
                        "font-bold px-2 py-0.5 border border-[#141414] text-[10px]",
                         creative.color === 'emerald' ? 'bg-emerald-50 text-emerald-800' : 
                         creative.color === 'yellow' ? 'bg-yellow-50 text-yellow-800' : 'bg-rose-50 text-rose-800'
                      )}>
                        {creative.rating}/10
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
