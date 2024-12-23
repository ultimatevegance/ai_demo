'use client'

import MainLayout from '@/components/layout/MainLayout'
import { Camera, Mail, Phone, MapPin, Calendar, Edit, Save } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <MainLayout>
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Profile</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              Manage your personal information
            </p>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center gap-2 px-4 py-2 
              bg-purple-600 hover:bg-purple-700 text-white 
              rounded-lg transition-colors"
          >
            {isEditing ? (
              <>
                <Save size={20} />
                <span>Save Changes</span>
              </>
            ) : (
              <>
                <Edit size={20} />
                <span>Edit Profile</span>
              </>
            )}
          </button>
        </div>

        {/* Profile Content */}
        <div className="grid gap-6">
          {/* Profile Photo Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl 
            border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Profile Photo
            </h2>
            <div className="flex items-center gap-6">
              <div className="relative">
                <Image
                  src="https://picsum.photos/id/64/120/120"
                  alt="Profile"
                  width={120}
                  height={120}
                  className="rounded-full"
                />
                {isEditing && (
                  <button className="absolute bottom-0 right-0 p-2 
                    bg-purple-600 hover:bg-purple-700 
                    text-white rounded-full transition-colors">
                    <Camera size={20} />
                  </button>
                )}
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  John Doe
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Senior Customer Service Agent
                </p>
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div className="bg-white dark:bg-gray-800 rounded-xl 
            border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  defaultValue="John Doe"
                  disabled={!isEditing}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 
                    border border-gray-200 dark:border-gray-600 rounded-lg
                    text-gray-900 dark:text-white
                    disabled:opacity-60 disabled:cursor-not-allowed
                    focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <div className="flex items-center gap-2">
                  <Mail size={20} className="text-gray-400" />
                  <input
                    type="email"
                    defaultValue="john.doe@company.com"
                    disabled={!isEditing}
                    className="flex-1 px-4 py-2 bg-gray-50 dark:bg-gray-700 
                      border border-gray-200 dark:border-gray-600 rounded-lg
                      text-gray-900 dark:text-white
                      disabled:opacity-60 disabled:cursor-not-allowed
                      focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Phone
                </label>
                <div className="flex items-center gap-2">
                  <Phone size={20} className="text-gray-400" />
                  <input
                    type="tel"
                    defaultValue="+1 (555) 123-4567"
                    disabled={!isEditing}
                    className="flex-1 px-4 py-2 bg-gray-50 dark:bg-gray-700 
                      border border-gray-200 dark:border-gray-600 rounded-lg
                      text-gray-900 dark:text-white
                      disabled:opacity-60 disabled:cursor-not-allowed
                      focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Location
                </label>
                <div className="flex items-center gap-2">
                  <MapPin size={20} className="text-gray-400" />
                  <input
                    type="text"
                    defaultValue="New York, USA"
                    disabled={!isEditing}
                    className="flex-1 px-4 py-2 bg-gray-50 dark:bg-gray-700 
                      border border-gray-200 dark:border-gray-600 rounded-lg
                      text-gray-900 dark:text-white
                      disabled:opacity-60 disabled:cursor-not-allowed
                      focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Work Information */}
          <div className="bg-white dark:bg-gray-800 rounded-xl 
            border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Work Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Department
                </label>
                <input
                  type="text"
                  defaultValue="Customer Service"
                  disabled={!isEditing}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 
                    border border-gray-200 dark:border-gray-600 rounded-lg
                    text-gray-900 dark:text-white
                    disabled:opacity-60 disabled:cursor-not-allowed
                    focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Join Date
                </label>
                <div className="flex items-center gap-2">
                  <Calendar size={20} className="text-gray-400" />
                  <input
                    type="text"
                    defaultValue="January 15, 2023"
                    disabled={!isEditing}
                    className="flex-1 px-4 py-2 bg-gray-50 dark:bg-gray-700 
                      border border-gray-200 dark:border-gray-600 rounded-lg
                      text-gray-900 dark:text-white
                      disabled:opacity-60 disabled:cursor-not-allowed
                      focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
} 