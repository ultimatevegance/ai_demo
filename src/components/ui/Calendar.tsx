'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

interface CalendarProps {
  startDate: Date | null
  endDate: Date | null
  onSelect: (start: Date | null, end: Date | null) => void
}

export default function Calendar({ startDate, endDate, onSelect }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [hoverDate, setHoverDate] = useState<Date | null>(null)

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const firstDayOfMonth = new Date(year, month, 1).getDay()
    
    const days: Date[] = []
    
    // Add previous month's days
    for (let i = 0; i < firstDayOfMonth; i++) {
      const prevDate = new Date(year, month, -i)
      days.unshift(prevDate)
    }
    
    // Add current month's days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i))
    }
    
    // Add next month's days to complete the grid
    const remainingDays = 42 - days.length // 6 rows * 7 days
    for (let i = 1; i <= remainingDays; i++) {
      days.push(new Date(year, month + 1, i))
    }
    
    return days
  }

  const isSelected = (date: Date) => {
    if (!startDate || !endDate) return false
    return date >= startDate && date <= endDate
  }

  const isInRange = (date: Date) => {
    if (!startDate || !hoverDate) return false
    return date >= startDate && date <= hoverDate
  }

  const handleDateClick = (date: Date) => {
    if (!startDate || (startDate && endDate)) {
      onSelect(date, null)
    } else {
      if (date < startDate) {
        onSelect(date, startDate)
      } else {
        onSelect(startDate, date)
      }
    }
  }

  const handleMouseEnter = (date: Date) => {
    if (startDate && !endDate) {
      setHoverDate(date)
    }
  }

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  return (
    <div className="p-4">
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
        >
          <ChevronLeft size={20} className="text-gray-500 dark:text-gray-400" />
        </button>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </h2>
        <button
          onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
        >
          <ChevronRight size={20} className="text-gray-500 dark:text-gray-400" />
        </button>
      </div>

      {/* Week Days */}
      <div className="grid grid-cols-7 mb-2">
        {weekDays.map((day) => (
          <div key={day} className="text-center text-sm font-medium text-gray-500 dark:text-gray-400">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1">
        {getDaysInMonth(currentMonth).map((date, index) => {
          const isCurrentMonth = date.getMonth() === currentMonth.getMonth()
          const isToday = new Date().toDateString() === date.toDateString()
          
          return (
            <button
              key={index}
              onClick={() => handleDateClick(date)}
              onMouseEnter={() => handleMouseEnter(date)}
              className={`
                p-2 text-sm rounded-lg
                ${isCurrentMonth 
                  ? 'text-gray-900 dark:text-white' 
                  : 'text-gray-400 dark:text-gray-600'
                }
                ${isToday && 'ring-2 ring-purple-500 ring-offset-2 dark:ring-offset-gray-800'}
                ${isSelected(date) && 'bg-purple-500 text-white'}
                ${!isSelected(date) && isInRange(date) && 'bg-purple-100 dark:bg-purple-900/20'}
                hover:bg-gray-100 dark:hover:bg-gray-700
              `}
            >
              {date.getDate()}
            </button>
          )
        })}
      </div>
    </div>
  )
} 