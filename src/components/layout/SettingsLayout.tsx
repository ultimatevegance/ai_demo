'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Settings, User, Bell, Shield, Database } from 'lucide-react'

const settingsNav = [
  { icon: User, label: 'Account', href: '/settings/account' },
  { icon: Bell, label: 'Notifications', href: '/settings/notifications' },
  { icon: Shield, label: 'Security', href: '/settings/security' },
  { icon: Database, label: 'Integrations', href: '/settings/integrations' },
]

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="flex gap-6">
      <aside className="w-64 bg-white rounded-lg border border-gray-200 h-fit">
        <nav className="p-4">
          {settingsNav.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg mb-1 
                  ${isActive 
                    ? 'bg-purple-50 text-purple-600' 
                    : 'text-gray-600 hover:bg-gray-50'
                  }`}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </nav>
      </aside>
      <div className="flex-1">{children}</div>
    </div>
  )
} 