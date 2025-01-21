"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, X } from "lucide-react"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"


export default function Team() {
  const { t, i18n } = useTranslation('common');


  const teamMembers = [
    {
      name: t('team.mirado.name'),
      role: t('team.mirado.role'),
      image: "/mirado.jpg?height=300&width=300",
      bio: t('team.mirado.bio'),
      social: {
        github: "https://github.com/AkemiFF",
        linkedin: "https://www.linkedin.com/in/mirado-ake-b348b7309/",
        twitter: "https://x.com/BradMirado?t=1buX1YjI0kMEuHQReqebaw&s=09"
      },
      portfolio: 'https://brad-akemi.onrender.com/',
    },
    {
      name: t('team.cherica.name'),
      role: t('team.cherica.role'),
      image: "/cherica.webp?height=300&width=300",
      bio: t('team.cherica.bio'),
      social: {
        github: "https://github.com/cherica01",
        linkedin: "www.linkedin.com/in/riantsoa-cherica-88740a303",
        twitter: "#"
      },
      portfolio: 'https://cherica.vercel.app/',
    },
    {
      name: t('team.leomyre.name'),
      role: t('team.leomyre.role'),
      image: "/leomyre.jpg?height=300&width=300",
      bio: t('team.leomyre.bio'),
      social: {
        github: "https://github.com/Leomyre",
        linkedin: "#",
        twitter: "#"
      },
      portfolio: 'https://leomyre.onrender.com/',
    },
  ]
  return (
    <section className="py-20 bg-black/30" id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4"> {t('team.title')}</h2>
        <p className="text-gray-200 max-w-2xl mx-auto">
          {t("team.description")}
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
                  {
                    member.social.linkedin != "#" ?
                      (<a href={member.social.linkedin} className="text-gray-400 hover:text-primary transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>) :
                      null
                  }
                  {
                    member.social.twitter != "#" ?
                      (<a href={member.social.twitter} className="text-gray-400 hover:text-primary transition-colors">
                        <X className="w-5 h-5" />
                      </a>) :
                      null
                  }

                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

