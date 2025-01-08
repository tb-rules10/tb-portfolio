import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const education = [
  {
    institution: 'BML Munjal University',
    location: 'Gurugram, Haryana',
    degree: 'B. Tech in Computer Science and Engineering',
    duration: '2021 - 2025 (Expected)',
    gpa: '8.65 CGPA',
  },
  {
    institution: 'City Montessori School',
    location: 'Lucknow, Uttar Pradesh',
    degree: 'Indian School Certificate Examination',
    duration: '2018 - 2021',
    gpa: '95%',
  },
  {
    institution: 'City Montessori School',
    location: 'Lucknow, Uttar Pradesh',
    degree: 'Indian Certificate of Secondary Education Examination',
    duration: '2018 - 2021',
    gpa: '92.8%',
  },
]

export function Education() {
  return (
    <section id="education" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">Education</h2>
      <div className="space-y-8">
        {education.map((edu) => (
          <Card key={edu.degree}>
            <CardHeader>
              <CardTitle>{edu.institution}</CardTitle>
              <CardDescription>{edu.location}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-medium">{edu.degree}</p>
              <p className="text-sm text-muted-foreground">{edu.duration}</p>
              <p className="text-sm font-medium mt-2">{edu.gpa}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

