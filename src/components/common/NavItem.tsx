import type { NavItemProps } from '../../types';

export function NavItem({ icon, label, active = false, onClick }: NavItemProps) {
    return (
        <button
            onClick={onClick}
            className={`flex flex-col items-center gap-0.5 border-none bg-transparent cursor-pointer transition-colors ${active ? 'text-primary' : 'text-gray-400'}`}
        >
            <div className="w-6 h-6">{icon}</div>
            <span className="text-[10px] font-medium">{label}</span>
        </button>
    );
}
