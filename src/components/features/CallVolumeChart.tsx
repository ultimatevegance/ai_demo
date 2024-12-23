'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { useTheme } from '@/components/providers/ThemeProvider'

const data = [
  { month: 'Oct, 2022', outbound: 30, inbound: 45 },
  { month: 'Nov, 2022', outbound: 80, inbound: 120 },
  { month: 'Dec, 2022', outbound: 65, inbound: 140 },
  { month: 'Jan, 2023', outbound: 45, inbound: 30 },
]

export default function CallVolumeChart() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div className="h-[300px]">
      <div className="flex items-center gap-6 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#E4E2FF] dark:bg-[#483D8B]"></div>
          <span className="text-sm text-gray-500 dark:text-gray-400">Outbound</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#6E42E5]"></div>
          <span className="text-sm text-gray-500 dark:text-gray-400">Inbound</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barGap={4}>
          <CartesianGrid 
            vertical={false} 
            strokeDasharray="3 3" 
            stroke={isDark ? '#374151' : '#E5E7EB'}
          />
          <XAxis 
            dataKey="month" 
            axisLine={false}
            tickLine={false}
            tick={{ fill: isDark ? '#9CA3AF' : '#6B7280', fontSize: 12 }}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fill: isDark ? '#9CA3AF' : '#6B7280', fontSize: 12 }}
            ticks={[0, 50, 100, 200, 300, 400]}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: isDark ? '#1F2937' : '#FFFFFF',
              borderColor: isDark ? '#374151' : '#E5E7EB',
              color: isDark ? '#FFFFFF' : '#111827'
            }}
          />
          <Bar 
            dataKey="outbound" 
            fill={isDark ? '#483D8B' : '#E4E2FF'} 
            radius={[4, 4, 0, 0]} 
          />
          <Bar 
            dataKey="inbound" 
            fill="#6E42E5" 
            radius={[4, 4, 0, 0]} 
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
} 