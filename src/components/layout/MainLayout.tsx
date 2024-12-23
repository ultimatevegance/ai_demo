'use client'

import Sidebar from './Sidebar'
import { Bell, Search, User, Settings, LogOut } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import LogoutModal from '../modals/LogoutModal'
import { useRouter } from 'next/navigation'

const notifications = [
  {
    id: 1,
    title: 'New message from Sarah',
    description: 'I sent you the updated reports',
    time: '2 min ago',
    read: false,
    type: 'message'
  },
  {
    id: 2,
    title: 'Meeting reminder',
    description: 'Team sync in 30 minutes',
    time: '30 min ago',
    read: true,
    type: 'reminder'
  },
  {
    id: 3,
    title: 'Call completed',
    description: 'Call with John Smith ended',
    time: '1 hour ago',
    read: true,
    type: 'call'
  }
]

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [showNotifications, setShowNotifications] = useState(false)
  const [showAccountPanel, setShowAccountPanel] = useState(false)
  const [showLogoutModal, setShowLogoutModal] = useState(false)
  const router = useRouter()
  const unreadCount = notifications.filter(n => !n.read).length

  const handleLogout = () => {
    setShowLogoutModal(false)
    // Add any cleanup logic here (clear tokens, etc.)
    router.push('/login')
  }

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="h-16 border-b border-gray-200 dark:border-gray-700 
          bg-white dark:bg-gray-800 flex items-center px-6">
          {/* Left spacing */}
          <div className="w-32"></div>

          {/* Centered Search Bar */}
          <div className="flex-1 flex justify-center">
            <div className="w-[500px]">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-700 
                    border border-gray-200 dark:border-gray-600 rounded-full
                    text-gray-900 dark:text-white placeholder:text-gray-500
                    focus:outline-none focus:ring-2 focus:ring-purple-500
                    transition-all hover:bg-gray-100 dark:hover:bg-gray-600"
                />
                <Search 
                  className="absolute left-3.5 top-2.5 text-gray-400" 
                  size={20} 
                />
              </div>
            </div>
          </div>

          {/* Notifications and Avatar */}
          <div className="w-32 flex items-center justify-end gap-6">
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
              >
                <Bell className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                {unreadCount > 0 && (
                  <span className="absolute top-0 right-0 w-5 h-5 
                    bg-red-500 text-white text-xs font-medium 
                    flex items-center justify-center rounded-full">
                    {unreadCount}
                  </span>
                )}
              </button>

              {/* Notification Panel */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 
                  rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 
                  py-2 z-50">
                  <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                      Notifications
                    </h3>
                  </div>
                  <div className="max-h-[400px] overflow-y-auto">
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={`px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 
                          ${!notification.read ? 'bg-purple-50 dark:bg-purple-900/20' : ''}`}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              {notification.title}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                              {notification.description}
                            </p>
                          </div>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {notification.time}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-700">
                    <button className="text-sm text-purple-600 dark:text-purple-400 
                      hover:text-purple-700 dark:hover:text-purple-300">
                      Mark all as read
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Avatar with Account Panel */}
            <div className="relative">
              <button 
                onClick={() => {
                  setShowAccountPanel(!showAccountPanel)
                  setShowNotifications(false)
                }}
                className="flex items-center gap-2 p-1 rounded-full
                  hover:ring-2 hover:ring-gray-200 dark:hover:ring-gray-700
                  transition-all"
              >
                <Image
                  src="https://picsum.photos/id/64/40/40"
                  alt="Profile"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              </button>

              {/* Account Panel */}
              {showAccountPanel && (
                <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 
                  rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 
                  py-2 z-50">
                  {/* User Info */}
                  <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-3">
                      <Image
                        src="https://picsum.photos/id/64/40/40"
                        alt="Profile"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          John Doe
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          john.doe@company.com
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Menu Items */}
                  <div className="py-2">
                    <Link
                      href="/profile"
                      className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 
                        dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <User size={16} />
                      <span>Profile</span>
                    </Link>
                    <Link
                      href="/settings"
                      className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 
                        dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <Settings size={16} />
                      <span>Settings</span>
                    </Link>
                  </div>

                  {/* Logout */}
                  <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => {
                        setShowLogoutModal(true)
                        setShowAccountPanel(false)
                      }}
                      className="flex items-center gap-3 px-4 py-2 w-full text-sm 
                        text-red-600 dark:text-red-400 hover:bg-gray-100 
                        dark:hover:bg-gray-700"
                    >
                      <LogOut size={16} />
                      <span>Log out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>

        {/* Logout Modal */}
        <LogoutModal 
          isOpen={showLogoutModal}
          onClose={() => setShowLogoutModal(false)}
          onConfirm={handleLogout}
        />
      </div>
    </div>
  )
} 