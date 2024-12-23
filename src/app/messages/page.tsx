'use client'

import MainLayout from '@/components/layout/MainLayout'
import { Search, Edit, Star, Phone, MoreVertical, Send } from 'lucide-react'
import Image from 'next/image'
import { useState, useRef, KeyboardEvent } from 'react'

// Add auto-reply messages pool
const autoReplies = [
  "I'll look into that right away!",
  "Thanks for letting me know.",
  "Could you provide more details?",
  "Let me check with the team and get back to you.",
  "That sounds good to me!",
  "I'll schedule that for our next meeting.",
  "Great progress on this!",
  "I'll send you an update by end of day.",
]

const initialConversations = [
  {
    id: 1,
    contact: {
      name: 'Sarah Johnson',
      avatar: 'https://picsum.photos/id/64/40/40',
      status: 'online',
    },
    lastMessage: "I'll send over the updated call reports shortly.",
    time: '2:30 PM',
    unread: 2,
    pinned: true,
    messages: [
      {
        id: 1,
        text: "Hi Sarah, could you send me the latest call reports?",
        time: '2:15 PM',
        sent: true,
      },
      {
        id: 2,
        text: "I'll send over the updated call reports shortly.",
        time: '2:30 PM',
        sent: false,
      },
    ],
  },
  {
    id: 2,
    contact: {
      name: 'Michael Chen',
      avatar: 'https://picsum.photos/id/65/40/40',
      status: 'offline',
    },
    lastMessage: 'Great work on handling that customer inquiry!',
    time: '11:45 AM',
    unread: 0,
    pinned: false,
    messages: [
      {
        id: 1,
        text: "Great work on handling that customer inquiry!",
        time: '11:45 AM',
        sent: false,
      },
    ],
  },
  {
    id: 3,
    contact: {
      name: 'Emily Rodriguez',
      avatar: 'https://picsum.photos/id/66/40/40',
      status: 'busy',
    },
    lastMessage: 'Team meeting scheduled for tomorrow at 10 AM',
    time: 'Yesterday',
    unread: 1,
    pinned: false,
    messages: [
      {
        id: 1,
        text: "Team meeting scheduled for tomorrow at 10 AM",
        time: 'Yesterday',
        sent: false,
      },
    ],
  },
]

const statusColors = {
  online: 'bg-green-500',
  offline: 'bg-gray-400',
  busy: 'bg-yellow-500',
}

interface Message {
  id: number
  text: string
  time: string
  sent: boolean
}

interface Conversation {
  id: number
  contact: {
    name: string
    avatar: string
    status: string
  }
  lastMessage: string
  time: string
  unread: number
  pinned: boolean
  messages: Message[]
}

