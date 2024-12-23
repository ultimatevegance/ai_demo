'use client'

import MainLayout from '@/components/layout/MainLayout'
import { Search, Phone, ArrowUpRight, ArrowDownRight, Clock, Filter, MoreVertical } from 'lucide-react'
import Image from 'next/image'

const calls = [
  {
    id: 1,
    agent: {
      name: 'Sarah Johnson',
      avatar: 'https://picsum.photos/id/64/40/40',
    },
    customer: {
      name: 'Michael Brown',
      phone: '+1 (555) 123-4567',
    },
    type: 'inbound',
    duration: '5m 23s',
    status: 'completed',
    time: '2:30 PM',
    date: 'Today',
    notes: 'Customer inquired about premium features',
    tags: ['sales', 'premium'],
  },
  {
    id: 2,
    agent: {
      name: 'David Wilson',
      avatar: 'https://picsum.photos/id/65/40/40',
    },
    customer: {
      name: 'Emma Davis',
      phone: '+1 (555) 987-6543',
    },
    type: 'outbound',
    duration: '3m 45s',
    status: 'completed',
    time: '11:15 AM',
    date: 'Today',
    notes: 'Follow-up call about service upgrade',
    tags: ['follow-up', 'upgrade'],
  },
  {
    id: 3,
    agent: {
      name: 'Lisa Anderson',
      avatar: 'https://picsum.photos/id/66/40/40',
    },
    customer: {
      name: 'James Wilson',
      phone: '+1 (555) 456-7890',
    },
    type: 'inbound',
    duration: '8m 12s',
    status: 'completed',
    time: '9:45 AM',
    date: 'Today',
    notes: 'Technical support for login issues',
    tags: ['support', 'technical'],
  },
]

export default function CallsPage() {
  return (
    <MainLayout>
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Calls</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              Manage and track your call history
            </p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 
            bg-purple-600 hover:bg-purple-700 text-white 
            rounded-lg transition-colors">
            <Phone size={20} />
            <span>New Call</span>
          </button>
        </div>

        {/* Search and Filter */}
        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search calls..."
              className="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-800 
                border border-gray-200 dark:border-gray-700 rounded-lg
                text-gray-900 dark:text-white placeholder:text-gray-500
                focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 
            bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 
            text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 
            dark:hover:bg-gray-700 transition-colors">
            <Filter size={20} />
            <span>Filter</span>
          </button>
        </div>

        {/* Calls List */}
        <div className="bg-white dark:bg-gray-800 rounded-xl 
          border border-gray-200 dark:border-gray-700 divide-y 
          divide-gray-200 dark:divide-gray-700">
          {calls.map((call) => (
            <div key={call.id} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  {/* Agent Info */}
                  <Image
                    src={call.agent.avatar}
                    alt={call.agent.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      {call.customer.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {call.customer.phone}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      {call.type === 'inbound' ? (
                        <ArrowDownRight size={16} className="text-green-500" />
                      ) : (
                        <ArrowUpRight size={16} className="text-blue-500" />
                      )}
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {call.type === 'inbound' ? 'Inbound' : 'Outbound'}
                      </span>
                      <Clock size={16} className="text-gray-400 ml-2" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {call.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Time and Actions */}
                <div className="flex items-start gap-4">
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {call.time}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {call.date}
                    </p>
                  </div>
                  <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                    <MoreVertical size={20} className="text-gray-400" />
                  </button>
                </div>
              </div>

              {/* Notes and Tags */}
              <div className="mt-4">
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  {call.notes}
                </p>
                <div className="flex gap-2">
                  {call.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 text-xs font-medium 
                      bg-purple-50 dark:bg-purple-900/20 
                      text-purple-700 dark:text-purple-300 
                      rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  )
} 