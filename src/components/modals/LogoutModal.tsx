'use client'

import { LogOut } from 'lucide-react'

interface LogoutModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
}

export default function LogoutModal({ isOpen, onClose, onConfirm }: LogoutModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-gray-900/50 dark:bg-gray-900/80"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg 
        w-full max-w-md p-6 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-red-100 dark:bg-red-900/20 rounded-full">
            <LogOut className="w-6 h-6 text-red-600 dark:text-red-400" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Confirm Logout
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              Are you sure you want to log out of your account?
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 
              text-gray-700 dark:text-gray-300 rounded-lg
              hover:bg-gray-200 dark:hover:bg-gray-600 
              transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg
              hover:bg-red-700 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  )
} 