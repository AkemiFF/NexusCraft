"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"
import { useTranslation } from "react-i18next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import ContactForm from "./contact-form"

export default function Contact() {
  const { t } = useTranslation('common')

  return (
    <section className="py-20" id="contact" >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">{t('contact.title')}</h2>
        <p className="text-gray-200 max-w-2xl mx-auto">
          {t('contact.description')}
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
          <Card className="bg-black/50 border-primary/20">
            <CardHeader>
              <CardTitle className="text-white">{t('contact.info')}</CardTitle>
              <CardDescription className="text-gray-200">{t('contact.infodescription')}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="text-blue-500" />
                <span className="text-gray-200">tanosama0ii@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className=" text-blue-500" />
                <span className="text-gray-200">+261 38 10 323 34</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-blue-500" />
                <span className="text-gray-200">Lot 75H Ambohibao, Ambohijanahary, Tana</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
          <ContactForm />
        </motion.div>
      </div>
    </section>
  )
}

