export interface Project {
  name: string
  description: string
  link: string
  linkLabel: string
  gradient: string
}

export const projects: Project[] = [
  {
    name: 'Tiktok Help Center',
    description:
      'Platform for users to find answers to their questions about using Tiktok, and for support agents to manage and respond to user inquiries.',
    link: 'https://www.tiktok.com/support',
    linkLabel: 'Tiktok Help Center',
    gradient: 'from-violet-500 to-purple-700',
  },
  {
    name: 'Animaginary',
    description:
      'High performance web animation library, hand-written in optimized WASM.',
    link: 'https://github.com',
    linkLabel: 'github.com',
    gradient: 'from-sky-400 to-blue-600',
  },
  {
    name: 'HelioStream',
    description:
      'Real-time video streaming library, optimized for interstellar transmission.',
    link: 'https://github.com',
    linkLabel: 'github.com',
    gradient: 'from-orange-400 to-red-600',
  },
  {
    name: 'cosmOS',
    description:
      'The operating system that powers our Planetaria space shuttles.',
    link: 'https://github.com',
    linkLabel: 'github.com',
    gradient: 'from-emerald-400 to-teal-600',
  },
  {
    name: 'OpenShuttle',
    description:
      'The schematics for the first rocket I designed that successfully made it to orbit.',
    link: 'https://github.com',
    linkLabel: 'github.com',
    gradient: 'from-amber-400 to-orange-600',
  },
]
