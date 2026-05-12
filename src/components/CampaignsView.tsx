import React from 'react';
import { Search, Filter, Plus, MoreHorizontal, Megaphone, Target, MousePointer2, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

const allCampaigns = [
  { id: 1, name: 'Promo Verano 2026', platform: 'Meta Ads', status: 'Activa', spend: '$12,400', reach: '1.2M', ctr: '3.4%', roas: '4.2x' },
  { id: 2, name: 'Lanzamiento Colección Invierno', platform: 'Google Ads', status: 'Pausada', spend: '$8,200', reach: '850k', ctr: '2.1%', roas: '3.1x' },
  { id: 3, name: 'Retargeting Carritos Abandonados', platform: 'TikTok Ads', status: 'Activa', spend: '$4,100', reach: '420k', ctr: '5.8%', roas: '6.5x' },
  { id: 4, name: 'Brand Awareness - LatAm', platform: 'YouTube', status: 'Activa', spend: '$15,000', reach: '2.5M', ctr: '1.2%', roas: '--' },
  { id: 5, name: 'Captación Leads Webinar', platform: 'LinkedIn Ads', status: 'Completada', spend: '$3,500', reach: '120k', ctr: '2.5%', roas: '2.8x' },
];

export function CampaignsView() {
  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold font-mono tracking-tighter uppercase">Gestión de Campañas</h2>
          <p className="text-[10px] font-mono opacity-50 uppercase">Total: 12 Activas | 4 Pausadas</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#141414] text-xs font-mono font-bold uppercase hover:bg-slate-50 transition-colors">
            <Filter className="w-4 h-4" />
            Filtros
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#141414] text-white border border-[#141414] text-xs font-mono font-bold uppercase shadow-[4px_4px_0px_#f27d26] active:translate-y-1 active:shadow-none transition-all">
            <Plus className="w-4 h-4" />
            Nueva Campaña
          </button>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Gasto Total', value: '$43,200', icon: Target, trend: '+12%' },
          { label: 'Alcance Global', value: '5.1M', icon: Megaphone, trend: '+5.4%' },
          { label: 'CTR Medio', value: '3.1%', icon: MousePointer2, trend: '-0.2%' },
          { label: 'ROAS Global', value: '4.1x', icon: TrendingUp, trend: '+0.8%' },
        ].map((stat, i) => (
          <div key={i} className="brutalist-card p-4 bg-white flex items-center gap-4">
            <div className="w-10 h-10 border border-[#141414] flex items-center justify-center bg-slate-50">
              <stat.icon className="w-5 h-5 opacity-60" />
            </div>
            <div>
              <div className="text-[9px] font-mono opacity-50 uppercase">{stat.label}</div>
              <div className="font-bold font-mono text-lg">{stat.value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-30" />
        <input 
          type="text" 
          placeholder="Buscar campaña por nombre, ID o plataforma..." 
          className="w-full bg-white border border-[#141414] pl-10 pr-4 py-3 text-xs font-mono focus:outline-none focus:bg-slate-50 transition-all"
        />
      </div>

      {/* Campaigns Table */}
      <div className="brutalist-card bg-white overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="font-serif italic text-[11px] opacity-60 border-b border-[#141414] bg-[#f9f9f8]">
                <th className="px-6 py-4 border-r border-[#141414]">Campaña</th>
                <th className="px-6 py-4 border-r border-[#141414]">Plataforma</th>
                <th className="px-6 py-4 border-r border-[#141414]">Estado</th>
                <th className="px-6 py-4 border-r border-[#141414]">Gasto</th>
                <th className="px-6 py-4 border-r border-[#141414]">CTR</th>
                <th className="px-6 py-4">ROAS</th>
              </tr>
            </thead>
            <tbody className="font-mono text-xs">
              {allCampaigns.map((camp) => (
                <tr key={camp.id} className="border-b border-[#141414]/10 hover:bg-[#141414] hover:text-white transition-all cursor-pointer group">
                  <td className="px-6 py-4 border-r border-[#141414]/10 bg-white group-hover:bg-transparent">
                    <div className="font-bold uppercase tracking-tight font-sans">{camp.name}</div>
                    <div className="text-[9px] opacity-40">ID_CAMP_00{camp.id}</div>
                  </td>
                  <td className="px-6 py-4 border-r border-[#141414]/10">{camp.platform}</td>
                  <td className="px-6 py-4 border-r border-[#141414]/10 text-center">
                    <span className={cn(
                      "px-2 py-0.5 border border-[#141414] text-[9px] font-bold uppercase",
                      camp.status === 'Activa' ? 'bg-emerald-50 text-emerald-800' : 
                      camp.status === 'Pausada' ? 'bg-yellow-50 text-yellow-800' : 'bg-slate-100 text-slate-800'
                    )}>
                      {camp.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 border-r border-[#141414]/10 font-bold">{camp.spend}</td>
                  <td className="px-6 py-4 border-r border-[#141414]/10">{camp.ctr}</td>
                  <td className="px-6 py-4 font-bold text-orange-500 group-hover:text-orange-400">{camp.roas}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
