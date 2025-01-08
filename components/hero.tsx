import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between py-12 lg:py-24">
      <div className="lg:w-1/2 space-y-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Hi, I'm Tanishq Bhatt
        </h1>
        <p className="text-xl text-muted-foreground">
          A Computer Science Engineer passionate about building innovative solutions.
        </p>
        <div className="flex space-x-4">
          <Button asChild>
            <a href="#portfolio">View Projects</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </div>
      <div className="lg:w-1/2 mb-8 lg:mb-0">
        <Image
          src="https://avatars.githubusercontent.com/u/58645688?v=4"
          alt="Tanishq Bhatt"
          width={400}
          height={400}
          className="rounded-full mx-auto"
        />
      </div>
    </section>
  )
}

