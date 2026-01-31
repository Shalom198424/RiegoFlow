
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    dark ? root.classList.add("dark") : root.classList.remove("dark");
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="
        fixed top-4 right-4
        px-3 py-2
        rounded-lg
        bg-[#1FB566] dark:bg-[#3DDC84]
        text-white
        text-sm
        font-semibold
      "
    >
      {dark ? "Modo claro" : "Modo oscuro"}
    </button>
  );
}

