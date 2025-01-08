"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

export function Navigation() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">TB</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="#about" className="text-sm font-medium hover:text-primary">About</Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary">Skills</Link>
            <Link href="#portfolio" className="text-sm font-medium hover:text-primary">Portfolio</Link>
            <Link href="#experience" className="text-sm font-medium hover:text-primary">Experience</Link>
            <Link href="#education" className="text-sm font-medium hover:text-primary">Education</Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">Contact</Link>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-md hover:bg-accent"
              aria-label="Toggle theme"
            >
              {mounted && (theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />)}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

