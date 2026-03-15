'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

const ThemeContext = createContext<{
  theme: Theme
  toggleTheme: () => void
}>({ theme: 'light', toggleTheme: () => {} })

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme | null
    if (stored === 'dark' || stored === 'light') {
      setTheme(stored)
      applyTheme(stored)
    } else {
      const mq = window.matchMedia('(prefers-color-scheme: dark)')
      const initial: Theme = mq.matches ? 'dark' : 'light'
      setTheme(initial)
      applyTheme(initial)

      const listener = (e: MediaQueryListEvent) => {
        if (!localStorage.getItem('theme')) {
          const next: Theme = e.matches ? 'dark' : 'light'
          setTheme(next)
          applyTheme(next)
          postThemeToIframe(next)
        }
      }
      mq.addEventListener('change', listener)
      return () => mq.removeEventListener('change', listener)
    }
  }, [])

  function applyTheme(t: Theme) {
    const root = document.documentElement
    if (t === 'dark') {
      root.classList.add('dark')
      root.classList.remove('light')
    } else {
      root.classList.add('light')
      root.classList.remove('dark')
    }
  }

  function postThemeToIframe(t: Theme) {
    const iframe = document.getElementById('journey-animation') as HTMLIFrameElement | null
    iframe?.contentWindow?.postMessage({ type: 'theme-change', theme: t }, 'https://personal-website-animation.s3.us-east-1.amazonaws.com')
  }

  function toggleTheme() {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    applyTheme(next)
    localStorage.setItem('theme', next)
    postThemeToIframe(next)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
