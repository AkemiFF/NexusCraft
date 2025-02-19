"use client"

import { motion } from "framer-motion";
import { Code2, Laptop, Rocket, Shield, Sparkles, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Card, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";



export default function Services() {
  const { t } = useTranslation("common");
  const services = [
    {
      icon: Code2,
      title: t('services.webDevelopment.title', 'Web Development'),
      description: t('services.webDevelopment.description', 'Custom web applications built with cutting-edge technologies and best practices.'),
    },
    {
      icon: Laptop,
      title: t('services.uiUxDesign.title', 'UI/UX Design'),
      description: t('services.uiUxDesign.description', 'Intuitive and engaging user interfaces that deliver exceptional user experiences.'),
    },
    {
      icon: Shield,
      title: t('services.securitySolutions.title', 'Security Solutions'),
      description: t('services.securitySolutions.description', 'Robust security implementations to protect your digital assets and data.'),
    },
    {
      icon: Rocket,
      title: t('services.performanceOptimization.title', 'Performance Optimization'),
      description: t('services.performanceOptimization.description', 'Speed optimization and performance tuning for lightning-fast applications.'),
    },
    {
      icon: Users,
      title: t('services.teamAugmentation.title', 'Team Augmentation'),
      description: t('services.teamAugmentation.description', 'Skilled developers ready to join your team and accelerate your projects.'),
    },
    {
      icon: Sparkles,
      title: t('services.digitalInnovation.title', 'Digital Innovation'),
      description: t('services.digitalInnovation.description', 'Innovative solutions that keep you ahead of the digital curve.'),
    },
  ]

  return (
    <section className="py-20" id="services">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">{t('services.title')}</h2>
        <p className="text-gray-200 max-w-2xl mx-auto">
          We offer a comprehensive suite of digital services to help your business thrive in the modern web landscape.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="bg-black/50 border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <service.icon className="w-12 h-12 text-blue-500 mb-4" />
                <CardTitle className="text-white">{service.title}</CardTitle>
                <CardDescription className="text-gray-200">{service.description}</CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

