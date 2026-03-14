import type { Metadata } from 'next'
import Carousel from './(components)/carousel'
import Main from './(components)/main'
import HomeHero from './(components)/home-hero'

export const metadata: Metadata = {
  title: 'Quincy Huang, Quincy Alexandre, Yikun Huang- Senior Software engineer, Geography Lover and Linguistic Enthusiast',
}

export default function HomePage() {
  return (
    <>
      <div className="flex-none" style={{ height: 'var(--content-offset)' }} aria-hidden="true" />
      <main className="flex-auto">
        <div className="pb-40 relative bg-white dark:bg-zinc-900 [mask-image:linear-gradient(to_bottom,black_70%,transparent)]">
          <HomeHero />
        </div>
        <Carousel />
        <div className="pt-40 relative bg-white dark:bg-zinc-900 [mask-image:linear-gradient(to_top,black_70%,transparent)]">
          <Main />
        </div>
      </main>
    </>
  )
}
