import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const experiences = [
  {
    title: 'React Development Intern',
    company: 'MARGSOFT Technologies',
    location: 'Lucknow',
    duration: 'May 2023 – July 2023',
    description: [
      'Developed a real-time chat application enabling instant text and file communication between users.',
      'Implemented user authentication and data storage features, ensuring secure and efficient communication.',
      'Tools Used: React, Node.js, Socket.IO & MongoDB',
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp) => (
          <Card key={exp.title}>
            <CardHeader>
              <CardTitle>{exp.title}</CardTitle>
              <CardDescription>{exp.company} - {exp.location}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{exp.duration}</p>
              <ul className="list-disc pl-5 space-y-2">
                {exp.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

