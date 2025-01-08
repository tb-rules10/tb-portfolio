"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const projects = [
  {
    title: 'OneSpace',
    description: 'A platform for seamless hosting of serverless websites.',
    image: '/images/onespace.png',
    github: 'https://github.com/tb-rules10/OneSpace',
    technologies: ['AWS', 'Docker', 'Redis', 'Socket.IO', 'Node.js'],
  },
  {
    title: 'OneKYC',
    description: 'A decentralized platform for KYC verification and secure data sharing among banks.',
    image: '/images/onekyc.png',
    github: 'https://github.com/tb-rules10/OneKYC',
    technologies: ['Solidity', 'Pinata IPFS', 'Hardhat', 'React'],
  },
  {
    title: 'Moodify',
    description: 'A Music Player application featuring an emotion-based music recommendation system.',
    image: '/images/moodify.png',
    github: 'https://github.com/tb-rules10/Moodify',
    technologies: ['Flutter', 'Python', 'FastAPI', 'Google Firebase'],
  },
  {
    title: 'DrScan',
    description: 'An app prototype for predicting COPD and Asthma.',
    image: '/images/drscan.png',
    github: 'https://github.com/tb-rules10/DrScan',
    technologies: ['Flutter', 'FastAPI'],
  },
  {
    title: 'NoComms',
    description: 'A Socket.IO-based chat app that allows users to chat and share files quickly.',
    image: '/images/nocomms.png',
    github: 'https://github.com/tb-rules10/NoComms',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.IO'],
  },
  {
    title: 'BlockCloud',
    description: 'A blockchain-based cloud storage solution.',
    image: '/images/blockcloud.png',
    github: 'https://github.com/tb-rules10/BlockCloud',
    technologies: ['Ethereum', 'IPFS', 'Node.js', 'Hardhat'],
  }
]

export function Portfolio() {
  const [visibleProjects, setVisibleProjects] = useState(4)

  const loadMore = () => {
    setVisibleProjects(prevVisible => Math.min(prevVisible + 4, projects.length))
  }

  return (
    <section id="portfolio" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.slice(0, visibleProjects).map((project) => (
          <Card key={project.title}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative w-full h-48 bg-muted rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <Button asChild variant="outline" className="w-full">
                <a href={project.github} target="_blank" rel="noopener noreferrer">View on GitHub</a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      {visibleProjects < projects.length && (
        <div className="mt-8 text-center">
          <Button onClick={loadMore}>Load More</Button>
        </div>
      )}
    </section>
  )
}

