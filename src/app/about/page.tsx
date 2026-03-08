import type { Metadata } from 'next'
import AboutContent from './content'

export const metadata: Metadata = {
  title: 'About',
  description: "I'm Quincy, a web developer. I build web experiences that feel right to the people using them.",
}

export default function AboutPage() {
  return <AboutContent />
}
