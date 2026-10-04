'use client'

import {useState} from 'react'
import Link from 'next/link'
import {releases} from '@/data/releases'

const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'Nicelydone'
const STATUSES = ['Shipped', 'Rolling out', 'Planned']

export default function Home() {
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('all')

  const filtered = releases.filter((release) => {
    const matchesSearch =
      search === '' ||
      release.title.toLowerCase().includes(search.toLowerCase())
    const matchesStatus = status === 'all' || release.status === status
    return matchesSearch && matchesStatus
  })

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-8">
        <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
          {APP_NAME}
        </p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight">Release Notes</h1>
        <p className="mt-2 text-slate-600">What&apos;s new across Nicelydone.</p>
      </header>

      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end">
        <div className="flex-1">
          <label
            htmlFor="release-search"
            className="mb-1 block text-sm font-medium text-slate-700"
          >
            Search releases
          </label>
          <input
            id="release-search"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by title"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-slate-400 focus:outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="release-status"
            className="mb-1 block text-sm font-medium text-slate-700"
          >
            Status
          </label>
          <select
            id="release-status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-slate-400 focus:outline-none"
          >
            <option value="all">All statuses</option>
            {STATUSES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-lg border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
          No releases match your search.
        </p>
      ) : (
        <ul className="space-y-4">
          {filtered.map((release) => (
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
              <span className="mt-3 inline-block rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                {release.status}
              </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
