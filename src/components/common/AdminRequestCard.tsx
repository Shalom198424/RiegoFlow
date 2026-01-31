import { CheckCircle2, Clock } from 'lucide-react';
import type { AdminRequestCardProps } from '../../types';

export function AdminRequestCard({ lot, producer, quantity }: AdminRequestCardProps) {
    return (
        <div className="bg-white dark:bg-white/5 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-white/10 space-y-3">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="font-bold text-gray-800 dark:text-white">{lot}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{producer}</p>
                </div>
                <span className="font-bold text-primary">{quantity} m³</span>
            </div>
            <div className="flex gap-2">
                <button className="flex-1 bg-green-50 dark:bg-primary/10 text-green-700 dark:text-primary text-sm font-bold py-2 rounded-lg flex items-center justify-center gap-1 border-none cursor-pointer hover:opacity-80">
                    <CheckCircle2 className="w-4 h-4" /> Aprobar
                </button>
                <button className="flex-1 bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-500 text-sm font-bold py-2 rounded-lg flex items-center justify-center gap-1 border-none cursor-pointer hover:opacity-80">
                    <Clock className="w-4 h-4" /> Reprogramar
                </button>
            </div>
        </div>
    );
}
