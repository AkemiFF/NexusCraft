'use client'

import { motion } from "framer-motion"

const stats = [
  { value: 3, label: "Years of experience" },
  { value: 16, label: "Projects completed" },
  { value: 8, label: "Technologies mastered" },
  { value: 500, label: "Code commits" }
]

export default function Stats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 mb-12">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 1 }}
        >
          <motion.div
            className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1 + 1.2, type: "spring" }}
          >
            {stat.value}
          </motion.div>
          <div className="text-gray-400 mt-2">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  )
}

