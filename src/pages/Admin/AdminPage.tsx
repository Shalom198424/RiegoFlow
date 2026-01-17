import { useState } from 'react';
import {
    CheckCircle,
    Droplets,
    Calendar,
    TrendingUp,
    Bell,
    Map as MapIcon,
    Send
} from 'lucide-react';
import { cn } from '../../utils/cn';

export const AdminPage = () => {
    const [toggles, setToggles] = useState<{ [key: string]: boolean }>({
        '8291': true,
        '8295': true
    });

    const toggleRequest = (id: string) => {
        setToggles(prev => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <div className="max-w-lg mx-auto space-y-8 pb-20 animate-in fade-in duration-700">
            {/* Outlook Section */}
            <section className="space-y-4">
                <div className="px-1">
                    <h2 className="text-[#131614] dark:text-white text-2xl font-black leading-tight tracking-tight">Pronóstico para Mañana</h2>
                    <p className="text-[#6b8074] dark:text-gray-500 text-sm font-medium">Demanda Proyectada vs. Disponibilidad</p>
                </div>

                <div className="bg-white dark:bg-[#080808] rounded-[2.5rem] border border-slate-100 dark:border-white/5 p-7 shadow-sm">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <div className="flex items-baseline gap-2">
                                <span className="text-[#19b366] text-4xl font-black tracking-tighter">92%</span>
                                <span className="text-sm font-black text-slate-400 dark:text-gray-500 uppercase tracking-widest">Carga Máxima</span>
                            </div>
                            <div className="flex items-center gap-1.5 mt-2">
                                <TrendingUp size={16} className="text-[#19b366]" strokeWidth={3} />
                                <span className="text-xs font-black text-[#19b366]">+5% VS AYER</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-end gap-2.5">
                            <div className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-[#19b366] shadow-[0_0_8px_rgba(25,179,102,0.6)]" />
                                <span className="text-[10px] font-black text-slate-400 dark:text-gray-500 uppercase tracking-widest leading-none">DEMANDA</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-[#3b82f6] shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                                <span className="text-[10px] font-black text-slate-400 dark:text-gray-500 uppercase tracking-widest leading-none">OFERTA</span>
                            </div>
                        </div>
                    </div>

                    {/* High-End Chart */}
                    <div className="h-44 flex items-end justify-between px-2 gap-4 relative">
                        {/* Grid Lines */}
                        <div className="absolute inset-0 flex flex-col justify-between py-1 opacity-5 pointer-events-none">
                            <div className="border-t border-slate-400 w-full" />
                            <div className="border-t border-slate-400 w-full" />
                            <div className="border-t border-slate-400 w-full" />
                        </div>

                        {[
                            { time: '06:00', supply: 80, demand: 50 },
                            { time: '12:00', supply: 70, demand: 65 },
                            { time: '18:00', supply: 85, demand: 40 },
                            { time: '00:00', supply: 85, demand: 60 }
                        ].map((d, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center gap-4 h-full justify-end">
                                <div className="w-full flex items-end gap-1.5 h-full">
                                    {/* Supply Bar */}
                                    <div className="flex-1 bg-[#3b82f6] rounded-t-lg transition-all shadow-[0_-4px_12px_rgba(59,130,246,0.3)]" style={{ height: `${d.supply}%` }} />
                                    {/* Demand Bar */}
                                    <div className="flex-1 bg-[#19b366] rounded-t-lg transition-all shadow-[0_-4px_12px_rgba(25,179,102,0.3)]" style={{ height: `${d.demand}%` }} />
                                </div>
                                <span className="text-[11px] font-black text-slate-400 dark:text-gray-500 tracking-tighter">{d.time}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pending Requests */}
            <section className="space-y-5">
                <div className="flex justify-between items-center px-1">
                    <h3 className="text-[#131614] dark:text-white text-xl font-black tracking-tight">Solicitudes Pendientes</h3>
                    <div className="px-3 py-1.5 bg-[#19b366]/10 border border-[#19b366]/20 rounded-full">
                        <span className="text-[10px] font-black text-[#19b366] uppercase tracking-widest">8 Activas</span>
                    </div>
                </div>

                <div className="space-y-6 pb-20">
                    {/* Card 1: High Priority */}
                    <div className="bg-white dark:bg-[#080808] rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-none transition-all group">
                        {/* Status Header */}
                        <div className="relative h-48 w-full bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1000&auto=format&fit=crop")' }}>
                            <div className="absolute inset-0 bg-black/20" />
                            <div className="absolute top-5 left-5 flex gap-2">
                                <div className="px-3 py-1.5 bg-[#ef4444] text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">PRIORIDAD ALTA</div>
                                <div className="px-3 py-1.5 bg-black/40 backdrop-blur-md text-white rounded-full text-[10px] font-black tracking-widest">#8291</div>
                            </div>
                        </div>

                        <div className="p-7 space-y-6">
                            <div>
                                <h4 className="text-[#131614] dark:text-white text-xl font-black leading-tight tracking-tight">Green Valley Estates • Plot B</h4>
                                <div className="space-y-2 mt-4">
                                    <div className="flex items-center gap-3">
                                        <Droplets size={18} className="text-[#19b366]" />
                                        <p className="text-sm font-bold text-slate-500 dark:text-gray-400">450m³ Solicitados</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Calendar size={18} className="text-[#3b82f6]" />
                                        <p className="text-sm font-bold text-slate-500 dark:text-gray-400">04:00 AM - 08:00 AM (Mañana)</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-5 bg-slate-50 dark:bg-white/5 rounded-3xl border border-slate-100 dark:border-white/5 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Bell size={20} className="text-[#19b366]" strokeWidth={3} />
                                    <span className="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wide">Notificar Productor</span>
                                </div>
                                <button
                                    onClick={() => toggleRequest('8291')}
                                    className={cn(
                                        "relative inline-flex h-8 w-14 items-center rounded-full transition-all duration-300",
                                        toggles['8291'] ? "bg-[#19b366]" : "bg-slate-300 dark:bg-slate-700"
                                    )}
                                >
                                    <div className={cn(
                                        "absolute left-1.5 h-5 w-5 rounded-full bg-white flex items-center justify-center transition-all duration-300",
                                        toggles['8291'] ? "translate-x-6" : "translate-x-0"
                                    )}>
                                        {toggles['8291'] && <CheckCircle size={12} className="text-[#19b366]" strokeWidth={4} />}
                                    </div>
                                </button>
                            </div>

                            <div className="flex gap-3">
                                <button className="flex-[4] h-16 bg-[#4ade80] text-black rounded-2xl font-black text-sm flex items-center justify-center gap-3 shadow-lg shadow-[#4ade80]/20 hover:bg-[#22c55e] transition-all active:scale-[0.98]">
                                    <Calendar size={20} strokeWidth={3} />
                                    Aprobar y Programar
                                </button>
                                <button className="flex-1 h-16 bg-slate-900 dark:bg-black text-white rounded-2xl flex items-center justify-center border border-white/10 hover:bg-slate-800 transition-all active:scale-[0.95]">
                                    <MapIcon size={24} strokeWidth={2.5} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Scheduled */}
                    <div className="bg-[#19b366]/5 dark:bg-[#050505] rounded-[2.5rem] overflow-hidden border border-[#19b366]/20 dark:border-[#19b366]/10 shadow-sm relative">
                        <div className="relative h-44 w-full bg-cover bg-center grayscale-[0.3]" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=1000&auto=format&fit=crop")' }}>
                            <div className="absolute inset-0 bg-black/30" />
                            <div className="absolute top-5 left-5 flex gap-2">
                                <div className="px-3 py-1.5 bg-white/10 backdrop-blur-md text-white/80 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">ESTÁNDAR</div>
                                <div className="px-3 py-1.5 bg-black/40 backdrop-blur-md text-white rounded-full text-[10px] font-black tracking-widest">#8304</div>
                            </div>
                            <div className="absolute top-5 right-5">
                                <div className="flex items-center gap-2 px-4 py-2 bg-[#4ade80] text-black rounded-full text-[10px] font-black tracking-widest shadow-lg">
                                    <CheckCircle size={14} strokeWidth={3} />
                                    PROGRAMADO Y NOTIFICADO
                                </div>
                            </div>
                        </div>

                        <div className="p-7 space-y-5">
                            <h4 className="text-[#131614] dark:text-white text-xl font-black tracking-tight leading-tight">Sunset Vineyard • North Block</h4>

                            <div className="p-4 bg-[#19b366]/10 border border-[#19b366]/20 rounded-2xl flex items-center gap-3">
                                <Send size={16} className="text-[#19b366]" strokeWidth={3} />
                                <span className="text-xs font-bold text-[#19b366] leading-none uppercase tracking-wide">Alerta enviada correctamente vía SMS y Push</span>
                            </div>

                            <div className="flex gap-3 pt-2">
                                <button className="flex-1 h-12 border-2 border-[#19b366] text-[#19b366] rounded-xl text-xs font-black uppercase tracking-widest hover:bg-[#19b366]/5 transition-all">
                                    Ver Comprobante
                                </button>
                                <button className="flex-1 h-12 bg-slate-900/10 dark:bg-white/5 text-slate-500 dark:text-gray-400 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-slate-900/20 dark:hover:bg-white/10 transition-all">
                                    Modificar Turno
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Recurring */}
                    <div className="bg-white dark:bg-[#080808] rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-white/5 shadow-xl transition-all group">
                        <div className="relative h-48 w-full bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop")' }}>
                            <div className="absolute inset-0 bg-black/20" />
                            <div className="absolute top-5 left-5 flex gap-2">
                                <div className="px-3 py-1.5 bg-blue-500 text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">RECURRENTE</div>
                                <div className="px-3 py-1.5 bg-black/40 backdrop-blur-md text-white rounded-full text-[10px] font-black tracking-widest">#8295</div>
                            </div>
                        </div>

                        <div className="p-7 space-y-6">
                            <div>
                                <h4 className="text-[#131614] dark:text-white text-xl font-black leading-tight tracking-tight">Wheat Ridge • Zona 4</h4>
                                <div className="space-y-2 mt-4">
                                    <div className="flex items-center gap-3">
                                        <Droplets size={18} className="text-[#19b366]" />
                                        <p className="text-sm font-bold text-slate-500 dark:text-gray-400">1.200m³ Solicitados</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Calendar size={18} className="text-[#3b82f6]" />
                                        <p className="text-sm font-bold text-slate-500 dark:text-gray-400">08:00 PM - 02:00 AM (Día Siguiente)</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-5 bg-slate-50 dark:bg-white/5 rounded-3xl border border-slate-100 dark:border-white/5 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Bell size={20} className="text-[#19b366]" strokeWidth={3} />
                                    <span className="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wide">Notificar Productor</span>
                                </div>
                                <button
                                    onClick={() => toggleRequest('8295')}
                                    className={cn(
                                        "relative inline-flex h-8 w-14 items-center rounded-full transition-all duration-300",
                                        toggles['8295'] ? "bg-[#19b366]" : "bg-slate-300 dark:bg-slate-700"
                                    )}
                                >
                                    <div className={cn(
                                        "absolute left-1.5 h-5 w-5 rounded-full bg-white flex items-center justify-center transition-all duration-300",
                                        toggles['8295'] ? "translate-x-6" : "translate-x-0"
                                    )}>
                                        {toggles['8295'] && <CheckCircle size={12} className="text-[#19b366]" strokeWidth={4} />}
                                    </div>
                                </button>
                            </div>

                            <div className="flex gap-3">
                                <button className="flex-[4] h-16 bg-[#4ade80] text-black rounded-2xl font-black text-sm flex items-center justify-center gap-3 shadow-lg shadow-[#4ade80]/20 hover:bg-[#22c55e] transition-all active:scale-[0.98]">
                                    <Calendar size={20} strokeWidth={3} />
                                    Aprobar y Programar
                                </button>
                                <button className="flex-1 h-16 bg-slate-900 dark:bg-black text-white rounded-2xl flex items-center justify-center border border-white/10 hover:bg-slate-800 transition-all active:scale-[0.95]">
                                    <MapIcon size={24} strokeWidth={2.5} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
