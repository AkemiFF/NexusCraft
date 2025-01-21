import { Facebook } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t, i18n } = useTranslation('common');

  return (
    <footer className="bg-black/30 border-t border-primary/10 py-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300 mb-4 md:mb-0">{t("footer.copyright")}</div>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/share/p/1BRj54r7gt/" className="text-gray-300 hover:text-primary transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            {/* <a href="#" className="text-gray-300 hover:text-primary transition-colors">
              <img src="/logo.png" alt="logo" className="w-full h-5 " />
            </a> */}


            {/* <a href="#" className="text-gray-300 hover:text-primary transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-300 hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  )
}

