export const releases = [
  {
    slug: 'capture-queue-1-1',
    title: 'Capture Queue 1.1',
    date: '2026-08-12',
    summary:
      'Faster, more reliable capture ingestion with a reworked retry queue and clearer failure states.',
    highlights: [
      'New durable retry queue for capture uploads with exponential backoff.',
      'Per-capture status timeline so operators can see exactly where a job stalled.',
      'Reduced p95 ingestion latency by batching thumbnail generation.',
    ],
  },
  {
    slug: 'asset-review-1-2',
    title: 'Asset Review 1.2',
    date: '2026-09-03',
    summary:
      'A streamlined asset review flow with inline comments and bulk approval actions.',
    highlights: [
      'Inline review comments attached to individual assets.',
      'Bulk approve and reject actions from the review queue.',
      'Keyboard shortcuts for moving through the review list.',
    ],
  },
  {
    slug: 'workspace-insights-1-3',
    title: 'Workspace Insights 1.3',
    date: '2026-09-24',
    summary:
      'Workspace-level dashboards for throughput, review quality, and reuse across teams.',
    highlights: [
      'Throughput and review-quality charts per workspace.',
      'Reuse metrics that track how often an asset is used again.',
      'Exportable CSV snapshots of the current reporting window.',
    ],
  },
]

export function getRelease(slug) {
  return releases.find((release) => release.slug === slug)
}
