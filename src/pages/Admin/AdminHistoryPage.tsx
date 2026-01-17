import { useState } from 'react';
import { cn } from '../../utils/cn';

export const AdminHistoryPage = () => {
    const [historyView, setHistoryView] = useState<'dia' | 'mes' | 'anio'>('dia');

    const historyData = {
        dia: [
            { label: 'Lun', value: 45 },
            { label: 'Mar', value: 52 },
            { label: 'Mie', value: 38 },
            { label: 'Jue', value: 65 },
            { label: 'Vie', value: 48 },
            { label: 'Sab', value: 30 },
            { label: 'Dom', value: 25 }
        ],
        mes: [
            { label: 'Ene', value: 75 },
            { label: 'Feb', value: 62 },
            { label: 'Mar', value: 88 },
            { label: 'Abr', value: 45 },
            { label: 'May', value: 30 },
            { label: 'Jun', value: 25 }
        ],
        anio: [
            { label: '2021', value: 450 },
            { label: '2022', value: 520 },
            { label: '2023', value: 610 },
            { label: '2024', value: 480 },
            { label: '2025', value: 550 }
        ]
    };

    return (
        <div className="max-w-lg mx-auto space-y-8 pb-20 animate-in fade-in duration-700">
            {/* Consumption History section */}
            <section className="space-y-4">
                <div className="flex justify-between items-center px-1">
                    <div className="space-y-0.5">
                        <h2 className="text-[#131614] dark:text-white text-2xl font-black leading-tight tracking-tight">Historial de Consumo</h2>
                        <p className="text-[#6b8074] dark:text-gray-500 text-sm font-medium">Volumen total de agua solicitada por periodo</p>
                    </div>
                </div>

                <div className="bg-white dark:bg-[#080808] rounded-[2.5rem] border border-slate-100 dark:border-white/5 p-7 shadow-sm space-y-8">
                    {/* View Selectors */}
                    <div className="flex p-1.5 bg-slate-100 dark:bg-white/5 rounded-2xl gap-1">
                        {(['dia', 'mes', 'anio'] as const).map((v) => (
                            <button
                                key={v}
                                onClick={() => setHistoryView(v)}
                                className={cn(
                                    "flex-1 py-3.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all",
                                    historyView === v
                                        ? "bg-white dark:bg-white/10 text-slate-900 dark:text-white shadow-sm"
                                        : "text-slate-400 dark:text-gray-600 hover:text-slate-600 dark:hover:text-gray-400"
                                )}
                            >
                                {v === 'dia' ? 'Día' : v === 'mes' ? 'Mes' : 'Año'}
                            </button>
                        ))}
                    </div>

                    {/* Chart Container */}
                    <div className="space-y-6">
                        <div className="flex items-baseline gap-2 px-1">
                            <span className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter">
                                {historyView === 'dia' ? '303' : historyView === 'mes' ? '325' : '2,610'}
                            </span>
                            <span className="text-xs font-black text-slate-400 dark:text-gray-500 uppercase tracking-widest leading-none">Total m³</span>
                        </div>

                        <div className="h-48 flex items-end justify-between px-1 gap-2.5">
                            {historyData[historyView].map((d, i) => (
                                <div key={i} className="flex-1 flex flex-col items-center gap-4 h-full group">
                                    <div className="w-full flex items-end justify-center h-full relative">
                                        {/* Bar */}
                                        <div
                                            className={cn(
                                                "w-full max-w-[24px] rounded-t-lg transition-all duration-500 relative",
                                                "bg-gradient-to-t from-primary/20 to-primary",
                                                "group-hover:primary-shadow group-hover:scale-x-110"
                                            )}
                                            style={{
                                                height: `${(d.value / Math.max(...historyData[historyView].map(x => x.value))) * 100}%`
                                            }}
                                        >
                                            {/* Tooltip on hover */}
                                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-2 py-1 rounded-md text-[9px] font-black opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                                                {d.value}m³
                                            </div>
                                        </div>
                                    </div>
                                    <span className="text-[10px] font-black text-slate-400 dark:text-gray-600 uppercase tracking-tighter">{d.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
