import type { Metadata } from 'next'
import AboutContent from './content'

export const metadata: Metadata = {
  title: 'About',
  description: "I'm Spencer Sharp. I live in New York City, where I design the future.",
}

export default function AboutPage() {
  return <AboutContent />
}
