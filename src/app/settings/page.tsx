'use client'

import MainLayout from '@/components/layout/MainLayout'
import { User, Bell, Lock, Palette, Globe, HelpCircle, Save } from 'lucide-react'
import { useTheme } from '@/components/providers/ThemeProvider'

const settings = [
  {
    id: 'notifications',
    label: 'Notifications',
    description: 'Manage how you receive notifications',
    icon: Bell,
    options: [
      {
        id: 'email-notifications',
        label: 'Email Notifications',
        description: 'Receive notifications via email',
        enabled: true,
      },
      {
        id: 'desktop-notifications',
        label: 'Desktop Notifications',
        description: 'Show desktop notifications',
        enabled: false,
      },
    ],
  },
  {
    id: 'appearance',
    label: 'Appearance',
    description: 'Customize the look and feel',
    icon: Palette,
    options: [
      {
        id: 'dark-mode',
        label: 'Dark Mode',
        description: 'Use dark theme',
        enabled: true,
      },
      {
        id: 'compact-view',
        label: 'Compact View',
        description: 'Show more content in less space',
        enabled: false,
      },
    ],
  },
]

export default function SettingsPage() {
  const { theme, setTheme } = useTheme()

  return (
    <MainLayout>
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Settings</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Manage your account settings and preferences
          </p>
        </div>

        {/* Settings Grid */}
        <div className="grid gap-6">
          {/* Profile Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl 
            border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center gap-4 mb-6">
              <User className="w-8 h-8 text-purple-600" />
              <div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Profile Information
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Update your personal information
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 
                    border border-gray-200 dark:border-gray-600 rounded-lg
                    text-gray-900 dark:text-white
                    focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 
                    border border-gray-200 dark:border-gray-600 rounded-lg
                    text-gray-900 dark:text-white
                    focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
          </div>

          {/* Other Settings */}
          {settings.map((section) => (
            <div key={section.id} className="bg-white dark:bg-gray-800 rounded-xl 
              border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-center gap-4 mb-6">
                <section.icon className="w-8 h-8 text-purple-600" />
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {section.label}
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    {section.description}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {section.options.map((option) => (
                  <div key={option.id} className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                        {option.label}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {option.description}
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked={option.enabled}
                        onChange={(e) => {
                          if (option.id === 'dark-mode') {
                            setTheme(e.target.checked ? 'dark' : 'light')
                          }
                        }}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none 
                        peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 
                        rounded-full peer dark:bg-gray-700 
                        peer-checked:after:translate-x-full peer-checked:after:border-white 
                        after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                        after:bg-white after:border-gray-300 after:border after:rounded-full 
                        after:h-5 after:w-5 after:transition-all dark:border-gray-600 
                        peer-checked:bg-purple-600"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Save Button */}
          <div className="flex justify-end">
            <button className="flex items-center gap-2 px-6 py-2 
              bg-purple-600 hover:bg-purple-700 text-white 
              rounded-lg transition-colors">
              <Save size={20} />
              <span>Save Changes</span>
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  )
} 