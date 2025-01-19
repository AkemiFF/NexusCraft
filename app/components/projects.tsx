"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "ShopLG",
    description: "A fully responsive e-commerce solution with advanced filtering and search capabilities.",
    image: "/shoplg.png?height=300&width=400",
    tags: ["Next.js", "Django", "Tailwind CSS", "Stripe"],
    link: 'https://shoplg.online/users',
  },
  {
    title: "Portfolio",
    description: "Mobile-first application for tracking workouts, nutrition, and personal health goals.",
    image: "/nexus.png?height=300&width=400",
    tags: ["Next.js"],
    link: '',
  },
  {
    title: "Aftrip",
    description: "Aftrip is a tourist destination platform for those seeking authentic and responsible experiences, aiming to promote the cultural richness of each region, facilitating the discovery of hidden treasures, whether unique hotels, exceptional artisanal products or trips organized by local experts.  ",
    image: "/aftrip.png?height=300&width=400",
    tags: ["Next.js", "D3.js", "Node.js"],
    link: 'https://craft-aftrip.com/',
  },
]

export default function Projects() {
  return (
    <section className="py-20" id={"projects"}>
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
                <Link href={project.link}>
                  <Button variant="ghost" className="text-primary hover:text-primary/80">
                    View Project <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

