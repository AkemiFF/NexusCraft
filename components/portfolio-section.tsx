'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'

interface Project {
  title: string
  description: string
  imageUrl: string
  projectUrl: string
  tags: string[]
}

function ProjectCard({ project }: { project: Project }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div 
      className="relative h-[280px] w-[240px] perspective cursor-pointer mx-auto group" 
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full transition-all duration-500 preserve-3d ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
        {/* Front of card */}
        <Card className="absolute w-full h-full backface-hidden border-primary/20 hover:border-primary/40 transition-colors">
          <div className="p-0 h-full flex flex-col">
            <div className="relative h-[180px] w-full">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="rounded-t-lg object-cover"
              />
            </div>
            <div className="p-4 text-center flex-1 flex flex-col justify-between">
              <h3 className="text-lg font-semibold text-primary">{project.title}</h3>
              <div className="flex flex-wrap gap-1 justify-center mt-2">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="text-xs px-2 py-1 rounded-full bg-secondary/10 text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Back of card */}
        <Card className="absolute w-full h-full backface-hidden [transform:rotateY(180deg)] border-secondary/20 hover:border-secondary/40 transition-colors">
          <div className="p-4 h-full flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground">{project.description}</p>
            </div>
            <Link 
              href={project.projectUrl}
              className="w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Button className="w-full group/button" variant="outline">
                Voir le projet
                <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover/button:translate-x-1" />
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  )
}

export function PortfolioSection() {
  const projects: Project[] = [
    {
      title: "E-commerce Platform",
      description: "Une plateforme de shopping moderne avec gestion d'inventaire en temps réel et paiements sécurisés.",
      imageUrl: "/placeholder.svg?height=200&width=200",
      projectUrl: "#e-commerce",
      tags: ["React", "Node.js", "Stripe"]
    },
    {
      title: "Task Manager",
      description: "Application intuitive de gestion des tâches avec collaboration en temps réel et intégrations.",
      imageUrl: "/placeholder.svg?height=200&width=200",
      projectUrl: "#task-manager",
      tags: ["Next.js", "TypeScript", "Prisma"]
    },
    {
      title: "Healthcare Portal",
      description: "Portail médical sécurisé pour la gestion des patients et des rendez-vous en ligne.",
      imageUrl: "/placeholder.svg?height=200&width=200",
      projectUrl: "#healthcare",
      tags: ["React", "GraphQL", "AWS"]
    },
    {
      title: "Finance Dashboard",
      description: "Tableau de bord analytique avec visualisations de données financières en temps réel.",
      imageUrl: "/placeholder.svg?height=200&width=200",
      projectUrl: "#finance",
      tags: ["Vue.js", "D3.js", "Firebase"]
    },
    {
      title: "Social Scheduler",
      description: "Outil de planification sociale avec analyses et suggestions de contenu IA.",
      imageUrl: "/placeholder.svg?height=200&width=200",
      projectUrl: "#social-media",
      tags: ["React", "AI", "MongoDB"]
    },
    {
      title: "Smart Home",
      description: "Système domotique avec contrôle vocal et optimisation énergétique intelligente.",
      imageUrl: "/placeholder.svg?height=200&width=200",
      projectUrl: "#smart-home",
      tags: ["IoT", "Node.js", "ML"]
    }
  ]

  return (
    <section id="portfolio" className="container py-12 md:py-24">
      <h2 className="mb-12 text-center text-3xl font-bold">Nos Projets</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  )
}

