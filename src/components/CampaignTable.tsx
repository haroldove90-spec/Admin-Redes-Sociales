import React from 'react';
import { MoreVertical, ExternalLink } from 'lucide-react';

const campaigns = [
  { 
    id: 1, 
    name: 'Promo Verano', 
    platform: 'FB Ads', 
    status: 'ACTIVO', 
    spend: '$4,200', 
    performance: 'CTR 3.2%',
    isActive: true
  },
  { 
    id: 2, 
    name: 'Retargeting Zapatos', 
    platform: 'IG Ads', 
    status: 'ACTIVO', 
    spend: '$2,800', 
    performance: 'CTR 4.5%',
    isActive: true
  },
  { 
    id: 3, 
    name: 'Lanzamiento App', 
    platform: 'Google', 
    status: 'PAUSADO', 
    spend: '$5,100', 
    performance: 'CTR 1.2%',
    isActive: false
  },
  { 
    id: 4, 
    name: 'Captación Leads', 
    platform: 'FB Ads', 
    status: 'ACTIVO', 
    spend: '$1,400', 
    performance: 'CTR 2.8%',
    isActive: true
  },
];

export function CampaignTable() {
  return (
    <div className="border border-[#141414] bg-white flex flex-col overflow-hidden">
      <div className="p-3 border-b border-[#141414] bg-[#f9f9f8] flex justify-between items-center">
        <span className="text-xs font-bold uppercase tracking-tight">Campañas Activas</span>
        <button className="text-[10px] font-mono border border-[#141414] px-2 py-0.5 hover:bg-[#141414] hover:text-white transition-colors uppercase">
          Ver Reporte Full
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="font-serif italic text-[11px] opacity-60 border-b border-[#141414]">
              <th className="px-4 py-3 border-r border-[#141414]">Nombre de Campaña</th>
              <th className="px-4 py-3 border-r border-[#141414]">Plataforma</th>
              <th className="px-4 py-3 border-r border-[#141414]">Estado</th>
              <th className="px-4 py-3 border-r border-[#141414]">Gasto</th>
              <th className="px-4 py-3">Rendimiento</th>
            </tr>
          </thead>
          <tbody className="font-mono">
            {campaigns.map((campaign) => (
              <tr key={campaign.id} className="border-b border-[#141414]/10 hover:bg-[#141414] hover:text-[#E4E3E0] cursor-pointer group transition-colors">
                <td className="px-4 py-3 border-r border-[#141414]/10 font-sans font-bold uppercase tracking-tighter">
                  {campaign.name}
                </td>
                <td className="px-4 py-3 border-r border-[#141414]/10">{campaign.platform}</td>
                <td className="px-4 py-3 border-r border-[#141414]/10">
                  <span className={`px-1 border ${
                    campaign.isActive 
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-800' 
                      : 'bg-gray-100 text-gray-800 border-gray-800'
                  } text-[9px] font-bold group-hover:bg-transparent group-hover:text-white group-hover:border-white transition-colors`}>
                    {campaign.status}
                  </span>
                </td>
                <td className="px-4 py-3 border-r border-[#141414]/10 font-bold">{campaign.spend}</td>
                <td className="px-4 py-3">{campaign.performance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
