import React from 'react';
import { LayoutDashboard, Megaphone, Sparkles, Users, Settings, ChevronRight, TrendingUp, DownloadCloud, MessageSquare, Shield, LogOut, User, Sun } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion } from 'motion/react';

type SidebarProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isOpen?: boolean;
  onClose?: () => void;
  deferredPrompt?: any;
  onInstall?: () => void;
};

const menuItems = [
  { id: 'dashboard', label: 'Panel de Control', icon: LayoutDashboard },
  { id: 'ia-center', label: 'Centro IA', icon: Sparkles },
  { id: 'messages', label: 'Mensajes', icon: MessageSquare },
  { id: 'leads', label: 'Flujo de Leads', icon: Users },
  { id: 'analitica', label: 'Estadísticas', icon: TrendingUp },
  { id: 'configuracion', label: 'Configuración', icon: Settings },
];

export function Sidebar({ activeTab, setActiveTab, isOpen, onClose, deferredPrompt, onInstall }: SidebarProps) {
  const handleInstall = async () => {
    if (onInstall) onInstall();
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
          className="fixed inset-0 bg-[#141414]/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 lg:relative lg:translate-x-0 w-64 bg-white h-[calc(100vh-2rem)] my-4 mx-4 rounded-[2rem] shadow-xl transition-transform duration-300 ease-in-out flex flex-col overflow-hidden",
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        <div className="p-8 pb-4 flex flex-col items-center border-b border-gray-100">
           <div className="w-12 h-12 mb-4">
             <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-gray-800">
               <path d="M12 2L4 7V17L12 22L20 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
             </svg>
           </div>
           
           <div className="relative mb-2">
             <div className="w-16 h-16 rounded-full border-2 border-red-500 p-1">
               <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center text-red-500 font-bold overflow-hidden">
                 <User className="w-8 h-8" />
               </div>
             </div>
             <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 border-2 border-white rounded-full"></div>
           </div>
           
           <h2 className="text-sm font-bold text-gray-800 tracking-wider">SIMOEL KEHN</h2>
        </div>

        <nav className="flex-1 py-6 px-4">
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li key={item.id} className="relative">
                <button
                  onClick={() => handleItemClick(item.id)}
                  className={cn(
                    "w-full flex items-center gap-4 px-6 py-3 text-sm font-semibold transition-all duration-300 rounded-2xl relative z-10",
                    activeTab === item.id 
                      ? "text-white sidebar-gradient shadow-lg" 
                      : "text-gray-400 hover:text-gray-600 hover:bg-gray-50"
                  )}
                >
                  <item.icon className={cn(
                    "w-5 h-5 transition-colors",
                    activeTab === item.id ? "text-white" : "text-gray-400"
                  )} />
                  <span>{item.label}</span>
                </button>
                {activeTab === item.id && (
                  <motion.div 
                    layoutId="sidebar-active"
                    className="absolute -right-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-red-500"
                  />
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-6 border-t border-gray-100 space-y-2">
          <button className="w-full flex items-center gap-4 px-6 py-2 text-sm font-semibold text-gray-500 hover:text-gray-800 transition-colors">
            <User className="w-5 h-5" />
            <span>Mi Cuenta</span>
          </button>
          <button className="w-full flex items-center justify-between px-6 py-2 text-sm font-semibold text-gray-500 hover:text-gray-800 transition-colors">
            <div className="flex items-center gap-4">
              <Sun className="w-5 h-5" />
              <span>Tema Claro</span>
            </div>
            <div className="w-4 h-4 rounded-full bg-gray-200 border border-gray-300"></div>
          </button>
          
          <div className="pt-4">
            <button className="w-full flex items-center gap-4 px-6 py-2 bg-gray-800 text-white rounded-xl text-sm font-semibold hover:bg-gray-900 transition-all">
              <LogOut className="w-5 h-5" />
              <span>Cerrar Sesión</span>
            </button>
          </div>
          
          {deferredPrompt && (
            <button 
              onClick={handleInstall}
              className="w-full mt-4 flex items-center justify-center gap-2 py-3 bg-red-500 text-white rounded-xl font-bold uppercase text-[10px] hover:bg-red-600 transition-all shadow-md"
            >
              <DownloadCloud className="w-4 h-4" />
              Instalar App
            </button>
          )}
        </div>
      </aside>
    </>
  );
}
