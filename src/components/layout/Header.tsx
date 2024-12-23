'use client'

import { Search, Download, Bell } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="h-16 bg-white border-b border-gray-200">
      <div className="h-full px-6 flex items-center justify-between">
        <div className="flex items-center flex-1">
          <div className="relative w-96">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 text-sm text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-50">
            <Download size={18} />
            Export CSV
          </button>
          
          <button className="relative p-2 text-gray-400 hover:text-gray-600">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          
          <div className="flex items-center gap-3">
            <Image
              src="https://picsum.photos/id/64/32/32"
              alt="User avatar"
              width={32}
              height={32}
              className="rounded-full"
            />
            <div className="text-sm">
              <p className="font-medium">John Doe</p>
              <p className="text-gray-500">Team Lead</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
} 