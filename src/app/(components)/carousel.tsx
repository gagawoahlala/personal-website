export default function Carousel() {
  return (
    <>
      <iframe
        id="journey-animation"
        src="https://personal-website-animation.s3.us-east-1.amazonaws.com/index.html"
        className="fixed inset-0 w-full h-full border-0 pointer-events-none"
        style={{ zIndex: -1 }}
        allow="autoplay"
      />
      <div className="w-full" style={{ height: '80vh' }} aria-hidden="true" />
    </>
  )
}
