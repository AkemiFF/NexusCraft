"use client"

import { motion } from "framer-motion"
import { Github, ArrowRight, Sparkles, Code2, Laptop, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import MatrixRain from "./components/matrix-rain"
import { Navigation } from "./components/navigation"
import Services from "./components/services"
import Projects from "./components/projects"
import Team from "./components/team"
import Contact from "./components/contact"
import { Footer } from "./components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <MatrixRain />

      <div className="relative z-10">
        <Navigation />

        <main className="container mx-auto px-4 pt-20 lg:pt-32">
          <div id="home" className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <motion.span
                className="text-primary font-mono flex items-center gap-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
              >
                <Sparkles className="w-4 h-4" />
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.6, duration: 0.8, ease: "easeInOut" }}
                  className="overflow-hidden whitespace-nowrap"
                >
                  Digital Innovation Agency
                </motion.span>
              </motion.span>

              <motion.h1
                className="text-5xl lg:text-7xl font-bold mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Crafting Digital{" "}
                <span className="bg-gradient-to-r from-primary to-primary-foreground text-transparent bg-clip-text">
                  Excellence
                </span>
              </motion.h1>

              <motion.p
                className="text-gray-300 text-lg mb-8 max-w-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                NexusCraft is a premier web development agency specializing in creating exceptional digital experiences.
                We transform ideas into powerful, scalable web solutions.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4 mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground group">
                  Start Your Project
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  View Our Work
                </Button>
              </motion.div>

              <motion.div
                className="grid grid-cols-3 gap-6 max-w-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                {[
                  { number: "150+", label: "Projects Delivered" },
                  { number: "98%", label: "Client Satisfaction" },
                  { number: "15+", label: "Expert Developers" },
                ].map((stat, index) => (
                  <Card key={stat.label} className="bg-black/50 border-primary/20">
                    <CardContent className="p-4">
                      <div className="text-2xl font-bold text-primary">{stat.number}</div>
                      <div className="text-sm text-gray-300">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              <div className="relative w-full aspect-square max-w-[600px] mx-auto">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary to-primary-foreground blur-2xl opacity-20 animate-pulse" />
                <img
                  src="/placeholder.svg?height=600&width=600"
                  alt="NexusCraft Projects Showcase"
                  className="rounded-3xl w-full h-full object-cover relative z-10 shadow-2xl"
                />
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary-foreground rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />
              </div>
            </motion.div>
          </div>

          <Services id="services" />
          <Projects id="projects" />
          <Team id="about" />
          <Contact id="contact" />
        </main>
        <Footer />
      </div>
    </div>
  )
}

