import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Portfolio } from '@/components/portfolio'
import { Experience } from '@/components/experience'
import { Education } from '@/components/education'
import { Contact } from '@/components/contact'

export default function Home() {
  return (
    <div className="space-y-24 py-24">
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <Education />
      <Contact />
    </div>
  )
}

