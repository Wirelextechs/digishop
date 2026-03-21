"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div style={{width: 24, height: 24}} />;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="glass-panel"
      style={{
        padding: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
        background: 'var(--glass-bg)',
        cursor: 'pointer',
        borderRadius: '50%'
      }}
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <Sun size={20} style={{ color: 'var(--accent-primary)' }} />
      ) : (
        <Moon size={20} style={{ color: 'var(--text-primary)' }} />
      )}
    </button>
  );
}
