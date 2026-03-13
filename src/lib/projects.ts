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
    linkLabel: 'tiktok.com/support',
    gradient: 'from-violet-500 to-purple-700',
  },
  {
    name: 'Credit Card Hero',
    description:
      'Simplistic credit card reward tracking site, designed to help users track their rewards and benefits.',
    link: 'https://gagawoahlala.github.io/Creditcardrewardsapp/',
    linkLabel: 'creditcardhero.com',
    gradient: 'from-sky-400 to-blue-600',
  },
  {
    name: 'Geo Pro',
    description:
      'Geo Location guessing game that challenges players to identify locations based on images and clues, testing their geographical knowledge and observational skills.',
    link: 'https://gagawoahlala.github.io/Geo-Pro/',
    linkLabel: 'geopro.com',
    gradient: 'from-orange-400 to-red-600',
  },
  {
    name: 'Lazy Susan',
    description:
      'A chrome extension that allows users to create their job-specific resume and cover letter',
    link: 'https://github.com',
    linkLabel: 'Coming soon onto chrom extensions store',
    gradient: 'from-emerald-400 to-teal-600',
  },
]
