"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    title: "E-commerce Platform",
    description: "A fully responsive e-commerce solution with advanced filtering and search capabilities.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Next.js", "Tailwind CSS", "Stripe"],
  },
  {
    title: "Health & Fitness App",
    description: "Mobile-first application for tracking workouts, nutrition, and personal health goals.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["React Native", "Firebase", "HealthKit"],
  },
  {
    title: "Financial Dashboard",
    description: "Real-time financial data visualization tool for investors and analysts.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Vue.js", "D3.js", "Node.js"],
  },
]

export default function Projects() {
  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Our Projects</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Explore our portfolio of innovative digital solutions that have helped businesses thrive in the digital
          landscape.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="bg-black/50 border-primary/20 hover:border-primary/40 transition-colors overflow-hidden">
              <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover" />
              <CardHeader>
                <CardTitle className="text-white">{project.title}</CardTitle>
                <CardDescription className="text-gray-200">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="ghost" className="text-primary hover:text-primary/80">
                  View Project <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

