import React from 'react';
import { LayoutDashboard, Megaphone, Sparkles, Users, Settings, ChevronRight, TrendingUp, DownloadCloud } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useEffect, useState } from 'react';

type SidebarProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isOpen?: boolean;
  onClose?: () => void;
};

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'ia-center', label: 'Centro de Creación IA', icon: Sparkles },
  { id: 'analitica', label: 'Analítica Predictiva', icon: TrendingUp },
  { id: 'leads', label: 'Flujo de Leads', icon: Users },
  { id: 'campañas', label: 'Campañas', icon: Megaphone },
  { id: 'audiencias', label: 'Audiencias', icon: Users },
  { id: 'configuracion', label: 'Configuración', icon: Settings },
];

export function Sidebar({ activeTab, setActiveTab, isOpen, onClose }: SidebarProps) {
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
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setDeferredPrompt(null);
    }
  };

  const handleItemClick = (id: string) => {
    setActiveTab(id);
    if (onClose) onClose();
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-[#141414]/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 lg:relative lg:translate-x-0 w-64 border-r border-[#141414] bg-[#E4E3E0] h-screen transition-transform duration-300 ease-in-out flex flex-col shadow-[4px_0_0_#141414] lg:shadow-none",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-6 border-b border-[#141414] bg-[#141414] text-[#E4E3E0] flex justify-between items-center">
          <h1 className="text-lg font-bold italic tracking-tighter uppercase font-serif">MarketAI</h1>
          <button onClick={onClose} className="lg:hidden p-1 hover:bg-white/10 rounded-sm">
            <ChevronRight className="w-5 h-5 rotate-180" />
          </button>
        </div>

        <nav className="flex-1 py-4 overflow-y-auto">
          <ul className="space-y-1 px-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleItemClick(item.id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 text-sm font-bold transition-all duration-100 rounded-sm uppercase tracking-tight",
                    activeTab === item.id 
                      ? "bg-[#141414] text-[#E4E3E0]" 
                      : "hover:bg-[#d4d3d0] text-[#141414] border border-transparent hover:border-[#141414]"
                  )}
                >
                  <item.icon className={cn(
                    "w-4 h-4",
                    activeTab === item.id ? "text-orange-400" : "text-[#141414] opacity-70"
                  )} />
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-[#141414] bg-white-50 space-y-4">
          {deferredPrompt && (
            <button 
              onClick={handleInstall}
              className="w-full flex items-center justify-center gap-2 py-3 bg-orange-500 text-black border-2 border-[#141414] font-mono font-bold uppercase text-[11px] shadow-[4px_4px_0_#141414] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all animate-bounce"
            >
              <DownloadCloud className="w-4 h-4" />
              Instalar App
            </button>
          )}
          
          <div>
            <div className="text-[10px] uppercase opacity-50 font-bold mb-1 font-mono">Account Info</div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 border border-[#141414] bg-[#F27D26]"></div>
              <div className="text-xs font-mono font-bold">PRO_USER_9901</div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
