const images = [
  { rotate: 'rotate-2', gradient: 'from-violet-400 to-purple-600', label: 'Photo one' },
  { rotate: '-rotate-2', gradient: 'from-sky-400 to-blue-600', label: 'Photo two' },
  { rotate: 'rotate-2', gradient: 'from-teal-400 to-emerald-600', label: 'Photo three' },
  { rotate: 'rotate-2', gradient: 'from-orange-400 to-red-500', label: 'Photo four' },
  { rotate: '-rotate-2', gradient: 'from-pink-400 to-rose-600', label: 'Photo five' },
]

export default function Carousel() {
  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {images.map(({ rotate, gradient, label }) => (
          <div
            key={label}
            className={`relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 ${rotate}`}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${gradient}`}
              role="img"
              aria-label={label}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