export default function MessagesPage() {
  const [conversations, setConversations] = useState<Conversation[]>(initialConversations)
  const [selectedConversation, setSelectedConversation] = useState(initialConversations[0])
  const [newMessage, setNewMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messageEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const getTimeString = () => {
    const now = new Date()
    return now.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    })
  }

  const handleSendMessage = () => {
    if (!newMessage.trim()) return

    const time = getTimeString()
    const newMsg: Message = {
      id: Date.now(),
      text: newMessage,
      time,
      sent: true,
    }

    // Update conversations state
    const updatedConversations = conversations.map(conv => {
      if (conv.id === selectedConversation.id) {
        return {
          ...conv,
          messages: [...conv.messages, newMsg],
          lastMessage: newMessage,
          time,
        }
      }
      return conv
    })

    setConversations(updatedConversations)
    setSelectedConversation(prev => ({
      ...prev,
      messages: [...prev.messages, newMsg],
      lastMessage: newMessage,
      time,
    }))
    setNewMessage('')
    scrollToBottom()

    // Simulate typing indicator
    setIsTyping(true)
    
    // Auto reply after a random delay
    setTimeout(() => {
      const autoReply = autoReplies[Math.floor(Math.random() * autoReplies.length)]
      const replyTime = getTimeString()
      const replyMsg: Message = {
        id: Date.now(),
        text: autoReply,
        time: replyTime,
        sent: false,
      }

      setIsTyping(false)
      
      const updatedWithReply = conversations.map(conv => {
        if (conv.id === selectedConversation.id) {
          return {
            ...conv,
            messages: [...conv.messages, newMsg, replyMsg],
            lastMessage: autoReply,
            time: replyTime,
          }
        }
        return conv
      })

      setConversations(updatedWithReply)
      setSelectedConversation(prev => ({
        ...prev,
        messages: [...prev.messages, replyMsg],
        lastMessage: autoReply,
        time: replyTime,
      }))
      scrollToBottom()
    }, 1000 + Math.random() * 2000) // Random delay between 1-3 seconds
  }

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <MainLayout>
      <div className="max-w-[1200px] mx-auto">
        <div className="flex gap-6">
          {/* Conversations List - Left Side */}
          <div className="w-[400px] flex-shrink-0">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Messages</h1>
                <p className="text-gray-500 dark:text-gray-400 mt-1">
                  Chat with your team members
                </p>
              </div>
            </div>

            {/* Search */}
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search messages..."
                className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 
                  border border-gray-200 dark:border-gray-700 rounded-lg
                  text-gray-900 dark:text-white placeholder:text-gray-500
                  focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <Search className="absolute left-3 top-3.5 text-gray-400" size={20} />
            </div>

            {/* Conversations List */}
            <div className="bg-white dark:bg-gray-800 rounded-xl 
              border border-gray-200 dark:border-gray-700 divide-y 
              divide-gray-200 dark:divide-gray-700">
              {conversations.map((conversation) => (
                <div 
                  key={conversation.id}
                  onClick={() => setSelectedConversation(conversation)}
                  className={`flex items-center justify-between p-4 
                    cursor-pointer transition-colors
                    ${selectedConversation.id === conversation.id 
                      ? 'bg-purple-50 dark:bg-purple-900/20' 
                      : 'hover:bg-gray-50 dark:hover:bg-gray-700/50'
                    }`}
                >
                  <div className="flex items-center gap-4 flex-1">
                    {/* Avatar with Status */}
                    <div className="relative">
                      <Image
                        src={conversation.contact.avatar}
                        alt={conversation.contact.name}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                      <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full 
                        border-2 border-white dark:border-gray-800 
                        ${statusColors[conversation.contact.status]}`} 
                      />
                    </div>

                    {/* Message Preview */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-medium text-gray-900 dark:text-white truncate">
                          {conversation.contact.name}
                        </h3>
                        <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                          {conversation.time}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                        {conversation.lastMessage}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4 ml-4">
                    {conversation.pinned && (
                      <Star size={16} className="text-yellow-400 fill-yellow-400" />
                    )}
                    {conversation.unread > 0 && (
                      <span className="flex items-center justify-center w-5 h-5 
                        bg-purple-600 text-white text-xs font-medium rounded-full">
                        {conversation.unread}
                      </span>
                    )}
                    <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                      <MoreVertical size={20} className="text-gray-400" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Message Detail - Right Side */}
          {selectedConversation && (
            <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl 
              border border-gray-200 dark:border-gray-700">
              {/* Chat Header */}
              <div className="flex items-center justify-between p-4 
                border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Image
                      src={selectedConversation.contact.avatar}
                      alt={selectedConversation.contact.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full 
                      border-2 border-white dark:border-gray-800 
                      ${statusColors[selectedConversation.contact.status]}`} 
                    />
                  </div>
                  <div>
                    <h2 className="font-medium text-gray-900 dark:text-white">
                      {selectedConversation.contact.name}
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {selectedConversation.contact.status}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                    <Phone size={20} className="text-gray-500 dark:text-gray-400" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                    <MoreVertical size={20} className="text-gray-500 dark:text-gray-400" />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="h-[500px] p-4 overflow-y-auto">
                <div className="space-y-4">
                  {selectedConversation.messages?.map((message) => (
                    <div 
                      key={message.id}
                      className={`flex ${message.sent ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[70%] rounded-lg p-3 
                        ${message.sent 
                          ? 'bg-purple-600 text-white' 
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                        }`}>
                        <p>{message.text}</p>
                        <p className={`text-xs mt-1 
                          ${message.sent 
                            ? 'text-purple-200' 
                            : 'text-gray-500 dark:text-gray-400'
                          }`}>
                          {message.time}
                        </p>
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                        <div className="flex gap-2">
                          <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></span>
                          <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                          <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messageEndRef} />
                </div>
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-4">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type a message..."
                    className="flex-1 bg-gray-100 dark:bg-gray-700 
                      text-gray-900 dark:text-white
                      placeholder:text-gray-500 dark:placeholder:text-gray-400
                      rounded-lg px-4 py-2 focus:outline-none"
                  />
                  <button 
                    onClick={handleSendMessage}
                    className="p-2 bg-purple-600 hover:bg-purple-700 
                      text-white rounded-lg transition-colors"
                  >
                    <Send size={20} />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  )
} 