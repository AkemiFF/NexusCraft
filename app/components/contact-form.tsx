"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

export default function ContactForm() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        toast({
          title: "Success",
          description: "Message sent successfully!",
          variant: "default",
        })
        // Reset form
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        toast({
          title: "Error",
          description: "Something went wrong!",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error sending message:", error)
      toast({
        title: "Error",
        description: "An unexpected error occurred.",
        variant: "destructive",
      })
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        placeholder="Your Name"
        className="bg-gray-800"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <Input
        type="email"
        name="email"
        placeholder="Your Email"
        className="bg-gray-800"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <Input
        type="text"
        name="subject"
        placeholder="Subject"
        className="bg-gray-800"
        value={formData.subject}
        onChange={handleChange}
        required
      />
      <Textarea
        name="message"
        placeholder="Your Message"
        className="min-h-[150px] bg-gray-800"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
        Send Message
      </Button>
    </form>
  )
}

