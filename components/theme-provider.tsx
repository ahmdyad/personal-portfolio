"use client"

import * as React from "react"

type Theme = "light" | "dark"

type ThemeContextValue = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const STORAGE_KEY = "ahmad-ziyad-theme"

const ThemeContext = React.createContext<ThemeContextValue | null>(null)

// Lightweight theme provider (no next-themes) to avoid its inline script
// tripping React 19's "script tag inside a client component" warning.
// The blocking initializer script lives in app/layout.tsx via next/script.
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = React.useState<Theme>("dark")

  React.useEffect(() => {
    let stored: string | null = null
    try {
      stored = window.localStorage.getItem(STORAGE_KEY)
    } catch {
      // ignore storage errors (private mode, etc.)
    }
    const next: Theme = stored === "light" ? "light" : "dark"
    const root = document.documentElement
    root.classList.toggle("light", next === "light")
    root.classList.toggle("dark", next === "dark")
    setThemeState(next)
  }, [])

  const setTheme = React.useCallback((next: Theme) => {
    setThemeState(next)
    const root = document.documentElement
    root.classList.toggle("light", next === "light")
    root.classList.toggle("dark", next === "dark")
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // ignore storage errors (private mode, etc.)
    }
  }, [])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = React.useContext(ThemeContext)
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider")
  return ctx
}

export const THEME_STORAGE_KEY = STORAGE_KEY
