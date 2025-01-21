"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"


export default function Projects() {
  const { t, i18n } = useTranslation('common')

  const projects = [
    {
      title: t('projects.shoplg.title'),
      description: t('projects.shoplg.description'),
      image: "/shoplg.png?height=300&width=400",
      tags: ["Next.js", "Django", "Tailwind CSS", "Stripe"],
      link: 'https://shoplg.online/users',
    },
    {
      title: t('projects.portfolio.title'),
      description: t('projects.portfolio.description'),
      image: "/nexus.png?height=300&width=400",
      tags: ["Next.js"],
      link: '',
    },
    {
      title: t('projects.aftrip.title'),
      description: t('projects.aftrip.description'),
      image: "/aftrip.png?height=300&width=400",
      tags: ["Next.js", "D3.js", "Node.js"],
      link: 'https://craft-aftrip.com/',
    },
  ]
  return (
    <section className="py-20" id={"projects"}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">{t('projects.title')}</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          {t('projects.description')}
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
                    <span key={tag} className="bg-primary/10 text-yellow-200 border-yellow-200 text-primary text-xs px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href={project.link}>
                  <Button variant="ghost" className="text-primary text-white hover:text-primary/80">
                    {t('hero.cta.view')}<ArrowRight className="w-4 h-4 ml-2" />
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

