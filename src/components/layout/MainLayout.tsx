import React from 'react';
import { Droplet, History, TrendingUp, Sun, Moon, LogOut } from 'lucide-react';
import { NavItem } from '../common/NavItem';
import type { UserRole } from '../../types';

interface MainLayoutProps {
    children: React.ReactNode;
    userRole: UserRole;
    isDarkMode: boolean;
    onToggleDarkMode: () => void;
    onLogout: () => void;
}

export function MainLayout({ children, userRole, isDarkMode, onToggleDarkMode, onLogout }: MainLayoutProps) {
    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark font-manrope transition-colors duration-300">
            <header className="bg-primary text-white p-4 shadow-lg flex justify-between items-center sticky top-0 z-50">
                <div className="flex items-center gap-2">
                    <Droplet className="w-6 h-6" />
                    <h1 className="text-xl font-bold tracking-tight">RiegoFlow</h1>
                    <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full uppercase ml-1">
                        {userRole}
                    </span>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={onToggleDarkMode}
                        className="p-2 rounded-full hover:bg-white/10 transition-colors border-none bg-transparent cursor-pointer text-white flex items-center justify-center"
                    >
                        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button
                        onClick={onLogout}
                        className="p-2 rounded-full hover:bg-white/10 transition-colors border-none bg-transparent cursor-pointer text-white flex items-center justify-center"
                    >
                        <LogOut size={20} />
                    </button>
                </div>
            </header>

            <main className="max-w-md mx-auto p-4 pb-24">
                {children}
            </main>

            <nav className="fixed bottom-0 left-0 right-0 glass-card dark:bg-background-dark/90 border-t border-gray-200 dark:border-white/10 p-3 flex justify-around items-center md:max-w-md md:mx-auto z-50">
                <NavItem
                    icon={<Droplet />}
                    label={userRole === 'producer' ? "Solicitar" : "Panel"}
                    active
                />
                <NavItem
                    icon={<History />}
                    label="Historial"
                />
                <NavItem
                    icon={<TrendingUp />}
                    label="Reportes"
                />
            </nav>
        </div>
    );
}
