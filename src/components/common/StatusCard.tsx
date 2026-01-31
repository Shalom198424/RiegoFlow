import type { StatusCardProps } from '../../types';

export function StatusCard({ lot, quantity, date, status }: StatusCardProps) {
    const statusStyles: Record<string, string> = {
        'Aprobado': 'bg-green-100 text-green-700 dark:bg-primary/20 dark:text-primary',
        'Pendiente': 'bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-500',
        'Programado': 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-500',
    };

    const currentStyle = statusStyles[status] || statusStyles['Pendiente'];

    return (
        <div className="bg-white dark:bg-white/5 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-white/10 flex justify-between items-center transition-all hover:translate-x-1">
            <div>
                <h3 className="font-bold text-gray-800 dark:text-white">{lot}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">{quantity} m³ • {date}</p>
            </div>
            <span className={`text-[10px] font-bold px-3 py-1 rounded-full ${currentStyle}`}>
                {status}
            </span>
        </div>
    );
}
