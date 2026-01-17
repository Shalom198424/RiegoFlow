import { Shield, Bell, Database } from 'lucide-react';

export const AdminSettingsPage = () => {
    return (
        <div className="max-w-lg mx-auto space-y-8 animate-in fade-in duration-700">
            <div className="px-1">
                <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Configuración</h1>
                <p className="text-slate-500 dark:text-gray-500 font-medium">Preferencias administrativas y del sistema</p>
            </div>

            <div className="space-y-4">
                <SettingGroup title="Sistema">
                    <SettingItem icon={Shield} label="Seguridad y Accesos" description="Gestionar roles y permisos" />
                    <SettingItem icon={Database} label="Base de Datos" description="Sincronización y respaldos" />
                </SettingGroup>

                <SettingGroup title="Notificaciones">
                    <SettingItem icon={Bell} label="Alertas de Sistema" description="Configuración de avisos automáticos" />
                </SettingGroup>
            </div>
        </div>
    );
};

const SettingGroup = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="space-y-3">
        <h3 className="text-xs font-black text-slate-400 dark:text-gray-500 uppercase tracking-widest px-4">{title}</h3>
        <div className="bg-white dark:bg-[#080808] rounded-[2.5rem] border border-slate-100 dark:border-white/5 p-4 shadow-sm space-y-2">
            {children}
        </div>
    </div>
);

const SettingItem = ({ icon: Icon, label, description }: { icon: any, label: string, description: string }) => (
    <button className="w-full flex items-center gap-4 p-4 hover:bg-slate-50 dark:hover:bg-white/5 rounded-3xl transition-all text-left">
        <div className="w-10 h-10 bg-slate-100 dark:bg-white/5 rounded-2xl flex items-center justify-center text-slate-500 dark:text-gray-400">
            <Icon size={20} />
        </div>
        <div className="flex-1">
            <p className="font-bold text-slate-800 dark:text-white text-sm leading-tight">{label}</p>
            <p className="text-xs text-slate-400 dark:text-gray-500 font-medium">{description}</p>
        </div>
    </button>
);
