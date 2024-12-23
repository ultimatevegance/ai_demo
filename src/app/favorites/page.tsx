'use client'

import MainLayout from '@/components/layout/MainLayout'
import { Search, Star, ArrowUpRight, ArrowDownRight, Clock, MoreVertical, Filter } from 'lucide-react'
import Image from 'next/image'

const favoriteItems = [
  {
    id: 1,
    type: 'call',
    agent: {
      name: 'Sarah Johnson',
      avatar: 'https://picsum.photos/id/64/40/40',
    },
    customer: 'Michael Brown',
    callType: 'inbound',
    duration: '5m 23s',
    date: '2024-03-15',
    time: '14:30',
    notes: 'Excellent customer handling, used as training example',
    tags: ['training', 'customer-service'],
    satisfaction: 4.8,
  },
  {
    id: 2,
    type: 'call',
    agent: {
      name: 'David Wilson',
      avatar: 'https://picsum.photos/id/65/40/40',
    },
    customer: 'Emma Davis',
    callType: 'outbound',
    duration: '3m 45s',
    date: '2024-03-14',
    time: '11:20',
    notes: 'Perfect example of problem resolution',
    tags: ['resolution', 'technical'],
    satisfaction: 4.9,
  },
  {
    id: 3,
    type: 'call',
    agent: {
      name: 'Lisa Anderson',
      avatar: 'https://picsum.photos/id/66/40/40',
    },
    customer: 'James Wilson',
    callType: 'inbound',
    duration: '8m 12s',
    date: '2024-03-13',
    time: '09:45',
    notes: 'Great demonstration of product knowledge',
    tags: ['product-info', 'sales'],
    satisfaction: 4.7,
  },
]

export default function FavoritesPage() {
  return (
    <MainLayout>
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Favorites</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              Your saved calls and interactions
            </p>
          </div>
          <div className="flex gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search favorites..."
                className="pl-10 pr-4 py-2 bg-white dark:bg-gray-800 
                  border border-gray-200 dark:border-gray-700 rounded-lg
                  text-gray-900 dark:text-white placeholder:text-gray-500
                  focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 
              rounded-lg border border-gray-200 dark:border-gray-700 
              hover:bg-gray-50 dark:hover:bg-gray-700">
              <Filter size={20} className="text-gray-500 dark:text-gray-400" />
              <span className="text-gray-600 dark:text-gray-300">Filter</span>
            </button>
          </div>
        </div>

        {/* Favorites List */}
        <div className="space-y-4">
          {favoriteItems.map((item) => (
            <div key={item.id} className="bg-white dark:bg-gray-800 rounded-xl 
              border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex justify-between">
                <div className="flex-1">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <Image
                          src={item.agent.avatar}
                          alt={item.agent.name}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white">
                          {item.agent.name}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Call with {item.customer}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star size={18} className="text-yellow-400 fill-yellow-400" />
                      <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                        <MoreVertical size={20} className="text-gray-400" />
                      </button>
                    </div>
                  </div>

                  {/* Call Details */}
                  <div className="grid grid-cols-4 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      {item.callType === 'inbound' ? (
                        <ArrowDownRight size={16} className="text-green-500" />
                      ) : (
                        <ArrowUpRight size={16} className="text-blue-500" />
                      )}
                      <span className="text-sm text-gray-900 dark:text-white capitalize">
                        {item.callType}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-gray-400" />
                      <span className="text-sm text-gray-900 dark:text-white">
                        {item.duration}
                      </span>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {item.date}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {item.time}
                    </div>
                  </div>

                  {/* Notes */}
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {item.notes}
                  </p>

                  {/* Tags */}
                  <div className="flex gap-2">
                    {item.tags.map((tag) => (
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
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  )
} 