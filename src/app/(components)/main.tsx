'use client'

import Link from 'next/link'
import { useLocale } from './locale-provider'
import { projects } from '@/lib/projects'
import type { UITranslations } from '@/lib/i18n'

type RoleKey = keyof UITranslations['work']['roles']

const workHistory: { company: string; roleKey: RoleKey; start: string; end: string; logo: string; href: string; darkInvert: boolean }[] = [
  {
    company: 'Apple',
    roleKey: 'fullstackSoftwareEngineer',
    start: '2021',
    end: '2024',
    logo: '/logos/apple.svg',
    href: 'https://www.apple.com',
    darkInvert: true,
  },
  {
    company: 'TikTok',
    roleKey: 'fullstackSoftwareEngineer',
    start: '2020',
    end: '2021',
    logo: '/logos/tiktok.svg',
    href: 'https://www.tiktok.com',
    darkInvert: true,
  },
  {
    company: 'MicroStrategy',
    roleKey: 'frontendSoftwareEngineer',
    start: '2018',
    end: '2020',
    logo: '/logos/microstrategy.svg',
    href: 'https://www.microstrategy.com',
    darkInvert: false,
  },
]

function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}


function LinkIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.061Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.177 1.06-1.06Z"
        fill="currentColor"
      />
    </svg>
  )
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <path
        d="M6.75 5.75 9.25 8l-2.5 2.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Main() {
  const { t } = useLocale()

  return (
    <div className="sm:px-8 md:pt-28">
      <div className="mx-auto w-full max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
              {/* Projects preview */}
              <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
                <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  <LinkIcon className="h-6 w-6 flex-none fill-zinc-400 dark:fill-zinc-500" />
                  <span className="ml-3 rtl:ml-0 rtl:mr-3">{t.nav.projects}</span>
                </h2>
                <ul className="mt-6 space-y-4" aria-label={t.nav.projects}>
                  {projects.slice(0, 4).map((project) => (
                    <li key={project.name}>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex gap-4 rounded-lg p-1 -m-1 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition"
                      >
                        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                          <div
                            className={`h-7 w-7 rounded-full bg-gradient-to-br ${project.gradient}`}
                            aria-hidden="true"
                          />
                        </div>
                        <dl className="flex flex-auto flex-wrap gap-x-2">
                          <dt className="sr-only">Project</dt>
                          <dd className="w-full flex-none text-sm font-medium text-zinc-900 group-hover:text-teal-500 dark:text-zinc-100 dark:group-hover:text-teal-400 transition-colors">
                            {project.name}
                          </dd>
                          <dt className="sr-only">Link</dt>
                          <dd className="flex items-center text-xs text-zinc-500 dark:text-zinc-400">
                            <LinkIcon className="mr-1 rtl:mr-0 rtl:ml-1 h-3 w-3 flex-none fill-zinc-400 dark:fill-zinc-500" />
                            {project.linkLabel}
                          </dd>
                        </dl>
                      </a>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/projects"
                  className="group mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-100 hover:text-zinc-900 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70"
                >
                  {t.nav.projects}
                  <ArrowRightIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
                </Link>
              </div>

              {/* Work history */}
              <div className="lg:pl-16 xl:pl-24 rtl:lg:pl-0 rtl:lg:pr-16 rtl:xl:pr-24">
                {/* Work history */}
                <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
                  <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    <BriefcaseIcon className="h-6 w-6 flex-none" />
                    <span className="ml-3 rtl:ml-0 rtl:mr-3">{t.work.title}</span>
                  </h2>
                  <ol className="mt-6 space-y-4" aria-label={t.work.title}>
                    {workHistory.map(({ company, roleKey, start, end, logo, href, darkInvert }) => (
                      <li key={company}>
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex gap-4 rounded-lg p-1 -m-1 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition"
                        >
                          <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                            <img
                              src={logo}
                              alt={company}
                              className={`h-7 w-7 object-contain${darkInvert ? ' dark:invert' : ''}`}
                            />
                          </div>
                          <dl className="flex flex-auto flex-wrap gap-x-2">
                            <dt className="sr-only">Company</dt>
                            <dd className="w-full flex-none text-sm font-medium text-zinc-900 group-hover:text-teal-500 dark:text-zinc-100 dark:group-hover:text-teal-400 transition-colors">
                              {company}
                            </dd>
                            <dt className="sr-only">Role</dt>
                            <dd className="text-xs text-zinc-500 dark:text-zinc-400">{t.work.roles[roleKey]}</dd>
                            <dt className="sr-only">Date</dt>
                            <dd
                              className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                              aria-label={`${start} until ${end}`}
                            >
                              <time dateTime={start}>{start}</time>
                              <span aria-hidden="true"> — </span>
                              <time dateTime={end === 'Present' ? undefined : end}>
                                {end === 'Present' ? t.work.present : end}
                              </time>
                            </dd>
                          </dl>
                        </a>
                      </li>
                    ))}
                  </ol>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
