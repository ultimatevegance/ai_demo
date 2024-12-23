'use client'

import MainLayout from '@/components/layout/MainLayout'
import SettingsLayout from '@/components/layout/SettingsLayout'

const notificationSettings = [
  {
    title: 'Email Notifications',
    items: [
      { id: 'email-messages', label: 'New Messages', enabled: true },
      { id: 'email-calls', label: 'Missed Calls', enabled: false },
      { id: 'email-updates', label: 'System Updates', enabled: true },
    ],
  },
  {
    title: 'Push Notifications',
    items: [
      { id: 'push-messages', label: 'New Messages', enabled: true },
      { id: 'push-calls', label: 'Missed Calls', enabled: true },
      { id: 'push-updates', label: 'System Updates', enabled: false },
    ],
  },
]

export default function NotificationsPage() {
  return (
    <MainLayout>
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-2xl font-semibold mb-6">Notification Settings</h1>
        <SettingsLayout>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            {notificationSettings.map((section) => (
              <div key={section.title} className="mb-8 last:mb-0">
                <h2 className="text-lg font-semibold mb-4">{section.title}</h2>
                <div className="space-y-4">
                  {section.items.map((item) => (
                    <div key={item.id} className="flex items-center justify-between">
                      <span className="text-gray-700">{item.label}</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          defaultChecked={item.enabled}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            ))}

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