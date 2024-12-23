'use client'

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Score', value: 62 },
  { name: 'Remaining', value: 38 },
]

const COLORS = ['#2ED4A5', '#F3F4F6']

export default function CSATGauge() {
  return (
    <div className="h-[300px] relative">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            startAngle={180}
            endAngle={0}
            innerRadius={100}
            outerRadius={120}
            paddingAngle={0}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="text-4xl font-bold">62%</p>
        <p className="text-sm text-gray-500">Target: 86%</p>
      </div>
    </div>
  )
} 