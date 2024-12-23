'use client'

import MainLayout from '@/components/layout/MainLayout'
import { Search as SearchIcon, Filter, Grid, List } from 'lucide-react'
import Image from 'next/image'

const searchResults = [
  {
    type: 'call',
    title: 'Customer Support Call #1234',
    description: 'Discussion about product features',
    date: '2024-02-15',
    agent: {
      name: 'Sarah Johnson',
      avatar: 'https://picsum.photos/id/64/40/40',
    },
  },
  {
    type: 'message',
    title: 'Technical Support Chat',
    description: 'Troubleshooting network issues',
    date: '2024-02-14',
    agent: {
      name: 'Michael Chen',
      avatar: 'https://picsum.photos/id/65/40/40',
    },
  },
]

export default function SearchPage() {
  return (
    <MainLayout>
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="relative flex-1 max-w-2xl">
            <input
              type="text"
              placeholder="Search for calls, messages, or agents..."
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200"
            />
            <SearchIcon className="absolute left-4 top-3.5 text-gray-400" size={24} />
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 text-gray-600 bg-white rounded-lg border border-gray-200 hover:bg-gray-50">
              <Filter size={20} />
              Filters
            </button>
            <div className="flex gap-1 bg-white rounded-lg border border-gray-200">
              <button className="p-2 hover:bg-gray-50 rounded-l-lg">
                <Grid size={20} />
              </button>
              <button className="p-2 hover:bg-gray-50 rounded-r-lg">
                <List size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200">
          {searchResults.map((result, index) => (
            <div
              key={index}
              className={`p-4 hover:bg-gray-50 cursor-pointer ${
                index !== searchResults.length - 1 ? 'border-b border-gray-200' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium mb-1">{result.title}</h3>
                  <p className="text-sm text-gray-500">{result.description}</p>
                  <p className="text-sm text-gray-400 mt-1">{result.date}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <p className="text-sm font-medium">{result.agent.name}</p>
                    <p className="text-sm text-gray-500 capitalize">{result.type}</p>
                  </div>
                  <Image
                    src={result.agent.avatar}
                    alt={result.agent.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  )
} 