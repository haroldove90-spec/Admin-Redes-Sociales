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
import { DashboardView } from './components/DashboardView';
import { Bell, Search, Calendar, ChevronDown, Settings, Menu, X, DownloadCloud, Plus, LayoutDashboard, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from './lib/utils';
import { useEffect } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [activeBrand, setActiveBrand] = useState('App Design');
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) {
      alert("La app está lista para ser instalada. Para ver el prompt real de instalación de Chrome, abre la app en una nueva pestaña y espera unos segundos.");
      return;
    }
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setDeferredPrompt(null);
    }
  };

  const notifications = [
    { id: 1, text: 'IA optimizó presupuesto en "Promo Verano"', time: 'Hace 2 min', type: 'auto' },
    { id: 2, text: 'Nuevo Lead de alta prioridad detectado', time: 'Hace 15 min', type: 'lead' },
    { id: 3, text: 'Reporte semanal listo para descarga', time: 'Hace 1 hora', type: 'system' },
  ];

  return (
    <div className="flex h-screen bg-[#f4f7fe] font-sans text-[#2d3748] overflow-hidden">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
        deferredPrompt={deferredPrompt}
        onInstall={handleInstall}
      />
      
      <main className="flex-1 flex flex-col overflow-hidden w-full">
        {/* Header */}
        <header className="h-20 flex items-center justify-between px-4 lg:px-8 bg-transparent shrink-0">
          <div className="flex items-center flex-1 max-w-xl gap-2 lg:gap-4">
             <button 
               onClick={() => setIsSidebarOpen(true)}
               className="lg:hidden p-3 bg-white rounded-2xl shadow-sm text-gray-800 hover:bg-gray-50 transition-all border border-gray-100"
             >
               <Menu className="w-5 h-5" />
             </button>
             <div className="relative w-full">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
               <input 
                 type="text" 
                 placeholder="Buscar algo..." 
                 className="w-full bg-white rounded-2xl pl-12 pr-4 py-3 text-sm focus:outline-none shadow-sm text-gray-600 font-medium border border-gray-50 focus:border-red-200 transition-all"
               />
             </div>
          </div>

          <div className="flex items-center gap-2 lg:gap-4 ml-4 lg:ml-8">
            <button className="hidden sm:flex w-10 h-10 rounded-xl bg-white flex items-center justify-center text-gray-800 shadow-sm hover:bg-gray-50 transition-all">
              <Plus className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setActiveTab('dashboard')}
              className={cn(
                "w-10 h-10 rounded-xl flex items-center justify-center shadow-sm transition-all",
                activeTab === 'dashboard' ? "bg-gray-800 text-white" : "bg-white text-gray-800 hover:bg-gray-50"
              )}
            >
              <LayoutDashboard className="w-5 h-5" />
            </button>
            <button 
              onClick={handleInstall}
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-xl text-[10px] font-bold uppercase shadow-md hover:bg-red-600 transition-all animate-pulse"
            >
              <DownloadCloud className="w-4 h-4" />
              Instalar App
            </button>
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-gray-800 shadow-sm hover:bg-gray-50 transition-all relative"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            
            <AnimatePresence>
              {showNotifications && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setShowNotifications(false)} />
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full right-0 mt-4 w-80 bg-white rounded-3xl shadow-2xl z-50 overflow-hidden p-2"
                  >
                    <div className="p-4 border-b border-gray-100 flex justify-between items-center text-xs font-bold uppercase tracking-widest text-gray-800">
                      <span>Notificaciones</span>
                      <X className="w-4 h-4 cursor-pointer" onClick={() => setShowNotifications(false)} />
                    </div>
                    <div className="max-h-80 overflow-y-auto">
                      {notifications.map(notif => (
                        <div key={notif.id} className="p-4 hover:bg-gray-50 transition-colors rounded-2xl mt-1">
                          <div className="flex items-start gap-4">
                            <div className={cn(
                              "w-3 h-3 mt-1 shrink-0 rounded-full",
                              notif.type === 'auto' ? 'bg-orange-500' : 
                              notif.type === 'lead' ? 'bg-emerald-500' : 'bg-blue-400'
                            )}></div>
                            <div>
                              <p className="text-xs font-bold text-gray-800">{notif.text}</p>
                              <p className="text-[10px] text-gray-400 mt-1">{notif.time}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </header>

          <div className="flex-1 overflow-hidden relative">
            {activeTab === 'dashboard' ? (
              <DashboardView />
            ) : (
              <div className="flex-1 h-full overflow-y-auto scroll-smooth px-4 lg:px-8 py-4 lg:py-8">
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

                 {activeTab === 'messages' && (
                  <div className="card-modern p-12 lg:p-20 flex flex-col items-center justify-center text-center">
                    <MessageSquare className="w-16 h-16 text-gray-200 mb-6" />
                    <h2 className="text-xl font-bold text-gray-800">Centro de Mensajes</h2>
                    <p className="text-sm text-gray-400 mt-2">Conectando a protocolo de mensajería seguro...</p>
                  </div>
                )}

                 {/* Catch-all for undefined tabs */}
                {!['dashboard', 'ia-center', 'analitica', 'leads', 'campañas', 'audiencias', 'configuracion', 'messages'].includes(activeTab) && (
                  <div className="card-modern p-12 lg:p-20 flex flex-col items-center justify-center text-center">
                    <Settings className="w-16 h-16 animate-spin-slow text-gray-200 mb-6" />
                    <h2 className="text-xl font-bold text-gray-800">Sección en Construcción</h2>
                    <p className="text-sm text-gray-400 mt-2">Esta funcionalidad se está optimizando para la nueva interfaz.</p>
                    <button 
                      onClick={() => setActiveTab('dashboard')}
                      className="mt-8 px-8 py-3 bg-gray-800 text-white rounded-2xl font-bold hover:bg-gray-900 transition-all shadow-lg"
                    >
                      Volver al Panel
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
      </main>
    </div>
  );
}
