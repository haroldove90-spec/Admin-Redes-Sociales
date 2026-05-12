import React from 'react';
import { DollarSign, MousePointer2, Target, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

interface StatCardProps {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: React.ElementType;
  isAccent?: boolean;
}

const stats: StatCardProps[] = [
  { label: 'Presupuesto Gastado', value: '12,500', change: '+12.4%', trend: 'up', icon: DollarSign },
  { label: 'Clics Totales', value: '45.2k', change: '-2.1%', trend: 'down', icon: MousePointer2 },
  { label: 'Conversiones', value: '1,230', change: 'EFFICIENT', trend: 'up', icon: Target },
  { label: 'ROAS Promedio', value: '4.2x', change: 'HIGH PERF', trend: 'up', icon: TrendingUp, isAccent: true },
];

export function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.05 }}
          className={`p-4 flex flex-col justify-between h-32 border border-[#141414] ${
            stat.isAccent ? 'bg-black text-white' : 'bg-white text-[#141414]'
          }`}
        >
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-serif italic uppercase opacity-60 leading-none">
              {stat.label}
            </span>
            <stat.icon className={`w-3 h-3 ${stat.isAccent ? 'text-orange-400' : 'text-[#141414]'}`} />
          </div>
          
          <div className="mt-auto">
            <div className="text-2xl font-mono font-bold tracking-tight">
              {stat.label.includes('Presupuesto') && <span className="text-sm opacity-50 mr-1">$</span>}
              {stat.value}
              {stat.label.includes('Presupuesto') && <span className="text-xs opacity-50 ml-1"> MXN</span>}
            </div>
            <div className={`text-[9px] font-mono font-bold uppercase mt-1 ${
              stat.isAccent 
                ? 'text-orange-400' 
                : stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
            }`}>
              {stat.change} {stat.trend === 'up' && stat.change.includes('%') ? 'vs prev' : ''}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
