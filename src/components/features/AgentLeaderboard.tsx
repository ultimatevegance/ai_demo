'use client'

import { Crown, TrendingUp, TrendingDown, Star, Phone, Clock } from 'lucide-react'
import Image from 'next/image'

interface Agent {
  id: number
  name: string
  avatar: string
  rank: number
  calls: number
  callsChange: string
  avgHandleTime: string
  avgHandleTimeChange: string
  satisfaction: number
  satisfactionChange: string
  status: 'online' | 'offline' | 'busy'
}

const agents: Agent[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    avatar: 'https://picsum.photos/id/64/40/40',
    rank: 1,
    calls: 156,
    callsChange: '+12%',
    avgHandleTime: '3m 45s',
    avgHandleTimeChange: '-8%',
    satisfaction: 4.9,
    satisfactionChange: '+0.3',
    status: 'online',
  },
  {
    id: 2,
    name: 'Michael Chen',
    avatar: 'https://picsum.photos/id/65/40/40',
    rank: 2,
    calls: 142,
    callsChange: '+8%',
    avgHandleTime: '4m 12s',
    avgHandleTimeChange: '-5%',
    satisfaction: 4.8,
    satisfactionChange: '+0.2',
    status: 'busy',
  },
  {
    id: 3,
    name: 'Emily Davis',
    avatar: 'https://picsum.photos/id/66/40/40',
    rank: 3,
    calls: 138,
    callsChange: '+15%',
    avgHandleTime: '3m 58s',
    avgHandleTimeChange: '-10%',
    satisfaction: 4.7,
    satisfactionChange: '+0.4',
    status: 'online',
  },
  {
    id: 4,
    name: 'James Wilson',
    avatar: 'https://picsum.photos/id/67/40/40',
    rank: 4,
    calls: 125,
    callsChange: '+5%',
    avgHandleTime: '4m 30s',
    avgHandleTimeChange: '-3%',
    satisfaction: 4.6,
    satisfactionChange: '+0.1',
    status: 'offline',
  },
  {
    id: 5,
    name: 'Lisa Anderson',
    avatar: 'https://picsum.photos/id/68/40/40',
    rank: 5,
    calls: 118,
    callsChange: '+7%',
    avgHandleTime: '4m 15s',
    avgHandleTimeChange: '-6%',
    satisfaction: 4.5,
    satisfactionChange: '+0.2',
    status: 'online',
  },
]

export default function AgentLeaderboard() {
  return (
    <div className="space-y-4">
      {agents.map((agent) => (
        <div
          key={agent.id}
          className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-700/50 
            rounded-lg relative"
        >
          {/* Rank Badge */}
          <div className="absolute -left-2 -top-2">
            {agent.rank === 1 && (
              <div className="p-1 bg-yellow-400 rounded-full">
                <Crown className="w-4 h-4 text-white" />
              </div>
            )}
          </div>

          {/* Agent Info */}
          <div className="relative">
            <Image
              src={agent.avatar}
              alt={agent.name}
              width={48}
              height={48}
              className="rounded-full"
            />
            <div className={`absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-white dark:border-gray-800
              ${agent.status === 'online' ? 'bg-green-500' : 
                agent.status === 'busy' ? 'bg-yellow-500' : 'bg-gray-400'
              }`}
            />
          </div>

          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">
                  {agent.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Rank #{agent.rank}
                </p>
              </div>
              <div className="flex items-center gap-4">
                {/* Calls */}
                <div className="text-right">
                  <div className="flex items-center gap-1">
                    <Phone size={14} className="text-gray-400" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {agent.calls}
                    </span>
                  </div>
                  <div className="flex items-center gap-0.5 text-xs">
                    {agent.callsChange.startsWith('+') ? (
                      <TrendingUp size={12} className="text-green-500" />
                    ) : (
                      <TrendingDown size={12} className="text-red-500" />
                    )}
                    <span className={agent.callsChange.startsWith('+') ? 
                      'text-green-500' : 'text-red-500'}>
                      {agent.callsChange}
                    </span>
                  </div>
                </div>

                {/* Handle Time */}
                <div className="text-right">
                  <div className="flex items-center gap-1">
                    <Clock size={14} className="text-gray-400" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {agent.avgHandleTime}
                    </span>
                  </div>
                  <div className="flex items-center gap-0.5 text-xs">
                    {agent.avgHandleTimeChange.startsWith('-') ? (
                      <TrendingUp size={12} className="text-green-500" />
                    ) : (
                      <TrendingDown size={12} className="text-red-500" />
                    )}
                    <span className={agent.avgHandleTimeChange.startsWith('-') ? 
                      'text-green-500' : 'text-red-500'}>
                      {agent.avgHandleTimeChange}
                    </span>
                  </div>
                </div>

                {/* Satisfaction */}
                <div className="text-right">
                  <div className="flex items-center gap-1">
                    <Star size={14} className="text-gray-400" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {agent.satisfaction}
                    </span>
                  </div>
                  <div className="flex items-center gap-0.5 text-xs">
                    {agent.satisfactionChange.startsWith('+') ? (
                      <TrendingUp size={12} className="text-green-500" />
                    ) : (
                      <TrendingDown size={12} className="text-red-500" />
                    )}
                    <span className={agent.satisfactionChange.startsWith('+') ? 
                      'text-green-500' : 'text-red-500'}>
                      {agent.satisfactionChange}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
} 