'use client'

import MainLayout from '@/components/layout/MainLayout'
import { Search, Filter, ArrowUpRight, ArrowDownRight, Clock, MoreVertical, Loader } from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect, useRef, useCallback } from 'react'

interface Call {
  id: number
  agent: {
    name: string
    avatar: string
  }
  customer: {
    name: string
    phone: string
  }
  type: 'inbound' | 'outbound'
  duration: string
  status: string
  time: string
  date: string
  notes: string
  tags: string[]
}

export default function HistoryPage() {
  const [calls, setCalls] = useState<Call[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [page, setPage] = useState(1)
  const loaderRef = useRef(null)

  // Simulate fetching calls from API
  const fetchCalls = async (pageNum: number) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Simulate API response
    const newCalls = Array.from({ length: 10 }, (_, i) => ({
      id: pageNum * 10 + i,
      agent: {
        name: `Agent ${pageNum * 10 + i}`,
        avatar: `https://picsum.photos/id/${64 + i}/40/40`,
      },
      customer: {
        name: `Customer ${pageNum * 10 + i}`,
        phone: `+1 (555) ${String(pageNum * 10 + i).padStart(3, '0')}-${String(Math.floor(Math.random() * 9999)).padStart(4, '0')}`,
      },
      type: Math.random() > 0.5 ? 'inbound' : 'outbound',
      duration: `${Math.floor(Math.random() * 10)}m ${Math.floor(Math.random() * 60)}s`,
      status: 'completed',
      time: `${Math.floor(Math.random() * 12)}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')} ${Math.random() > 0.5 ? 'AM' : 'PM'}`,
      date: pageNum === 1 ? 'Today' : `${Math.floor(Math.random() * 30) + 1} days ago`,
      notes: 'Customer inquiry handled successfully',
      tags: ['completed', Math.random() > 0.5 ? 'support' : 'sales'],
    }))

    // Simulate no more data after page 5
    if (pageNum >= 5) {
      setHasMore(false)
      return []
    }

    return newCalls
  }

  // Initial load
  useEffect(() => {
    const loadInitialCalls = async () => {
      const initialCalls = await fetchCalls(1)
      setCalls(initialCalls)
      setIsLoading(false)
    }
    loadInitialCalls()
  }, [])

  // Intersection observer for infinite scroll
  const observer = useRef<IntersectionObserver>()
  const lastCallElementRef = useCallback((node: HTMLDivElement | null) => {
    if (isLoadingMore) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        loadMore()
      }
    })
    if (node) observer.current.observe(node)
  }, [isLoadingMore, hasMore])

  // Load more function
  const loadMore = async () => {
    if (isLoadingMore || !hasMore) return
    setIsLoadingMore(true)
    const nextPage = page + 1
    const newCalls = await fetchCalls(nextPage)
    setCalls(prev => [...prev, ...newCalls])
    setPage(nextPage)
    setIsLoadingMore(false)
  }

  if (isLoading) {
    return (
      <MainLayout>
        <div className="flex items-center justify-center h-full">
          <Loader className="w-8 h-8 text-purple-600 animate-spin" />
        </div>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Call History</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              View and manage your past calls
            </p>
          </div>
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
          {calls.map((call, index) => (
            <div
              key={call.id}
              ref={index === calls.length - 1 ? lastCallElementRef : null}
              className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
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

          {/* Loading More Indicator */}
          {isLoadingMore && (
            <div className="p-4 flex justify-center">
              <Loader className="w-6 h-6 text-purple-600 animate-spin" />
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  )
} 