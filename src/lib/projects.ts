export interface Project {
  name: string
  description: string
  link: string
  linkLabel: string
  gradient: string
}

export const projects: Project[] = [
  {
    name: 'Planetaria',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: 'https://planetaria.tech',
    linkLabel: 'planetaria.tech',
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
