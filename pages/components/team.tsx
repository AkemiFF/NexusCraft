"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, X } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"

const teamMembers = [
  {
    name: "Jason Brad Mirado",
    role: "Founder & Full Stack Developer",
    image: "/mirado.jpg?height=300&width=300",
    bio: "Tech visionary with 5+ years of experience in web development and digital strategy.",
    social: {
      github: "https://github.com/AkemiFF", linkedin: "#", twitter: "https://x.com/BradMirado?t=1buX1YjI0kMEuHQReqebaw&s=09"
    },
    portfolio: 'https://brad-akemi.onrender.com/',
  },
  {
    name: "Riantsoa Chérica",
    role: "Backend Developer",
    image: "/cherica.webp?height=300&width=300",
    bio: "Award-winning UX/UI designer passionate about creating intuitive digital experiences.",
    social: {
      github: "https://github.com/cherica01", linkedin: "www.linkedin.com/in/riantsoa-cherica-88740a303", twitter: "#"
    },
    portfolio: 'https://cherica.vercel.app/',
  },
  {
    name: "Léomyre",
    role: "Full-stack Developer",
    image: "/leomyre.jpg?height=300&width=300",
    bio: "Full-stack developer specializing in scalable architecture and performance optimization.",
    social: { github: "https://github.com/Leomyre", linkedin: "#", twitter: "#" },
    portfolio: 'https://leomyre.onrender.com/',
  },
]

export default function Team() {
  return (
    <section className="py-20 bg-black/30" id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
        <p className="text-gray-200 max-w-2xl mx-auto">
          Our diverse team of experts is passionate about crafting exceptional digital experiences.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="bg-black/50 border-primary/20 hover:border-primary/40 transition-colors overflow-hidden">
              <Link href={member.portfolio}>

                <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-80 object-cover" />
                <CardHeader>
                  <CardTitle className="text-white">{member.name}</CardTitle>
                  <CardDescription className="text-gray-200">{member.role}</CardDescription>
                </CardHeader>
              </Link>
              <CardContent>
                <p className="text-gray-200 mb-4">{member.bio}</p>
                <div className="flex gap-4">
                  <a href={member.social.github} className="text-gray-400 hover:text-primary transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={member.social.linkedin} className="text-gray-400 hover:text-primary transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={member.social.twitter} className="text-gray-400 hover:text-primary transition-colors">
                    <X className="w-5 h-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

