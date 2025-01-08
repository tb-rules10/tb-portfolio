import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  
  // Here you would typically send an email or save to a database
  console.log('Received message:', body)

  // For now, we'll just simulate a successful send
  return NextResponse.json({ message: 'Message sent successfully' })
}

