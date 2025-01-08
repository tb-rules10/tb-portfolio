"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const projects = [
  {
    title: 'OneSpace',
    description: 'A platform for seamless hosting of serverless websites.',
    image: 'https://private-user-images.githubusercontent.com/58645688/401195817-3c1813ff-4dce-468d-963c-cae3c8c6428f.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzYzNTU1NDUsIm5iZiI6MTczNjM1NTI0NSwicGF0aCI6Ii81ODY0NTY4OC80MDExOTU4MTctM2MxODEzZmYtNGRjZS00NjhkLTk2M2MtY2FlM2M4YzY0MjhmLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAxMDglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMTA4VDE2NTQwNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTlmM2E2NDE1ZWI3YjNlOGQzNzI3N2E3YmQwMTA5ZjM1NmFiMTBiNGQ2OGNjYjAyNTA0MzNmMzQ5MDU0MWM0MjUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.IiRdgRaLTWTZ0cZK4HEbzQpCyM0vVSWxDu2T__fmVLA',
    github: 'https://github.com/tb-rules10/OneSpace',
    technologies: ['AWS', 'Docker', 'Redis', 'Socket.IO', 'Node.js'],
  },
  {
    title: 'OneKYC',
    description: 'A decentralized platform for KYC verification and secure data sharing among banks.',
    image: 'https://private-user-images.githubusercontent.com/58645688/401197026-6b7e0332-2996-4222-b41d-4c40b0a9d867.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzYzNTU1NDUsIm5iZiI6MTczNjM1NTI0NSwicGF0aCI6Ii81ODY0NTY4OC80MDExOTcwMjYtNmI3ZTAzMzItMjk5Ni00MjIyLWI0MWQtNGM0MGIwYTlkODY3LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAxMDglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMTA4VDE2NTQwNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTJkNjcyMzk3MGE2YmJjOGM1M2E0MDNiNDNjMzc3ODhmOTFhMWRmNzA0ZmUyZWY0YzRjMTAzMmJmMDRmMDAxMjUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.8nwn1PaMgAf6WoET_LZYOlNOVjxMebgA612JRUjSu6w',
    github: 'https://github.com/tb-rules10/OneKYC',
    technologies: ['Solidity', 'Pinata IPFS', 'Hardhat', 'React'],
  },
  {
    title: 'Moodify',
    description: 'A Music Player application featuring an emotion-based music recommendation system.',
    image: 'https://private-user-images.githubusercontent.com/58645688/401204754-1cc24ecf-22d4-40b9-ab2e-ade85f5b35b0.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzYzNTU1NDUsIm5iZiI6MTczNjM1NTI0NSwicGF0aCI6Ii81ODY0NTY4OC80MDEyMDQ3NTQtMWNjMjRlY2YtMjJkNC00MGI5LWFiMmUtYWRlODVmNWIzNWIwLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAxMDglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMTA4VDE2NTQwNVom...',
    github: 'https://github.com/tb-rules10/Moodify',
    technologies: ['Flutter', 'Python', 'FastAPI', 'Google Firebase'],
  },
  {
    title: 'DrScan',
    description: 'An app prototype for predicting COPD and Asthma.',
    image: 'https://private-user-images.githubusercontent.com/58645688/401204874-8a0427ea-dc68-4859-967f-495df1a71569.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzYzNTU1NDUsIm5iZiI6MTczNjM1NTI0NSwicGF0aCI6Ii81ODY0NTY4OC80MDEyMDQ4NzQtOGEwNDI3ZWEtZGM2OC00ODU5LTk2N2YtNDk1ZGYxYTcxNTY5LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAxMDglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMTA4VDE2NTQwNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWRlNmZiNTRhMjFhNDhjYTQyZTA0NzQyMDI0MmQwNmNiYzk4YmRiNWFjNDY5ZjExN2NhNGVhNDhkMmNiNGNmMTMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.SAuDXQsGQvQx9wfjFs8HRVmyziAKMlE_4bp0caiElIg',
    github: 'https://github.com/tb-rules10/DrScan',
    technologies: ['Flutter', 'FastAPI'],
  },
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

