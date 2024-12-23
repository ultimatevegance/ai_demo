'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Mail, Lock, Loader } from 'lucide-react'
import Image from 'next/image'

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Add your actual login logic here
    console.log('Logging in with:', { email, password })
    
    setIsLoading(false)
    router.push('/') // Redirect to home after login
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col justify-center">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-xl">C</span>
          </div>
        </div>
        <h2 className="text-center text-2xl font-bold text-gray-900 dark:text-white">
          Welcome back
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
          Sign in to your account to continue
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white dark:bg-gray-800 py-8 px-4 shadow-lg sm:rounded-xl sm:px-10 
          border border-gray-200 dark:border-gray-700">
          <form className="space-y-6" onSubmit={handleLogin}>
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email address
              </label>
              <div className="mt-1 relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full pl-10 pr-4 py-2 
                    bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 
                    rounded-lg text-gray-900 dark:text-white placeholder-gray-500
                    focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your email"
                />
                <Mail className="absolute left-3 top-2.5 text-gray-400" size={20} />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full pl-10 pr-4 py-2 
                    bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 
                    rounded-lg text-gray-900 dark:text-white placeholder-gray-500
                    focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your password"
                />
                <Lock className="absolute left-3 top-2.5 text-gray-400" size={20} />
              </div>
            </div>

            {/* Remember and Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 
                    border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-purple-600 hover:text-purple-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-2.5 px-4 border border-transparent 
                rounded-lg shadow-sm text-sm font-medium text-white 
                bg-purple-600 hover:bg-purple-700 focus:outline-none 
                focus:ring-2 focus:ring-offset-2 focus:ring-purple-500
                disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <Loader className="w-5 h-5 animate-spin" />
              ) : (
                'Sign in'
              )}
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="mt-6">
            <p className="text-center text-sm text-gray-600 dark:text-gray-400">
              Don't have an account?{' '}
              <a href="#" className="font-medium text-purple-600 hover:text-purple-500">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 