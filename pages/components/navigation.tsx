import { motion } from "framer-motion";
import { useTranslation } from 'next-i18next';
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";


export default function Navigation() {
  const [menuItems, setMenuItems] = useState<any[]>([]);
  const router = useRouter()
  const { t, i18n } = useTranslation('common');

  const menu = [
    { name: t('nav.home'), href: "#home" },
    { name: t('nav.services'), href: "#services" },
    { name: t('nav.projects'), href: "#projects" },
    { name: t('nav.about'), href: "#about" },
    { name: t('nav.contact'), href: "#contact" }
  ]
  useEffect(() => {
    setMenuItems(menu);
  }, []);

  const toggleLanguage = () => {
    const newLocale = i18n.resolvedLanguage === 'en' ? 'fr' : 'en'
    i18n.changeLanguage(newLocale)
    router.push(router.pathname, router.asPath, { locale: newLocale })
  }


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
          <Link href={"#contact"}>
            <Button onClick={toggleLanguage} className="bg-primary hover:bg-primary/90 text-primary-foreground">
              {i18n.resolvedLanguage === 'en' ? 'FR' : 'EN'}
            </Button>
          </Link>
        </div>
      </div>
    </motion.header>
  )
}

