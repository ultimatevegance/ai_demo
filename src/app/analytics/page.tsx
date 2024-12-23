'use client'

import MainLayout from '@/components/layout/MainLayout'
import { CalendarRange, Users } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts'
import { useTheme } from '@/components/providers/ThemeProvider'

const performanceData = [
  { month: 'Jan', value: 400 },
  { month: 'Feb', value: 300 },
  { month: 'Mar', value: 600 },
  { month: 'Apr', value: 800 },
  { month: 'May', value: 500 },
]

const trendsData = [
  { date: '2024-01', calls: 1200, satisfaction: 85 },
  { date: '2024-02', calls: 1400, satisfaction: 88 },
  { date: '2024-03', calls: 1100, satisfaction: 82 },
  { date: '2024-04', calls: 1600, satisfaction: 90 },
]

const metrics = [
  { label: 'Total Calls', value: '2,345', change: '+12.5%' },
  { label: 'Avg. Duration', value: '5m 23s', change: '-2.3%' },
  { label: 'Resolution Rate', value: '94.2%', change: '+5.1%' },
  { label: 'Customer Satisfaction', value: '4.8/5', change: '+0.3' },
]

export default function AnalyticsPage() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <MainLayout>
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Analytics</h1>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 
              rounded-lg border border-gray-200 dark:border-gray-700 
              hover:bg-gray-50 dark:hover:bg-gray-700">
              <CalendarRange size={20} className="text-gray-500 dark:text-gray-400" />
              <span className="text-gray-600 dark:text-gray-300">Date Range</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 
              rounded-lg border border-gray-200 dark:border-gray-700 
              hover:bg-gray-50 dark:hover:bg-gray-700">
              <Users size={20} className="text-gray-500 dark:text-gray-400" />
              <span className="text-gray-600 dark:text-gray-300">Filter by Team</span>
            </button>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-4 gap-6 mb-6">
          {metrics.map((metric) => (
            <div key={metric.label} className="bg-white dark:bg-gray-800 p-6 rounded-xl 
              border border-gray-200 dark:border-gray-700">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                {metric.label}
              </h3>
              <div className="flex items-end justify-between">
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {metric.value}
                </p>
                <span className={`text-sm font-medium ${
                  metric.change.startsWith('+') 
                    ? 'text-green-600 dark:text-green-400' 
                    : 'text-red-600 dark:text-red-400'
                }`}>
                  {metric.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* Performance Chart */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl 
            border border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Performance Overview
            </h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={performanceData}>
                  <CartesianGrid 
                    strokeDasharray="3 3" 
                    vertical={false}
                    stroke={isDark ? '#374151' : '#E5E7EB'} 
                  />
                  <XAxis 
                    dataKey="month" 
                    tick={{ fill: isDark ? '#9CA3AF' : '#6B7280' }}
                    stroke={isDark ? '#4B5563' : '#E5E7EB'}
                  />
                  <YAxis 
                    tick={{ fill: isDark ? '#9CA3AF' : '#6B7280' }}
                    stroke={isDark ? '#4B5563' : '#E5E7EB'}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: isDark ? '#1F2937' : '#FFFFFF',
                      borderColor: isDark ? '#374151' : '#E5E7EB',
                      color: isDark ? '#FFFFFF' : '#111827'
                    }}
                  />
                  <Bar dataKey="value" fill="#6E42E5" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Trends Chart */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl 
            border border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Trends
            </h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trendsData}>
                  <CartesianGrid 
                    strokeDasharray="3 3" 
                    vertical={false}
                    stroke={isDark ? '#374151' : '#E5E7EB'} 
                  />
                  <XAxis 
                    dataKey="date" 
                    tick={{ fill: isDark ? '#9CA3AF' : '#6B7280' }}
                    stroke={isDark ? '#4B5563' : '#E5E7EB'}
                  />
                  <YAxis 
                    tick={{ fill: isDark ? '#9CA3AF' : '#6B7280' }}
                    stroke={isDark ? '#4B5563' : '#E5E7EB'}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: isDark ? '#1F2937' : '#FFFFFF',
                      borderColor: isDark ? '#374151' : '#E5E7EB',
                      color: isDark ? '#FFFFFF' : '#111827'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="calls" 
                    stroke="#6E42E5" 
                    strokeWidth={2}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="satisfaction" 
                    stroke="#10B981" 
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Additional Metrics */}
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl 
            border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Call Distribution
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-500 dark:text-gray-400">Inbound</span>
                <span className="text-gray-900 dark:text-white font-medium">65%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 dark:text-gray-400">Outbound</span>
                <span className="text-gray-900 dark:text-white font-medium">35%</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl 
            border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Response Times
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-500 dark:text-gray-400">Average</span>
                <span className="text-gray-900 dark:text-white font-medium">2m 34s</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 dark:text-gray-400">Peak Hours</span>
                <span className="text-gray-900 dark:text-white font-medium">3m 45s</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl 
            border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quality Metrics
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-500 dark:text-gray-400">First Call Resolution</span>
                <span className="text-gray-900 dark:text-white font-medium">78%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 dark:text-gray-400">Transfer Rate</span>
                <span className="text-gray-900 dark:text-white font-medium">12%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
} 