'use client'

import { Phone, Clock, BarChart2, PieChart } from 'lucide-react'

const metrics = [
  {
    title: 'Flagged Calls',
    value: '1,765',
    change: '+42%',
    trend: 'up',
    subtext: 'to last quarter',
    icon: Phone,
  },
  {
    title: 'Avg. Call Duration',
    value: '1m:36s',
    change: '+86%',
    trend: 'up',
    subtext: 'to last quarter',
    icon: Clock,
  },
  {
    title: 'Total Interaction',
    value: '2,045',
    change: '-32%',
    trend: 'down',
    subtext: 'to last quarter',
    icon: BarChart2,
  },
  {
    title: 'Total Call Score',
    value: '24%',
    change: '+16%',
    trend: 'up',
    subtext: 'to last quarter',
    icon: PieChart,
  },
]

export default function MetricsCards() {
  return (
    <div className="grid grid-cols-4 gap-6 mb-6">
      {metrics.map((metric) => {
        const Icon = metric.icon
        return (
          <div
            key={metric.title}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl 
              border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center gap-2 mb-4">
              <Icon className="text-gray-400 dark:text-gray-500" size={24} />
              <h3 className="text-gray-500 dark:text-gray-400 text-sm">{metric.title}</h3>
            </div>
            <div className="flex items-end justify-between">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                {metric.value}
              </p>
              <div className="text-right">
                <p className={`text-sm font-medium ${
                  metric.trend === 'up' 
                    ? 'text-green-600 dark:text-green-400' 
                    : 'text-red-600 dark:text-red-400'
                }`}>
                  {metric.change}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {metric.subtext}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
} 