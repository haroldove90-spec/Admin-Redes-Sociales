import React, { useState } from 'react';
import { Sparkles, Send, Loader2, Copy, Check } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { motion, AnimatePresence } from 'motion/react';

export function AIGenerator() {
  const [product, setProduct] = useState('');
  const [loading, setLoading] = useState(false);
  const [copy, setCopy] = useState('');
  const [copied, setCopied] = useState(false);

  const generateCopy = async () => {
    if (!product.trim()) return;
    
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const prompt = `Eres un experto copywriter de marketing. Crea un copy atractivo para un anuncio de Facebook e Instagram para el siguiente producto o servicio: "${product}". El copy debe incluir un gancho emocional, beneficios claros y una llamada a la acción irresistible. Responde solo con el texto del anuncio.`;
      
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt,
      });
      
      setCopy(response.text || '');
    } catch (error) {
      console.error('Error generating copy:', error);
      setCopy('Lo siento, hubo un error al generar el copy. Por favor intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(copy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#141414] border border-[#141414] text-white p-4 flex flex-col h-full overflow-hidden relative group">
      <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
        <Sparkles className="w-16 h-16 text-orange-400" />
      </div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="text-[10px] font-mono text-orange-400 mb-4 tracking-widest uppercase underline decoration-orange-400/30">
          IA Copy Engine v4.0
        </div>

        <div className="space-y-4 flex-1 flex flex-col">
          <div>
            <label className="text-[9px] font-mono opacity-60 uppercase mb-1 block">Producto Base</label>
            <div className="flex gap-1">
              <input
                type="text"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                placeholder="Ej: Tenis Runner Ultra X"
                className="flex-1 text-xs px-3 py-2 bg-white/10 border border-white/20 rounded-sm focus:outline-none focus:border-orange-500/50 transition-all font-mono"
              />
              <button
                onClick={generateCopy}
                disabled={loading || !product.trim()}
                className="px-3 py-2 bg-orange-500 text-black rounded-sm hover:bg-orange-400 disabled:opacity-50 transition-all"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="flex-1 flex flex-col min-h-0">
            <label className="text-[9px] font-mono opacity-60 uppercase mb-1 block">IA Sugerencia Copy</label>
            <div className="flex-1 bg-white/5 border border-dashed border-white/30 p-3 overflow-y-auto font-serif italic text-xs leading-relaxed relative scrollbar-hide">
              <AnimatePresence mode="wait">
                {copy ? (
                  <motion.div
                    key="copy"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <p className="whitespace-pre-wrap">{copy}</p>
                    <button
                      onClick={handleCopy}
                      className="absolute top-2 right-2 p-1.5 bg-white/10 hover:bg-white/20 rounded transition-colors"
                    >
                      {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 opacity-60" />}
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    className="h-full flex items-center justify-center text-center px-4"
                  >
                    Ingresa un producto para ver la magia de la IA...
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <button 
            disabled={!copy || loading}
            className="w-full py-2 bg-white/10 hover:bg-white/20 border border-white/10 text-[10px] font-bold font-mono uppercase tracking-widest disabled:opacity-20 transition-all"
          >
            Refinar con IA
          </button>
        </div>
      </div>
    </div>
  );
}
