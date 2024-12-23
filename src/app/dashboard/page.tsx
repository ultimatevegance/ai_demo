'use client'

import MainLayout from '@/components/layout/MainLayout'
import MetricsCards from '@/components/features/MetricsCards'
import CallVolumeChart from '@/components/features/CallVolumeChart'
import HandleTimeChart from '@/components/features/HandleTimeChart'
import CSATGauge from '@/components/features/CSATGauge'
import SentimentChart from '@/components/features/SentimentChart'
import AgentLeaderboard from '@/components/features/AgentLeaderboard'

export default function DashboardPage() {
  return (
    <MainLayout>
      <div className="max-w-[1200px] mx-auto">
        <MetricsCards />
        <div className="grid grid-cols-2 gap-6 mb-6">
          <CallVolumeChart />
          <HandleTimeChart />
        </div>
        <div className="grid grid-cols-2 gap-6 mb-6">
          <CSATGauge />
          <SentimentChart />
        </div>
        <AgentLeaderboard />
      </div>
    </MainLayout>
  )
} 