import { useState, useEffect } from 'react'
import { Droplet, Calendar, History, ClipboardList, TrendingUp, LogOut, Sun, Moon } from 'lucide-react'
import { NavItem } from '../common/NavItem';
import { StatusCard } from '../common/StatusCard';
import { AdminRequestCard } from '../common/AdminRequestCard';


import { AuthLayout } from '../auth/AuthLayout';
import { LoginForm } from '../auth/LoginForm';

function LoginView({ onLogin }: { onLogin: (role: 'producer' | 'admin') => void }) {
  return (
    <AuthLayout>
      <LoginForm onLogin={onLogin} />
      {/* 
        This is for the demo purpose as seen in the original App.tsx 
        We can add a small button below for admin demo if needed 
      */}
      <button
        onClick={() => onLogin('admin')}
        className="w-full text-[10px] text-gray-500 hover:text-primary transition-colors border-none bg-transparent cursor-pointer mt-4"
      >
        Demo: Entrar como Administrador
      </button>
    </AuthLayout>
  );
}


function ProducerModule() {
  return (
    <div className="space-y-6">
      <section className="bg-white dark:bg-white/5 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/10">
        <h2 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
          <Calendar className="w-5 h-5" /> Nueva Solicitud
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700 dark:text-gray-300">Lote/Parcela</label>
            <input type="text" placeholder="Ej: Lote Norte" className="w-full p-3 rounded-xl border border-gray-200 dark:border-white/10 dark:bg-white/5 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700 dark:text-gray-300">Cantidad (m³)</label>
              <input type="number" placeholder="500" className="w-full p-3 rounded-xl border border-gray-200 dark:border-white/10 dark:bg-white/5 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700 dark:text-gray-300">Fecha</label>
              <input type="date" className="w-full p-3 rounded-xl border border-gray-200 dark:border-white/10 dark:bg-white/5 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
            </div>
          </div>
          <button className="w-full bg-primary text-white font-bold py-3 rounded-xl shadow-md hover:opacity-90 transition-opacity border-none cursor-pointer">
            Enviar Solicitud
          </button>
        </form>
      </section>

      <section>
        <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
          <History className="w-5 h-5" /> Pedidos Recientes
        </h2>
        <div className="space-y-3">
          <StatusCard lot="Lote 04" quantity="450" date="Mañana" status="Pendiente" />
          <StatusCard lot="Parcela Sur" quantity="800" date="12 Ene" status="Aprobado" />
        </div>
      </section>
    </div>
  )
}

function AdminModule() {
  return (
    <div className="space-y-6">
      <section className="bg-primary p-6 rounded-2xl text-white shadow-lg">
        <h2 className="text-lg font-bold mb-1 flex items-center gap-2">
          <TrendingUp className="w-5 h-5" /> Resumen para Mañana
        </h2>
        <p className="opacity-80 text-sm mb-4">Total demanda proyectada</p>
        <div className="flex items-end gap-2">
          <span className="text-4xl font-black">2,450</span>
          <span className="text-lg font-medium mb-1">m³</span>
        </div>
        <div className="mt-4 bg-white/20 h-2 rounded-full overflow-hidden">
          <div className="bg-white h-full" style={{ width: '65%' }}></div>
        </div>
        <p className="text-xs mt-2 opacity-80">Capacidad utilizada: 65%</p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
          <ClipboardList className="w-5 h-5" /> Solicitudes Entrantes
        </h2>
        <div className="space-y-3">
          <AdminRequestCard lot="Lote 04" producer="Juan Perez" quantity="450" />
          <AdminRequestCard lot="Lote 12" producer="Maria Gomez" quantity="1200" />
        </div>
      </section>
    </div>
  )
}

// --- Main App ---

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<'producer' | 'admin'>('producer');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleLogin = (role: 'producer' | 'admin') => {
    setUserRole(role);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <LoginView onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark font-manrope transition-colors duration-300">
      {/* Header */}
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
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full hover:bg-white/10 transition-colors border-none bg-transparent cursor-pointer text-white flex items-center justify-center"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={handleLogout}
            className="p-2 rounded-full hover:bg-white/10 transition-colors border-none bg-transparent cursor-pointer text-white flex items-center justify-center"
          >
            <LogOut size={20} />
          </button>
        </div>
      </header>

      <main className="max-w-md mx-auto p-4 pb-24">
        {userRole === 'producer' ? (
          <ProducerModule />
        ) : (
          <AdminModule />
        )}
      </main>

      {/* Navigation (Mobile-First) */}
      <nav className="fixed bottom-0 left-0 right-0 glass-effect dark:bg-background-dark/90 border-t border-gray-200 dark:border-white/10 p-3 flex justify-around items-center md:max-w-md md:mx-auto z-50">
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
  )
}

export default App
