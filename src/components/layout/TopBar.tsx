'use client'

import { Search } from 'lucide-react'
import Image from 'next/image'

export default function TopBar() {
  return (
    <div className="h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-4">
      {/* Logo/Brand */}
      <div className="flex items-center">
        <span className="text-xl font-bold text-gray-900 dark:text-white">Phantom</span>
      </div>

      {/* Centered Search Bar */}
      <div className="absolute left-1/2 -translate-x-1/2 w-full max-w-[400px]">
        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <div className="absolute inset-y-0 left-[42px] flex items-center pointer-events-none">
            <span className="text-gray-400 text-sm">⌘F</span>
          </div>
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-16 pr-4 py-2 bg-gray-50 dark:bg-gray-700 
              border border-gray-200 dark:border-gray-600 
              rounded-full focus:outline-none focus:ring-2 
              focus:ring-purple-500 focus:border-transparent
              text-gray-900 dark:text-gray-100
              placeholder:text-gray-400 dark:placeholder:text-gray-500"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <button className="px-3 py-1.5 text-sm text-gray-600 dark:text-gray-300 
          bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 
          rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600">
          Export CSV
        </button>
        <div className="w-8 h-8 rounded-full overflow-hidden">
          <Image
            src="https://picsum.photos/id/64/32/32"
            alt="Profile"
            width={32}
            height={32}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
} 