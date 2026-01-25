import React, { useState } from 'react';
import {
    ClipboardCheck,
    Plus,
    Trash2,
    Info,
    CheckCircle2,
    AlertCircle,
    ArrowRight
} from 'lucide-react';
import { cn } from '../../utils/cn';

interface CropEntry {
    lote: string;
    superficieTotal: string;
    superficieParcial: string;
    cultivo: string;
    desde: string;
    hasta: string;
}

export const DDJJCPage = () => {
    const [period] = useState("2026/2027");
    const [crops, setCrops] = useState<CropEntry[]>([
        { lote: "1", superficieTotal: "", superficieParcial: "", cultivo: "", desde: "", hasta: "" }
    ]);
    const [step] = useState(1);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const addCrop = () => {
        setCrops([...crops, { lote: (crops.length + 1).toString(), superficieTotal: "", superficieParcial: "", cultivo: "", desde: "", hasta: "" }]);
    };

    const removeCrop = (index: number) => {
        if (crops.length > 1) {
            setCrops(crops.filter((_, i) => i !== index));
        }
    };

    const updateCrop = (index: number, field: keyof CropEntry, value: string) => {
        const newCrops = [...crops];
        newCrops[index][field] = value;
        setCrops(newCrops);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Simulación de envío "en tiempo real"
        const submission = {
            id: Math.random().toString(36).substr(2, 9).toUpperCase(),
            producer: localStorage.getItem('userName') || "Juan Pérez",
            period,
            crops: crops.filter(c => c.cultivo && c.superficieTotal),
            timestamp: new Date().toISOString(),
            status: 'PENDING',
            plot: 'A-212',
            canal: 'TERCIARIO 3/VII'
        };

        const existingSubmissions = JSON.parse(localStorage.getItem('ddjjc_submissions') || '[]');
        localStorage.setItem('ddjjc_submissions', JSON.stringify([submission, ...existingSubmissions]));

        // Disparar evento para que otras pestañas/componentes reaccionen
        window.dispatchEvent(new Event('storage'));

        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className="max-w-2xl mx-auto py-12 px-6 text-center animate-in fade-in zoom-in duration-500">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="text-primary w-12 h-12" />
                </div>
                <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4">¡Declaración Enviada!</h2>
                <p className="text-slate-500 dark:text-gray-400 text-lg mb-8">
                    Tu Declaración Jurada de Cultivos para el periodo {period} ha sido registrada correctamente y está en proceso de revisión.
                </p>
                <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-8 h-14 bg-primary text-white font-bold rounded-2xl shadow-lg shadow-primary/30 hover:scale-105 transition-transform"
                >
                    Volver a mis declaraciones
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto pb-20 space-y-8 animate-in fade-in duration-700">
            {/* Header / Intro */}
            <div className="px-1 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-primary/10 rounded-lg">
                            <ClipboardCheck className="text-primary w-6 h-6" />
                        </div>
                        <span className="text-xs font-black text-primary uppercase tracking-[0.2em]">Gestión de Cultivos</span>
                    </div>
                    <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Declaración Jurada de Cultivos</h1>
                    <p className="text-slate-500 dark:text-gray-400 font-medium mt-1">Periodo Agrícola {period}</p>
                </div>

                <div className="flex items-center gap-4 bg-white dark:bg-white/5 p-4 rounded-2xl border border-slate-100 dark:border-white/10 shadow-sm">
                    <Info className="text-primary w-5 h-5 flex-shrink-0" />
                    <p className="text-xs font-bold text-slate-600 dark:text-gray-400 leading-relaxed uppercase tracking-wider">
                        Periodo de declaración abierto hasta el <span className="text-primary">31 de Marzo</span>
                    </p>
                </div>
            </div>

            {/* Stepper (Visual only) */}
            <div className="flex items-center justify-between px-2 max-w-md mx-auto">
                {[1, 2, 3].map((s) => (
                    <div key={s} className="flex items-center gap-2">
                        <div className={cn(
                            "w-10 h-10 rounded-full flex items-center justify-center font-black transition-all",
                            step >= s ? "bg-primary text-white shadow-lg shadow-primary/20" : "bg-slate-100 dark:bg-white/10 text-slate-400"
                        )}>
                            {s}
                        </div>
                        {s < 3 && <div className={cn("w-12 h-1 bg-slate-100 dark:bg-white/10 rounded-full", step > s && "bg-primary/50")} />}
                    </div>
                ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Section 1: Plot Info */}
                <div className="glass-effect rounded-[2.5rem] border border-white/20 dark:border-white/10 p-8 shadow-xl">
                    <h3 className="text-xl font-black text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                        <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm">1</span>
                        Información de la Parcela
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-black text-slate-400 dark:text-gray-500 uppercase tracking-widest px-1">Zona / Sección</label>
                            <div className="h-14 px-5 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-2xl flex items-center font-bold text-slate-700 dark:text-gray-300">
                                Zona 3 - Sección 2
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-black text-slate-400 dark:text-gray-500 uppercase tracking-widest px-1">Canal de Servicio</label>
                            <div className="h-14 px-5 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-2xl flex items-center font-bold text-[#19b366]">
                                TERCIARIO 3/VII
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-black text-slate-400 dark:text-gray-500 uppercase tracking-widest px-1">Parcela</label>
                            <div className="h-14 px-5 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-2xl flex items-center font-bold text-slate-700 dark:text-gray-300">
                                A-212
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-black text-slate-400 dark:text-gray-500 uppercase tracking-widest px-1">Toma</label>
                            <div className="h-14 px-5 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-2xl flex items-center font-bold text-slate-700 dark:text-gray-300">
                                XX2 60
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-black text-slate-400 dark:text-gray-500 uppercase tracking-widest px-1">Superficie Regable</label>
                            <div className="h-14 px-5 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-2xl flex items-center font-bold text-primary">
                                22,91 ha
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-black text-slate-400 dark:text-gray-500 uppercase tracking-widest px-1">Superficie Catastral</label>
                            <div className="h-14 px-5 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-2xl flex items-center font-bold text-slate-700 dark:text-gray-300">
                                24,90 ha
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 2: Crop List */}
                <div className="glass-effect rounded-[2.5rem] border border-white/20 dark:border-white/10 p-8 shadow-xl">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm">2</span>
                            Detalle de Cultivos
                        </h3>
                        <button
                            type="button"
                            onClick={addCrop}
                            className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary font-black text-xs uppercase tracking-widest rounded-xl hover:bg-primary/20 transition-colors"
                        >
                            <Plus size={16} strokeWidth={3} />
                            Agregar Lote
                        </button>
                    </div>

                    <div className="space-y-6">
                        {crops.map((crop, index) => (
                            <div key={index} className="relative p-6 bg-slate-50/50 dark:bg-white/5 rounded-3xl border border-slate-100 dark:border-white/5 group animate-in slide-in-from-right-4 duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                                    <div className="md:col-span-1 space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Lote nº</label>
                                        <input
                                            type="text"
                                            value={crop.lote}
                                            onChange={(e) => updateCrop(index, 'lote', e.target.value)}
                                            className="w-full h-12 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 font-bold focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                                        />
                                    </div>
                                    <div className="md:col-span-2 space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Cultivo / Especie</label>
                                        <select
                                            value={crop.cultivo}
                                            onChange={(e) => updateCrop(index, 'cultivo', e.target.value)}
                                            className="w-full h-12 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 font-bold focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                                        >
                                            <option value="">Seleccionar...</option>
                                            <option value="ALFALFA">Alfalfa</option>
                                            <option value="AGROPIRO">Agropiro</option>
                                            <option value="MANZANA">Manzana</option>
                                            <option value="PERA">Pera</option>
                                            <option value="CEBOLLA">Cebolla</option>
                                        </select>
                                    </div>
                                    <div className="md:col-span-1 space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Superficie (ha)</label>
                                        <input
                                            type="number"
                                            step="0.01"
                                            placeholder="0.00"
                                            value={crop.superficieTotal}
                                            onChange={(e) => updateCrop(index, 'superficieTotal', e.target.value)}
                                            className="w-full h-12 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 font-bold focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                                        />
                                    </div>
                                    <div className="md:col-span-1 space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Desde</label>
                                        <input
                                            type="date"
                                            value={crop.desde}
                                            onChange={(e) => updateCrop(index, 'desde', e.target.value)}
                                            className="w-full h-12 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 font-bold text-xs focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                                        />
                                    </div>
                                    <div className="md:col-span-1 space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Hasta</label>
                                        <input
                                            type="date"
                                            value={crop.hasta}
                                            onChange={(e) => updateCrop(index, 'hasta', e.target.value)}
                                            className="w-full h-12 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 font-bold text-xs focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                                        />
                                    </div>
                                </div>
                                {crops.length > 1 && (
                                    <button
                                        type="button"
                                        onClick={() => removeCrop(index)}
                                        className="absolute -top-3 -right-3 w-8 h-8 bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 rounded-full flex items-center justify-center text-red-500 shadow-md hover:bg-red-50 transition-colors"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 3: Animals & Confirm */}
                <div className="glass-effect rounded-[2.5rem] border border-white/20 dark:border-white/10 p-8 shadow-xl">
                    <h3 className="text-xl font-black text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                        <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm">3</span>
                        Compromiso y Envío
                    </h3>

                    <div className="bg-slate-50 dark:bg-white/5 rounded-3xl p-6 border border-slate-100 dark:border-white/5 mb-8">
                        <div className="flex gap-4">
                            <AlertCircle className="text-primary flex-shrink-0" />
                            <p className="text-sm font-bold text-slate-600 dark:text-gray-400 leading-relaxed">
                                Me comprometo a informar a la Gerencia Técnica si durante el transcurso de dicho periodo agrícola realizo modificaciones en cuanto a superficie y especies cultivadas.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <label className="flex items-center gap-4 cursor-pointer group">
                            <div className="relative">
                                <input type="checkbox" required className="peer sr-only" />
                                <div className="w-6 h-6 border-2 border-slate-200 dark:border-white/20 rounded-lg group-hover:border-primary transition-colors peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center">
                                    <div className="w-2 h-3 border-r-2 border-b-2 border-white rotate-45 mb-0.5" />
                                </div>
                            </div>
                            <span className="text-sm font-black text-slate-700 dark:text-gray-300 uppercase tracking-wide">Confirmo que los datos son veraces</span>
                        </label>

                        <button
                            type="submit"
                            className="w-full md:w-auto px-10 h-16 bg-primary text-white font-black text-sm uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-primary/30 flex items-center justify-center gap-4 hover:scale-[1.02] active:scale-[0.98] transition-all"
                        >
                            Enviar Declaración
                            <ArrowRight size={20} strokeWidth={3} />
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};
