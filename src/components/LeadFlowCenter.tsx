import React, { useState } from 'react';
import { Users, MessageSquare, Zap, CheckCircle2, MoreVertical, Search, Check, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

const leads = [
  { id: 1, name: "Carlos Ruiz", source: "Facebook Ads", interest: "Alta", status: "Contactado por IA", time: "Hace 5 min" },
  { id: 2, name: "Elena Gómez", source: "WhatsApp Business", interest: "Media", status: "Pendiente", time: "Hace 12 min" },
  { id: 3, name: "Roberto Maya", source: "Google Search", interest: "Muy Alta", status: "Cita Agendada", time: "Hace 1 hr" },
  { id: 4, name: "Lucía Torres", source: "Instagram Ads", interest: "Alta", status: "Contactado por IA", time: "Hace 2 hrs" },
  { id: 5, name: "Andrés Silva", source: "LinkedIn", interest: "Baja", status: "Email Enviado", time: "Hace 4 hrs" },
];

export function LeadFlowCenter() {
  const [rules, setRules] = useState([
    { id: 1, label: "Responder preguntas frecuentes automáticamente", checked: true },
    { id: 2, label: "Clasificar leads por nivel de interés", checked: true },
    { id: 3, label: "Notificar al equipo de ventas por WhatsApp cuando un lead sea 'Muy Alta'", checked: false },
    { id: 4, label: "Agendar citas en Google Calendar directamente", checked: true },
  ]);

  const toggleRule = (id: number) => {
    setRules(prev => prev.map(r => r.id === id ? { ...r, checked: !r.checked } : r));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full pb-10">
      
      {/* Columna Izquierda: Leads y Reglas */}
      <div className="lg:col-span-2 space-y-6">
        
        {/* Leads Table */}
        <div className="brutalist-card bg-white overflow-hidden flex flex-col">
          <div className="p-4 border-b border-[#141414] bg-[#f9f9f8] flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-orange-600" />
              <span className="text-xs font-bold uppercase font-mono tracking-widest">Leads Recientes</span>
            </div>
            <div className="relative">
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-3 h-3 opacity-30" />
              <input 
                type="text" 
                placeholder="Filtrar base..." 
                className="pl-7 pr-3 py-1 bg-white border border-[#141414]/20 text-[10px] font-mono focus:outline-none focus:border-[#141414]"
              />
            </div>
          </div>
          <div className="overflow-x-auto overflow-y-auto max-h-[350px]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="font-serif italic text-[11px] opacity-60 border-b border-[#141414] sticky top-0 bg-white">
                  <th className="px-4 py-3 border-r border-[#141414]">Nombre / Origen</th>
                  <th className="px-4 py-3 border-r border-[#141414]">Interés</th>
                  <th className="px-4 py-3 border-r border-[#141414]">Estado</th>
                  <th className="px-4 py-3">Tiempo</th>
                </tr>
              </thead>
              <tbody className="font-mono text-[11px]">
                {leads.map((lead) => (
                  <tr key={lead.id} className="border-b border-[#141414]/10 hover:bg-[#141414] hover:text-white transition-all cursor-pointer group">
                    <td className="px-4 py-3 border-r border-[#141414]/10">
                      <div className="font-sans font-bold uppercase tracking-tight">{lead.name}</div>
                      <div className="text-[9px] opacity-50 font-mono">{lead.source}</div>
                    </td>
                    <td className="px-4 py-3 border-r border-[#141414]/10">
                      <span className={cn(
                        "px-1.5 py-0.5 border border-[#141414] text-[9px] font-bold group-hover:border-white transition-colors",
                        lead.interest === "Muy Alta" ? "bg-orange-100 text-orange-800" :
                        lead.interest === "Alta" ? "bg-emerald-100 text-emerald-800" :
                        lead.interest === "Media" ? "bg-yellow-100 text-yellow-800" : "bg-slate-100 text-slate-800"
                      )}>
                        {lead.interest}
                      </span>
                    </td>
                    <td className="px-4 py-3 border-r border-[#141414]/10">
                      <div className="flex items-center gap-1.5">
                        <div className={cn(
                          "w-1.5 h-1.5 rounded-full",
                          lead.status.includes("IA") ? "bg-orange-500 animate-pulse" : "bg-slate-400"
                        )}></div>
                        {lead.status}
                      </div>
                    </td>
                    <td className="px-4 py-3 opacity-50 italic">{lead.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Automation Rules */}
        <div className="brutalist-card bg-white p-6">
          <div className="flex items-center gap-2 mb-6">
            <Zap className="w-4 h-4 text-orange-600" />
            <span className="text-xs font-bold uppercase font-mono tracking-widest text-[#141414]">Configuración de Reglas</span>
          </div>
          <div className="space-y-3">
            {rules.map((rule) => (
              <button 
                key={rule.id}
                onClick={() => toggleRule(rule.id)}
                className="w-full flex items-center justify-between p-3 border border-[#141414]/10 hover:border-[#141414] hover:bg-slate-50 transition-all text-left"
              >
                <span className={cn(
                  "text-xs font-mono tracking-tight",
                  rule.checked ? "text-[#141414] font-bold" : "text-[#141414]/40"
                )}>
                  {rule.label}
                </span>
                <div className={cn(
                  "w-5 h-5 flex items-center justify-center border transition-colors",
                  rule.checked ? "bg-[#141414] border-[#141414]" : "border-[#141414]/20"
                )}>
                  {rule.checked && <Check className="w-3 h-3 text-white" />}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Columna Derecha: Chat y Salud */}
      <div className="space-y-6">
        
        {/* Chat Simulator */}
        <div className="brutalist-card bg-white flex flex-col h-[400px] shadow-[4px_4px_0px_#141414]">
          <div className="p-3 border-b border-[#141414] bg-[#141414] text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-[10px] font-mono font-bold uppercase">Chat Simulator_Live</span>
            </div>
            <MoreVertical className="w-4 h-4 opacity-50" />
          </div>
          
          <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-[#fdfdfc] font-sans">
            <div className="flex flex-col items-start gap-1">
              <span className="text-[9px] font-mono opacity-40 uppercase ml-1">Cliente_0041</span>
              <div className="max-w-[85%] bg-white border border-[#141414] p-3 text-xs italic">
                ¿Tienen disponibilidad para el sistema de inventarios? Me urge para 3 sucursales.
              </div>
            </div>

            <div className="flex flex-col items-end gap-1">
              <span className="text-[9px] font-mono text-orange-600 uppercase mr-1 flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Gemini_AI_Assistant
              </span>
              <div className="max-w-[85%] bg-[#141414] text-white p-3 text-xs text-right">
                ¡Hola! Sí, nuestro sistema soporta múltiples sucursales perfectamente. ¿Te gustaría agendar una demo mañana a las 10:00 AM para mostrarte cómo funciona?
              </div>
              <span className="text-[8px] font-mono opacity-40 uppercase mt-1 italic">
                Respuesta enviada automáticamente • 1.1s
              </span>
            </div>
          </div>

          <div className="p-3 border-t border-[#141414] bg-white">
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="Escribe para intervenir..." 
                className="flex-1 border border-[#141414]/20 px-3 py-2 text-[10px] font-mono focus:outline-none"
              />
              <button className="p-2 bg-[#141414] text-white">
                <MessageSquare className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Health Widget */}
        <div className="brutalist-card bg-[#141414] text-white p-6 relative overflow-hidden group">
          <div className="absolute -top-10 -right-10 opacity-5 rotate-12 transition-transform group-hover:rotate-45">
            <Zap className="w-32 h-32 text-orange-400" />
          </div>

          <div className="relative z-10 space-y-6">
            <div className="flex justify-between items-center text-[10px] font-mono font-bold uppercase tracking-widest">
              <span>Health_Metrics</span>
              <span className="text-orange-400">Stable</span>
            </div>

            <div className="flex items-center justify-between gap-6">
              <div className="flex-1 py-4 border-r border-white/10">
                <div className="text-3xl font-mono font-bold text-orange-500">98%</div>
                <div className="text-[9px] font-mono opacity-50 uppercase mt-1">Tasa de Respuesta IA</div>
              </div>
              <div className="flex-1 py-4">
                <div className="text-3xl font-mono font-bold text-emerald-400">1.2s</div>
                <div className="text-[9px] font-mono opacity-50 uppercase mt-1">Tiempo Promedio</div>
              </div>
            </div>

            <div className="pt-2">
              <div className="flex justify-between text-[10px] font-mono uppercase mb-2">
                <span className="opacity-50">Eficiencia de Embudo</span>
                <span className="font-bold">Alta</span>
              </div>
              <div className="h-1 w-full bg-white/10 relative overflow-hidden">
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent w-full opacity-50"
                />
                <div className="h-full bg-orange-500 w-[92%]" />
              </div>
            </div>

            <div className="flex items-center gap-2 p-3 border border-dashed border-emerald-500/30 bg-emerald-500/5 mt-4">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="text-[9px] font-mono uppercase leading-tight">
                Protección de marca activa. Filtrado de mensajes ofensivos habilitado.
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
