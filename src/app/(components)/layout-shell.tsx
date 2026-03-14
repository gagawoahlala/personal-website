'use client'

import { usePathname } from 'next/navigation'

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <div className="flex w-full">
      <div
        className="fixed inset-0 flex justify-center sm:px-8"
        style={isHome ? { zIndex: -1 } : undefined}
      >
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
        </div>
      </div>
      <div
        className="relative flex w-full flex-col"
        style={isHome ? { zIndex: 1 } : undefined}
      >
        {children}
      </div>
    </div>
  )
}
