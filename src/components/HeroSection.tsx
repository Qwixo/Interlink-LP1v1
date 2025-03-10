import React, { useState } from 'react'
import { GraduationCap, ArrowRight } from 'lucide-react'
import { AuroraBackground } from './ui/aurora-background'
import { motion } from 'framer-motion'

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '' })
  }

  return (
    <AuroraBackground className="px-4 py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center z-10 relative">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center"
        >
          <GraduationCap size={36} className="text-[#064088]" />
          <span className="ml-2 text-xl font-semibold text-[#064088]">Interlink</span>
        </motion.div>
        
        {/* Hero Content */}
        <div className="text-center max-w-3xl mb-12">
          {/* Hook above headline */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-base uppercase tracking-wider text-[#064088] font-medium mb-2"
          >
            Free Guide – Download Instantly!
          </motion.div>
          
          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-[#064088] mb-4"
          >
            5 Easy Steps to Study in the USA
          </motion.h1>
          
          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-[#064088] mb-10 opacity-90 max-w-2xl mx-auto"
          >
            It is actually not as complicated as you may think. Submit your details below to get a clear roadmap to help you find out how YOU can study in the U.S.
          </motion.p>
        </div>
          
        {/* Opt-in Form - Simplified and cleaner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="w-full max-w-3xl mx-auto bg-white/90 p-6 md:p-8 rounded-2xl shadow-lg"
        >
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-end gap-4">
            <div className="flex-1 w-full">
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#064088] bg-white"
              />
            </div>
            
            <div className="flex-1 w-full">
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email address"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#064088] bg-white"
              />
            </div>
            
            <div className="w-full md:w-auto">
              <button
                type="submit"
                className="w-full md:w-auto bg-[#dc5d33] hover:bg-[#c04d28] text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-[1.02] text-base shadow-md flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <span>Get Instant Access</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </form>
          
          <div className="mt-4 text-xs text-center text-gray-500">
            Trusted by students from over 10 countries
          </div>
        </motion.div>
      </div>
    </AuroraBackground>
  )
}

export default HeroSection
