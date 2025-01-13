import { PortfolioSection } from "@/components/portfolio-section"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Laptop, Rocket, Users } from 'lucide-react'
import Image from "next/image"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container flex flex-col items-center justify-center gap-4 py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="flex items-center gap-4 mb-4">
            <Image
              src="/images/logo.png"
              alt="Nexus Craft Logo"
              width={80}
              height={80}
              className="h-20 w-auto"
            />
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-center">
            Crafting Digital{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Excellence
            </span>
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl text-center px-4 sm:px-0">
            Transform your ideas into reality with our expert development team.
            We create modern, scalable, and user-friendly applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-secondary hover:bg-secondary/10">
              Learn More
            </Button>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="container py-12 md:py-24">
          <h2 className="mb-12 text-center text-3xl font-bold">Our Services</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-primary/20 hover:border-primary transition-colors">
              <CardContent className="flex flex-col items-center p-6">
                <Laptop className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-xl font-bold">Web Development</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Custom websites and web applications built with modern technologies
                </p>
              </CardContent>
            </Card>
            <Card className="border-secondary/20 hover:border-secondary transition-colors">
              <CardContent className="flex flex-col items-center p-6">
                <Code className="mb-4 h-12 w-12 text-secondary" />
                <h3 className="mb-2 text-xl font-bold">API Development</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Robust and scalable APIs to power your applications
                </p>
              </CardContent>
            </Card>
            <Card className="border-accent/20 hover:border-accent transition-colors">
              <CardContent className="flex flex-col items-center p-6">
                <Rocket className="mb-4 h-12 w-12 text-accent" />
                <h3 className="mb-2 text-xl font-bold">DevOps</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Streamline your development and deployment processes
                </p>
              </CardContent>
            </Card>
            <Card className="border-primary/20 hover:border-primary transition-colors">
              <CardContent className="flex flex-col items-center p-6">
                <Users className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-xl font-bold">Consulting</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Expert advice on technology strategy and implementation
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Portfolio Section */}
        <PortfolioSection />

        {/* Team Section */}
        <section id="team" className="container py-12 md:py-24 bg-muted">
          <h2 className="mb-12 text-center text-3xl font-bold">Our Team</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Alice Johnson", role: "Lead Developer", image: "/placeholder.svg?height=400&width=400" },
              { name: "Bob Smith", role: "UX Designer", image: "/placeholder.svg?height=400&width=400" },
              { name: "Carol Williams", role: "Project Manager", image: "/placeholder.svg?height=400&width=400" },
              { name: "David Brown", role: "DevOps Engineer", image: "/placeholder.svg?height=400&width=400" }
            ].map((member, index) => (
              <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-secondary">
                <CardContent className="p-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container py-12 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Get in Touch</h2>
            <p className="mb-8 text-muted-foreground">
              Ready to start your project? Contact us for a free consultation.
            </p>
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        className="w-full rounded-md border p-2 bg-background"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full rounded-md border p-2 bg-background"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="h-32 w-full rounded-md border p-2 bg-background"
                      placeholder="Tell us about your project"
                    />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8 bg-muted">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center space-x-2">
            <Image
              src="/images/logo.png"
              alt="Nexus Craft Logo"
              width={32}
              height={32}
              className="h-8 w-auto"
            />
            <div>
              <span className="font-bold text-primary">Nexus</span>
              <span className="font-bold text-accent">Craft</span>
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            © 2024 NexusCraft. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-sm text-muted-foreground hover:text-secondary">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-secondary">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

