import { Droplets, MapPin } from 'lucide-react';

export const AdminNetworkPage = () => {
    return (
        <div className="max-w-lg mx-auto space-y-8 animate-in fade-in duration-700">
            <div className="px-1">
                <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Gestión de Red Canal</h1>
                <p className="text-slate-500 dark:text-gray-500 font-medium">Monitoreo y control de infraestructura hídrica</p>
            </div>

            <div className="bg-white dark:bg-[#080808] rounded-[2.5rem] border border-slate-100 dark:border-white/5 p-8 shadow-sm space-y-8">
                <div className="flex items-center gap-6 p-6 bg-slate-50 dark:bg-white/5 rounded-3xl border border-slate-100 dark:border-white/5">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                        <Droplets className="text-primary w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-[10px] font-black text-slate-400 dark:text-gray-500 uppercase tracking-widest">ESTADO GENERAL</p>
                        <p className="text-xl font-bold text-slate-900 dark:text-white">Operación Normal</p>
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="text-sm font-black text-slate-400 dark:text-gray-500 uppercase tracking-widest px-2">Puntos de Control</h3>
                    <div className="space-y-3">
                        <ControlPoint name="Bocatoma Principal" status="1.2m³/s" health="good" />
                        <ControlPoint name="Canal Matriz Sur" status="0.8m³/s" health="good" />
                        <ControlPoint name="Compuerta Lote 14" status="Cerrada" health="idle" />
                    </div>
                </div>
            </div>
        </div>
    );
};

const ControlPoint = ({ name, status, health }: { name: string, status: string, health: 'good' | 'warning' | 'idle' }) => (
    <div className="flex items-center justify-between p-5 bg-white dark:bg-black rounded-2xl border border-slate-100 dark:border-white/5">
        <div className="flex items-center gap-4">
            <MapPin size={20} className="text-slate-400" />
            <span className="font-bold text-slate-800 dark:text-white text-sm">{name}</span>
        </div>
        <div className="flex items-center gap-3">
            <span className="text-xs font-black text-slate-500 dark:text-gray-500">{status}</span>
            <div className={cn(
                "w-2 h-2 rounded-full",
                health === 'good' ? "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" :
                    health === 'warning' ? "bg-yellow-500" : "bg-slate-300 dark:bg-slate-700"
            )} />
        </div>
    </div>
);

import { cn } from '../../utils/cn';
