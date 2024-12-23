'use client'

import { createContext, useContext, useEffect, useState, useRef } from 'react'
import ThemeTransition from '../ui/ThemeTransition'

interface ThemeContextType {
  theme: string
  toggleTheme: () => void
  themeButtonRef: React.RefObject<HTMLButtonElement>
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
  themeButtonRef: { current: null }
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState('light')
  const themeButtonRef = useRef<HTMLButtonElement>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    setTheme(savedTheme)
    document.documentElement.classList.toggle('dark', savedTheme === 'dark')
  }, [])

  const toggleTheme = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    
    setTimeout(() => {
      localStorage.setItem('theme', newTheme)
      document.documentElement.classList.toggle('dark')
      setIsTransitioning(false)
    }, 300) // Adjusted timing for the middle of animation
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeButtonRef }}>
      <ThemeTransition />
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext) 