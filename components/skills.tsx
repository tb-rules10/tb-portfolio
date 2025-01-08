import { Progress } from '@/components/ui/progress'

const skills = [
  { name: 'Java', level: 90 },
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 85 },
  { name: 'Node.js', level: 85 },
  { name: 'Python', level: 75 },
  { name: 'Flutter', level: 75 },
  { name: 'MongoDB', level: 75 },
  { name: 'AWS', level: 50 },
]

export function Skills() {
  return (
    <section id="skills" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">{skill.name}</span>
              <span className="text-muted-foreground">{skill.level}%</span>
            </div>
            <Progress value={skill.level} className="h-2" />
          </div>
        ))}
      </div>
    </section>
  )
}

