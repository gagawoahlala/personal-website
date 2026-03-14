'use client'

import { useState } from 'react'

export default function Carousel() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      {/* Placeholder shown until iframe is ready */}
      {!loaded && (
        <div className="fixed inset-0 bg-white dark:bg-zinc-900" style={{ zIndex: -1 }} aria-hidden="true" />
      )}
      <iframe
        id="journey-animation"
        src="https://personal-website-animation.s3.us-east-1.amazonaws.com/index.html"
        className="fixed inset-0 w-full h-full border-0 pointer-events-none"
        style={{ zIndex: -1, opacity: loaded ? 1 : 0, transition: 'opacity 0.5s ease' }}
        allow="autoplay"
        onLoad={() => setLoaded(true)}
      />
      <div className="w-full" style={{ height: '80vh' }} aria-hidden="true" />
    </>
  )
}
