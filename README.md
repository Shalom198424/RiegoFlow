# 🌊 RiegoFlow

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

**RiegoFlow** es una plataforma moderna y minimalista diseñada para la gestión inteligente de turnos de riego. Enfocada en la eficiencia hídrica y la experiencia del usuario, permite coordinar la distribución de agua entre productores y administradores de red de manera ágil y visual.

---

## ✨ Características Principales

### 🚜 Módulo de Productores
- **Solicitudes de Riego:** Interfaz intuitiva para pedir turnos especificando volumen y horario.
- **Historial de Consumo:** Visualización clara de riegos previos y estadísticas de uso.
- **Perfil Personalizado:** Gestión de datos del productor y parcelas asociadas.
- **Notificaciones:** Alertas en tiempo real sobre la aprobación de turnos.

### 🏛️ Panel de Administración
- **Dashboard de Control:** Monitoreo en tiempo real de la demanda proyectada vs. disponibilidad de oferta.
- **Gestión de Red:** Mapa interactivo y control de válvulas/sectores.
- **Aprobación Inteligente:** Sistema de validación de solicitudes con prioridades programables.
- **Configuración del Sistema:** Ajustes globales de parámetros hídricos y usuarios.

---

## 🚀 Tecnologías Utilizadas

- **Frontend:** [React.js](https://reactjs.org/) con [TypeScript](https://www.typescriptlang.org/).
- **Estilizado:** [Tailwind CSS](https://tailwindcss.com/) para un diseño premium, dinámico y responsivo.
- **Iconografía:** [Lucide React](https://lucide.dev/) y [Material Symbols](https://fonts.google.com/icons).
- **Herramientas de Construcción:** [Vite](https://vitejs.dev/) para un desarrollo ultra rápido.
- **Estado y Navegación:** [React Router Dom](https://reactrouter.com/).

---

## 🛠️ Instalación y Configuración

Sigue estos pasos para ejecutar el proyecto localmente:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/Shalom198424/RiegoFlow.git
   cd RiegoFlow
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Configurar el entorno:**
   - Copia el archivo de ejemplo:
     ```bash
     cp .env.example .env
     ```
   - Edita el archivo `.env` con tus configuraciones (opcional por ahora).

4. **Ejecutar en modo desarrollo:**
   ```bash
   npm run dev
   ```

---

## 📁 Estructura del Proyecto

```text
src/
├── components/     # Componentes reutilizables (Botones, Inputs, Logo, etc.)
├── layouts/        # Estructuras de página (Auth y Dashboard)
├── pages/          # Vistas principales (Login, Admin, Producer, Profile)
├── utils/          # Funciones de ayuda y utilidades de CSS (cn)
├── index.css       # Estilos globales y tokens de diseño Tailwind
└── main.tsx        # Punto de entrada de la aplicación
```

---

## 🎨 Diseño y UX

El proyecto sigue una estética **Premium Dark/Light Mode**, utilizando:
- **Glassmorphism:** Efectos de cristal esmerilado en tarjetas y paneles.
- **Animaciones Micro:** Transiciones suaves y efectos de flotación para elementos clave (como el Logo).
- **Mobile First:** Diseño optimizado para dispositivos móviles, facilitando el uso en campo.

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

Desarrollado con ❤️ para la gestión técnica del agua.
