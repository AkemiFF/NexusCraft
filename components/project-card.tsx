'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  shortDescription: string
  longDescription: string
  imageUrl: string
}

export function ProjectCard({ title, shortDescription, longDescription, imageUrl }: ProjectCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div className="relative perspective" onClick={() => setIsFlipped(!isFlipped)}>
      <Card className={`w-full transition-all duration-500 ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
        <div className="absolute inset-0 backface-hidden">
          <CardContent className="p-4 h-full flex flex-col">
            <Image
              src={imageUrl}
              width={400}
              height={200}
              alt={title}
              className="rounded-lg object-cover w-full h-48 mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground flex-grow">{shortDescription}</p>
          </CardContent>
        </div>
        <div className="absolute inset-0 backface-hidden [transform:rotateY(180deg)]">
          <CardContent className="p-4 h-full flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground">{longDescription}</p>
            </div>
            <Button className="mt-4">Voir le projet</Button>
          </CardContent>
        </div>
      </Card>
    </div>
  )
}

