'use client'

import { MoreVertical } from 'lucide-react'

const performanceData = [
  {
    agent: 'Alex Shotay',
    team: 'Sabertooth',
    qaScore: '86%',
    sentiment: 'Positive',
    date: 'Nov 08, 2024',
  },
  // Add more performance data as needed
]

export default function PerformanceList() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="text-xs text-gray-500 border-b border-gray-100">
            <th className="pb-2 font-medium text-left">AGENT NAME</th>
            <th className="pb-2 font-medium text-left">TEAM</th>
            <th className="pb-2 font-medium text-left">QA SCORE</th>
            <th className="pb-2 font-medium text-left">SENTIMENT SCORE</th>
            <th className="pb-2 font-medium text-left">AUDITED DATE</th>
            <th className="pb-2 font-medium text-left"></th>
          </tr>
        </thead>
        <tbody>
          {performanceData.map((item, index) => (
            <tr key={index} className="border-b border-gray-100 last:border-0">
              <td className="py-3 text-sm font-medium">{item.agent}</td>
              <td className="py-3 text-sm text-gray-500">{item.team}</td>
              <td className="py-3">
                <span className="text-sm font-medium text-green-600">{item.qaScore}</span>
              </td>
              <td className="py-3">
                <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded-full">
                  {item.sentiment}
                </span>
              </td>
              <td className="py-3 text-sm text-gray-500">{item.date}</td>
              <td className="py-3">
                <button className="p-1 hover:bg-gray-50 rounded">
                  <MoreVertical size={16} className="text-gray-400" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
} 