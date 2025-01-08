"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ name, email, message })
  }

  return (
    <section id="contact" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
          <Textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <Button type="submit" className="w-full">Send Message</Button>
      </form>
    </section>
  )
}

