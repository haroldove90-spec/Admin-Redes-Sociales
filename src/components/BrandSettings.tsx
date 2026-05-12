import React, { useState } from 'react';
import { Settings, Palette, Type, Link, Upload, CheckCircle2, AlertCircle, Info, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

type Personality = 'sofisticado' | 'amigable' | 'tecnico' | 'vendedor';

export function BrandSettings() {
  const [activePersonality, setActivePersonality] = useState<Personality>('amigable');

  const personalities = [
    { id: 'sofisticado', label: 'Sofisticado', description: 'Lenguaje elegante y premium.' },
    { id: 'amigable', label: 'Cercano/Amistoso', description: 'Cálido, empático y servicial.' },
    { id: 'tecnico', label: 'Técnico', description: 'Precisión, datos y jerga del sector.' },
    { id: 'vendedor', label: 'Vendedor Agresivo', description: 'Enfocado en cierre y urgencia.' },
  ];

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 pb-10">
      
      {/* Columna Izquierda: Perfil y Personalidad */}
      <div className="xl:col-span-2 space-y-8">
        
        {/* Brand Profile */}
        <section className="brutalist-card p-8 bg-white">
          <div className="flex items-center gap-3 mb-8 border-b border-[#141414]/10 pb-4">
            <Settings className="w-5 h-5 text-[#141414]" />
            <h2 className="text-xl font-bold font-mono tracking-tighter uppercase">Perfil de Identidad de Marca</h2>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-[10px] font-mono font-bold uppercase opacity-60 mb-2 block tracking-widest">Nombre de la Marca</label>
                <input 
                  type="text" 
                  defaultValue="App Design" 
                  className="w-full bg-white border-2 border-[#141414] px-4 py-3 font-mono text-sm focus:outline-none focus:bg-slate-50 transition-all"
                />
              </div>
              <div>
                <label className="text-[10px] font-mono font-bold uppercase opacity-60 mb-2 block tracking-widest">Eslogan</label>
                <input 
                  type="text" 
                  defaultValue="Soluciones Digitales a Medida" 
                  className="w-full bg-white border-2 border-[#141414] px-4 py-3 font-mono text-sm focus:outline-none focus:bg-slate-50 transition-all"
                />
              </div>
            </div>
            <div>
              <label className="text-[10px] font-mono font-bold uppercase opacity-60 mb-2 block tracking-widest">Descripción del Negocio</label>
              <textarea 
                rows={4}
                defaultValue="Desarrollo de software y consultoría tecnológica para PyMEs en México. Nos especializamos en transformación digital y modernización de procesos."
                className="w-full bg-white border-2 border-[#141414] px-4 py-3 font-mono text-sm focus:outline-none focus:bg-slate-50 transition-all resize-none"
              />
            </div>
          </div>
        </section>

        {/* AI Personality */}
        <section className="brutalist-card p-8 bg-white">
          <div className="flex items-center gap-3 mb-8 border-b border-[#141414]/10 pb-4">
            <Sparkles className="w-5 h-5 text-orange-500" />
            <h2 className="text-xl font-bold font-mono tracking-tighter uppercase">Personalidad de la IA</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {personalities.map((p) => (
              <button
                key={p.id}
                onClick={() => setActivePersonality(p.id as Personality)}
                className={cn(
                  "p-4 border-2 text-left transition-all relative overflow-hidden group",
                  activePersonality === p.id 
                    ? "border-[#141414] bg-[#141414] text-white shadow-[4px_4px_0px_#f27d26]" 
                    : "border-[#141414]/10 hover:border-[#141414] text-[#141414]"
                )}
              >
                <div className="font-bold font-mono uppercase tracking-tight text-sm mb-1">{p.label}</div>
                <div className={cn("text-[10px] leading-relaxed", activePersonality === p.id ? "opacity-70" : "opacity-40")}>
                  {p.description}
                </div>
                {activePersonality === p.id && (
                  <div className="absolute top-2 right-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-400" />
                  </div>
                )}
              </button>
            ))}
          </div>

          <div className="mt-8 p-4 bg-orange-50 border border-[#141414]/10 flex gap-4">
            <div className="mt-1">
              <Info className="w-4 h-4 text-orange-600" />
            </div>
            <div>
              <p className="text-[11px] font-sans font-bold text-orange-900 uppercase">Vista Previa de Voz de Marca</p>
              <p className="text-xs font-serif italic text-orange-800 leading-relaxed mt-1">
                "¡Hola! Qué gusto saludarte. En App Design estamos listos para llevar tu negocio al siguiente nivel. ¿En qué podemos ayudarte hoy?"
              </p>
            </div>
          </div>
        </section>

      </div>

      {/* Columna Derecha: Activos e Integraciones */}
      <div className="space-y-8">
        
        {/* Brand Assets */}
        <section className="brutalist-card p-6 bg-[#141414] text-white">
          <div className="flex items-center gap-2 mb-6">
            <Palette className="w-4 h-4 text-orange-400" />
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-orange-400">Activos Visuales</h3>
          </div>

          <div className="space-y-6">
            <div>
              <span className="text-[10px] font-mono font-bold opacity-50 uppercase block mb-3">Logo de Marca</span>
              <div className="border border-dashed border-white/30 p-8 flex flex-col items-center justify-center gap-2 hover:bg-white/5 transition-colors cursor-pointer">
                <Upload className="w-6 h-6 opacity-40" />
                <span className="text-[10px] font-mono opacity-50 uppercase">Subir o arrastrar logo</span>
              </div>
            </div>

            <div>
              <span className="text-[10px] font-mono font-bold opacity-50 uppercase block mb-3">Paleta de Colores</span>
              <div className="flex gap-2">
                <div className="w-10 h-10 border border-white/20 bg-black group relative cursor-pointer">
                  <div className="absolute -bottom-6 left-0 text-[8px] font-mono opacity-0 group-hover:opacity-100 transition-opacity">#000000</div>
                </div>
                <div className="w-10 h-10 border border-white/20 bg-white group relative cursor-pointer">
                  <div className="absolute -bottom-6 left-0 text-[8px] font-mono text-white opacity-0 group-hover:opacity-100 transition-opacity">#FFFFFF</div>
                </div>
                <div className="w-10 h-10 border border-white/20 bg-[#FFD700] group relative cursor-pointer">
                  <div className="absolute -bottom-6 left-0 text-[8px] font-mono opacity-0 group-hover:opacity-100 transition-opacity">#FFD700</div>
                </div>
                <button className="w-10 h-10 border-2 border-dashed border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <span className="text-xs">+</span>
                </button>
              </div>
            </div>

            <div className="pt-4">
              <span className="text-[10px] font-mono font-bold opacity-50 uppercase block mb-3 flex items-center gap-2">
                <Type className="w-3 h-3" /> Tipografía Preferida
              </span>
              <div className="text-sm font-sans font-semibold italic border-b border-white/10 pb-2 flex justify-between items-center group cursor-pointer">
                Inter / Sans Serif
                <span className="text-[10px] opacity-0 group-hover:opacity-40 transition-opacity">Cambiar</span>
              </div>
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="brutalist-card p-6 bg-white">
          <div className="flex items-center gap-2 mb-6">
            <Link className="w-4 h-4 text-[#141414]" />
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest">Estatus de Integraciones</h3>
          </div>

          <div className="space-y-3">
            {[
              { label: 'Facebook Ads', status: 'Conectado', color: 'emerald' },
              { label: 'Instagram', status: 'Conectado', color: 'emerald' },
              { label: 'WhatsApp API', status: 'Pendiente', color: 'yellow' },
              { label: 'Google Analytics', status: 'Conectado', color: 'emerald' },
            ].map((int) => (
              <div key={int.label} className="flex items-center justify-between p-3 border border-[#141414]/5 bg-slate-50/50">
                <span className="text-xs font-mono tracking-tight">{int.label}</span>
                <span className={cn(
                  "text-[9px] font-bold uppercase px-2 py-0.5 border border-[#141414]",
                  int.color === 'emerald' ? 'bg-emerald-50 text-emerald-800 border-emerald-800' : 'bg-yellow-50 text-yellow-800 border-yellow-800'
                )}>
                  {int.status}
                </span>
              </div>
            ))}
          </div>

          <button className="w-full mt-6 py-3 border-2 border-[#141414] text-xs font-mono font-bold uppercase tracking-widest hover:bg-[#141414] hover:text-white transition-all">
            Vincular Nuevo Canal
          </button>
        </section>

      </div>
    </div>
  );
}
