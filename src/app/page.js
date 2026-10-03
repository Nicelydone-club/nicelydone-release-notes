import Link from 'next/link'
import {releases} from '@/data/releases'

const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'Nicelydone'

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-10">
        <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
          {APP_NAME}
        </p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight">Release Notes</h1>
        <p className="mt-2 text-slate-600">What&apos;s new across Nicelydone.</p>
      </header>

      <ul className="space-y-4">
        {releases.map((release) => (
          <li key={release.slug}>
            <Link
              href={`/releases/${release.slug}`}
              className="block rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-slate-300 hover:shadow"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-lg font-semibold">{release.title}</h2>
                <time className="text-sm text-slate-500">{release.date}</time>
              </div>
              <p className="mt-2 text-sm text-slate-600">{release.summary}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
