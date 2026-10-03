import Link from 'next/link'
import {notFound} from 'next/navigation'
import {releases, getRelease} from '@/data/releases'

export function generateStaticParams() {
  return releases.map((release) => ({slug: release.slug}))
}

export function generateMetadata({params}) {
  const release = getRelease(params.slug)
  return {title: release ? `${release.title} — Release Notes` : 'Release not found'}
}

export default function ReleaseDetail({params}) {
  const release = getRelease(params.slug)
  if (!release) notFound()

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/" className="text-sm text-slate-500 hover:text-slate-700">
        ← All releases
      </Link>

      <header className="mt-6 mb-8">
        <time className="text-sm text-slate-500">{release.date}</time>
        <h1 className="mt-1 text-3xl font-bold tracking-tight">{release.title}</h1>
        <p className="mt-3 text-slate-600">{release.summary}</p>
      </header>

      <section>
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
          Highlights
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-slate-700">
          {release.highlights.map((highlight, i) => (
            <li key={i}>{highlight}</li>
          ))}
        </ul>
      </section>
    </main>
  )
}
