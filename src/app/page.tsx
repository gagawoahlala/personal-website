import type { Metadata } from 'next'
import Carousel from './(components)/carousel'
import Main from './(components)/main'
import HomeHero from './(components)/home-hero'

export const metadata: Metadata = {
  title: 'Quincy - Software engineer, Geography Lover and Linguistic Enthusiast',
}

export default function HomePage() {
  return (
    <>
      <div className="flex-none" style={{ height: 'var(--content-offset)' }} aria-hidden="true" />
      <main className="flex-auto">
        <HomeHero />
        <Carousel />
        <Main />
      </main>
    </>
  )
}
