'use client'

import MainLayout from '@/components/layout/MainLayout'
import CallVolumeChart from '@/components/features/CallVolumeChart'
import HandleTimeChart from '@/components/features/HandleTimeChart'
import CSATGauge from '@/components/features/CSATGauge'
import SentimentChart from '@/components/features/SentimentChart'
import AgentLeaderboard from '@/components/features/AgentLeaderboard'
import DashboardBanner from '@/components/features/DashboardBanner'
import PerformanceList from '@/components/features/PerformanceList'
import { 
  CalendarIcon, ChevronDown, 
  ArrowUpRight, ArrowDownRight, Phone, Clock,
  TrendingUp, BarChart3 
} from 'lucide-react'
import { useState } from 'react'
import Calendar from '@/components/ui/Calendar'

const stats = [
  {
    id: 1,
    name: 'Total Calls',
    value: '2,543',
    change: '+12.3%',
    trend: 'up',
    icon: Phone,
  },
  {
    id: 2,
    name: 'Avg. Handle Time',
    value: '4m 23s',
    change: '-8.1%',
    trend: 'down',
    icon: Clock,
  },
  {
    id: 3,
    name: 'Resolution Rate',
    value: '92.8%',
    change: '+3.2%',
    trend: 'up',
    icon: TrendingUp,
  },
  {
    id: 4,
    name: 'Call Volume',
    value: '1,789',
    change: '+5.4%',
    trend: 'up',
    icon: BarChart3,
  },
]

const dateRanges = [
  { label: 'Today', value: 'today' },
  { label: 'Yesterday', value: 'yesterday' },
  { label: 'Last 7 days', value: '7days' },
  { label: 'Last 30 days', value: '30days' },
  { label: 'This Month', value: 'thisMonth' },
  { label: 'Last Month', value: 'lastMonth' },
  { label: 'Custom Range', value: 'custom' },
]

export default function DashboardPage() {
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [startDate, setStartDate] = useState<Date | null>(null)
  const [endDate, setEndDate] = useState<Date | null>(null)

  const handleDateSelect = (start: Date | null, end: Date | null) => {
    setStartDate(start)
    setEndDate(end)
    
    if (start && end) {
      setShowDatePicker(false)
      // Here you would typically fetch new data for the selected range
      console.log('Date range selected:', { start, end })
    }
  }

  const formatDateRange = () => {
    if (!startDate) return 'Select date range'
    if (!endDate) return `From ${startDate.toLocaleDateString()}`
    return `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`
  }

  return (
    <MainLayout>
      <div className="max-w-[1200px] mx-auto">
        {/* Header with Date Range Selector */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              Track your call center performance
            </p>
          </div>

          {/* Date Range Selector */}
          <div className="relative">
            <button
              onClick={() => setShowDatePicker(!showDatePicker)}
              className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 
                border border-gray-200 dark:border-gray-700 rounded-lg
                hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
            >
              <CalendarIcon size={20} className="text-gray-500 dark:text-gray-400" />
              <span className="text-gray-700 dark:text-gray-300">
                {formatDateRange()}
              </span>
              <ChevronDown size={16} className="text-gray-500 dark:text-gray-400" />
            </button>

            {/* Calendar Panel */}
            {showDatePicker && (
              <div className="absolute right-0 mt-2 bg-white dark:bg-gray-800 
                rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 
                z-50">
                <Calendar 
                  startDate={startDate}
                  endDate={endDate}
                  onSelect={handleDateSelect}
                />
              </div>
            )}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.id}
                className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 
                  dark:border-gray-700 p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <Icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className={`flex items-center gap-1 text-sm
                    ${stat.trend === 'up' 
                      ? 'text-green-600 dark:text-green-400' 
                      : 'text-red-600 dark:text-red-400'
                    }`}>
                    {stat.trend === 'up' ? (
                      <ArrowUpRight size={16} />
                    ) : (
                      <ArrowDownRight size={16} />
                    )}
                    <span>{stat.change}</span>
                  </div>
                </div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {stat.name}
                </h3>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white mt-1">
                  {stat.value}
                </p>
              </div>
            )
          })}
        </div>

        <div className="grid grid-cols-[2fr,1fr] gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Charts Row */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl 
                border border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Call Volume
                </h2>
                <CallVolumeChart />
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl 
                border border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Avg. Handle Time
                </h2>
                <HandleTimeChart />
              </div>
            </div>

            {/* CSAT and Sentiment Analysis Row */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl 
                border border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  CSAT
                </h2>
                <CSATGauge />
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl 
                border border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Sentiment Analysis
                </h2>
                <SentimentChart />
              </div>
            </div>

            {/* Performance List */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl 
              border border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Performance List
              </h2>
              <PerformanceList />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl 
              border border-gray-200 dark:border-gray-700">
              <DashboardBanner />
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl 
              border border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Agent Leaderboard
              </h2>
              <AgentLeaderboard />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
