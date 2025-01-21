"use client"

import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { Button } from "../../components/ui/button"

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { i18n } = useTranslation()
  const router = useRouter()

  const languages = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "zh", name: "中文", flag: "🇨🇳" },
    { code: "es", name: "Español", flag: "🇪🇸" }
  ]


  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
    router.push(router.pathname, router.asPath, { locale: lang })
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2"
      >
        {languages.find((lang) => lang.code === (i18n.language ?? "en"))?.flag ?? "🌐"}
        <span>{i18n.language?.toUpperCase() ?? "EN"}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </Button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg overflow-hidden z-50"
          >
            {languages.map((lang) => (
              <motion.button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                whileHover={{ backgroundColor: "#f3f4f6" }}
              >
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Navigation() {
  const [menuItems, setMenuItems] = useState<any[]>([])
  const router = useRouter()
  const { t, i18n } = useTranslation("common")

  useEffect(() => {
    const menu = [
      { name: t("nav.home"), href: "#home" },
      { name: t("nav.services"), href: "#services" },
      { name: t("nav.projects"), href: "#projects" },
      { name: t("nav.about"), href: "#about" },
      { name: t("nav.contact"), href: "#contact" },
    ]
    setMenuItems(menu)
  }, [t, i18n.language])

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-primary/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-full h-14 bg-primary rounded-lg flex items-center justify-center">
              {/* <Code2 className="w-6 h-6 text-primary-foreground" /> */}
              <img src="/logo.png" alt="logo" className="w-full h-16 object-cover" />
            </div>
            {/* <span className="font-bold text-xl">NexusCraft</span> */}
          </motion.div>

          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform" />
              </motion.a>
            ))}
          </nav>
          <LanguageSwitcher />
        </div>
      </div>
    </motion.header>
  )
}

