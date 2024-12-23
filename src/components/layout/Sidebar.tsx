'use client'

import { useTheme } from '@/components/providers/ThemeProvider'
import { 
  Home, Phone, History, Users, MessageSquare, 
  Heart, Settings, HelpCircle, Sun, Moon, 
  ChevronLeft, ChevronRight 
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const menuItems = [
  { icon: Home, label: 'Dashboard', href: '/' },
  { icon: Phone, label: 'Calls', href: '/calls' },
  { icon: History, label: 'History', href: '/history' },
  { icon: Users, label: 'Team', href: '/team' },
  { icon: MessageSquare, label: 'Messages', href: '/messages' },
  { icon: Heart, label: 'Favorites', href: '/favorites' },
]

const bottomMenuItems = [
  { icon: Settings, label: 'Settings', href: '/settings' },
  { icon: HelpCircle, label: 'Support', href: '/support' },
]

export default function Sidebar() {
  const { theme, toggleTheme, themeButtonRef } = useTheme()
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sidebarCollapsed')
      return saved ? JSON.parse(saved) : false
    }
    return false
  })

  useEffect(() => {
    localStorage.setItem('sidebarCollapsed', JSON.stringify(isCollapsed))
  }, [isCollapsed])

  return (
    <aside className={`flex flex-col border-r border-gray-200 dark:border-gray-700 
      bg-white dark:bg-gray-800 transition-all duration-300
      ${isCollapsed ? 'w-[72px]' : 'w-64'}`}>
      {/* Logo */}
      <div className={`h-16 flex items-center px-4 border-b 
        border-gray-200 dark:border-gray-700
        ${isCollapsed ? 'justify-center' : ''}`}>
        {isCollapsed ? (
          <span className="text-2xl font-bold text-purple-600">C</span>
        ) : (
          <span className="text-2xl font-bold text-purple-600">CallCenter</span>
        )}
      </div>

      {/* Main Menu */}
      <div className="flex-1 py-6">
        <nav className="px-2 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg
                  transition-colors group relative
                  ${isActive 
                    ? 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                  }`}
              >
                <Icon size={20} />
                {!isCollapsed && <span>{item.label}</span>}
                {isCollapsed && (
                  <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white 
                    text-sm rounded opacity-0 group-hover:opacity-100 pointer-events-none
                    whitespace-nowrap">
                    {item.label}
                  </div>
                )}
              </Link>
            )
          })}
        </nav>
      </div>

      {/* Bottom Menu */}
      <div className="p-2 border-t border-gray-200 dark:border-gray-700 space-y-1">
        {bottomMenuItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg
                transition-colors group relative
                ${isActive 
                  ? 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                }`}
            >
              <Icon size={20} />
              {!isCollapsed && <span>{item.label}</span>}
              {isCollapsed && (
                <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white 
                  text-sm rounded opacity-0 group-hover:opacity-100 pointer-events-none
                  whitespace-nowrap">
                  {item.label}
                </div>
              )}
            </Link>
          )
        })}

        {/* Theme Toggle */}
        <button
          ref={themeButtonRef}
          onClick={toggleTheme}
          className={`flex items-center gap-3 px-3 py-2 rounded-lg w-full
            text-gray-700 dark:text-gray-300 hover:bg-gray-50 
            dark:hover:bg-gray-700/50 transition-colors group relative`}
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          {!isCollapsed && <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>}
          {isCollapsed && (
            <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white 
              text-sm rounded opacity-0 group-hover:opacity-100 pointer-events-none
              whitespace-nowrap">
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </div>
          )}
        </button>

        {/* Collapse Toggle */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={`flex items-center gap-3 px-3 py-2 rounded-lg w-full
            text-gray-700 dark:text-gray-300 hover:bg-gray-50 
            dark:hover:bg-gray-700/50 transition-colors group relative`}
        >
          {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          {!isCollapsed && <span>{isCollapsed ? 'Expand' : 'Collapse'}</span>}
          {isCollapsed && (
            <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white 
              text-sm rounded opacity-0 group-hover:opacity-100 pointer-events-none
              whitespace-nowrap">
              {isCollapsed ? 'Expand' : 'Collapse'}
            </div>
          )}
        </button>
      </div>
    </aside>
  )
} 