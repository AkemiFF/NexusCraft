'use client'

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nexus-removebg-preview-Wu1zzmUm20qLWoLb3gWarCXURKkYHU.png"
              alt="Nexus Craft Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <div className="hidden font-bold sm:inline-block">
              <span className="text-primary">Nexus</span>
              <span className="text-accent">Craft</span>
            </div>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="#services"
              className="text-sm font-medium transition-colors hover:text-secondary"
            >
              Services
            </Link>
            <Link
              href="#portfolio"
              className="text-sm font-medium transition-colors hover:text-secondary"
            >
              Portfolio
            </Link>
            <Link
              href="#team"
              className="text-sm font-medium transition-colors hover:text-secondary"
            >
              Team
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium transition-colors hover:text-secondary"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <ModeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-[1.2rem] w-[1.2rem]" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col space-y-4">
                  <Link
                    href="#services"
                    className="text-sm font-medium transition-colors hover:text-secondary"
                  >
                    Services
                  </Link>
                  <Link
                    href="#portfolio"
                    className="text-sm font-medium transition-colors hover:text-secondary"
                  >
                    Portfolio
                  </Link>
                  <Link
                    href="#team"
                    className="text-sm font-medium transition-colors hover:text-secondary"
                  >
                    Team
                  </Link>
                  <Link
                    href="#contact"
                    className="text-sm font-medium transition-colors hover:text-secondary"
                  >
                    Contact
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
            <Button className="hidden md:flex bg-primary hover:bg-primary/90">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

