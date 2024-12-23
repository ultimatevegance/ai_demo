'use client'

import MainLayout from '@/components/layout/MainLayout'
import SettingsLayout from '@/components/layout/SettingsLayout'
import Image from 'next/image'

const integrations = [
  {
    name: 'Slack',
    description: 'Connect your Slack workspace for notifications',
    logo: 'https://picsum.photos/id/28/40/40',
    connected: true,
    status: 'Connected to Workspace',
  },
  {
    name: 'Google Calendar',
    description: 'Sync your calendar for scheduling',
    logo: 'https://picsum.photos/id/29/40/40',
    connected: true,
    status: 'Connected as john.doe@gmail.com',
  },
  {
    name: 'Jira',
    description: 'Link your Jira projects',
    logo: 'https://picsum.photos/id/30/40/40',
    connected: false,
    status: 'Not connected',
  },
  {
    name: 'GitHub',
    description: 'Connect your repositories',
    logo: 'https://picsum.photos/id/31/40/40',
    connected: false,
    status: 'Not connected',
  },
]

export default function IntegrationsPage() {
  return (
    <MainLayout>
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-2xl font-semibold mb-6">Integrations</h1>
        <SettingsLayout>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="space-y-6">
              {integrations.map((integration) => (
                <div
                  key={integration.name}
                  className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={integration.logo}
                      alt={integration.name}
                      width={40}
                      height={40}
                      className="rounded-lg"
                    />
                    <div>
                      <h3 className="font-medium mb-1">{integration.name}</h3>
                      <p className="text-sm text-gray-500">{integration.description}</p>
                      <p className="text-sm text-gray-400 mt-1">{integration.status}</p>
                    </div>
                  </div>
                  <button
                    className={`px-4 py-2 text-sm rounded-lg ${
                      integration.connected
                        ? 'text-gray-600 border border-gray-200 hover:bg-gray-50'
                        : 'text-white bg-purple-600 hover:bg-purple-700'
                    }`}
                  >
                    {integration.connected ? 'Disconnect' : 'Connect'}
                  </button>
                </div>
              ))}
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