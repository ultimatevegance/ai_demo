'use client'

import MainLayout from '@/components/layout/MainLayout'
import SettingsLayout from '@/components/layout/SettingsLayout'
import { Lock, Smartphone, Shield, History } from 'lucide-react'

const securitySettings = [
  {
    title: 'Two-Factor Authentication',
    description: 'Add an extra layer of security to your account',
    icon: Smartphone,
    enabled: true,
  },
  {
    title: 'Password Requirements',
    description: 'Enforce strong password policies',
    icon: Lock,
    enabled: true,
  },
  {
    title: 'Login History',
    description: 'Monitor account access',
    icon: History,
    enabled: false,
  },
  {
    title: 'Security Alerts',
    description: 'Get notified about suspicious activity',
    icon: Shield,
    enabled: true,
  },
]

export default function SecurityPage() {
  return (
    <MainLayout>
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-2xl font-semibold mb-6">Security Settings</h1>
        <SettingsLayout>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="space-y-6">
              {securitySettings.map((setting) => {
                const Icon = setting.icon
                return (
                  <div
                    key={setting.title}
                    className="flex items-start justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex gap-4">
                      <div className="p-2 bg-purple-50 rounded-lg">
                        <Icon className="text-purple-600" size={24} />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">{setting.title}</h3>
                        <p className="text-sm text-gray-500">{setting.description}</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        defaultChecked={setting.enabled}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                    </label>
                  </div>
                )
              })}
            </div>

            <div className="mt-8">
              <h3 className="font-medium mb-4">Change Password</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    Current Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 rounded-lg border border-gray-200"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 rounded-lg border border-gray-200"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 rounded-lg border border-gray-200"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-4 pt-6 mt-6 border-t border-gray-200">
              <button className="px-4 py-2 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50">
                Cancel
              </button>
              <button className="px-4 py-2 text-sm text-white bg-purple-600 rounded-lg hover:bg-purple-700">
                Save Changes
              </button>
            </div>
          </div>
        </SettingsLayout>
      </div>
    </MainLayout>
  )
} 