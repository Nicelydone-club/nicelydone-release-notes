# nicelydone-release-notes

A Next.js (App Router, JavaScript, Tailwind) release-notes site for Nicelydone,
with Vercel Analytics.

## Features

- Index (`/`) listing three releases: **Capture Queue 1.1**, **Asset Review 1.2**, **Workspace Insights 1.3**
- Per-release detail pages at `/releases/[slug]`
- Release data in `src/data/releases.js`

## Run

```bash
npm install
npm run dev
```

Then open:
- `/` — the release index
- `/releases/capture-queue-1-1`
- `/releases/asset-review-1-2`
- `/releases/workspace-insights-1-3`

## Environment variables

| Variable | Example |
| --- | --- |
| `NEXT_PUBLIC_APP_NAME` | `Nicelydone` |
| `NEXT_PUBLIC_SUPPORT_EMAIL` | `support@nicelydone.club` |
| `APP_RELEASE_CHANNEL` | `stable` |

Deployed on Vercel.
