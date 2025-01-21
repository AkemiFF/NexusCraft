

import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";


import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Contact from "./contact";
import Projects from "./projects";
import Services from "./services";
import Team from "./team";



export default function HomePage() {
  const { t } = useTranslation("common");

  return (
    <main id="home" className="container mx-auto px-4 pt-20 lg:pt-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
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
              {t('hero.subtitle')}
            </motion.span>
          </motion.span>

          <motion.h1
            className="text-5xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {" "}
            <span className="bg-gradient-to-r from-primary to-primary-foreground text-transparent bg-clip-text">
              {t('hero.title')}
            </span>
          </motion.h1>

          <motion.p
            className="text-gray-300 text-lg mb-8 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {t('hero.description')}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Link href={"#contact"}>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground group">
                {t('hero.cta.start')}                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link href={"#projects"}>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                {t('hero.cta.view')}
              </Button>
            </Link>

          </motion.div>

          <motion.div
            className="grid grid-cols-3 gap-6 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {[
              { number: "15+", label: t('stats.projects') },
              { number: "98%", label: t('stats.satisfaction') },
              { number: "5+", label: t('stats.developers') },
            ].map((stat, index) => (
              <Card key={stat.label} className="bg-black/50 border-primary/20">
                <CardContent className="p-4">
                  <div className="text-2xl  text-white font-bold text-primary">{stat.number}</div>
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
              src="/home.png?height=600&width=600"
              alt="NexusCraft Projects Showcase"
              className="rounded-3xl w-full h-full object-cover relative z-10 shadow-2xl"
            />
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary-foreground rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />
          </div>
        </motion.div>
      </div>

      <Services />
      <Projects />
      <Team />
      <Contact />
    </main>

  )
}

