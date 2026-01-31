import { useState, type FormEvent } from 'react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

interface LoginFormProps {
  onLogin: (role: 'producer' | 'admin') => void;
}

export function LoginForm({ onLogin }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // En una app real, aquí validarías credenciales
    onLogin('producer');
  };

  return (
    <div
      className="
        w-full max-w-md
        rounded-2xl
        p-8
        shadow-xl
        bg-[#F8F6E9] dark:bg-[#16251C]
      "
    >
      {/* Header */}
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-[#2F2F2F] dark:text-[#F1F5F2]">
          Bienvenido
        </h2>
        <p className="mt-2 text-sm text-[#6B6B6B] dark:text-[#A8B5AE]">
          Gestión inteligente de turnos de riego
        </p>
      </div>

      {/* Form */}
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        {/* Usuario / Email */}
        <Input
          label="Usuario o Correo"
          placeholder="ejemplo@correo.com"
          type="text"
          icon={<span className="material-symbols-outlined">person</span>}
          className="
            bg-white dark:bg-[#1F3328]
            border border-gray-300 dark:border-[#2E4A3C]
            text-gray-800 dark:text-[#F1F5F2]
            focus:ring-2
            focus:ring-[#1FB566] dark:focus:ring-[#3DDC84]
          "
        />

        {/* Contraseña */}
        <Input
          label="Contraseña"
          placeholder="••••••••"
          type={showPassword ? 'text' : 'password'}
          icon={<span className="material-symbols-outlined">lock</span>}
          rightElement={
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="
                text-[#1FB566] dark:text-[#3DDC84]
                hover:opacity-80
                transition
                border-none
                bg-transparent
                cursor-pointer
              "
            >
              <span className="material-symbols-outlined">
                {showPassword ? 'visibility_off' : 'visibility'}
              </span>
            </button>
          }
          className="
            bg-white dark:bg-[#1F3328]
            border border-gray-300 dark:border-[#2E4A3C]
            text-gray-800 dark:text-[#F1F5F2]
            focus:ring-2
            focus:ring-[#1FB566] dark:focus:ring-[#3DDC84]
          "
        />

        {/* Forgot password */}
        <div className="flex justify-end">
          <a
            href="#"
            className="
              text-sm font-medium
              text-[#1FB566] dark:text-[#3DDC84]
              hover:underline
            "
          >
            ¿Olvidaste tu contraseña?
          </a>
        </div>

        {/* Submit */}
        <Button
          type="submit"
          className="
            mt-4 w-full
            bg-[#1FB566] dark:bg-[#3DDC84]
            hover:bg-[#18A85B] dark:hover:bg-[#2FC46F]
            text-white
            font-semibold
            rounded-lg
            py-3
            transition-colors
          "
        >
          Ingresar
        </Button>
      </form>
    </div>
  );
}
