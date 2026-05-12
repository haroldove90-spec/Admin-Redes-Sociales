/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { StatsGrid } from './components/StatsGrid';
import { CampaignTable } from './components/CampaignTable';
import { AIGenerator } from './components/AIGenerator';
import { PerformanceChart } from './components/PerformanceChart';
import { AICreationCenter } from './components/AICreationCenter';
import { PredictiveAnalytics } from './components/PredictiveAnalytics';
import { LeadFlowCenter } from './components/LeadFlowCenter';
import { BrandSettings } from './components/BrandSettings';
import { CampaignsView } from './components/CampaignsView';
import { AudiencesView } from './components/AudiencesView';
import { Bell, Search, Calendar, ChevronDown, Settings, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [activeBrand, setActiveBrand] = useState('App Design');

  const notifications = [
    { id: 1, text: 'IA optimizó presupuesto en "Promo Verano"', time: 'Hace 2 min', type: 'auto' },
    { id: 2, text: 'Nuevo Lead de alta prioridad detectado', time: 'Hace 15 min', type: 'lead' },
    { id: 3, text: 'Reporte semanal listo para descarga', time: 'Hace 1 hora', type: 'system' },
  ];

  return (
    <div className="flex h-screen bg-[#E4E3E0] font-sans text-[#141414] overflow-hidden">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />
      
      <main className="flex-1 flex flex-col overflow-hidden w-full">
        {/* Header */}
        <header className="h-14 border-b border-[#141414] flex items-center justify-between px-4 lg:px-6 bg-white/50 backdrop-blur-sm sticky top-0 z-30">
          <div className="flex items-center space-x-2 md:space-x-4">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 border border-[#141414] hover:bg-[#141414] hover:text-white transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              <div className="relative group/brand">
                <button className="hidden sm:flex items-center gap-2 text-[10px] font-mono border border-[#141414] px-2 py-0.5 hover:bg-[#141414] hover:text-white transition-all uppercase tracking-widest font-bold">
                  {activeBrand} <ChevronDown className="w-3 h-3" />
                </button>
                <div className="absolute top-full left-0 mt-1 w-40 bg-white border border-[#141414] shadow-[4px_4px_0_#141414] opacity-0 invisible group-hover/brand:opacity-100 group-hover/brand:visible transition-all z-50">
                  {['App Design', 'Tech Corp', 'Global Retail'].map(brand => (
                    <button 
                      key={brand}
                      onClick={() => setActiveBrand(brand)}
                      className="w-full text-left px-3 py-2 text-[10px] font-mono hover:bg-[#141414] hover:text-white transition-colors border-b border-[#141414]/10 last:border-0"
                    >
                      {brand}
                    </button>
                  ))}
                </div>
              </div>
              <span className="hidden sm:inline opacity-20">/</span>
              <span className="text-xs font-bold uppercase tracking-widest truncate max-w-[120px] sm:max-w-none">
                {activeTab === 'dashboard' ? 'Dashboard Overview' : 
                 activeTab === 'ia-center' ? 'Centro de Creación IA' : 
                 activeTab === 'analitica' ? 'Analítica Predictiva' : 
                 activeTab === 'leads' ? 'Flujo de Leads & IA' : 
                 activeTab === 'campañas' ? 'Gestión de Campañas' :
                 activeTab === 'audiencias' ? 'Base de Audiencias' : 
                 activeTab === 'configuracion' ? 'Identidad de Marca' : activeTab}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-2">
              <span className="text-[10px] font-mono bg-yellow-300 px-2 py-0.5 border border-[#141414] font-bold">LIVE FEED</span>
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            </div>
            
            <div className="flex items-center gap-4 border-l border-[#141414] pl-6 h-14 relative">
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="text-[#141414] hover:opacity-70 transition-opacity relative"
              >
                <Bell className="w-4 h-4" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#F27D26] border border-[#141414]"></span>
              </button>

              {/* Notification Drawer */}
              <AnimatePresence>
                {showNotifications && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setShowNotifications(false)} />
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute top-full right-0 mt-2 w-72 bg-white border-2 border-[#141414] shadow-[8px_8px_0_#141414] z-50 overflow-hidden"
                    >
                      <div className="p-3 border-b border-[#141414] bg-[#141414] text-white flex justify-between items-center text-[10px] font-mono font-bold uppercase tracking-widest">
                        <span>Notificaciones Recientes</span>
                        <X className="w-3 h-3 cursor-pointer" onClick={() => setShowNotifications(false)} />
                      </div>
                      <div className="max-h-80 overflow-y-auto">
                        {notifications.map(notif => (
                          <div key={notif.id} className="p-3 border-b border-[#141414]/10 hover:bg-slate-50 transition-colors last:border-0">
                            <div className="flex items-start gap-3">
                              <div className={cn(
                                "w-2 h-2 mt-1 shrink-0",
                                notif.type === 'auto' ? 'bg-orange-500' : 
                                notif.type === 'lead' ? 'bg-emerald-500' : 'bg-slate-400'
                              )}></div>
                              <div>
                                <p className="text-[11px] font-bold leading-tight uppercase tracking-tight">{notif.text}</p>
                                <p className="text-[9px] font-mono opacity-50 mt-1">{notif.time}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <button className="w-full py-2 bg-slate-50 text-[9px] font-mono font-bold uppercase border-t border-[#141414] hover:bg-[#141414] hover:text-white transition-colors">
                        Ver todo el historial
                      </button>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>

              <div className="w-8 h-8 border border-[#141414] bg-[#F27D26] flex items-center justify-center text-[10px] font-bold font-mono">JD</div>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6 scroll-smooth">
          {activeTab === 'dashboard' && (
            <div className="grid grid-cols-4 gap-4 auto-rows-min">
              {/* Stats Row */}
              <div className="col-span-4">
                <StatsGrid />
              </div>

              {/* Middle Section: Chart & AI */}
              <div className="col-span-4 lg:col-span-3">
                <PerformanceChart />
              </div>
              <div className="col-span-4 lg:col-span-1">
                <AIGenerator />
              </div>

              {/* Bottom Section: Table */}
              <div className="col-span-4">
                <CampaignTable />
              </div>
            </div>
          )}

          {activeTab === 'ia-center' && (
            <AICreationCenter />
          )}

          {activeTab === 'analitica' && (
            <PredictiveAnalytics />
          )}

          {activeTab === 'leads' && (
            <LeadFlowCenter />
          )}

          {activeTab === 'campañas' && (
            <CampaignsView />
          )}

          {activeTab === 'audiencias' && (
            <AudiencesView />
          )}

          {activeTab === 'configuracion' && (
            <BrandSettings />
          )}

          {activeTab !== 'dashboard' && activeTab !== 'ia-center' && activeTab !== 'analitica' && activeTab !== 'leads' && activeTab !== 'campañas' && activeTab !== 'audiencias' && activeTab !== 'configuracion' && (
            <div className="border border-[#141414] bg-white p-20 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 border border-[#141414] flex items-center justify-center mb-6">
                <Settings className="w-8 h-8 animate-spin-slow opacity-20" />
              </div>
              <h2 className="text-xl font-bold font-mono uppercase tracking-tighter">Section Under Construction</h2>
              <p className="text-xs font-mono opacity-50 mt-2 max-w-xs">
                NODE_ERROR: Capability "{activeTab}" is currently locked in v4.0-preview.
              </p>
              <button 
                onClick={() => setActiveTab('dashboard')}
                className="mt-8 px-6 py-2 bg-[#141414] text-[#E4E3E0] text-xs font-mono font-bold uppercase tracking-widest border border-[#141414] hover:bg-neutral-800 transition-colors"
              >
                Return to Master_Core
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
