'use client'

import MainLayout from '@/components/layout/MainLayout'
import { Search, HelpCircle, Book, MessageCircle, Mail, Phone } from 'lucide-react'

const supportCategories = [
  {
    icon: Book,
    title: 'Documentation',
    description: 'Browse our detailed documentation',
    link: '#',
  },
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Chat with our support team',
    link: '#',
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Send us an email',
    link: '#',
  },
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Call our support line',
    link: '#',
  },
]

const faqItems = [
  {
    question: 'How do I reset my password?',
    answer: 'You can reset your password by clicking on the "Forgot Password" link on the login page.',
  },
  {
    question: 'How do I export call data?',
    answer: 'Go to the Analytics page and click the Export button in the top right corner.',
  },
  {
    question: 'Can I integrate with other tools?',
    answer: 'Yes, we offer various integration options. Check our API documentation for details.',
  },
]

export default function SupportPage() {
  return (
    <MainLayout>
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            How can we help you?
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Search our knowledge base or get in touch with our support team
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for help..."
              className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 
                border border-gray-200 dark:border-gray-700 rounded-xl
                text-gray-900 dark:text-white placeholder:text-gray-500
                focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <Search className="absolute left-4 top-4 text-gray-400" size={24} />
          </div>
        </div>

        {/* Support Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {supportCategories.map((category) => (
            <div key={category.title} className="bg-white dark:bg-gray-800 
              rounded-xl border border-gray-200 dark:border-gray-700 p-6
              hover:border-purple-500 dark:hover:border-purple-500 
              transition-colors cursor-pointer">
              <category.icon className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {category.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                {category.description}
              </p>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl 
          border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="pb-6 border-b border-gray-200 dark:border-gray-700 
                last:border-0 last:pb-0">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  {item.question}
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Banner */}
        <div className="mt-8 bg-purple-600 dark:bg-purple-900 rounded-xl p-6 text-center">
          <h2 className="text-xl font-semibold text-white mb-2">
            Still need help?
          </h2>
          <p className="text-purple-100 mb-4">
            Our support team is just a click away
          </p>
          <button className="px-6 py-2 bg-white dark:bg-purple-800 
            text-purple-600 dark:text-purple-100 rounded-lg font-medium 
            hover:bg-purple-50 dark:hover:bg-purple-700 transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </MainLayout>
  )
} 