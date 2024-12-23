'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { useTheme } from '@/components/providers/ThemeProvider'

const data = [
  { month: 'Oct, 2022', average: 50, total: 45 },
  { month: 'Nov, 2022', average: 180, total: 150 },
  { month: 'Jan, 2023', average: 250, total: 220 },
]

export default function HandleTimeChart() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div className="h-[300px]">
      <div className="flex items-center gap-6 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
          <span className="text-sm text-gray-500 dark:text-gray-400">Average</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-purple-600"></div>
          <span className="text-sm text-gray-500 dark:text-gray-400">Total</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid 
            strokeDasharray="3 3" 
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
          <Line 
            type="monotone" 
            dataKey="average" 
            stroke="#10B981" 
            strokeWidth={2} 
          />
          <Line 
            type="monotone" 
            dataKey="total" 
            stroke="#7C3AED" 
            strokeWidth={2} 
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
} 