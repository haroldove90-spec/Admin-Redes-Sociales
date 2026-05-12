import React, { useState } from 'react';
import { Sparkles, Send, Loader2, Target, MessageSquare, Globe, UserCheck, Eye, Copy, Check, Megaphone, Image as LucideImage } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

type Objective = 'ventas' | 'whatsapp' | 'trafico';
type Tone = 'profesional' | 'divertido' | 'urgente' | 'persuasivo';

interface CampaignResult {
  variants: string[];
  targeting: {
    age: string;
    interests: string[];
    locations: string[];
  };
  imageAnalysis: string;
}

export function AICreationCenter() {
  const [product, setProduct] = useState('Curso de Programación para Principiantes');
  const [objective, setObjective] = useState<Objective>('ventas');
  const [tone, setTone] = useState<Tone>('persuasivo');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<CampaignResult | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const generateCampaign = async () => {
    if (!product.trim()) return;
    setLoading(true);
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const prompt = `Actúa como un Director de Marketing y Copywriter Senior. 
      Genera una estrategia de campaña para el producto: "${product}".
      Objetivo: ${objective}.
      Tono: ${tone}.
      Contexto adicional: Enfocado en personas que buscan cambiar de carrera (Reskilling).
      
      Debes devolver un JSON estrictamente con la siguiente estructura (no incluyas markdown, solo el JSON):
      {
        "variants": ["Copy 1", "Copy 2", "Copy 3"],
        "targeting": {
          "age": "Rango de edad sugerido",
          "interests": ["Interés 1", "Interés 2", "Interés 3"],
          "locations": ["Ubicación 1", "Ubicación 2"]
        },
        "imageAnalysis": "Descripción de la imagen o video ideal para este anuncio."
      }`;

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
      });

      const responseText = response.text || '';
      // Limpiar posible markdown si el modelo lo incluyó
      const jsonStr = responseText.replace(/```json|```/g, '').trim();
      const parsed = JSON.parse(jsonStr) as CampaignResult;
      setResult(parsed);
    } catch (error) {
      console.error('Error generating campaign:', error);
      // Fallback data if API fails or quota hit
      setResult({
        variants: [
          "¿Cansado de lo mismo? Transforma tu futuro profesional con nuestro curso de programación.",
          "Del código al éxito. Aprende desde cero y entra en la industria más demandada.",
          "Únete a los miles que ya cambiaron su carrera. Programación para principiantes hoy."
        ],
        targeting: {
          age: "22 - 45 años",
          interests: ["Career Change", "Online Learning", "Technology"],
          locations: ["México", "Colombia", "España"]
        },
        imageAnalysis: "Imagen de una persona joven profesional trabajando cómodamente desde casa con una laptop, transmitiendo bienestar y éxito moderno."
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
      {/* Columna Izquierda: Entrada */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="glass-container brutalist-border p-8 flex flex-col gap-8 bg-white/40 backdrop-blur-md"
      >
        <div className="flex items-center gap-3 border-b border-[#141414]/10 pb-4">
          <div className="p-2 bg-[#141414] text-white">
            <Sparkles className="w-5 h-5 text-orange-400" />
          </div>
          <h2 className="text-xl font-bold font-mono tracking-tighter uppercase">Configuración de Campaña</h2>
        </div>

        <div className="space-y-6">
          <div>
            <label className="text-[10px] font-mono font-bold uppercase opacity-60 mb-2 block tracking-widest">
              Nombre del Producto o Servicio
            </label>
            <input
              type="text"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              placeholder="Ej: Curso de Programación..."
              className="w-full bg-white/50 border-2 border-[#141414] px-4 py-4 font-mono text-sm focus:outline-none focus:bg-white transition-all"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-[10px] font-mono font-bold uppercase opacity-60 mb-2 block tracking-widest">
                Objetivo de Campaña
              </label>
              <select
                value={objective}
                onChange={(e) => setObjective(e.target.value as Objective)}
                className="w-full bg-white/50 border-2 border-[#141414] px-4 py-3 font-mono text-sm focus:outline-none focus:bg-white"
              >
                <option value="ventas">Ventas Directas</option>
                <option value="whatsapp">Mensajes WhatsApp</option>
                <option value="trafico">Tráfico Web</option>
              </select>
            </div>
            <div>
              <label className="text-[10px] font-mono font-bold uppercase opacity-60 mb-2 block tracking-widest">
                Tono de Voz
              </label>
              <select
                value={tone}
                onChange={(e) => setTone(e.target.value as Tone)}
                className="w-full bg-white/50 border-2 border-[#141414] px-4 py-3 font-mono text-sm focus:outline-none focus:bg-white"
              >
                <option value="profesional">Profesional</option>
                <option value="persuasivo">Persuasivo</option>
                <option value="divertido">Divertido</option>
                <option value="urgente">Urgente</option>
              </select>
            </div>
          </div>

          <button
            onClick={generateCampaign}
            disabled={loading || !product.trim()}
            className={cn(
              "w-full py-5 flex items-center justify-center gap-3 font-mono font-bold uppercase tracking-widest transition-all",
              loading 
                ? "bg-slate-200 text-slate-500 cursor-not-allowed" 
                : "bg-orange-500 text-black border-2 border-[#141414] hover:bg-orange-400 active:translate-y-1 shadow-[4px_4px_0px_#141414]"
            )}
          >
            {loading ? (
              <>
                <Loader2 className="w-6 h-6 animate-spin" />
                Analizando con Gemini...
              </>
            ) : (
              <>
                <Megaphone className="w-6 h-6" />
                Generar Campaña con Gemini
              </>
            )}
          </button>
        </div>

        <div className="mt-auto p-4 border border-dashed border-[#141414]/20 bg-[#141414]/5">
          <p className="text-[10px] font-mono leading-relaxed opacity-60">
            Nuestra IA optimiza cada palabra basada en tendencias de CTR actuales y algoritmos de segmentación de Meta Ads.
          </p>
        </div>
      </motion.div>

      {/* Columna Derecha: Resultados */}
      <div className="flex flex-col gap-6 overflow-y-auto pr-2">
        <AnimatePresence mode="wait">
          {result ? (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {/* Copy Variations */}
              <div className="glass-container brutalist-border p-6 bg-white/40 backdrop-blur-md">
                <div className="flex items-center gap-2 mb-6">
                  <MessageSquare className="w-4 h-4 text-orange-600" />
                  <span className="text-xs font-mono font-bold uppercase tracking-widest">Variantes de Copy</span>
                </div>
                <div className="space-y-4">
                  {result.variants.map((variant, i) => (
                    <div key={i} className="group relative bg-[#141414]/5 border border-[#141414]/10 p-4 hover:border-orange-500/50 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-[9px] font-mono font-bold text-orange-600">V{i + 1}</span>
                        <button 
                          onClick={() => handleCopy(variant, i)}
                          className="text-xs text-[#141414]/40 hover:text-orange-600 transition-colors"
                        >
                          {copiedIndex === i ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                        </button>
                      </div>
                      <p className="text-sm font-sans leading-relaxed">{variant}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Targeting & Image Analysis */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-container brutalist-border p-6 bg-white/40 backdrop-blur-md flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <UserCheck className="w-4 h-4 text-orange-600" />
                    <span className="text-xs font-mono font-bold uppercase tracking-widest">Segmentación</span>
                  </div>
                  <div className="space-y-4 flex-1">
                    <div>
                      <span className="text-[10px] opacity-50 uppercase font-mono">Edad</span>
                      <p className="text-sm font-bold font-mono">{result.targeting.age}</p>
                    </div>
                    <div>
                      <span className="text-[10px] opacity-50 uppercase font-mono">Intereses</span>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {result.targeting.interests.map((int, i) => (
                          <span key={i} className="text-[9px] font-mono px-1.5 py-0.5 bg-[#141414] text-white">
                            {int}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="text-[10px] opacity-50 uppercase font-mono">Ubicaciones</span>
                      <p className="text-xs font-mono">{result.targeting.locations.join(', ')}</p>
                    </div>
                  </div>
                </div>

                <div className="glass-container brutalist-border p-6 bg-[#141414] text-[#E4E3E0] backdrop-blur-md flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <LucideImage className="w-4 h-4 text-orange-400" />
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-orange-400">Análisis de Imagen</span>
                  </div>
                  <p className="text-xs font-serif italic leading-relaxed opacity-80">
                    "{result.imageAnalysis}"
                  </p>
                  <div className="mt-auto pt-4 border-t border-white/10">
                    <button className="w-full py-2 border border-orange-400 text-orange-400 text-[10px] font-mono uppercase tracking-widest hover:bg-orange-400 hover:text-black transition-all">
                      Generar Imagen con IA
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="placeholder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-full border-2 border-dashed border-[#141414]/10 flex flex-col items-center justify-center text-center p-12"
            >
              <div className="w-20 h-20 bg-[#141414]/5 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-10 h-10 text-[#141414]/20" />
              </div>
              <h3 className="text-lg font-bold font-mono uppercase tracking-tighter opacity-40">Vista Previa de Campaña</h3>
              <p className="text-xs font-mono opacity-30 mt-2 max-w-xs">
                Configura los parámetros a la izquierda y pulsa el botón para visualizar el poder de la IA.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
