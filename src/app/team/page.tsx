'use client'

import MainLayout from '@/components/layout/MainLayout'
import { Search, Plus, ArrowUp, ArrowDown, MoreVertical, Mail, Phone } from 'lucide-react'
import Image from 'next/image'

const teamMembers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Senior Agent',
    avatar: 'https://picsum.photos/id/64/100/100',
    email: 'sarah.j@company.com',
    phone: '+1 (555) 123-4567',
    status: 'active',
    metrics: {
      callsHandled: 245,
      avgHandleTime: '4m 30s',
      satisfaction: 4.8,
      performance: '+12%',
    },
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Customer Service Rep',
    avatar: 'https://picsum.photos/id/65/100/100',
    email: 'michael.c@company.com',
    phone: '+1 (555) 234-5678',
    status: 'busy',
    metrics: {
      callsHandled: 198,
      avgHandleTime: '5m 15s',
      satisfaction: 4.6,
      performance: '+8%',
    },
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Team Lead',
    avatar: 'https://picsum.photos/id/66/100/100',
    email: 'emily.r@company.com',
    phone: '+1 (555) 345-6789',
    status: 'offline',
    metrics: {
      callsHandled: 182,
      avgHandleTime: '3m 45s',
      satisfaction: 4.9,
      performance: '+15%',
    },
  },
]

const statusColors = {
  active: 'bg-green-500',
  busy: 'bg-yellow-500',
  offline: 'bg-gray-400',
}

export default function TeamPage() {
  return (
    <MainLayout>
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Team</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              Manage your team members and their performance
            </p>
          </div>
          <div className="flex gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search team members..."
                className="pl-10 pr-4 py-2 bg-white dark:bg-gray-800 
                  border border-gray-200 dark:border-gray-700 rounded-lg
                  text-gray-900 dark:text-white placeholder:text-gray-500
                  focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 
              bg-purple-600 hover:bg-purple-700 
              text-white rounded-lg transition-colors">
              <Plus size={20} />
              <span>Add Member</span>
            </button>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white dark:bg-gray-800 rounded-xl 
              border border-gray-200 dark:border-gray-700 p-6">
              {/* Member Header */}
              <div className="flex justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full 
                      border-2 border-white dark:border-gray-800 
                      ${statusColors[member.status]}`} 
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {member.role}
                    </p>
                  </div>
                </div>
                <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                  <MoreVertical size={20} className="text-gray-400" />
                </button>
              </div>

              {/* Contact Info */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Mail size={16} />
                  <span>{member.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Phone size={16} />
                  <span>{member.phone}</span>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Calls Handled
                  </p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    {member.metrics.callsHandled}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Avg Handle Time
                  </p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    {member.metrics.avgHandleTime}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Satisfaction
                  </p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    {member.metrics.satisfaction}/5
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Performance
                  </p>
                  <div className="flex items-center gap-1">
                    <ArrowUp size={16} className="text-green-500" />
                    <p className="text-lg font-semibold text-green-500">
                      {member.metrics.performance}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  )
} 