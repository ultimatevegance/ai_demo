'use client'

export default function DashboardBanner() {
  return (
    <div className="p-6 bg-purple-600 dark:bg-purple-900 rounded-xl text-white">
      <h2 className="text-xl font-semibold mb-2">
        Introduction Direct Call Feature
      </h2>
      <p className="text-purple-100 dark:text-purple-200 mb-4">
        Learn how to use our new direct call feature to improve customer satisfaction
      </p>
      <button className="px-4 py-2 bg-white dark:bg-purple-800 text-purple-600 
        dark:text-purple-100 rounded-lg font-medium hover:bg-purple-50 
        dark:hover:bg-purple-700 transition-colors">
        Learn More
      </button>
    </div>
  )
} 