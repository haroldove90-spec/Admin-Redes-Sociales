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

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
              <span className="hidden sm:inline text-[10px] font-mono opacity-50 uppercase tracking-widest">Admin_Pro</span>
              <span className="hidden sm:inline opacity-20">/</span>
              <span className="text-xs font-bold uppercase tracking-widest truncate max-w-[150px] sm:max-w-none">
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
            
            <div className="flex items-center gap-4 border-l border-[#141414] pl-6 h-14">
              <button className="text-[#141414] hover:opacity-70 transition-opacity relative">
                <Bell className="w-4 h-4" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#F27D26] border border-[#141414]"></span>
              </button>
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
