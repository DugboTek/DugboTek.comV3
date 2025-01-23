import { motion } from 'framer-motion'
import textContent from '../../data/content/TextContent.json'
import OpportunitiesList from './OpportunitiesList'
import TimeSavedCounter from './TimeSavedCounter'
import { Link } from 'react-router-dom'

const WhatWeDo = () => {
  const { whatWeDo } = textContent
  const { sections } = whatWeDo

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            className="inline-block bg-indigo-500/10 text-indigo-600 text-sm font-semibold px-4 py-1 rounded-full mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Mission
          </motion.div>
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-clay-text mb-8 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {whatWeDo.mainTitle}
          </motion.h2>
          <motion.p 
            className="text-xl text-clay-subtext leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {whatWeDo.mainIntro}
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Finding Opportunities Card */}
          <motion.div 
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              🔍
            </div>
            <h3 className="text-2xl font-semibold text-clay-text mb-4">
              {sections.findingOpportunities.title}
            </h3>
            <div className="space-y-4">
              <p className="text-clay-subtext leading-relaxed">
                Our expertise lies in identifying those frustrating bottlenecks in your business operations.
              </p>
              <p className="text-clay-subtext leading-relaxed mb-6">
                We spot where AI can make the biggest impact in your daily tasks:
              </p>
              <OpportunitiesList />
            </div>
          </motion.div>

          {/* Custom Solutions Card */}
          <motion.div 
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              ⚡
            </div>
            <h3 className="text-2xl font-semibold text-clay-text mb-4">
              {sections.customSolutions.title}
            </h3>
            <p className="text-clay-subtext leading-relaxed mb-6">
              Every business is unique, which is why we create tailored AI solutions that fit your specific needs.
            </p>
            <p className="text-clay-subtext leading-relaxed mb-6">
              Our custom automations handle tasks in seconds that would normally take hours.
            </p>
            <ul className="space-y-3">
              {sections.customSolutions.benefits.map((benefit, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start gap-3 text-clay-subtext"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                >
                  <span className="text-green-500 mt-1">✓</span>
                  {benefit}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Results Card */}
          <motion.div 
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              📈
            </div>
            <h3 className="text-2xl font-semibold text-clay-text mb-4">
              {sections.results.title}
            </h3>
            <div className="space-y-6">
              <p className="text-clay-subtext leading-relaxed">
                Imagine completing your monthly reporting in minutes instead of days.
              </p>
              <TimeSavedCounter />
              <p className="text-clay-subtext leading-relaxed">
                Our AI solutions don't just save time – they transform how your business operates, giving you the freedom to focus on what really matters: growing your business and serving your customers better.
              </p>
            </div>
          </motion.div>

          {/* Guarantee Card */}
          <motion.div 
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                🛡️
              </div>

              <motion.div
                className="inline-block bg-indigo-500 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                100% Money Back Guarantee
              </motion.div>

              <h3 className="text-2xl font-semibold text-clay-text mb-4">
                {sections.guarantee.title}
              </h3>

              <div className="space-y-4">
                <motion.p 
                  className="text-clay-subtext leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                >
                  We're so confident in our ability to transform your business that we offer a complete money-back guarantee.
                </motion.p>
                <motion.p 
                  className="text-clay-subtext leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                >
                  If you're not completely satisfied within the first 90 days, we'll refund your entire investment.
                </motion.p>
              </div>

              {/* Additional Trust Elements */}
              <motion.div 
                className="mt-6 flex items-center gap-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.9 }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-indigo-500">✓</span>
                  <span className="text-sm text-clay-subtext">90-Day Trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-indigo-500">✓</span>
                  <span className="text-sm text-clay-subtext">No Questions Asked</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Call to Action Button */}
      <div className="flex justify-center mt-16">
        <Link
          to="/signup"
          className="bg-clay-text text-clay-background hover:bg-clay-text/90 transition-colors text-base lg:text-nav px-8 py-4 rounded-lg font-medium flex items-center gap-2 relative"
        >
          <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Book a Discovery Call
          <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
            Free
          </span>
        </Link>
      </div>
    </section>
  )
}

export default WhatWeDo 