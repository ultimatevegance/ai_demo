'use client'

import { useTheme } from '@/components/providers/ThemeProvider'
import { useEffect, useState } from 'react'

export default function ThemeTransition() {
  const { theme, themeButtonRef } = useTheme()
  const [showTransition, setShowTransition] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setShowTransition(true)
    if (themeButtonRef.current) {
      const rect = themeButtonRef.current.getBoundingClientRect()
      const x = rect.left + rect.width / 2
      const y = rect.top + rect.height / 2
      
      document.documentElement.style.setProperty('--x', `${x}px`)
      document.documentElement.style.setProperty('--y', `${y}px`)
      setPosition({ x, y })
    }
    const timer = setTimeout(() => setShowTransition(false), 600)
    return () => clearTimeout(timer)
  }, [theme, themeButtonRef])

  if (!showTransition) return null

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[100] backdrop-blur-[1px]"
      style={{
        background: theme === 'dark' 
          ? 'rgba(17, 24, 39, 0.98)' 
          : 'rgba(255, 255, 255, 0.98)',
        clipPath: `circle(0% at var(--x) var(--y))`,
        animation: 'theme-transition 600ms cubic-bezier(0.4, 0, 0.2, 1) forwards',
      }}
    />
  )
} 